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

### Verifying PowerShell v7+ is installed

There are two types of PowerShell: Windows PowerShell and just plain PowerShell. The former is installed by default on every version of Windows but the latter is not and therefore requires a separate installation. Since Devolutions' products only support PowerShell proper, it will need to be installed manually. Here is how:

1. Got to [Microsoft's PowerShell GitHub repository releases page](https://github.com/PowerShell/PowerShell/releases).
2. Scroll down the Assets section until you see the Windows \[...\] .msi package and download it.
3. Open the installer and go through the wizard.
4. Press Win+R and run `pwsh`. A PowerShell window should open.

   &nbsp;

{% snippet, "badgeCaution" %}To verify if PowerShell v7+ is installed, press Win+R and enter `pwsh` in the dialog box that will appear. Pressing Enter should then open PowerShell if it is installed, or bring up an error window if it is not.{% endsnippet %}

### PowerShell script execution user permission

The user under which PowerShell executes scripts must have certain permissions. Here is how to get them:

1. Open PowerShell by pressing Win+R and entering `pwsh` in the dialog box.
2. Run the command `Get-ExecutionPolicy` and confirm the current execution policy.
3. Change the policy to Unrestricted via the `Set-ExecutionPolicy` command.

### Installing Devolutions' PowerShell module

To install Devolutions's PowerShell module, run the following script in PowerShell:

```powershell
Install-Module Devolutions.PowerShell
```

A prompt may appear asking to trust a `PSGallery` repository. Press Y to accept.

&nbsp;

&nbsp;

&nbsp;