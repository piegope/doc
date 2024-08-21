---
_schema: default
eleventyComputed:
  title: IT asset management in {{ en.RDM }}
  description: How to use asset management in {{ en.RDM }}.
---
### Asset

The ***Asset*** section of a {% var, "RDM" false %} entry is used to manage and document detailed information about ***IT assets***, such as a computer, server, or other hardware.

1. Right-click on an entry and select ***Properties***.
2. Go to ***View*** - ***Asset***.
3. Enter the information.
4. Click ***Update*** to save the changes and close the window.
5. In the entry ***Dashboard***, select the ***Asset*** tab to view the information.

![Asset tab](https://cdnweb.devolutions.net/docs/RDMW6082_2024_2.png "Asset tab")

### IT asset management

The ***IT Asset Management*** feature can be used to link an asset manager (e.g., BlueTally, [Lansweeper](/rdm/kb/rdm-windows/how-to-articles/lansweeper/)) through an entry's properties. {% snippet, "badgeInfo" %}Only the ***Session***, ***Remote Management***, ***Miscellaneous***, ***VPN***, ***Synchronizer*** and ***Template*** entry types support this feature for now. The [***IT Asset Management entries***](https://docs.devolutions.net/rdm/kb/rdm-windows/knowledge-base/it-asset-entry/) work differently from the feature.{% endsnippet %}

1. Right-click on an entry and select ***Properties***.
2. Go to ***View*** – ***IT Asset Management***.
3. Select a ***Service type*** in the dropdown list.
4. Input the URL to a specific asset. ![IT Asset Management](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0058.png)
5. Click ***OK*** to save the changes and close the window.
6. In the ***Dashboard***, select the ***IT Asset Management*** tab. {% snippet, "badgeInfo" %}
                     The tab will be named according to what was written in the ***IT asset management title field***. If the field is left empty ***BlueTally*** will show (if this service was chosen), or show as ***IT Asset Management***.
                     {% endsnippet %}

![IT Asset Management tab](https://cdnweb.devolutions.net/docs/RDMW6080_2024_2.png "IT Asset Management tab")

7\. Log in to that service.