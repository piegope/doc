---
_schema: default
eleventyComputed:
  title: >-
    Access your {{ en.RDM }} entry in Google Chrome if Google Drive Integration
    does not work
  description: >-
    How to access your {{ en.RDM }} entry in Google Chrome if Google Drive
    Integration does not work.
  status:
  keywords:
---
Should you encounter difficulties with {% var, "RDM" false %} integration in ***Google Chrome*** via ***Google Drive***, we recommend the following procedure for accessing and managing your ***XML data source file*** manually.

## Solution

### Locate the ***XML Data Source File*** in Google Drive.

1. Locate the ***XML Data Source File*** in Google Drive
2. Open ***{% var, "RDM" false %}***.
3. Click ***File - Data sources***.
4. Select your ***Google Drive data source***.
5. Note the ***file name***.

### Export the ***XML Data source file*** from Google Drive.

1. Connect to your Google Drive and download the ***data source file***.
2. Rename the downloaded file to ***connection.xml***.
3. In {% var, "RDM" false %}, go to ***File - Data source***.
4. Create a ***new data source*** and select ***XML***.
5. Click the three dots next to the filename field and select the **connection.xml file** you downloaded.
6. Click on ***Add*** to finish.

### Switch to a reliable data source

Since ***XML*** is limited, consider switching to a more reliable data source like                         [{% var, "DHUB" false %}](t/hub/getting-started/create-hub/) , which is cloud-based solution.

### Export data from XML to a new data source

1. In {% var, "RDM" false %}, with the ***XML data source*** selected, click on ***File - Export - {% var, "VLT_MAJ" false %}***.
2. In the pop-up, click on ***include credentials*** and save the ***.rdm file*** in a safe folder.
3. Go to ***File - Data sources***.
4. Click the ***\+*** to add a new data source, and select ***SQLite*** or {% var, "DHUB" false %}.
5. In the new data source, go to ***File - Import (.rdm)***.
6. Select your ***.rdm file*** and click ***Next*** until your entries appear.<br><br>The data should be in the new data source.<br>

&nbsp;