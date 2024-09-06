---
_schema: default
eleventyComputed:
  title: Settings
---
Allow the user group to enable [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the {% var, "DVLS" false %} data source in {% var, "RDM" false %}. The data source also needs to be configured to permit offline mode. There are multiple modes available. ![User Groups - Settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8012.png)

## Settings

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p><em><strong>Disabled</strong></em></p></td><td><p>No offline cache allowed for the user group.</p></td></tr><tr><td><p><em><strong>Read-only</strong></em></p></td><td><p>A read-only cache. The user group will not be able to edit data in the data source. This mode is allowed for <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Advanced Data Sources</a> only.</p></td></tr><tr><td><p><em><strong>Read/Write</strong></em></p></td><td><p>An advanced cache, with change synchronization. This mode is allowed for <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Advanced Data Sources</a> only.</p></td></tr></tbody></table>