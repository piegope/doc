namespace Devolutions.TranslationTool;

using System.IO;
using System.Text;
using System.Text.RegularExpressions;

using DeepL;

using LibGit2Sharp;

using Markdig;

public sealed partial class RepositoryTranslator
{
    private readonly ProgramOptions options;
    private readonly string deeplAuthenticationKey;
    private readonly string sourceLanguageCode;
    private readonly string[] targetLanguageCodes;
    private readonly int maxTranslatedFileCount;
    private readonly Encoding targetEncoding = new UTF8Encoding(false, true);
    private readonly TranslatorOptions deeplTranslatorOptions = new()
    {
        appInfo = new AppInfo { AppName = "Devolutions.TranslationTool", AppVersion = "1.0.0" },
        MaximumNetworkRetries = 3,
        OverallConnectionTimeout = TimeSpan.FromSeconds(60d),
        PerRetryConnectionTimeout = TimeSpan.FromSeconds(30d),
        sendPlatformInfo = true
    };

    public RepositoryTranslator(ProgramOptions options)
    {
        this.options = options ?? throw new ArgumentNullException(nameof(options));
        if (options.MaxTranslatedFileCount < 1)
        {
            throw new ArgumentOutOfRangeException($"{nameof(options)}.{nameof(options.MaxTranslatedFileCount)}");
        }

        this.deeplAuthenticationKey = options.DeeplAuthenticationKey ?? throw new ArgumentNullException($"{nameof(options)}.{nameof(options.DeeplAuthenticationKey)}");
        this.sourceLanguageCode = options.SourceLanguageCode ?? throw new ArgumentNullException($"{nameof(options)}.{nameof(options.SourceLanguageCode)}");
        this.targetLanguageCodes = (options.TargetLanguageCodes ?? throw new ArgumentNullException($"{nameof(options)}.{nameof(options.TargetLanguageCodes)}")).ToArray();
        this.maxTranslatedFileCount = options.MaxTranslatedFileCount;
    }

    public async Task Execute()
    {
        string repositoryPath = GetRepositoryPath();
        string contentDirectoryName = GetContentDirectoryName(repositoryPath);
        SourceLanguage sourceLanguage = await this.GetSourceLanguage(repositoryPath, contentDirectoryName).ConfigureAwait(false);
        TargetLanguage[] targetLanguages = await this.GetTargetLanguages(repositoryPath, contentDirectoryName, sourceLanguage).ConfigureAwait(false);
        MarkdownPipeline markdownPipeline = new MarkdownPipelineBuilder().UseAdvancedExtensions().Build();
        using Translator deeplTranslator = new(this.deeplAuthenticationKey, this.deeplTranslatorOptions);
        TranslatedFileCounter translatedFileCounter = new(this.maxTranslatedFileCount);
        foreach (TargetLanguage targetLanguage in targetLanguages)
        {
            LanguageTranslator languageTranslator = new(this.targetEncoding, targetLanguage, markdownPipeline, deeplTranslator, translatedFileCounter);
            await languageTranslator.Execute().ConfigureAwait(false);
            if (translatedFileCounter.MaximumReached)
            {
                break;
            }
        }
    }

    private static string GetRepositoryPath()
    {
        string directoryPath = Directory.GetCurrentDirectory();
        DirectoryInfo? directoryInfo = new(directoryPath);
        do
        {
            directoryPath = directoryInfo.FullName;
            if (Directory.Exists(Path.Combine(directoryPath, "translation-tool")))
            {
                return directoryPath;
            }

            directoryInfo = directoryInfo.Parent;
        }
        while (directoryInfo != null);
        throw new InvalidOperationException("Current directory is not within the expected repository");
    }

    private static string GetContentDirectoryName(string repositoryPath) =>
        GetContentDirectoryName(repositoryPath, "content") ??
        GetContentDirectoryName(repositoryPath, "docs") ??
        throw new InvalidOperationException("Content directory has not been found");

    private static string? GetContentDirectoryName(string repositoryPath, string contentDirectoryName) =>
        Directory.Exists(Path.Combine(repositoryPath, contentDirectoryName)) ? contentDirectoryName : null;

    private async Task<SourceLanguage> GetSourceLanguage(string repositoryPath, string contentDirectoryName)
    {
        SourceLanguage sourceLanguage = new(this.sourceLanguageCode, Path.Combine(repositoryPath, contentDirectoryName, this.sourceLanguageCode));
        sourceLanguage.Files = await GetSourceFiles(repositoryPath, sourceLanguage).ConfigureAwait(false);
        return sourceLanguage;
    }

    private static async Task<SourceFile[]> GetSourceFiles(string repositoryPath, SourceLanguage sourceLanguage)
    {
        string[] sourceFilePaths = Directory.GetFiles(sourceLanguage.DirectoryPath, "*.md", SearchOption.AllDirectories);

        using Repository repository = new(repositoryPath);
        Commit latestCommit = repository.Head.Tip;

        List<SourceFile> result = new(sourceFilePaths.Length);
        foreach (string sourceFilePath in sourceFilePaths)
        {
            string? latestCommitFromGit = GetLatestCommitFromGit(repositoryPath, latestCommit, sourceFilePath);
            if (latestCommitFromGit != null && !(await IsSourceFileExcluded(sourceFilePath).ConfigureAwait(false)))
            {
                result.Add(new SourceFile(sourceLanguage, sourceFilePath, latestCommitFromGit));
            }
        }

        return result.ToArray();
    }

