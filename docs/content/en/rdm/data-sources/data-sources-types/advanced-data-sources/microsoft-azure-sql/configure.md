---
_schema: default
eleventyComputed:
  title: Configure Azure SQL
---
1. Make sure that you have a valid Microsoft Azure SQL subscription to be able to create your database.
2. Follow the steps in [Create a data source](/rdm/windows/data-sources/create-new-data-source/). On ***Step 4***, after having configured the connection settings but before testing the server or otherwise verifying the connection, continue with the steps below.
3. Select the ***Upgrade*** tab and click the ***Create Database*** button. If the database is already created on the Microsoft Azure SQL Server, click the ***Update Database*** button to add the appropriate tables to the database. ![Upgrade Tab](https://cdnweb.devolutions.net/docs/RDMW6092_2024_2.png)
4. Once the database is created, create an administrator account for the database via the ***Administration – User Management*** menu. {% snippet, "badgeInfo" %}
      If the database is created using a system administrator (example: SA), we recommend to keep this user only for the database creation and the [database upgrade](/rdm/windows/installation/database-upgrade/). A {{ en.RDM }} administrator account must be created first. Then, regular users are created with this administrator account.
      {% endsnippet %}

![Create a  Administrator Account](https://cdnweb.devolutions.net/docs/RDMW6094_2024_2.png)

5. Connect on the Microsoft Azure SQL database with the {{ en.RDM }} administrator account. To do so, edit the data source used to create the database and change the login information for the administrator account that you have created. ![Connection to the Database with the  Administrator Account](https://cdnweb.devolutions.net/docs/RDMW6095_2024_2.png)

The Microsoft Azure SQL data source is now correctly configured.