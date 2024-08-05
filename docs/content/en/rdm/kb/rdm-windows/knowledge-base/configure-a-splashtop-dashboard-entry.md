---
_schema: default
eleventyComputed:
  title: Configure a Splashtop dashboard entry in {{ en.RDM}}
  description:
  status:
  keywords:
---
The configuration for the Splashtop dashboard entry in {{ variables.RDM.en }} has a few requirements.

1. Log in to your [Splashtop](https://my.splashtop.com/signin) account.
2. Set the **API token** by clicking **Management - Settings**. ![Management - Settings](https://cdnweb.devolutions.net/docs/RDMW6052_2024_2.png)
3. Go to **API - Create API token**. ![API - Create API token](https://cdnweb.devolutions.net/docs/RDMW6053_2024_2.png)
4. Set a **Name** and click **Save**. The default setup can remain unchanged. ![Set a Name and click Save](https://cdnweb.devolutions.net/docs/RDMW6054_2024_2.png)
5. Activate the **API token**.
6. Go to **Computers - Add Computer**. ![Computers - Add Computer](https://cdnweb.devolutions.net/docs/RDMW6055_2024_2.png)
7. Click on **Copy Link** and paste it in the browser of the other computers you want to add. ![Copy Link](https://cdnweb.devolutions.net/docs/RDMW6056_2024_2.png)
8. Download and install the **Splashtop\_Streamer** from the link. This should automatically add the computer in your Splashtop account.
9. Open {{ variables.RDM.en }}.
10. Create an [entry](/rdm/commands/edit/entries/creating-new-entry/).
11. Enter your **Account** and **API key**.
12. Click **Add** to save the entry.

    ![Account and API key](https://cdnweb.devolutions.net/docs/RDMW6051_2024_2.png)