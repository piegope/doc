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

    [Option("en-fr-glossary-id", Required = false, HelpText = "Glossary ID to use for English to French translations")]
    public string? EnFrGlossaryID { get; set; }

    [Option("en-de-glossary-id", Required = false, HelpText = "Glossary ID to use for English to German translations")]
    public string? EnDeGlossaryID { get; set; }

    [Option('m', "max", Required = false, Default = int.MaxValue, HelpText = "Maximum translated file count")]
    public int MaxTranslatedFileCount { get; set; }

    [Option('f', "force", Required = false, Default = false, HelpText = "Translates files that were generated using a different Glossary ID even if the source files themselves have not changed")]
    public bool Force { get; set; }

    public string? GetGlossaryID(string sourceLanguageCode, string targetLanguageCode) =>
        string.Equals(sourceLanguageCode, LanguageCode.English, StringComparison.OrdinalIgnoreCase) ?
            string.Equals(targetLanguageCode, LanguageCode.French, StringComparison.OrdinalIgnoreCase) ? this.EnFrGlossaryID :
            string.Equals(targetLanguageCode, LanguageCode.German, StringComparison.OrdinalIgnoreCase) ? this.EnDeGlossaryID :
            null : null;
}