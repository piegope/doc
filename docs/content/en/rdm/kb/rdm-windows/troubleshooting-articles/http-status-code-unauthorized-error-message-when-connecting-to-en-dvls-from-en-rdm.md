---
_schema: default
eleventyComputed:
  title: >-
    HTTP Status Code Unauthorized error message when connecting to {{ en.DVLS}}
    from {{ en.RDM }}
  description: >-
    When the Basic Authentication option is enabled on the {{ en.DVLS}} website
    Authentication feature, {{ en.RDM}} displays the following error message:
  status:
  keywords:
---
When the ***Basic Authentication option*** is enabled on the {% var, "DVLS" false %} website Authentication feature, {% var, "RDM" false %}displays the following error message:

![HTTPStatusCode: Unauthorized error message](https://cdnweb.devolutions.net/docs/RDMW6075_2024_2.png "HTTPStatusCode: Unauthorized error message")

Here are the steps to solve this problem.

1. Open ***IIS Manager***.
2. Expand the tree in the ***left pane***.
3. Select the {% var, "DVLS" false %} website or application.
4. Open the ***Authentication feature***.
5. Disable the ***Basic Authentication***.

![Disable Basic Authentication in IIS Manager](https://cdnweb.devolutions.net/docs/RDMW6076_2024_2.png "Disable Basic Authentication in IIS Manager")

If any other sites on that machine do not require the ***Basic Authentication***, you can uninstall it from the ***Server Roles*** in ***Server Manager***.