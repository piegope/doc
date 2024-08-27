---
_schema: default
eleventyComputed:
  title: >-
    Access Your {{ en.RDM }} entry in Google Chrome if Google Drive Integration
    does not work
  description:
  status:
  keywords:
---
Should you encounter difficulties with {% var, "RDM" false %} integration in Google Chrome via Google Drive, we recommend the following procedure for accessing and managing your ***XML data source file*** manually.

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

Since ***XML*** is limited, consider switching to a more reliable data source.

&nbsp;