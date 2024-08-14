---
_schema: default
eleventyComputed:
  title: Microsoft .NET runtime update causes {{ en.RDM }} to crash
  description: >-
    The Microsoft .NET runtime can be silently updated in the background while
    {{ en.RDM }}  is running, which may cause the application to randomly crash.
  status:
  keywords:
---
The Microsoft .NET runtime can be silently updated in the background by the Windows Update service while {% var, "RDM" false %} is running, which may cause the application to randomly crash. This is a <a href="https://github.com/dotnet/runtime/issues/60144" target="_blank" rel="noopener">known issue with Microsoft</a>, but as of this writing, no fix has been implemented. This issue typically arises after a minor security update to the .NET runtime, such as an upgrade from .NET 8.0.7 to .NET 8.0.8.

The only workaround is to restart {% var, "RDM" false %} when the crash occurs.

### Detailed analysis

Applications such as {% var, "RDM" false %} may experience crashes during .NET runtime updates pushed via Windows Update. This occurs because the update process removes the previous version of the runtime that the application is currently using. When the application tries to load a new assembly after the runtime has been updated in the background, it fails because the required files have been removed.

When updating the .NET runtime manually using the installer, the older version of the runtime is typically not deleted immediately. This prevents the issue of missing assemblies because the application can still access the necessary files from the previous version. However, when the update is performed via Windows Update, the older runtime version is removed, leading to potential crashes.

{% snippet, "badgeHelp" %}For a complete detailed analysis of this issue, see <a href="https://github.com/dotnet/runtime/issues/60144#issuecomment-2289137821" target="_blank" rel="noopener">this comment</a> on the related GitHub issue.{% endsnippet %}