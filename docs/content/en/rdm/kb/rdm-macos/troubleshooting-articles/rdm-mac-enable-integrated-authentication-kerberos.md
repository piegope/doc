---
_schema: default
eleventyComputed:
  title: >-
    {{ en.RDMMAC }} cannot configure integrated security with Kerberos
    authentication
  description: >-
    {{ en.RDMMAC }} has built-in validation for SQL Server data source that
    requires the Username/Password fields to contain information.
---
{{ en.RDMMAC }} has built-in validation for the SQL Server data source that requires the ***Username/Password fields*** to be filled in before you can configure the ***Integrated Security (Active Directory) - Experimental*** setting.

### Steps

1. Enter the ***Name*** and ***Host***.
2. Fill the ***Username and password fields***. ![Fill the Username and password fields](https://cdnweb.devolutions.net/docs/RDMM6002_2024_2.png)
3. Select ***Integrated Security (Active Directory) - Experimental***. ![Select Integrated Security (Active Directory) - Experimental](https://cdnweb.devolutions.net/docs/RDMM6003_2024_2.png)
4. Click ***OK*** to save and exit the configuration window.