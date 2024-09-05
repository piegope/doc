---
_schema: default
eleventyComputed:
  title: Settings
  status: Topic available in German language
---
The {{ en.WBEX }} settings can be accessed via the ***Settings*** button in the browser extension window regardless of the Devolutions application being used with the {{ en.WBEX }}.

![Settings Button](https://cdnweb.devolutions.net/docs/WEBX4000_2024_2.png "Settings Button")

The ***Settings*** are separated in two categories: [***Configuration***](#configuration) and [***Spaces***](#spaces).

![Settings](https://cdnweb.devolutions.net/docs/WEBX4001_2024_2.png "Settings")

### Configuration

#### General

The ***General*** settings are about the user interface and interaction.

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Show icon in fields</strong></p></td><td><p>Show the {{ en.WBEX }} icon, along with the number of credentials</p></td></tr><tr><td><p><strong>Show save credentials dialog</strong></p></td><td><p>Show the prompt to save credentials when saving credentials on new login.</p></td></tr><tr><td><p><strong>Show Passkey prompt</strong></p></td><td><p>Show the prompt to enter Passkey.</p></td></tr><tr><td><p><strong>Show context menu option</strong></p></td><td><p>Show the context menu options.</p></td></tr><tr><td><p><strong>Color the filled fields</strong></p></td><td><p>Apply a custom color the filled credentials fields.</p></td></tr><tr><td><p><strong>Theme</strong></p></td><td><p>Choose a {{ en.WBEX }} theme between: </p><ul><li><p>Default</p></li><li><p>Light</p></li><li><p>Dark</p></li></ul></td></tr></tbody></table>

#### Never list

The ***Never list*** displays the list of locally added websites to which the user will never be prompted to save their credentials.

* Types are ***Never add site***, ***Never Autofill***, ***Never do anything***, and ***Never show icons in fields***.
* Matching options are ***Base domain***, ***Host***, ***Starts with***, ***RegEx***, and ***Exact***.

#### Import/Export settings

The ***Import/Export Settings*** allow to save and transfer the currently set preferred settings.

* Import settings from other browsers or users.
* Choose to export the {{ en.WBEX }} ***Settings, Password Generator*** templates, and the ***Never List***.

### Spaces

The ***Spaces*** settings are used to customize the {{ en.WBEX }} interactions with [{{ en.RDM }}](#remote-desktop-manager), [{{ en.DVLS }}](#devolutions-server), and [{{ en.DHUBB }} or {{ en.DHUBP }}](#devolutions-hub-business-or-devolutions-hub-personal).

### {{ en.RDM }}

<table><thead><tr><th><p>GENERAL TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Enable {{ en.RDM }} app</strong></p></td><td><p>Retrieve entries from {{ en.RDM }} when the application is open.</p></td></tr><tr><td><p><strong>Use default port (19443)</strong></p></td><td><p>Communicate with the default port 19443 between the application.</p></td></tr><tr><td><p><strong>Add entry in {{ en.UVLT }} by default</strong></p></td><td><p>Save new entries in the {{ en.UVLT }}.</p></td></tr><tr><td><p><strong>Destination folder</strong></p></td><td><p>Choose the folder where the credentials are stored in the {{ en.VLT }}.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ACTIONS TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Automatically retrieve credentials on page load</strong></p></td><td><p>The {{ en.WBEX }} automatically searches for credentials in the data source when connecting to a website. If disabled, click on the {{ en.WBEX }} icon to manually retrieve credentials.</p></td></tr><tr><td><p><strong>Automatically fill in credentials on load</strong></p></td><td><p>Automatically fill the credentials when loading a web page.</p></td></tr><tr><td><p><strong>Automatically submit the form after filling</strong></p></td><td><p>Automatically submit the credentials when the fields are filled.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ADVANCED TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Application key</strong></p></td><td><p>Secure the communication with an application key by using the same code in {{ en.RDM }} and the {{ en.WBEX }}.<br />Navigate to <em><strong>File</strong></em> – <em><strong>Settings</strong></em> – <em><strong>Browser Extensions</strong></em> in {{ en.RDM }} to set the application key.</p></td></tr><tr><td><p><strong>Enable native messaging</strong></p></td><td><p>Exchange messages with a native application installed on the user's computer.</p></td></tr><tr><td><p><strong>Use legacy API</strong></p></td><td><p>Use the old browser extension API for compatibility with older versions of {{ en.RDM }}.</p></td></tr></tbody></table>

### {{ en.DVLS }}

<table><thead><tr><th><p>GENERAL TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Enable {{ en.DVLS }}</strong></p></td><td><p>Retrieve entries from {{ en.DVLS }}.</p></td></tr><tr><td><p><strong>Destination {% var, "VLT" false %}</strong></p></td><td><p>Choose the {% var, "VLT" false %} where the credentials are stored.</p></td></tr><tr><td><p><strong>Destination folder</strong></p></td><td><p>Choose the folder where the credentials are stored in the {{ en.VLT }}.</p></td></tr><tr><td><p><strong>Server URL</strong></p></td><td><p>Enter the URL of the {{ en.DVLS }} instance to connect to.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ACTIONS TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Automatically retrieve credentials on page load</strong></p></td><td><p>The {{ en.WBEX }} automatically searches for credentials in the data source when connecting to a website. <br /> <br /> If disabled, click on the {{ en.WBEX }} icon to manually retrieve credentials.</p></td></tr><tr><td><p><strong>Automatically fill in credentials on load</strong></p></td><td><p>Automatically fill the credentials when loading a web page.</p></td></tr><tr><td><p><strong>Automatically submit the form after filling</strong></p></td><td><p>Automatically submit the credentials when the fields are filled.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ADVANCED TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Default compare type</strong></p></td><td><p>Set a default comparing option type between <em><strong>Base domain</strong></em>, <em><strong>Host</strong></em>, <em><strong>Starts with</strong></em>, <em><strong>RegEx</strong></em>, <em><strong>Exact</strong></em>, and <em><strong>Never</strong></em>.</p></td></tr><tr><td><p><strong>Sync all available {{ en.VLT }}s</strong></p></td><td><p>Enable to synchronize all the available {{ en.VLT }}s from {{ en.DVLS }}.</p></td></tr></tbody></table>

### {{ en.DHUBB }} and {{ en.DHUBP }}

<table><thead><tr><th><p>GENERAL TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Enable {{ en.DHUBB }}/Personal</strong></p></td><td><p>Retrieve entries from {{ en.DHUB }}.</p></td></tr><tr><td><p><strong>Server URL (available with {{ en.DHUBB }} only)</strong></p></td><td><p>Enter the URL of the {{ en.DHUBB }} instance to connect to.</p></td></tr><tr><td><p><strong>Username</strong></p></td><td><p>Enter a username to connect to {{ en.DHUB }} with.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ACTIONS TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Automatically fill in credentials on load</strong></p></td><td><p>Automatically fill the credentials when loading a web page.</p></td></tr><tr><td><p><strong>Automatically submit the form after filling</strong></p></td><td><p>Automatically submit the credentials when the fields are filled.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ADVANCED TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>{{ en.DA }} login</strong></p></td><td><p>Set the {{ en.DA }}'s login URL.</p></td></tr><tr><td><p><strong>Show Favicon</strong></p></td><td><p>Display the {{ en.WBEX }} favicon.</p></td></tr><tr><td><p><strong>{{ en.WBEX }}</strong></p></td><td><p>Enable or disable the {{ en.WBEX }} with {{ en.DHUB }}.</p></td></tr><tr><td><p><strong>Default compare type</strong></p></td><td><p>Set a default comparing option type between <em><strong>Base domain</strong></em>, <em><strong>Host</strong></em>, <em><strong>Starts with</strong></em>, <em><strong>RegEx</strong></em>, <em><strong>Exact</strong></em>, and <em><strong>Never</strong></em>.</p></td></tr><tr><td><p><strong>Sync all available {{ en.VLT }}s (available with {{ en.DHUBB }} only)</strong></p></td><td><p>Enable to synchronize all the available {{ en.VLT }}s from {{ en.DHUBB }}.</p></td></tr></tbody></table>