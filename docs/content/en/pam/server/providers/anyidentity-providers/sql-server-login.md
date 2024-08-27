---
eleventyComputed:
  title: SQL Server login
  description: This SQL Server login {{ en.ANYID }} provider is designed to integrate with the {{ en.DPAM }} module to manage SQL Server login credentials.
---
This SQL Server login {{ en.ANYID }} provider is designed to integrate with the {{ en.DPAM }} module to manage SQL Server login credentials. It enables automated account discovery and password rotation for SQL Server logins.

This provider offers the following capabilities:

* **Account discovery**: Automated enumeration of SQL Server login accounts.
* **Heartbeat**: Validation that the passwords stored in {{ en.DVLS }} match those configured on the SQL Server instance.
* **Password rotation**: Automated updating of SQL Server login passwords in accordance with policy or on-demand.

The pre-built template for this {{ en.ANYID }} provider can be found [on GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Providers/sql_server_login).