    private static string? GetLatestCommitFromGit(string repositoryPath, Commit latestCommit, string filePath)
    {
        string relativeFilePath = filePath.Replace(repositoryPath, string.Empty, StringComparison.OrdinalIgnoreCase)
            .Replace('\\', '/').TrimStart('/');

        Commit commit = latestCommit;
        GitObject? gitObject = commit[relativeFilePath]?.Target;
        if (gitObject == null)
        {
            return null;
        }

        HashSet<string> hashSet = new();
        Queue<Commit> queue = new();
        queue.Enqueue(commit);
        hashSet.Add(commit.Sha);

        while (queue.Count > 0)
        {
            commit = queue.Dequeue();
            bool dequeue = false;
            foreach (Commit parent in commit.Parents)
            {
                TreeEntry? treeEntry = parent[relativeFilePath];
                if (treeEntry == null)
                {
                    continue;
                }

                bool equals = string.Equals(treeEntry.Target.Sha, gitObject.Sha, StringComparison.Ordinal);
                if (equals && hashSet.Add(parent.Sha))
                {
                    queue.Enqueue(parent);
                }

                dequeue = dequeue || equals;
            }

            if (!dequeue)
            {
                break;
            }
        }

        return commit.Sha;
    }

    private static async Task<bool> IsSourceFileExcluded(string filePath)
    {
        string content = await File.ReadAllTextAsync(filePath).ConfigureAwait(false);
        return NoDeepLRegex().IsMatch(content);
    }

    [GeneratedRegex(@"^ *noDeepL:", RegexOptions.CultureInvariant | RegexOptions.IgnoreCase | RegexOptions.Multiline)]
    private static partial Regex NoDeepLRegex();

    private async Task<TargetLanguage[]> GetTargetLanguages(string repositoryPath, string contentDirectoryName, SourceLanguage sourceLanguage)
    {
        List<TargetLanguage> result = new(this.targetLanguageCodes.Length);
        foreach (string targetLanguageCode in this.targetLanguageCodes)
        {
            string directoryPath = Path.Combine(repositoryPath, contentDirectoryName, $"{targetLanguageCode}.generated");
            string? glossaryID = this.options.GetGlossaryID(sourceLanguage.Code, targetLanguageCode)?.Trim().NullIfEmpty();
            string cacheFilePath = Path.Combine(repositoryPath, ".translation-tool", glossaryID != null ?
                $"{sourceLanguage.Code}-{targetLanguageCode}-{glossaryID}-cache.json" : $"{sourceLanguage.Code}-{targetLanguageCode}-cache.json");
            TargetLanguage targetLanguage = new(sourceLanguage, targetLanguageCode, directoryPath, glossaryID, cacheFilePath);
            targetLanguage.Files = await this.GetTargetFiles(sourceLanguage, targetLanguage).ConfigureAwait(false);
            result.Add(targetLanguage);
        }

        return result.ToArray();
    }

    private async Task<TargetFile[]> GetTargetFiles(SourceLanguage sourceLanguage, TargetLanguage targetLanguage)
    {
        List<TargetFile> result = new(sourceLanguage.Files.Length);
        foreach (SourceFile sourceFile in sourceLanguage.Files)
        {
            string targetFilePath = sourceFile.FilePath.Replace(sourceFile.Language.DirectoryPath, targetLanguage.DirectoryPath, StringComparison.OrdinalIgnoreCase);
            (string? latestCommitFromFileHeader, string? glossaryIDFromFileHeader) = await this.ReadTargetFileHeader(targetFilePath).ConfigureAwait(false);
            if (latestCommitFromFileHeader == null ||
                !string.Equals(sourceFile.LatestCommit, latestCommitFromFileHeader, StringComparison.Ordinal) ||
                this.options.Force && !string.Equals(targetLanguage.GlossaryID, glossaryIDFromFileHeader, StringComparison.OrdinalIgnoreCase))
            {
                result.Add(new TargetFile(sourceFile, targetLanguage, targetFilePath));
            }
        }

        return result.ToArray();
    }

    private async Task<(string? latestCommit, string? glossaryID)> ReadTargetFileHeader(string filePath)
    {
        if (!File.Exists(filePath))
        {
            return (null, null);
        }

        string content = await File.ReadAllTextAsync(filePath, this.targetEncoding).ConfigureAwait(false);
        Match latestCommitMatch = LatestCommitRegex().Match(content);
        string? latestCommit = latestCommitMatch.Success ? latestCommitMatch.Groups[1].Value : null;
        Match glossaryIDMatch = GlossaryIDRegex().Match(content);
        string? glossaryID = glossaryIDMatch.Success ? glossaryIDMatch.Groups[1].Value : null;
        return (latestCommit, glossaryID);
    }

    [GeneratedRegex(@"^latestCommit: *(\S+)", RegexOptions.CultureInvariant | RegexOptions.Multiline)]
    private static partial Regex LatestCommitRegex();

    [GeneratedRegex(@"^glossaryID: *(\S+)", RegexOptions.CultureInvariant | RegexOptions.Multiline)]
    private static partial Regex GlossaryIDRegex();
}