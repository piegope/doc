---
eleventyComputed:
  title: SQL Server provider
  description: The SQL Server provider allows {{ en.DVLS }} to store the SQL account credentials to be used for SQL accounts discovery or to achieve password rotation.
---
The ***SQL Server*** provider allows {{ en.DVLS }} to store the SQL account credentials to be used for SQL accounts discovery or to achieve password rotation.
![SQL Server provider dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2118.png)

## General
| Option      | Description                  |
|-------------|------------------------------|
| Name        | Display name of the provider.|
| Description | Description of the provider. |

## Password settings
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Password template used on generation| Password template that will be used to generate the password during the reset password operation.  |

## Server
| Option      | Description                   |
|-------------|-------------------------------|
| Server name | Hostname of the SQL Server.   |

## Credentials
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Credential type | ***Custom credential*** or ***Linked credential*** options.            | 
| Username | Username of the SQL account with rights to list accounts. |
| Password | Password of the SQL account.                              |
| Linked credential | Credential directly linked to a PAM account.              | 

## Actions
| Option                | Description                                                         |
|-----------------------|---------------------------------------------------------------------|
| Add PAM {{ en.VLT }}  | Will create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan configuration| Will open the ***Scan configuration*** dialog if enabled.                 |