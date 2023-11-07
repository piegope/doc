namespace Devolutions.TranslationTool;

using CommandLine;

using DeepL;

public sealed class ProgramOptions
{
    [Option('k', "key", Required = true, HelpText = "DeepL authentication key used to call the API")]
    public string DeeplAuthenticationKey { get; set; } = null!;

    [Option('s', "source", Required = false, Default = LanguageCode.English, HelpText = "Source language code")]
    public string SourceLanguageCode { get; set; } = null!;

    [Option('t', "target", Required = false, Default = new[] { LanguageCode.French }, HelpText = "Target language codes (e.g. fr, de, fr de)")]
    public IEnumerable<string> TargetLanguageCodes { get; set; } = null!;

    [Option('m', "max", Required = false, Default = int.MaxValue, HelpText = "Maximum translated file count")]
    public int MaxTranslatedFileCount { get; set; }

    [Option('f', "force", Required = false, Default = false, HelpText = "Translates all files even when the latest commit has not changed for both them and the glossary (except when noDeepL is found)")]
    public bool Force { get; set; }
}