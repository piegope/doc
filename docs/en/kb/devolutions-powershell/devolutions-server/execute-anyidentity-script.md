---
eleventyComputed:
  title: Execute AnyIdentity PowerShell scripts
  description: This topic will cover how to execute various PowerShell scripts that call AnyIdentity providers in {{ en.DVLS }}.
---
AnyIdentity are providers that are not built-in to {{ en.DVLS }}, however it is possible to create a custom PowerShell script to get information about the users and passwords. {{ en.DVLS }} already includes Azure Key Vault and Windows Accounts [custom scipts](#existing-templates).

## Set up the PowerShell script
{% snippet icon.badgeInfo %}
The [WinRM](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) needs to be enabled for the script to work.
{% endsnippet %}  

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. 

### Existing templates
{% snippet icon.badgeHelp %}
Azure Key Vault and Windows Accounts already have custom PowerShell scripts with instructions on our public [GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Providers).
{% endsnippet %}  

### Check for trusted hosts
Here is the command line to fetch trusted hosts: `Get-Item "WSMan:localhost\Client\TrustedHosts"`  
Here is the command line to update the local machine's trusted hosts with a certain value: `Set-Item 'WSMan:localhost\Client\TrustedHosts' -Value '*' -Force`
{% snippet icon.shieldCaution %}
Make certain to replace the `*` in the command above. If left as is the `*` acts as a wildcard, which would make every remote host become trusted.
{% endsnippet %}  
