---
_schema: default
eleventyComputed:
  title: Microsoft Azure SQL
  description: >-
    With a Microsoft Azure SQL data source, {{ en.RDM }} uses the Microsoft
    cloud platform to save and manage entries.
---
With a Microsoft Azure SQL data source, {{ en.RDM }} uses the Microsoft cloud platform to save and manage entries.

The following features are also supported:

* Always on availability group
* Clustering
* Log shipping
* Database mirroring

## Minimum Requirement for Azure SQL Database for {{ en.RDM }}

Microsoft Azure SQL offers different service tier in its purchase model for DTUS. We recommend at minimum a Standard tier package S0 for 5 users and more. Visit their website for more information.

## Highlights

* Supports [User Management](/rdm/windows/commands/administration/management/user-management/) with a superior security model.
* Supports [Offline mode](/rdm/windows/data-sources/offline-mode/) for when the server or network is unavailable.
* Supports entry logs and attachments.

{% snippet, "badgeHelp" %}
Get more information on [Microsoft Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/).
{% endsnippet %}

{% snippet, "badgeWarning" %}
A proper database backup strategy should be implemented to prevent possible data loss.
{% endsnippet %}

## Configuration

Consult [Configure Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/) for more information on the configuration.

## Settings

### General

![Microsoft Azure SQL - General tab](https://cdnweb.devolutions.net/docs/RDMW6087_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Name</p></td><td><p>Enter a name for the data source.</p></td></tr><tr><td><p>Host</p></td><td><p>Enter the server hostname or IP address.</p></td></tr><tr><td><p>Login mode</p></td><td><p>Specify the authentication mode to use. Select between:</p><ul><li><p><em><strong>Database login</strong></em></p></li><li><p><em><strong>Custom login</strong></em></p></li><li><p><em><strong>Active Directory Password</strong></em></p></li><li><p><em><strong>Active Directory Integrated</strong></em></p></li><li><p><em><strong>Active Directory Interactive (with MFA support)</strong></em></p></li></ul></td></tr><tr><td><p>Username</p></td><td><p>Enter the username to access the Azure SQL database.</p></td></tr><tr><td><p>Password</p></td><td><p>Enter the password to access the Azure SQL database.</p></td></tr><tr><td><p>Always ask password</p></td><td><p>Prompt for the password when a user connects to the data source.</p></td></tr><tr><td><p>Allow change username</p></td><td><p>Allow the username to be edited when connecting to the data source (only with <em><strong>Always ask password</strong></em> enabled).</p></td></tr><tr><td><p>Database</p></td><td><p>Enter the name of the Azure SQL database.</p></td></tr><tr><td><p>Test Database</p></td><td><p>Test the connection with the database to validate if the proper information has been provided.</p></td></tr></tbody></table>

&nbsp;

### Settings

![Microsoft Azure SQL - Settings Tab](https://cdnweb.devolutions.net/docs/RDMW6088_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Root filter</p></td><td><p>Enter the name of a root level folder to display only the entries contained in that folder.</p></td></tr><tr><td><p>Ping online method</p></td><td><p>Indicate the preferred ping online method. Select between:</p><ul><li><p>None</p></li><li><p>Ping</p></li><li><p>Port Scan</p></li></ul></td></tr><tr><td><p>Auto go offline</p></td><td><p>Use the data source in offline mode when the ping method does not respond.</p></td></tr></tbody></table>

&nbsp;

### {{ en.UVLT_MAJ }}

![Microsoft Azure SQL – User vault tab](https://cdnweb.devolutions.net/docs/RDMW6089_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Type</p></td><td><p>Select the type of <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/">{% var, "UVLT" false %}</a> to use. Select between:</p><ul><li><p><em><strong>Default</strong></em>: use the default {% var, "UVLT" false %}, which is stored in the database.</p></li><li><p><em><strong>None</strong></em>: disable the {% var, "UVLT" false %} for all users.</p></li><li><p><em><strong>{% var, "DOD" false %}</strong></em>: use a <em><strong>{% var, "DOD" false %}</strong></em> (*.dod) as a {% var, "UVLT" false %}.</p></li></ul></td></tr></tbody></table>

&nbsp;

### Upgrade

![Microsoft Azure SQL - Upgrade Tab](https://cdnweb.devolutions.net/docs/RDMW6092_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Create Database</p></td><td><p>Create the database on the SQL server to use Remote Desktop Manager.</p></td></tr><tr><td><p>Update Database</p></td><td><p>Update the database on the SQL server, if required to use Remote Desktop Manager.</p></td></tr><tr><td><p>Test Database</p></td><td><p>Test the connection with the database to validate if the proper information has been provided.</p></td></tr><tr><td><p>Email Schema to Support</p></td><td><p>Send your schema to our support team.</p></td></tr></tbody></table>

###

### VPN

Open a VPN to access your data prior to connecting to your Microsoft Azure SQL database. ![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2253.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Type</p></td><td><p>Select between <em><strong>None</strong></em> or <em><strong>On first connect</strong></em>.</p></td></tr><tr><td><p>RDM File</p></td><td><p>Open a <em><strong>VPN entry type</strong></em> from a <em><strong>RDM file</strong></em> before connecting to the datasource.</p></td></tr><tr><td><p>Override credentials</p></td><td><p>Ovverride credentials such as <em><strong>Username, Domain</strong></em>, and <em><strong>Password</strong></em>.</p></td></tr></tbody></table>

### Advanced

![Microsoft Azure SQL - Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10370.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Caching mode</p></td><td><p>Determines how the entries will be reloaded in the data source. For more information, please consult <a href="https://docs.devolutions.net/rdm/windows/data-sources/caching/">Caching</a>.</p></td></tr><tr><td><p>Trust certificate </p></td><td><p>Set how the data source handles certificates.</p></td></tr><tr><td><p>Connection timeout</p></td><td><p>Set the delay of the connection timeout.</p></td></tr><tr><td><p>Command timeout</p></td><td><p>Set the delay of the command timeout.</p></td></tr><tr><td><p>Auto refresh</p></td><td><p>Set the interval for the automatic refresh.</p></td></tr><tr><td><p>Prompt for offline mode on startup</p></td><td><p>Ask to use the data source in offline mode when a user connects to the data source.</p></td></tr><tr><td><p>Allow beta database upgrade</p></td><td><p>Allow beta upgrade of the database (when using a beta version of Remote Desktop Manager).</p></td></tr><tr><td><p>Manage Cache</p></td><td><p>Manage the data source cache. On large data sources, caching is a must and will increase performance significantly. For more information, please consult <a href="https://docs.devolutions.net/rdm/windows/data-sources/manage-cache/">Manage Cache</a>.</p></td></tr><tr><td><p>More Settings</p></td><td><p>Edit the connection string values directly.</p></td></tr></tbody></table>