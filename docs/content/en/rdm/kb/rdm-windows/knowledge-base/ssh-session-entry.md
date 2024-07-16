---
eleventyComputed:
  title: SSH Shell entry options
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
| ***Credentials*** | <ul> <li>***Username and password***: You will set the username and password in the ***General*** tab.</li> <li>***Linked (vault)***: Links to credentials available in the current shared vault.</li> <li>***Inherited***: Inheritance means that credentials will automatically be passed down from a higher-level entry to lower-level entries that inherit from it.</li> <li>***My personal credentials***: These credentials are not entry specific but are instead taken from the option under ***File*** – ***My account settings*** – ***My personal credentials***.</li> <li>***None***: {{ en.RDM }} will not send credentials to the entry.</li> <li>***Find by name (user vault)***: </li> <li>***My privileged account***: These credentials are not entry specific but are instead taken from the option under ***File*** – ***My account settings*** – ***My personal credentials***. This is meant for </li> </ul> |
![SSH Shell entry](https://cdnweb.devolutions.net/docs/RDMW0010_2024_2.png)

## General tab

## SSH key tab

## Proxy tab

## SSH gateway tab

## Post login tab

## Before close tab

## Terminal tab

## Keyboard tab

## X11 forwarding tab

## Logs tab

## Macro tab

## Advanced tab

