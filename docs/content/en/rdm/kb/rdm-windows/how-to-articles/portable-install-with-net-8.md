---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
{% var, "RDM" false %} can be installed as a portable app by deploying the .NET runtimes manually and using a small wrapper script.

{% snippet, "badgeCaution" %}This feature is not well-tested and its stability cannot be guaranteed since it relies on an undocumented feature (environment variable to set the path to the .NET runtime).{% endsnippet %}

Here are the steps to install a portable version of {% var, "RDM" false %}:

1. Download the zipped .NET Runtime and .NET Windows Desktop Runtime. Microsoft does not publish these URLs on the download page, but they are available in the official project releases: <a href="https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/8.0/releases.json" target="_blank" rel="noreferrer nofollow noopener">https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/8.0/releases.json</a>.
2. Extract the runtime archives into the same directory (the Desktop Runtime should be in a subdirectory of the "main" runtime).
3. Set the environment variable `DOTNET\_ROOT` to point to the extracted .NET runtime directory.
4. Launch **RemoteDesktopManager.exe** with that environment variable properly set (i.e. from the same terminal or prompt).

There is also a [PowerShell script](https://gist.github.com/thenextman/2061ada9461f1f7a217ec84ffc5e79d1) that automatically sets up a portable version of{% var, "RDM" false %}, provided that the .NET Runtime and .NET Windows Desktop Runtime are correctly set up.