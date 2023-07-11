namespace Devolutions.TranslationTool;

public static class StringExtensions
{
    public static string? NullIfEmpty(this string? value) =>
        value is { Length: > 0 } ? value : null;
}