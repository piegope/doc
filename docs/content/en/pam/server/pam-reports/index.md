---
eleventyComputed:
  title: PAM reports in {{ en.DVLS }}
  description: When providers execute actions, those actions are recorded in a set of logs that can be inspected within {{ en.DVLS }}.
---
When providers execute actions, those actions are recorded in a set of logs that can be inspected within {{ en.DVLS }}. All logs can be found within the ***Reports*** section of {{ en.DVLS }}.

![PAM reports](https://cdnweb.devolutions.net/docs/DVLS2037_2024_2.png)

* ***Privileged access***: After an account has been imported into a {{ en.DPAM }} {{ en.VLT }}, activity will begin to appear in ***Privileged access - Recent activities***. This log provides a record of activity both for individual accounts and the provider itself. In this log, insight can be gained into both the heartbeat and password rotation activities for accounts, although more detailed information regarding password rotation can be found in the ***Privileged access - Password rotation*** report.
!["Out of sync" warning](https://cdnweb.devolutions.net/docs/ab_providers-troubleshooting-logs_2-4.png)
* ***Data source logs***: Although not specific to PAM activity, when an issue occurs in any {{ en.ANYID }} action script, for instance, activity may be recorded in the data source logs. This section contains more general information as well as specific error messages returned by action scripts.
!["Out of sync" warning](https://cdnweb.devolutions.net/docs/ab_providers-troubleshooting-logs_4-4.png)