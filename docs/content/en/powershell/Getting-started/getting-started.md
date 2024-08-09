---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
## Prerequisites

Although each Devolutions PowerShell script has specific dependencies related to the tasks it is meant to carry out, all must meet a global set of prerequisites in order to be executed. These only need to be configured once per computer.

{% snippet, "badgeInfo" %}These requirements must be met by the computer the Devolutions product you are using {% var, "DPS" false %} with is installed on.{% endsnippet %}

Here is a list of the prerequisites:

1. PowerShell v7+ is installed.
2. The logged in user has permission to execute PowerShell scrips on the computer.
3. Devolutions PowerShell script is unblocked.
4. The Devolutions PowerShell module installed (and the correct version).
5. The user is connected and authenticated to a data source.
6. The Devolutions user that is authenticated to the data source has the necessary permissions.

### Verifying PowerShell v7+ is installed