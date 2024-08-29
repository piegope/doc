---
eleventyComputed:
  title: MySQL user provider
  description: The MySQL user provider allows {{ en.DVLS }} to store the MySQL account credentials to be used for MySQL accounts discovery or to achieve password rotation.
---
The ***MySQL user*** provider allows {{ en.DVLS }} to store the MySQL account credentials to be used for MySQL accounts discovery or to achieve password rotation.
![MySQL user provider](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8092.png)

## General
| Option        | Description                   |
|---------------|-------------------------------|
| Name          | Display name of the provider. |
| Template name | Description of the provider.  |

## Password settings
| Option                              | Description                                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------------------|
| Password template used on generation| Password template that will be used to generate the password during the reset password operation.  |

## Properties
| Option   | Description                                                                          |
|----------|--------------------------------------------------------------------------------------|
| Host name| FQDN of the domain against where the scan or the password rotation will be executed. |
| Port     | Set the port number used with to connect on the MySQL host.                          |
| Username | Username of the MySQL account with rights to list accounts.                          |
| Password | Password of the MySQL account.                                                       |

## Actions
| Option               | Description                                                           |
|----------------------|-----------------------------------------------------------------------|
| Add PAM {{ en.VLT }} | Will create a PAM {{ en.VLT }} with the provider's name if enabled.   |
