---
eleventyComputed:
  title: Domain user provider
  description: 
---
The ***Domain user*** provider allows {{ en.DVLS }} to store the domain account credentials to be used for Active Directory account discovery and to achieve password rotation or password propagation.
![Domain user provider dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8141.png)

## General
| Option      | Description                   |
|-------------|-------------------------------|
| Name        | Display name of the provider. |
| Description | Description of the provider.  |

## Password settings
| Option                               | Description                                                                                       |
|--------------------------------------|---------------------------------------------------------------------------------------------------|
| Password template used on generation | Password template that will be used to generate the password during the reset password operation. |

## Domain
| Option      | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| Domain name | FQDN of the domain against where the scan or the password rotation will be executed.                     |
| Protocol    | Protocol used to contact the domain controller.<br> Select between: <ul><li>LDAP</li><li>LDAPS</li></ul> |
| Port        | Set the port number used with the configured protocol.                                                   |

## Credentials
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Credential type | ***Custom credential*** or ***Linked credential*** options.            | 
| Username | Username of the domain account.    |
| Password | Password of the domain account.    |
| Linked credential | Credential directly linked to a PAM account.              |        

## Actions
| Option                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}     | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan configuration   | Will open the ***Scan configuration*** dialog if enabled.           |