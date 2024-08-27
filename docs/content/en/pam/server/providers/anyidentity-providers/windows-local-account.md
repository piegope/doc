---
eleventyComputed:
  title: Windows local accounts
  description: The Windows local accounts provider enables the management of local Windows accounts across multiple hosts.
---
The ***Windows local accounts*** provider enables the management of local Windows accounts across multiple hosts. While the ***Windows account*** provider already exists within {{ en.DVLS }}, it is limited to managing accounts on a single host. This {{ en.ANYID }} provider extends that capability, allowing for the management of accounts on numerous hosts, all managed by the same provider.
![Windows local accounts provider configuration](https://cdnweb.devolutions.net/docs/DVLS4024_2024_2.png)

The pre-built template for this {{ en.ANYID }} provider can be found [on GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Providers/Windows%20Accounts).

## General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the Provider.|
| Template name | Template of the Provider.  |

## Properties
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Description                         | Description of the provider.                                                                       |
| Host | IP Address or host name where the Windows local accounts are located.                                                             |
| ExcludeDisabledAccountsInDiscovery| Exclude disabled accounts when in discovery mode.                                                    |
| HostsLDAPSearchFilter | Add LDAP search filter(s).                                                                                       | 

## Credentials
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Credential type | Custom credentials or Linked credential options.            | 
| Username | Username of the Windows local account with rights to list accounts.|
| Password | Password of the Windows local account.                             |
| Linked credential | Credential directly linked to a PAM account.              | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}  | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan Configuration| Will open the Scan Configuration dialog if enabled.                 |