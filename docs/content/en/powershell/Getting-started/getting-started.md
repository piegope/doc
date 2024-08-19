---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
## Prerequisites

Although each Devolutions PowerShell script has specific dependencies related to the tasks it is meant to carry out, all must meet a global set of prerequisites in order to be executed. Luckily, these only need to be configured once per computer.

{% snippet, "badgeInfo" %}These requirements must be met on the computer on which the Devolutions product that you wish to interact with using PowerShell scripts is installed.{% endsnippet %}

Here is a list of the prerequisites:

1. PowerShell v7+ is installed.
2. The logged in user has permission to execute PowerShell scrips on the computer.
3. Devolutions PowerShell script is unblocked.
4. The Devolutions PowerShell module installed (and the correct version).
5. The user is connected and authenticated to a data source.
6. The Devolutions user that is authenticated to the data source has the necessary permissions.

### Verifying PowerShell v7+ is installed

There are two types of PowerShell: Windows PowerShell and just plain PowerShell. The former is installed by default on every version of Windows but the latter is not and therefore requires a separate installation. Since Devolutions' products only support PowerShell proper, it will need to be installed manually. Here's how:

1. Got to [Microsoft's PowerShell GitHub repository releases page](https://github.com/PowerShell/PowerShell/releases).
2. Scroll down the Assets section until you see the Windows \[...\] .msi package and download it.
3. Open the installer and go through the wizard.
4. Press CTRL+R and run `pwsh`. A PowerShell window should open.

   &nbsp;

{% snippet, "badgeCaution" %}To verify if PowerShell v7+ is installed, press CTRL+R and enter `pwsh` in the dialog box that will appear. Pressing Enter should then open PowerShell if it is installed, or bring up an error window if it is not.{% endsnippet %}