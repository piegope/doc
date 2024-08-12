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

1. Download the zipped .NET Runtime and .NET Windows Desktop Runtime. Microsoft does not publish these URLs on the download page, but they are [available in the official project releases.](https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/8.0/releases.json)
2. Extract the runtime archives into the same directory (the Desktop Runtime should be in a subdirectory of the "main" runtime).
3. Set the environment variable `DOTNET\_ROOT` to point to the extracted .NET runtime directory.
4. Launch **RemoteDesktopManager.exe** with that environment variable properly set (i.e. from the same terminal or prompt).

There is also a [PowerShell script](https://gist.github.com/thenextman/2061ada9461f1f7a217ec84ffc5e79d1) that automatically sets up a portable version of{% var, "RDM" false %}, provided that you have the correct .zipped .NET runtime and .NET desktop runtime archives, as well as the zipped {% var, "RDM" false %} portable archive, and a path to use for the package root. This script will extract the archives into the proper structure and create a `launch-rdm.ps1` script that can then be used to launch {% var, "RDM" false %} with a simple double-click.

Here is a usage example:

```
setup-environment.ps1 -DotNetRuntimeArchiveFilePath "c:\users\bobanderson\downloads\dotnet-runtime-8.0.7-win-x64.zip" -DotNetDesktopRuntimeArchiveFilePath "c:\users\bobanderson\downloads\windowsdesktop-runtime-8.0.7-win-x64.zip" -RemoteDesktopManagerArchiveFilePath "c:\users\bobanderson\downloads\Devolutions.RemoteDesktopManager.Bin.2024.1.28.0.zip" -PackageRootDirectory "c:\users\bobanderson\portable"
```