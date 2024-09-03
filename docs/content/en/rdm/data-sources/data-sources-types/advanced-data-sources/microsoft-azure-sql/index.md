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

![Microsoft Azure SQL - General](https://cdnweb.devolutions.net/docs/RDMW6087_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Name</p></td><td><p>Enter a name for the data source.</p></td></tr><tr><td><p>Host</p></td><td><p>Enter the server hostname or IP address.</p></td></tr><tr><td><p>Login mode</p></td><td><p>Specify the authentication mode to use. Select between:</p><ul><li><p><em><strong>Database login</strong></em></p></li><li><p><em><strong>Custom login</strong></em></p></li><li><p><em><strong>Active Directory Password</strong></em></p></li><li><p><em><strong>Active Directory Integrated</strong></em></p></li><li><p><em><strong>Active Directory Interactive (with MFA support)</strong></em></p></li></ul></td></tr><tr><td><p>Username</p></td><td><p>Enter the username to access the Azure SQL database.</p></td></tr><tr><td><p>Password</p></td><td><p>Enter the password to access the Azure SQL database.</p></td></tr><tr><td><p>Always ask password</p></td><td><p>Prompt for the password when a user connects to the data source.</p></td></tr><tr><td><p>Allow change username</p></td><td><p>Allow the username to be edited when connecting to the data source (only with <em><strong>Always ask password</strong></em> enabled).</p></td></tr><tr><td><p>Database</p></td><td><p>Enter the name of the Azure SQL database.</p></td></tr><tr><td><p>Test Database</p></td><td><p>Test the connection with the database to validate if the proper information has been provided.</p></td></tr></tbody></table>

&nbsp;

### Settings

![Microsoft Azure SQL - Settings Tab](https://cdnweb.devolutions.net/docs/RDMW6088_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Root filter</p></td><td><p>Enter the name of a root level folder to display only the entries contained in that folder.</p></td></tr><tr><td><p>Ping online method</p></td><td><p>Indicate the preferred ping online method. Select between:</p><ul><li><p>None</p></li><li><p>Ping</p></li><li><p>Port Scan</p></li></ul></td></tr><tr><td><p>Auto go offline</p></td><td><p>Use the data source in offline mode when the ping method does not respond.</p></td></tr></tbody></table>

&nbsp;

### {{ en.UVLT_MAJ }}

![Microsoft Azure SQL –  tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3416.png)

\| OPTION \| DESCRIPTION \| \|--------\|-------------\| \| Type   \| Select the type of [{{ en.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) to use. Select between:

* ***Default***: use the default {{ en.UVLT }}, which is stored in the database.
* ***None***: disable the {{ en.UVLT }} for all users.
* ***{{ en.DOD }}***: use a {{ en.DOD }} file (\*.dod) as a {{ en.UVLT }}.

\|

&nbsp;

### Upgrade

![Microsoft Azure SQL - Upgrade Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10377.png)

\| OPTION                \| DESCRIPTION \| \|-----------------------\|-------------\| \| Create Database       \| Create the database on the SQL server to use {{ en.RDM }}.                                     \| \| Update Database       \| Update the database on the SQL server, if required to use {{ en.RDM }}.                        \| \| Test Database         \| Test the connection with the database to validate if the proper information has been provided. \| \| Email Schema to Support \| Send your schema to our support team.                                                        \|

### VPN

Open a VPN to access your data prior to connecting to your Microsoft Azure SQL database. ![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2253.png)

### Advanced

![Microsoft Azure SQL - Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10370.png)

\| OPTION                           \| DESCRIPTION \| \|----------------------------------\|-------------\| \| Caching mode                     \| Determines how the entries will be reloaded in the data source. For more information, please consult [Caching](/rdm/windows/data-sources/caching/). \| \| Connection timeout               \| Set the delay of the connection timeout.                                              \| \| Command timeout                  \| Set the delay of the command timeout.                                                 \| \| Auto refresh                     \| Set the interval for the automatic refresh.                                           \| \| Prompt for offline mode on startup \| Ask to use the data source in offline mode when a user connects to the data source. \| \| Allow beta database upgrade      \| Allow beta upgrade of the database (when using a beta version of {{ en.RDM }}).       \| \| Manage Cache                     \| Manage the data source cache. On large data sources, caching is a must and will increase performance significantly. For more information, please consult [Manage Cache](/rdm/windows/data-sources/manage-cache/).                                                    \| \| More Settings                    \| Edit the connection string values directly.                                           \|