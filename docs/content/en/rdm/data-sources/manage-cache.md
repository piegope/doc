---
_schema: default
eleventyComputed:
  title: Manage cache
  description: >-
    This option allows you to manage your cache which decides how the client
    will re-load entries when changes are detected. On large data sources
    caching is a must and will increase performance significantly.
---
This option allows you to manage your cache which decides how the client will re-load entries when changes are detected. On large data sources caching is a must and will increase performance significantly.

To manage caches, go to ***Settings***  –  ***Data sources*** – ***Advanced*** – ***Manage Cache***.

{% snippet, "badgeNotice" %}
This feature is only available when the offline engine is set to use SQLite. We are phasing out this engine because of multiple issues reported by customers. We recommend you use MCDFv2.
{% endsnippet %}

{% snippet, "badgeInfo" %}
The Manage Cache options should usually only be used upon request from our Support Team when experiencing cache issue.
{% endsnippet %}

## Settings

{% snippet, "badgeInfo" %}
The Manage Cache options will only be available when using an SQLite cache.
{% endsnippet %}

![Manage Cache](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10013.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Clear output</p></td><td><p>Clear the output window.</p></td></tr><tr><td><p>Analyze</p></td><td><p>Analyze will generate a report of everything that is contained in the cache. It will read the offline data and perform a read/write test to verify if the offline file is valid.</p></td></tr><tr><td><p>Vacuum</p></td><td><p>This will run an SQLite command to reduce your cache size. The Vacuum should only be used after trying to execute a Repair of your cache. If the repair has not solved your issue running a Vacuum will usually solve issues when dealing with a corrupted cache.</p></td></tr><tr><td><p>Repair</p></td><td><p>The repair will run four different SQLite commands to repair a corrupted cache: </p><ul><li><p>PRAGMA integrigy_check</p></li><li><p>REINDEX DatabaseInfo</p></li><li><p>REINDEX Connections</p></li><li><p>REINDEX Properties</p></li></ul></td></tr></tbody></table>