---
eleventyComputed:
  title: User specific settings list
  description: The User specific settings list feature will provide all entries that are overridden with user Specific settings.
---
The ***User specific settings list*** feature will provide all entries that are overridden with user ***Specific settings***. ***User specific settings list*** becomes ***Local specific settings list*** in certain data sources.
![User specific settings list dialog](https://cdnweb.devolutions.net/docs/RDMW0022_2024_2.png)
{% snippet, "badgeInfo" %}
This feature is only available on [Advanced data sources](/rdm/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

| OPTION | DESCRIPTION                                                                          |
|--------|--------------------------------------------------------------------------------------|
| Edit   | Edit the selected [User specific settings](/rdm/commands/edit/setting-overrides/).   |
| Delete | Delete the selected [User specific settings](/rdm/commands/edit/setting-overrides/). |
| Import | Import a list of user specific settings from a .rds file. As this file is encrypted using a mandatory password, you will have to provide the password to successfully import the content of the .rds file. |
| Export | Export a list of user specific settings into a .rds file. A password is required to encrypt the .rds file. ![Specific settings encryption](https://cdnweb.devolutions.net/docs/RDMW0023_2024_2.png) |
