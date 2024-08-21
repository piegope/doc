---
_schema: default
eleventyComputed:
  title: First login to {{ en.RDMWIN }} with the {{ en.WBEX }}
---
Follow these steps to connect {% var, "RDMWIN" false %} to the {% var, "WBEX" false %}:

1. Open {% var, "RDM" false %} and keep it running, then click on the {% var, "WBEX" false %} icon in your browser.
2. Choose {% var, "RDM" false %} in the list.

   ![Application list](https://cdnweb.devolutions.net/docs/WEBX4081_2024_2.png "Application list")

3. Enter a name for this association in the text box.

   ![Association with Remote Desktop Manager](https://cdnweb.devolutions.net/docs/WEBX4005_2024_2.png "Association with Remote Desktop Manager")<br>

4. Click on ***Associate with*** **{% var, "RDM" false %}**.
5. Click ***Yes*** in **{% var, "RDM" false %}** to accept the association request. ![Association Request](https://cdnweb.devolutions.net/docs/WEBX4006_2024_2.png "Association Request")
6. If you click on the icon in your web browser, you can validate that the {% var, "WBEX" false %} is now paired to your **{% var, "RDM" false %}**. ![Remote Desktop Manager successfully associated](https://cdnweb.devolutions.net/docs/WEBX4007_2024_2.png "Remote Desktop Manager successfully associated") {% snippet, "badgeInfo" %}
            Note that, while {{ en.RDM }} can handle multiple associations (e.g., multiple browsers), the {{ en.WBEX }} can only be paired to a single instance of {{ en.RDM }} at any time.
            {% endsnippet %}