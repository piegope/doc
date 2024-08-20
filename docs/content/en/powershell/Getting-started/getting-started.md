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

1\. Go to [Microsoft's PowerShell GitHub repository releases page](https://github.com/PowerShell/PowerShell/releases).

2\. Scroll down the Assets section until you see the Windows .msi package and download it.

![Windows .msi package from the Assets list](https://cdnweb.devolutions.net/docs/INTERFACE4042.png "Windows .msi package from the Assets list")

3\. Open the installer and go through the wizard.

#### User's execution policy

The user under which PowerShell executes scripts must have certain permissions. To get them, open PowerShell and run the command `Get-ExecutionPolicy` for the current execution policy. If the policy is set to RemoteSigned, change it to **Unrestricted** using the `Set-ExecutionPolicy` command.

![Setting the ExecutionPolicy to Unrestricted](https://cdnweb.devolutions.net/docs/INTERFACE4045.png "Setting the ExecutionPolicy to Unrestricted")

#### Installing Devolutions' PowerShell module

To install Devolutions's PowerShell module, run the following script:

```powershell
Install-Module Devolutions.PowerShell
```

A prompt should then appear asking you to trust a `PSGallery` repository. Enter `Yes` to accept.

![Installing Devolutions.PowerShell](https://cdnweb.devolutions.net/docs/INTERFACE4046.png "Installing Devolutions.PowerShell")

If the installation went smoothly, running the following script should return all the Devolutions.PowerShell commands:

```powershell
Get-Command -Module Devolutions.PowerShell
```

![List of all the Devolutions.PowerShell commands](https://cdnweb.devolutions.net/docs/INTERFACE4048.png "List of all the Devolutions.PowerShell commands")

### Testing connection to a data source

With the Devolutions.PowerShell module installed, the next step is to verify the connection to a Devolutions data source. To do this, run:

```powershell
Get-RDMCurrentDatasource
```

![Successful connection to an SQLite data source](https://cdnweb.devolutions.net/docs/INTERFACE4047.png "Successful connection to an SQLite data source")f

If {% var, "RDM" false %} is installed on the machine, running `Get-RDMEntry` should return a list of all the available entries, which means the connection to the data source is properly established, queries can be made, and scripts can from then on be executed seamlessly.

&nbsp;

&nbsp;

&nbsp;