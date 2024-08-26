---
_schema: default
eleventyComputed:
  title: Manage custom variables
  description: >-
    {{ en.RDM }} has lists of all custom variables which can be managed in two
    different locations depending on their intended use.
---
{{ en.RDM }} has lists of all custom variables, which can be created, modified, or deleted in three different locations depending on their intended use.

1\. In ***File*** – ***Settings*** – ***Applications*** – ***Custom Variables***: each custom variable requires at least a ***Name*** and a ***Value***. These are user-specific and can be used in all data sources.

![User-specific local custom variables](https://cdnweb.devolutions.net/docs/RDMW4008_2024_1.png)

2\. In ***Administration*** – ***{{ en.VLT_MAJ }} Settings*** – ***View*** – ***Variables***: each custom variable requires at least a ***Name***, a ***Value***, and a ***Description***. All users that have access to the ***{{ en.VLT_MAJ }} Settings*** may see and use them, but they can only be used in that specific {{ en.VLT }}.

![-specific custom variables](https://cdnweb.devolutions.net/docs/RDMW4009_2024_1.png)

3\. In ***Administration*** – ***System settings*** – ***Common*** – ***Custom variables***: each custom variable requires at least a ***Name***, a ***Value***, and a ***Description***. All users that have access to the ***{{ en.VLT_MAJ }} Settings*** may see and use them, but they can only be used in the specific data source.

![Data source custom variables](https://cdnweb.devolutions.net/docs/DVLS4053_2024_2.png "Data source custom variables")

{% snippet, "badgeHelp" %}
Custom variables will also appear in the ***Custom Variables*** subsection located under ***General*** in the ***Entry Variables*** window of the entry ***Properties***, as shown in [Access and manage variables](/rdm/kb/rdm-windows/knowledge-base/access-manage-rdm-variables/).
{% endsnippet %}