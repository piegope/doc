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

![SSH key – General sub-tab](https://cdnweb.devolutions.net/docs/RDMW0028_2024_2.png)

## SSH key tab
### General
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Entry type***        |  |
| ***Vault*** |  |
| ***Passphrase*** |  |
| ***File*** |  |
| ***Private key*** |  |

![SSH key – Certificate sub-tab](https://cdnweb.devolutions.net/docs/RDMW0029_2024_2.png)

### Certificate
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Certificate file*** |  |
| ***File*** |  |
| ***Certificate*** |  |

![Proxy tab](https://cdnweb.devolutions.net/docs/RDMW0030_2024_2.png)

## Proxy tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Proxy mode***        |  |

![SSH gateway tab](https://cdnweb.devolutions.net/docs/RDMW0031_2024_2.png)

## SSH gateway tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Gateway mode***        |  |

![Post login tab](https://cdnweb.devolutions.net/docs/RDMW0032_2024_2.png)

## Post login tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Delay***        |  |
| ***Commands*** |  |

![Before close tab](https://cdnweb.devolutions.net/docs/RDMW0033_2024_2.png)

## Before close tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Delay***        |  |
| ***Commands*** |  |

![Terminal – Configuration sub-tab](https://cdnweb.devolutions.net/docs/RDMW0034_2024_2.png)

## Terminal tab
### Configuration
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Override terminal type*** |  |
| ***Encoding*** |  |
| ***Auto wrap*** |  |
| ***Local echo*** |  |
| ***Initial keypad mode*** |  |
| ***Disable application keypad mode*** |  |
| ***Cursor type*** |  |
| ***Cursor blink*** |  |
| ***Cursor blink rate*** |  |
| ***Reset scroll on display*** |  |
| ***Force Non-destructive backspace*** |  |
| ***Implicit Carriage return in Linefeed*** |  |
| ***Implicit linefeed in carriage return*** |  |
| ***Max scrollback lines*** |  |
| ***Double-click delimiters*** |  |

![Terminal – Display sub-tab](https://cdnweb.devolutions.net/docs/RDMW0035_2024_2.png)

### Display
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Allow remote-controlled window title changing***        |  |
| ***Colors*** |  |
| ***Font*** |  |
| ***Terminal size*** |  |
| ***Bold Mode*** |  |
| ***Syntax highlighting mode*** |  |

![Terminal – Advanced sub-tab](https://cdnweb.devolutions.net/docs/RDMW0036_2024_2.png)

### Advanced
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Answerback***        |  |
| ***Enable remote monitoring*** |  |
| ***Interval*** |  |
| ***Remote command*** |  |
| ***Bell behavior*** |  |
| ***Enable compression*** |  |
| ***Automatically open file transfer tab*** |  |
| ***Start minized*** |  |
| ***Show files in tree view*** |  |
| ***Show hidden files*** |  |
| ***Log to file*** |  |
| ***Verbose*** |  |
| ***Home directory*** |  |
| ***Starting location*** |  |
| ***Zmodem download directory*** |  |

![Keyboard – General sub-tab](https://cdnweb.devolutions.net/docs/RDMW0037_2024_2.png)

## Keyboard tab
### General
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Cursor key mode***        |  |
| ***Backspace key mode*** |  |
| ***Home / End key mode*** |  |
| ***Function keys mode*** |  |

![Keyboard – Key mapping sub-tab](https://cdnweb.devolutions.net/docs/RDMW0038_2024_2.png)

### Key mapping
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Key***        |  |

![X11 forwarding tab](https://cdnweb.devolutions.net/docs/RDMW0039_2024_2.png)

## X11 forwarding tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Enable X11 forwarding***        |  |

![Logs tab](https://cdnweb.devolutions.net/docs/RDMW0040_2024_2.png)

## Logs tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Enable logging***        |  |
| ***Log path*** |  |
| ***Log mode*** |  |
| ***Log overwrite mode*** |  |
| ***Verbose*** |  |
| ***Log to terminal*** |  |

![Macro tab](https://cdnweb.devolutions.net/docs/RDMW0041_2024_2.png)

## Macro tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Enable macro***        |  |
| ***Hide premade macros*** |  |
| ***Macro list source*** |  |

![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW0042_2024_2.png)

## Advanced tab
| SETTINGS          | DESCRIPTION            |
|-------------------|------------------------|
| ***Internet protocol***        |  |
| ***Interactive authentication in terminal*** |  |
| ***Disconnect action*** |  |
| ***Display error messages*** |  |
| ***Always accept fingerprint*** |  |
| ***Mouse click mode*** |  |
| ***Algorithm support*** |  |
| ***Minimum Diffie-Hellman key size*** |  |
| ***Ignore Substitute character*** |  |
| ***Enable TCP keepalives*** |  |
| ***Enable GSS API authentication*** |  |
| ***Skip environment variable setup*** |  |
| ***Enable GSS API credential delegation*** |  |
| ***Allow SSH authentication agent forwarding*** |  |
| ***Disable Nagle's algorithm*** |  |
| ***Use SSH authentication agent*** |  |
| ***Ping interval*** |  |
| ***Ping string*** |  |
| ***Paste delay*** |  |
| ***Environment variables*** |  |
