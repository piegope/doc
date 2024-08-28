---
eleventyComputed:
  title: System settings
  description: The System Settings section of the Administration panel is used to manage the global settings of all users and user groups in {{ en.DHUBB }}.  
---
The ***System Settings*** section of the ***Administration*** panel is used to manage the global settings of all users and user groups in {{ en.DHUBB }}.  

## General

In the ***General*** section of the ***System Settings***, manage settings related to temporary passwords, networking, support tickets, opened sessions, and user interface profiles.
![Administration – System Settings – General](https://cdnweb.devolutions.net/docs/HUBB4018_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Send temporary password by email  | Select how the temporary password is sent to your users when creating their {{ en.DA }} from an invite in {{ en.DHUBB }}:<ul><li>***Ask***: When creating a new {{ en.DA }}, a prompt will appear to send the user's temporary password by email or not.</li><li>***Send***: When creating a new {{ en.DA }}, users will receive their temporary passwords by email.</li><li>***Not Send***: When creating a new {{ en.DA }}, users will not receive their temporary password by email. At that time, a prompt will appear with their temporary password. You then can decide how to provide this critical information to your users.</li></ul> |
| Block Tor traffic | Blocks Internet traffic coming from the Tor network. |
| Allow users to submit a support ticket | Enables the option for users to submit a ticket to the support team. |
| Automatic "Mark as Closed" after X days | Marks opened sessions as closed after a set number of days. |
| User interface profiles | Select the default user interface profile users will be assigned between ***IT professional***, ***Business user***, or the ***Default***. |

## {{ en.VLT_MAJ  }}

In the {{ en.VLT  }} section of the ***System Settings***, manage settings related to user {{ en.VTL }} and visibility. 

![Administration – System Settings – {{ en.VLT_MAJ  }}](https://cdnweb.devolutions.net/docs/HUBB4019_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Allow {{ en.UVLT_MAJ   }}         | Allow {{ en.UVLT_MAJ }} for users.                           |
| Public -  Allow access request    | Set {{ en.VLT   }} visibility to public. Every user can see public {{ en.VLT   }}s, but only those who have requested access can use them.  |
| Private -  Invitation only        | Set {{ en.VLT  }} visibility to private. Only users with an invitation can see and use them. |

{% snippet, "badgeHelp" %}
Note that {{ en.VLT   }} visibility can also be changed for each {{ en.VLT   }} individually. See [{{ en.VLT_MAJ   }} access in {{ en.DHUBB }}](https://docs.devolutions.net/hub/web-interface/vault-access/#individual-vault-visibility) for more info.
{% endsnippet %}

## RDM and companion tools

![Administration – System Settings – RMD and companion tools](https://cdnweb.devolutions.net/docs/HUBB4020_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Cache/Offline                     | Set the length of time offline data is stored before it expires.                            |
| Force application password on RDM            |  Require a password for accessing {{ en.RDM }}.                                                        |
| Enforce biometric lock                       | Require the use of biometrics when connecting to the data source. |

## Advanced

In the ***Advanced*** section of the ***System Settings***, manage settings related to Cache, offline mode, {{ en.WBEX }} autofill, and external sharing. 

![Administration – System Settings – Advanced](https://cdnweb.devolutions.net/docs/HUBB4021_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Allow {{ en.WBEX }} autofill                 | Allow {{ en.WBEX }} to autofill credentials.                                                        |
| Allow user to send messages and passwords securely via Devolutions Send   | Users can send encrypted messages and passwords using [Devolutions Send](/hub/send/).