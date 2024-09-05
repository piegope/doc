---
_schema: default
eleventyComputed:
  title: Side menu
---
Using the ***Side menu*** tabs, you can access various {{ en.WBEX }} features. Each tab displays a different view in the ***Content area***.

When using the {{ en.WBEX }} with {{ en.DHUBP }}, the available tabs are the ***Matching*** tab, the ***Favorites*** tab, the ***All entries*** tab, the ***Password generator*** tab, and the ***Settings*** tab.

In all tabs except the ***Password generator*** tab, when hovering over an entry, three new options appear: the ***Copy username***, ***Copy password***, and***View*** buttons. Go to the [Entries functionalities](#entry-functionalities) section for more information.

## Side menu Tabs

### Matching tab

The extension opens on the ***Matching*** tab. This is where you will see the list of credentials available for the particular website you are on.

{% snippet, "badgeInfo" %}
For methods of retrieving your credentials, visit [Retrieve credentials from {{ en.DHUBP }} with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).
{% endsnippet %}

![Matching tab](https://cdnweb.devolutions.net/docs/WEBX4128_2024_2.png "Matching tab")

At the top, you can use the ***Search*** bar to filter through all your credentials, not just those applicable to the website. You can also use the ***Refresh*** button next to it to update the search results.

The ***Add Website*** button (+) opens a new browser tab that allows you to manually add a website entry in {% var, "DHUBP" false %} through the {{ en.WBEX }}.

{% snippet, "badgeInfo" %}For a complete list of the available entries and fields in the ***Add website*** window, visit [Add website](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/add-website/). You can also consult our step-by-step guide on [how to add an entry](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/add-entry-hub-personal-workspace-browser-extension/).{% endsnippet %}

### Favorites tab

The ***Favorites*** tab contains all favorited entries. To search for a particular entry, use the filter option located in the ***Top menu***.

![Favorites tab](https://cdnweb.devolutions.net/docs/WEBX4129_2024_2.png "Favorites tab")

### All Entries tab

The ***All Entries*** tab allows you to browse through all your folders and entries.

![All entries tab](https://cdnweb.devolutions.net/docs/WEBX4130_2024_2.png "All entries tab")

At the top, you can use the ***Filter*** bar to search through all your folders and entries.

To access an entry in the {{ en.WBEX }}, navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DHUBP }}.

### Password generator tab

The ***Password generator*** tab assists you in creating a strong and secure password adapted to your needs and to website requirements for your new account.

![Password generator tab](https://cdnweb.devolutions.net/docs/WEBX4131_2024_2.png "Password generator tab")

Your custom password is generated at the top of the ***Content area*** with a strenght indicator below it. You can copy it or generate a new one using the ***Copy to clipboard*** and ***Generate password*** buttons respectively. The ***Password lenght***, which is set to 12 by default, can also be adjusted.

In the ***General*** drop-down section, you are able to select the types of characters that your password must contain as well as the minimum number of characters of each type that must be included. ![General section](https://cdnweb.devolutions.net/docs/WEBX4102_2024_2.png "General section")

In the ***Advanced*** drop-down section, you are able to further customize your password by entering characters you want included in your password, followed by the minimum number of times they must appear. In the second field, you can also enter characters you want excluded from your password. ![Advanced section](https://cdnweb.devolutions.net/docs/WEBX4103_2024_2.png "Advanced section")

{% snippet, "badgeInfo" %}To learn how to use the ***Password generator*** when creating an account on a website, visit [Create an account for a website in {{ en.DHUBP }} with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/create-account-website-hub-personal/).{% endsnippet %}

### Entry functionalities

No matter what tab you are in (except the ***Password Generator*** tab), when hovering over an entry, three new options appear: the ***Copy Username***, ***Copy Password***, and ***Overview*** buttons.

![Copy username, Copy password, and View options](https://cdnweb.devolutions.net/docs/WEBX4132_2024_2.png "Copy username, Copy password, and View options")

The ***Copy username*** and ***Copy password*** buttons copy the username/password of the entry to your clipboard.

The ***Overview*** button gives you an overview of the entry as well as additional functionalities. The availability of information and functionalities depends on the type of entry and the information provided in the entry, although some of them are always available:

* ***Edit***/***Delete*** the entry with the ellipses button at the top right.
* Mark your entry as favorite by clicking on the ***Add to favorites*** icon next to the entry name. The entry will then show in the ***Favorites*** [tab](#favorites-tab).
* View the location of your entry under the ***Folder*** section (if it is located under a folder).
* See when the entry was last modified and created under the ***Last modified on*** and ***Created on*** sections respectively.
* Access and view files attached to the entry using the ***Attachments*** button.

Other information and functionalities will depend on what you provided when creating the entry (username, password, tags, description, etc.). ![Entry overview](https://cdnweb.devolutions.net/docs/WEBX4133_2024_2.png "Entry overview")