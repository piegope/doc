---
_schema: default
eleventyComputed:
  title: Configure a Splashtop dashboard entry
  description:
  status:
  keywords:
---
The setup for the Splashtop dashboard entry in {{ variables.RDM.null }} has a few requirements.

1. Go to [Splashtop](https://my.splashtop.com/signin).
2. Set the API token by clicking **Management - Settings**.
3. API - Create API token.
4. Set a Name and click Save. The default setup.
5. Activate the API token.
6. Go to Computers - Add Computer
7. Click on **Copy Link** and paste it in the browser of the other computers you want to add.
8. Download and install the **Splashtop\_Streamer** from the link. This should automatically add the computer in your Splashtop account.
9. Open {{ variables.RDM.null }} ![Splashboard dashboard entry](https://cdnweb.devolutions.net/docs/RDMW6051_2024_2.png)