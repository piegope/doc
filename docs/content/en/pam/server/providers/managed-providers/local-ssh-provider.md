---
eleventyComputed:
  title: Local SSH user provider
  description: The SSH provider allows {{ en.DVLS }} to store the SSH local account credentials to be used for SSH accounts discovery or to achieve password rotation.
---
The ***Local SSH user*** provider allows {{ en.DVLS }} to store the SSH local account credentials to be used for SSH accounts discovery or to achieve password rotation.
![Local SSH user provider dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8142.png)

{% snippet, "badgeInfo" %}
The wheel group under Linux is traditionally used to control access to root privileges via the sudo system. Members of this group are authorized to elevate their privileges to those of the system administrator, or root, usually after being authenticated by their personal password.
{% endsnippet %}

## General
| Option      | Description                   |
|-------------|-------------------------------|
| Name        | Display name of the provider. |
| Description | Description of the provider.  |

## Password settings
| Option                               | Description                                                                          |
|--------------------------------------|--------------------------------------------------------------------------------------|
| Password template used on generation | Password template used to generate the password during the reset password operation. |

## Host
| Option | Description                                                 |
|--------|-------------------------------------------------------------|
| Host   | IP address or host name where the SSH accounts are located. |
| Port   | Set the port number used to communicate with the host.      |

## Credentials
| Option   | Description                                                        |
|----------|--------------------------------------------------------------------|
| Credential type | ***Custom credential*** or ***Linked credential*** options.            | 
| Username | Username of the SSH account. |
| Password | Password of the SSH account. |
| Linked credential | Credential directly linked to a PAM account.              | 

## Actions
| Option                 | Description                                                    |
|------------------------|----------------------------------------------------------------|
| Add PAM {{ en.VLT }}   | Create a PAM {{ en.VLT }} with the provider's name if enabled. |
| Add Scan configuration | Open the ***Scan configuration*** dialog if enabled.           |