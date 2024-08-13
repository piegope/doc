---
_schema: default
eleventyComputed:
  title: Settings
  status: Topic available in German language
---
The {{ en.WBEX }} settings can be accessed via the ***Settings*** button in the browser extension window regardless of which Devolutions application you are using with the {{ en.WBEX }}.

![Settings Button](https://cdnweb.devolutions.net/docs/WEBX4000_2024_2.png "Settings Button")

The ***Settings*** are separated in two categories: [***Configuration***](#configuration) and [***Spaces***](#spaces).

![Settings](https://cdnweb.devolutions.net/docs/WEBX4001_2024_2.png "Settings")

### Configuration

The ***General*** settings are about the user interface and interaction.

* ***General*** tab
  * Show the {{ en.WBEX }} icon in the credentials fields.
  * Show the prompt when saving credentials on new login.
  * Show the context menu options.
  * Color the fields that are filled with the {{ en.WBEX }}.
  * Set the color ***Theme*** of the application.
* ***Advanced*** tab
  * Disable the analytics telemetry.
  * Enable the Beta versions of the {{ en.WBEX }}.

The ***Never List*** displays the list of locally added websites to which the user will never be prompted to save their credentials.

* Types are ***Never add site***, ***Never Autofill***, ***Never do anything***, and ***Never show icons in fields***.
* Matching options are ***Base domain***, ***Host***, ***Starts with***, ***RegEx***, and ***Exact***.

The ***Import/Export Settings*** allow to save and transfer your currently set preferred settings.

* Import settings from other browsers or users.
* Choose to export the {{ en.WBEX }} ***Settings, Password Generator*** templates, and the ***Never List***.

### Spaces

The ***Data sources*** settings are used to customize the {{ en.WBEX }} interactions with [{{ en.RDM }}](#remote-desktop-manager), [{{ en.DVLS }}](#devolutions-server), and [{{ en.DHUBB }} or {{ en.DHUBP }}](#devolutions-hub-business-or-devolutions-hub-personal).

### {{ en.RDM }}

<table><thead><tr><th><p>GENERAL TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Enable {{ en.RDM }} app</p></td><td><p>Retrieve entries from {{ en.RDM }} when the application is open.</p></td></tr><tr><td><p>Use default port (19443)</p></td><td><p>Communicate with the default port 19443 between the application.</p></td></tr><tr><td><p>Add entry in {{ en.UVLT }} by default</p></td><td><p>Save new entries in the {{ en.UVLT }}.</p></td></tr><tr><td><p>Destination folder</p></td><td><p>Choose the folder where the credentials are stored in the {{ en.VLT }}.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ACTIONS TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Automatically retrieve credentials on page load</p></td><td><p>The {{ en.WBEX }} automatically searches for credentials in the data source when connecting to a website. If disabled, click on the {{ en.WBEX }} icon to manually retrieve credentials.</p></td></tr><tr><td><p>Automatically fill in credentials on load</p></td><td><p>Automatically fill the credentials when loading a web page.</p></td></tr><tr><td><p>Automatically submit the form after filling</p></td><td><p>Automatically submit the credentials when the fields are filled.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ADVANCED TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Application key</p></td><td><p>Secure the communication with an application key by using the same code in {{ en.RDM }} and the {{ en.WBEX }}.<br />Navigate to <em><strong>File</strong></em> – <em><strong>Settings</strong></em> – <em><strong>Browser Extensions</strong></em> in {{ en.RDM }} to set the application key.</p></td></tr><tr><td><p>Enable native messaging</p></td><td><p>Exchange messages with a native application installed on the user's computer.</p></td></tr><tr><td><p>Use legacy API</p></td><td><p>Use the old browser extension API for compatibility with older versions of {{ en.RDM }}.</p></td></tr></tbody></table>

### {{ en.DVLS }}

<table><thead><tr><th><p>GENERAL TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Enable {{ en.DVLS }}</p></td><td><p>Retrieve entries from {{ en.DVLS }}.</p></td></tr><tr><td><p>Destination folder</p></td><td><p>Choose the folder where the credentials are stored in the {{ en.VLT }}.</p></td></tr><tr><td><p>Server URL</p></td><td><p>Enter the URL of the {{ en.DVLS }} instance to connect to.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ACTIONS TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Automatically retrieve credentials on page load</p></td><td><p>The {{ en.WBEX }} automatically searches for credentials in the data source when connecting to a website. <br /> <br /> If disabled, click on the {{ en.WBEX }} icon to manually retrieve credentials.</p></td></tr><tr><td><p>Automatically fill in credentials on load</p></td><td><p>Automatically fill the credentials when loading a web page.</p></td></tr><tr><td><p>Automatically submit the form after filling</p></td><td><p>Automatically submit the credentials when the fields are filled.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ADVANCED TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Default compare type</p></td><td><p>Set a default comparing option type between <em><strong>Base domain</strong></em>, <em><strong>Host</strong></em>, <em><strong>Starts with</strong></em>, <em><strong>RegEx</strong></em>, <em><strong>Exact</strong></em>, and <em><strong>Never</strong></em>.</p></td></tr><tr><td><p>Sync all available {{ en.VLT }}s</p></td><td><p>Enable to synchronize all the available {{ en.VLT }}s from {{ en.DVLS }}.</p></td></tr></tbody></table>

### {{ en.DHUBB }} and {{ en.DHUBP }}

<table><thead><tr><th><p>GENERAL TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Enable {{ en.DHUBB }}/Personal</p></td><td><p>Retrieve entries from {{ en.DHUB }}.</p></td></tr><tr><td><p>Server URL (available with {{ en.DHUBB }} only)</p></td><td><p>Enter the URL of the {{ en.DHUBB }} instance to connect to.</p></td></tr><tr><td><p>Username</p></td><td><p>Enter a username to connect to {{ en.DHUB }} with.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ACTIONS TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Automatically fill in credentials on load</p></td><td><p>Automatically fill the credentials when loading a web page.</p></td></tr><tr><td><p>Automatically submit the form after filling</p></td><td><p>Automatically submit the credentials when the fields are filled.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ADVANCED TAB</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>{{ en.DA }} login</p></td><td><p>Set your {{ en.DA }} login URL.</p></td></tr><tr><td><p>Show Favicon</p></td><td><p>Display the {{ en.WBEX }} favicon.</p></td></tr><tr><td><p>{{ en.WBEX }}</p></td><td><p>Enable or disable the {{ en.WBEX }} with {{ en.DHUB }}.</p></td></tr><tr><td><p>Default compare type</p></td><td><p>Set a default comparing option type between <em><strong>Base domain</strong></em>, <em><strong>Host</strong></em>, <em><strong>Starts with</strong></em>, <em><strong>RegEx</strong></em>, <em><strong>Exact</strong></em>, and <em><strong>Never</strong></em>.</p></td></tr><tr><td><p>Sync all available {{ en.VLT }}s (available with {{ en.DHUBB }} only)</p></td><td><p>Enable to synchronize all the available {{ en.VLT }}s from {{ en.DHUBB }}.</p></td></tr></tbody></table>