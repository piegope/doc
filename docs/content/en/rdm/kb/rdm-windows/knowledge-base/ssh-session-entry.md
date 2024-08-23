---
eleventyComputed:
  title: SSH terminal entry options
  description: This topic describes all availables options specific to this entry.
---
This topic describes all availables options specific to this entry. Each chapter represents a tab in the options menu.

{% snippet, "badgeInfo" %}
The following properties can be configured when creating or editing the entry.
{% endsnippet %}

| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
| ***Folder***      | The folder where the entry is located. A folder can be selected by clicking the arrow or the three dots to open the ***Folder*** window. To create a new folder, click on the plus (***+***) icon.|
| ***Display***     | How the session is displayed. ***Embedded (tabbed)*** means that the remote desktop connection is opened within the same window as the other tabs or entries. Each connection has its own tab, making it easy to switch between them. An ***undocked*** display refers to the session window being detached from the main application. It allows you to move and resize the remote session window freely on your desktop. |
| ***Host***        | ***Host configured*** lets you select the host. ***Linked (vault)*** indicates that the host for the RDP entry is linked to an external vault. ***Inherited*** is used when the host is inherited from a higher-level or parent entry. |
| ***Credentials*** | <ul> <li>***Username and password***: You will set the username and password in the ***General*** tab.</li> <li>***Linked (vault)***: Links to credentials available in the current shared vault.</li> <li>***Inherited***: Inheritance means that credentials will automatically be passed down from a higher-level entry to lower-level entries that inherit from it.</li> <li>***My personal credentials***: These credentials are not entry specific but are instead taken from the option under ***File*** – ***My account settings*** – ***Local credentials*** – ***My personal credentials***.</li> <li>***None***: {{ en.RDM }} will not send credentials to the entry.</li> <li>***Find by name (user vault)***: Searches for the name of an entry in a shared vault.</li> <li>***My privileged account***: These credentials are not entry specific but are instead taken from the option under ***File*** – ***My account settings*** – ***Local credentials*** – ***My privileged account***.</li> </ul> |

![General tab](https://cdnweb.devolutions.net/docs/RDMW0027_2024_2.png)

## General tab
| SETTINGS                     | DESCRIPTION            |
|------------------------------|------------------------|
| ***Host***                   | The field contains the host name. Clicking on the ellipsis button opens the ***Computer list*** menu. Clicking on ***Default*** opens the ***Port*** menu. The ***Port generator...*** button can generate ports according to a list of parameters. |
| ***Username***               | This entry's login credentials. |
| ***Password***               | This entry's login credentials. |
| ***Password prompt string*** |                        |
| ***OTP prompt string***      |                        |
| ***Use smartcard***          |                        |
| ***Certificate method***     |                        |
| ***PIN***                    |                        |

![SSH key tab](https://cdnweb.devolutions.net/docs/RDMW0028_2024_2.png)

## SSH key tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Proxy tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## SSH gateway tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Post login tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Before close tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Terminal tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Keyboard tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## X11 forwarding tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Logs tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Macro tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()

## Advanced tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Name***        | The name of the entry. |
|                   |                        |

![]()
