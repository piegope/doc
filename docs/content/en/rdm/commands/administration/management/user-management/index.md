---
_schema: default
eleventyComputed:
  title: User management
  description: >-
    The User Management allows to create and manage users and their privileges.
    You can set the default privileges on the user type in Data Source Settings
    (System Settings).
---
{% youtube 'VXlN3PrDwiU' %}

Through ***User Management***, administrators can create and manage users and their privileges. They can, for example, set the default permissions in ***System settings*** – ***Default permissions***, under {{ variables.VLT.en }} ***management***. {{ en.RDM }} offers advanced user rights management to restrict access to entries. Note that the availability of some features depends on the active data source.

{% snippet, "badgeInfo" %}This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).

A user can be created using default security (specify the password) or [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/). Not all [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) support the use of [Integrated Security](/rdm/windows/commands/administration/management/user-management/integrated-security/).{% endsnippet %}

{% snippet, "badgeNotice" %}Only administrators of both {{ en.RDM }} and the underlying database can create users and assign rights.{% endsnippet %}

## Manage Users

To create, edit, delete, rename, or otherwise manage users, use the buttons in the toolbar located in ***Users*** – ***Users*** .

![User and Security Management - Toolbar](https://cdnweb.devolutions.net/docs/RDMW4091_2024_2.png "User and Security Management - Toolbar")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Add user</strong></p></td><td><p>Opens the <em><strong>User management</strong></em> window to create a new user.</p></td></tr><tr><td><p><strong>Duplicate user</strong></p></td><td><p>Copies the selected user along with his or her informations.</p></td></tr><tr><td><p><strong>Edit user</strong></p></td><td><p>Opens the <em><strong>User management</strong></em> window to modify the selected user.</p></td></tr><tr><td><p><strong>Assign license</strong></p></td><td><p>Opens the <em><strong>License</strong></em> window with which to assign licenses to users.</p></td></tr><tr><td><p><strong>Delete user</strong></p></td><td><p>Deletes the selected user.</p></td></tr><tr><td><p><strong>Rename login</strong></p></td><td><p>Opens a window to rename the selected user.</p></td></tr><tr><td><p><strong>Change your password</strong></p></td><td><p>Opens a window asking for a new password (password generator included) for the selected user.</p></td></tr><tr><td><p><strong>Remove MFA</strong></p></td><td><p>Removes multifacteur authentication from the selected user.</p></td></tr><tr><td><p><strong>Fix SQL login</strong></p></td><td><p>Checks if a login exists, if the user exists in the data source, and if the user is mapped. If these conditions are not met, {{ en.RDM }} automatically resolves these issues.</p></td></tr><tr><td><p><strong>User activity report</strong> </p></td><td><p>Opens the <em><strong>User activity report</strong></em> window, which lets administrators create a customized report spanning specific dates for the selected user.</p></td></tr><tr><td><p><strong>SQL permission report</strong></p></td><td><p>Open the SQL permission report window, which lets administrators inspect the selected user's SQL permissions.</p></td></tr><tr><td><p><strong>Refresh</strong></p></td><td><p>Refreshes the <em><strong>User and security management</strong></em> window to show recent changes.</p></td></tr></tbody></table>

## User Management Settings

### General

![User Management - General](https://cdnweb.devolutions.net/docs/RDMW4092_2024_2.png "User Management - General")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Authentication type</strong></p></td><td><p>Select the user's authentication type between: </p><ul><li><p>Custom (Devolutions): create a user specific to {{ en.RDM }} without creating an SQL login.</p></li><li><p>Database (SQL Server): authenticate using the SQL login from your SQL Server. </p></li></ul></td></tr><tr><td><p><strong>Username</strong></p></td><td><p>Enter the username for the user. When using <a href="/rdm/windows/commands/administration/management/user-management/integrated-security/">Integrated Security</a>, the user must be selected from the directory.</p></td></tr><tr><td><p><strong>Password</strong></p></td><td><p>Enter the user's password. This field is disabled when using <a href="/rdm/windows/commands/administration/management/user-management/integrated-security/">Integrated Security</a>.</p></td></tr><tr><td><p><strong>User type</strong></p></td><td><p>Select the type of user to create, select between: </p><ul><li><p><em><strong>Administrator:</strong></em> Grant full administrative rights to the user. </p></li><li><p><em><strong>Read only user:</strong></em> Grant only the view access to the user. </p></li><li><p><em><strong>Restricted user:</strong></em> Select which rights to grant to the user. </p></li><li><p><em><strong>User:</strong></em> Grant all basic rights to the user (Add, Edit, Delete).</p></li></ul><p><br />For more information, see <a href="/rdm/windows/commands/administration/management/user-management/user-types/">User Types</a>.</p></td></tr><tr><td><p><strong>User license type</strong></p></td><td><p>Select the license type of the user between: </p><ul><li><p><em><strong>Default</strong></em> </p></li><li><p><em><strong>Connection management</strong></em></p></li><li><p><em><strong>Password management</strong></em></p></li></ul></td></tr><tr><td><p><strong>User interface profile</strong></p></td><td><p>Select the <a href="/rdm/windows/user-interface/customization/usage-profiles/">user interface profile</a>. Select between: <br /> </p><ul><li><p><em><strong>Default</strong></em></p></li><li><p><em><strong>IT professional</strong></em></p></li><li><p><em><strong>Business user</strong></em></p></li></ul><p><br />Note that the user interface profile can only be set when creating a user. Once the user is created, you cannot edit this setting.</p></td></tr><tr><td><p><strong>First name</strong></p></td><td><p>Enter the first name of the user.</p></td></tr><tr><td><p><strong>Last name</strong></p></td><td><p>Enter the lat name of the user.</p></td></tr><tr><td><p><strong>Email</strong></p></td><td><p>Insert the user's email address.</p></td></tr></tbody></table>

### Information

The ***Information*** section allows to store information regarding the users, such as their name, address, and more. The Information section is divided in three sub-sections: ***Details, Address, Phone***.

### User Groups

Assign user groups to the user by checking the ***Is member*** box. Read [User Groups Management](/rdm/windows/commands/administration/management/user-groups-management/) for more information on this topic.

![User Management - User Groups](https://cdnweb.devolutions.net/docs/RDMW4093_2024_2.png "User Management - User Groups")

### {{ variables.VLT_MAJ.en }}s

Select which repositories the user can access. For more information read the [{{ en.VLT }}s overview](https://docs.devolutions.net/rdm/commands/administration/management/vaults-overview/) topic.

![User Management - Vaults](https://cdnweb.devolutions.net/docs/RDMW4095_2024_2.png "User Management - Vaults")

### Application access

The application access section allows administrators to restrict access to {{ en.RDM }} or the [{{ en.WBEX }}](/workspace/workspace-browser-extension/).

![User Management - Application Access](https://cdnweb.devolutions.net/docs/RDMW4096_2024_2.png "User Management - Application Access")

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>{{ en.RDM }}</strong></p></td><td><p>Select if the user can access the data source from {{ en.RDM }}.</p></td></tr><tr><td><p><a href="/workspace/workspace-browser-extension/"><strong>{{ en.WBEX }}</strong></a></p></td><td><p>Select if the user can access the data source from the {{ en.WBEX }}.</p></td></tr></tbody></table>

### Settings

![User Management - Settings](https://cdnweb.devolutions.net/docs/RDMW4097_2024_2.png "User Management - Settings")

In the ***Settings*** section, administratos can allow the user to enable the [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the data sources. This also hinges on the data source's configuration. See the available modes below:

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Disabled</strong></p></td><td><p>No offline cache allowed for the user.</p></td></tr><tr><td><p><strong>Cache only</strong></p></td><td><p>Allow to save a cache of the data source but not the offline mode.</p></td></tr><tr><td><p><strong>Read-only</strong></p></td><td><p>A read-only cache. The user will not be able to edit data in the data source. This mode is allowed for <a href="/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Advanced Data Sources</a> only.</p></td></tr><tr><td><p><strong>Read/Write</strong></p></td><td><p>An advanced cache, with change synchronization. This mode is allowed for <a href="/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Advanced Data Sources</a> only.</p></td></tr></tbody></table>

###

&nbsp;