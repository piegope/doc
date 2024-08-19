---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
## Requirements

Although each Devolutions PowerShell script has specific dependencies related to the tasks it is meant to carry out, all must meet certain minimum requirements in order to be executed at all. Luckily, these prerequisites only need to be configured once per machine.

{% snippet, "badgeInfo" %}In order for Devolutions.PowerShell module to work with the desired solution, both need to be installed on the same machine.{% endsnippet %}

#### Installing PowerShell v7+

There are two types of PowerShell: Windows PowerShell and just plain PowerShell. The former is installed by default on every version of Windows but the latter is not and therefore requires a separate installation. Since Devolutions' products only support PowerShell proper, it will need to be installed manually. Here is how:

1. Go to [Microsoft's PowerShell GitHub repository releases page](https://github.com/PowerShell/PowerShell/releases).
2. Scroll down the Assets section until you see the Windows \[...\] .msi package and download it.
3. Open the installer and go through the wizard.
4. Press Win+R and run `pwsh`. A PowerShell window should open.

   &nbsp;

### PowerShell user execution policy

The user under which PowerShell executes scripts must have certain permissions. Here is how to get them:

1. Open PowerShell by pressing Win+R and entering `pwsh` in the dialog box.
2. Run the command `Get-ExecutionPolicy` and confirm the current execution policy.
3. Change the policy to Unrestricted via the `Set-ExecutionPolicy` command.

### Installing Devolutions' PowerShell module

To install Devolutions's PowerShell module, run the following script:

```powershell
Install-Module Devolutions.PowerShell
```

A prompt may appear asking you to trust a `PSGallery` repository. Enter `Yes` to accept.

image

If the installation went smoothly, running the following script should return all the Devolutions.PowerShell commands:

```powershell
Get-Command -Module Devolutions.PowerShell
```

image with text indicating successful installation

### Testing connection to a data source

With the Devolutions.PowerShell module installed, the next step is to verify the connection to a Devolutions data source. To do this, run:

```powershell
Get-RDMCurrentDatasource
```

image with text indicating connection to a SQLLite data source

If {% var, "RDM" false %} is installed on the machine, running `Get-RDMEntry` should return a list of all the available entries, which means the connection to the data source is properly established, queries can be made, and scripts can from then on be executed seamlessly.

&nbsp;

&nbsp;

&nbsp;