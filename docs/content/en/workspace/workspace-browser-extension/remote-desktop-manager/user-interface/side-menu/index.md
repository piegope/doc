---
_schema: default
eleventyComputed:
  title: Side menu
---
The ***Side menu*** tabs contain various {% var, "WBEX" false %} features. Each tab will display a different view in the ***Content area***.

When using the {% var, "WBEX" false %} with {% var, "RDM" false %}, the available tabs are the [***Matching***](#matching-tab) tab, the [***Password Generator***](#password-generator-tab) tab, and the [***About***](#about-tab) tab.

### Matching tab

The extension opens on the ***Matching*** tab. In it, there is a list of all the available credentials for the website currently visited.

{% snippet, "badgeInfo" %}For credential retrieval methods, visit [Retrieve credentials with the{% var, "WBEX" false %}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/retrieve-credentials/).{% endsnippet %}

![Matching tab](https://cdnweb.devolutions.net/docs/WEBX4013_2024_2.png "Matching tab")

At the top, the ***Filter*** bar is useful for to searching all the available credentials, not just those applicable to the current website. The ***Refresh*** button next to it updates the search results.

Located at top right corner of the ***Top menu*** , the ***Add website*** button opens a new browser tab to manually add a website entry in {% var, "RDM" false %} through the {% var, "WBEX" false %}.

{% snippet, "badgeInfo" %}For a complete list of the available fields in the ***Add website*** window, visit [Add Website](/rdm/windows/workspace-browser-extension/workspace-browser-extension-user-interface/side-menu/add-website/). Find a step-by-step guide on [how to add a website entry](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).{% endsnippet %}

### Password Generator tab

The ***Password generator*** tab assists you in creating a strong and secure password adapted to your needs and to website requirements for your new account. ![Password generator tab](https://cdnweb.devolutions.net/docs/WEBX4014_2024_2.png "Password generator tab")

Your custom password is generated at the top of the ***Content area*** with a strenght indicator below it. You can copy it or generate a new one using the ***Copy to clipboard*** and ***Generate password*** buttons respectively. The ***Password lenght***, which is set to 12 by default, can also be adjusted.

In the ***General*** drop-down section, you are able to select the types of characters that your password must contain as well as the minimum number of characters of each type that must be included. ![General section](https://cdnweb.devolutions.net/docs/WEBX4015_2024_2.png "General section")

In the ***Advanced*** drop-down section, you are able to further customize your password by entering characters you want included in your password, followed by the minimum number of times they must appear. In the second field, you can also enter characters you want excluded from your password. ![Advanced section](https://cdnweb.devolutions.net/docs/WEBX4016_2024_2.png "Advanced section")

{% snippet, "badgeInfo" %}To learn how to use the ***Password generator*** when creating an account on a website, visit [Create an account for a website with the {% var, "WBEX" false %}](/workspace/workspace-browser-extension/remote-desktop-manager/using-workspace-browser-extension/create-account-website/).{% endsnippet %}

### About tab

The ***About*** tab has some useful links and information, namely a link to our [{% var, "DFORUM" false %}](), a link to our [{% var, "RDM" false %} documentation (Online Help)](), and the current version of the {% var, "WBEX" false %}.

![About tab](https://cdnweb.devolutions.net/docs/WEBX4017_2024_2.png "About tab")