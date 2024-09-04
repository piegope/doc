---
_schema: default
eleventyComputed:
  title: Side menu
---
Using the ***Side menu*** tabs, you can access various {{ en.WBEX }} features. Each tab will display a different view in the ***Content Area***.

When using the {{ en.WBEX }} with {{ en.DVLS }}, the available tabs are the ***Matching*** tab, the ***{% var, "VLT_MAJ" false %}s*** tab, the ***Favorites*** tab, the ***Recent*** tab, and the ***Password Generator*** tab.

In all tabs except the ***Password generator***  and ***{% var, "VLT_MAJ" false %}s*** tab, when hovering over an entry, three new options appear: the ***Copy username***, ***Copy password***, and ***Overview*** buttons.

## {{ en.WBEX }} tabs

### Matching tab

The extension opens on the ***Matching*** tab. This is where you will see the list of credentials available for the particular website you are on.

{% snippet, "badgeInfo" %}
For methods of retrieving your credentials, visit [Retrieve credentials with the {{ en.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).
{% endsnippet %}

![Matching tab](https://cdnweb.devolutions.net/docs/WEBX4061_2024_2.png "Matching tab")

At the top, you can use the ***Search*** bar to filter through all your credentials, not just those applicable to the website. You can also use the ***Refresh*** button next to it to update the search results or click on the ***Add Website*** button to open a new browser tab that allows you to manually add a website entry in {{ en.DVLS }} through the {{ en.WBEX }}.

{% snippet, "badgeInfo" %}For a complete list of the available fields in the ***Add website*** window, visit [Add website](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/add-website/). You can also consult our step-by-step guide on [how to add a website entry](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).{% endsnippet %}

### {% var, "VLT_MAJ" false %}s tab

{% snippet, "badgeHelp" %}When accessing the ***{{ en.VLT }}s*** tab for the first time, you need to select the {{ en.DVLS }} {{ en.VLT }}s you want to synchronize with the {{ en.WBEX }}. Learn more about it in [First login with the {{ en.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/first-login/).{% endsnippet %}

The ***{% var, "VLT_MAJ" false %}s*** tab allows you to browse through all your synchronized {{ en.VLT }}s for website entries only. You will first encounter the list of your synchronized {{ en.VLT }}s.

![Vaults tab](https://cdnweb.devolutions.net/docs/WEBX4062_2024_2.png "Vaults tab")

At the top, you can use the ***Filter*** bar to search through all your {{ en.VLT }}s for website entries.

You can access your {{ en.VLT }}s in two ways:

* To access a {{ en.VLT }} in {{ en.DVLS }}, click on the ***Open*** button next to a {{ en.VLT }} to open it in {{ en.DVLS }} in a new browser tab.
* To access a {{ en.VLT }} in the {{ en.WBEX }}, click on it and navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DVLS }}, except that only the paths leading to website entries will be displayed.

When navigating in the folders, the [***Add website***](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/add-website/) button will appear at the bottom of the ***Content area***. You can also use the search bar at the top to search in the specific location.

![Vault naviguation](https://cdnweb.devolutions.net/docs/WEBX4063_2024_2.png "Vault naviguation")

Back on the main view of the ***{{ en.VLT }}s*** tab, the ***Select {{ en.VLT }}s to Sync*** at the bottom of the ***Content area*** allows you to individually select the {{ en.DVLS }} {{ en.VLT }}s to synchronize with the {{ en.WBEX }}.

### Favorites tab

If you have entries marked as favorites, they will be displayed here in the ***Favorites*** tab.

![Favorites tab](https://cdnweb.devolutions.net/docs/WEBX4064_2024_2.png "Favorites tab")

You can search a particular entry using the ***Search In Favorites*** bar at the top.

### Recent tab

The last entries you used will be displayed in the ***Recent*** tab.

![Recent tab](https://cdnweb.devolutions.net/docs/WEBX4065_2024_2.png "Recent tab")

You can search a particular entry using the ***Filter*** bar at the top.

At the bottom, you can click on the ***Clear recent entries*** button to erase all current entries from this view.

### Password generator tab

The ***Password generator*** tab assists you in creating a strong and secure password adapted to your needs and to website requirements for your new account.

![Password generator tab](https://cdnweb.devolutions.net/docs/WEBX4066_2024_2.png "Password generator tab")

Your custom password is generated at the top of the ***Content area*** with a strenght indicator below it. You can copy it or generate a new one using the ***Copy to clipboard*** and ***Generate password*** buttons respectively. The ***Password lenght***, which is set to 12 by default, can also be adjusted.

In the ***General*** drop-down section, you are able to select the types of characters that your password must contain as well as the minimum number of characters of each type that must be included.

![General section](https://cdnweb.devolutions.net/docs/WEBX4015_2024_2.png "General section")

In the ***Advanced*** drop-down section, you are able to further customize your password by entering characters you want included in your password, followed by the minimum number of times they must appear. In the second field, you can also enter characters you want excluded from your password.

![Advanced section](https://cdnweb.devolutions.net/docs/WEBX4016_2024_2.png "Advanced section")

{% snippet, "badgeInfo" %}To learn how to use the ***Password generator*** when creating an account on a website, visit [Create an account for a website with the {{ en.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/create-account-website-workspace-browser-extension/).{% endsnippet %}

### Entry functionalities

No matter what tab you are in (except the ***Password generator*** and ***{% var, "VLT_MAJ" false %}s*** tab), when hovering over an entry, three new options appear: the ***Copy username***, ***Copy password***, and ***Overview*** buttons.

![Copy username, Copy password, and Overview options](https://cdnweb.devolutions.net/docs/WEBX4067_2024_2.png "Copy username, Copy password, and Overview options")

The ***Copy username*** and ***Copy password*** buttons copy the username/password of the entry to your clipboard.

The ***Overview*** button shows you the some of the entry's details as well as additional functionalities. The availability of information and functionalities depends on the type of entry and the information provided in the entry, although some of them are always available:

* ***Edit***/***Delete*** the entry or view its password with the vertical ellipsis button at the top right.
* Mark your entry as favorite by clicking on the ***Add to favorites*** icon next to the entry name. The entry will then show in the ***Favorites*** tab.
* View the location of your entry under the ***{{ en.VLT }}*** and ***Folder*** (if it is located under a folder) sections.
* View and access the ***URL*** associated to the entry.

Other information and functionalities will depend on what you provided when creating the entry (username, password, tags, description, etc.).

![Entry Overview](https://cdnweb.devolutions.net/docs/WEBX4068_2024_2.png "Entry Overview")