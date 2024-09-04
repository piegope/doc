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
| SETTINGS                     | DESCRIPTION                                                                       |
|------------------------------|-----------------------------------------------------------------------------------|
| ***Host***                   | The field contains the host name. Clicking on the ellipsis button opens the ***Computer list*** menu. Clicking on ***Default*** opens the ***Port*** menu. The ***Port generator...*** button can generate ports according to a list of parameters. |
| ***Username***               | This entry's login credentials.                                                   |
| ***Password***               | This entry's login credentials.                                                   |
| ***Password prompt string*** | A string used if a server has a different login process (this field is optional). |
| ***OTP prompt string***      | A string used to know when to send the OTP (this field is optional).              |
| ***Use smartcard***          | Uses the smartcard.                                                               |
| ***Certificate method***     | The method used to fetch the smartcard credentials.                               |
| ***PIN***                    | The smartcard PIN.                                                                |

![SSH key – General sub-tab](https://cdnweb.devolutions.net/docs/RDMW0028_2024_2.png)

## SSH key tab
### General
| SETTINGS          | DESCRIPTION                                                                         |
|-------------------|-------------------------------------------------------------------------------------|
| ***Entry type***  | The source of the SSH key.                                                          |
| ***Vault***       | The dropdown can be used to select an SSH key. The ellipsis button opens a window to browse the current vault for SSH keys (this field is only available if the ***Entry type*** is ***Linked (vault)***).                      |
| ***Passphrase***  | The passphrase used to decript the key.                                             |
| ***File***        | This field points to the SSH key file.                                              |
| ***Private key*** | Select or generate a private key file (this field is only for ***Embedded data***). |

![SSH key – Certificate sub-tab](https://cdnweb.devolutions.net/docs/RDMW0029_2024_2.png)

### Certificate
| SETTINGS               | DESCRIPTION                                                                |
|------------------------|----------------------------------------------------------------------------|
| ***Certificate file*** | The source of the certificate.                                             |
| ***File***             | This field points to the certificate file.                                 |
| ***Certificate***      | Select or a certificate file (this field is only for ***Embedded data***). |

![Proxy tab](https://cdnweb.devolutions.net/docs/RDMW0030_2024_2.png)

## Proxy tab
| SETTINGS         | DESCRIPTION            |
|------------------|------------------------|
| ***Proxy mode*** | The ***Link*** mode points to a ***Proxy Tunnel*** entry. |

![SSH gateway tab](https://cdnweb.devolutions.net/docs/RDMW0031_2024_2.png)

## SSH gateway tab
| SETTINGS           | DESCRIPTION            |
|--------------------|------------------------|
| ***Gateway mode*** | The ***Custom*** mode lets you configure an SSH gateway. The ***Linked*** mode picks from an already existing SSH gateway. |

![Post login tab](https://cdnweb.devolutions.net/docs/RDMW0032_2024_2.png)

## Post login tab
| SETTINGS                              | DESCRIPTION                                                    |
|---------------------------------------|----------------------------------------------------------------|
| ***Delay***                           | A set delay between every executed command.                    |
| ***Automatic {ENTER} after command*** | An automatic line feed will be added in between every command. |
| ***Commands***                        | Contains a list of command configurations. Clicking the ***New*** or ***Edit*** button will bring up the ***Macro edit*** window with: <ul><li>The ***Command*** field (supports variables)</li> <li>The ***Expected prompt*** (when RDM sees this value it will this command)</li> <li>The ***Timeout*** for the ***Expected prompt*** option</li></ul> |

![Before close tab](https://cdnweb.devolutions.net/docs/RDMW0033_2024_2.png)

## Before close tab
| SETTINGS                              | DESCRIPTION                                                                            |
|---------------------------------------|----------------------------------------------------------------------------------------|
| ***Delay***                           | A set delay between every executed command.                                            |
| ***Automatic {ENTER} after command*** | An automatic line feed will be added in between every command.                         |
| ***Commands***                        | 5 command lines, followed by the ***More commands*** field to add additional commands. |

![Terminal – Configuration sub-tab](https://cdnweb.devolutions.net/docs/RDMW0034_2024_2.png)

## Terminal tab
### Configuration
| SETTINGS                                   | DESCRIPTION                                                                       |
|--------------------------------------------|-----------------------------------------------------------------------------------|
| ***Override terminal type***               | The terminal will be handled differently if the string in this field is detected. |
| ***Encoding***                             | Changes character encoding.                                                       |
| ***Auto wrap***                            | Enable or disable auto wrap.                                                      |
| ***Local echo***                           | Enable or disable local echo. The ***Auto*** option lets the server decide.       |
| ***Initial keypad mode***                  | How the terminal behaves with the keypad.                                         |
| ***Disable application keypad mode***      | Disables the app keypad.                                                          |
| ***Cursor type***                          | Changes the UI cursor type.                                                       |
| ***Cursor blink***                         | Turns the cursor blink on or off.                                                 |
| ***Cursor blink rate***                    | Delay between every cursor blink.                                                 |
| ***Reset scroll on display***              | Enable or disable scroll reset.                                                   |
| ***Force Non-destructive backspace***      | Enable or disable non-destructive backspace.                                      |
| ***Implicit Carriage return in Linefeed*** | Adds a carriage return with every linefeed.                                       |
| ***Implicit linefeed in carriage return*** | Adds a linefeed with every carriage return.                                       |
| ***Max scrollback lines***                 | The maximum number of displayed lines.                                            |
| ***Double-click delimiters***              | Delimits what is selected in the terminal with a character or a string.           |

![Terminal – Display sub-tab](https://cdnweb.devolutions.net/docs/RDMW0035_2024_2.png)

### Display
| SETTINGS                                            | DESCRIPTION                                                          |
|-----------------------------------------------------|----------------------------------------------------------------------|
| ***Allow remote-controlled window title changing*** | Changes the entry tab name depending on what the server feeds.       |
| ***Colors***                                        | Allows color overriding.                                             |
| ***Font***                                          | Allows font overriding.                                              |
| ***Terminal size***                                 | The ***Fixed size*** mode lets you set a number of columns and rows. |
| ***Bold Mode***                                     | This option handles how the bold is displayed.                       |
| ***Syntax highlighting mode***                      | This option can set one or more custom syntax highlights.            |

![Terminal – Advanced sub-tab](https://cdnweb.devolutions.net/docs/RDMW0036_2024_2.png)

### Advanced
| SETTINGS                                   | DESCRIPTION                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
| ***Answerback***                           |  |
| ***Enable remote monitoring***             | If enabled, a status bar with the CPU, RAM & Swap %'s appears at the bottom.   |
| ***Interval***                             | The interval at which a ping will be sent to update info on remote monitoring. |
| ***Remote command***                       |  |
| ***Bell behavior***                        | How {{ en.RDM }} will react to the SSH terminal sending the bell character.    |
| ***Enable compression***                   | Allows sending compressed data or not.                                         |
| ***Automatically open file transfer tab*** | Automatically opens the file transfer tab when the terminal is opened.         |
| ***Start minized***                        | Minimizes the file transfer tab when the terminal session is opened.           |
| ***Show files in tree view***              | Shows files in the file transfer tab.                                          |
| ***Show hidden files***                    | Shows hidden files in the file transfer tab.                                   |
| ***Log to file***                          | Set a path and file to keep logs.                                              |
| ***Verbose***                              | How verbose logs are written.                                                  |
| ***Home directory***                       | The directory at the root of the file transfer tab.                            |
| ***Starting location***                    | Sets the selected folder when starting the file transfer tab.                  |
| ***Zmodem download directory***            | Where the Zmodem files will be downloaded.                                     |

![Keyboard – General sub-tab](https://cdnweb.devolutions.net/docs/RDMW0037_2024_2.png)

## Keyboard tab
### General
| SETTINGS                  | DESCRIPTION                                                                                  |
|---------------------------|----------------------------------------------------------------------------------------------|
| ***Cursor key mode***     | Changes the cursor key mode between ***Normal*** and ***Application***.                      |
| ***Backspace key mode***  | Changes the backspace key mode between ***Control-H*** and ***Control-? (ASCII code 127)***. |
| ***Home / End key mode*** | Changes the home / end key mode between ***Standard*** and ***RXVT***.                       |
| ***Function keys mode***  | Changes how the function keys are handled.                                                   |

![Keyboard – Key mapping sub-tab](https://cdnweb.devolutions.net/docs/RDMW0038_2024_2.png)

### Key mapping
| SETTINGS          | DESCRIPTION                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| ***Key***         | Click the ***New*** button to map a sequence triggered by a key plus a modifier. |

![X11 forwarding tab](https://cdnweb.devolutions.net/docs/RDMW0039_2024_2.png)

## X11 forwarding tab
| SETTINGS                    | DESCRIPTION                            |
|-----------------------------|----------------------------------------|
| ***Enable X11 forwarding*** | Enables or disables the X11 forwarding |

![Logs tab](https://cdnweb.devolutions.net/docs/RDMW0040_2024_2.png)

## Logs tab
| SETTINGS                 | DESCRIPTION                                                                    |
|--------------------------|--------------------------------------------------------------------------------|
| ***Enable logging***     | The ***Custom*** mode requires the path and file name. The ***Global*** mode requires the file name and then to configure the global path in ***File*** – ***Settings***. |
| ***Log path***           | Includes the path and the file for the log.                                    |
| ***Log mode***           | The ***Event*** mode only logs core events. The ***Printable output*** mode logs everything happening in the terminal. |
| ***Log overwrite mode*** | This option is only available with the ***Printable outpout*** ***Log mode***: <ul><li> ***Prompt***: asks for ***Append*** or ***Overwrite***.</li> <li>***Append***: Writes at the end of the file.</li> <li>***Overwrite***: Overwrites the file with logs specific to the current session.</li></ul> |
| ***Verbose***            | This will set how in-depth logs are (only available for the ***Event*** mode). |
| ***Log to terminal***    | Toggle to display the logs in the terminal.                                    |

![Macro tab](https://cdnweb.devolutions.net/docs/RDMW0041_2024_2.png)

## Macro tab
| SETTINGS                  | DESCRIPTION                                                                                             |
|---------------------------|---------------------------------------------------------------------------------------------------------|
| ***Enable macro***        | The ***Yes*** option enables the macro bar, which appears at the top when the SSH terminal is launched. |
| ***Hide premade macros*** | Toggle this to hide premade macros.                                                                     |
| ***Macro list source***   | The ***Entire vault*** option only lets the user pick macros from the current vault. The ***Custom*** option selects only specific macros. |

![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW0042_2024_2.png)

## Advanced tab
| SETTINGS                                        | DESCRIPTION                                                    |
|-------------------------------------------------|----------------------------------------------------------------|
| ***Internet protocol***                         | Choose between IPv4 or IPv6.                                   |
| ***Interactive authentication in terminal***    | This option manages the behavior when the terminal asks you for interactive authentication. The ***No*** option makes {{ en.RDM }} manage it, while ***Yes*** makes the terminal manage it. |
| ***Disconnect action***                         | What happens when the SSH terminal disconnects.                |
| ***Display error messages***                    | Choose to show error messages or not.                          |
| ***Always accept fingerprint***                 | Always accept fingerprints or not.                             |
| ***Mouse click mode***                          | Changes right-click behavior: <ul><li>***Windows***: prompts a context menu.</li> <li>***Compromise***: pastes.</li> <li>***XTerm***: Selects text.</li></ul> |
| ***Algorithm support***                         | In the ***Custom*** mode, click the ellipsis button to select one or multiple ***Cipher***, ***Host key***, ***Kex*** and/or ***MAC*** algorithms. |
| ***Minimum Diffie-Hellman key size***           | Minimum key size in bits.                                      |
| ***Ignore Substitute character***               | Ignores substite characters or not.                            |
| ***Enable TCP keepalives***                     | Enables TCP keepalives.                                        |
| ***Enable GSS API authentication***             | Enables GSS API authentication.                                |
| ***Skip environment variable setup***           | Skips environment variable setup.                              |
| ***Enable GSS API credential delegation***      | Enable GSS API credential delegation.                          |
| ***Allow SSH authentication agent forwarding*** | Allow SSH authentication agent forwarding.                     |
| ***Disable Nagle's algorithm***                 | Disable Nagle's algorithm.                                     |
| ***Use SSH authentication agent***              | Uses SSH authentication agent which is currently opened on your machine (including the {{ en.RDM }} SSH key agent). |
| ***Ping interval***                             | A command is sent every X second to keep the connection alive. |
| ***Ping string***                               | The string which is sent with the ***Ping interval*** option.  |
| ***Paste delay***                               | Added delay for pasting text.                                  |
| ***Environment variables***                     | Sets environment variables to be used by the terminal.         |
