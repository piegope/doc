---
eleventyComputed:
  title: Reset PAM account passwords
  description: To reset an account password manually, right-click on the account in the {{ en.VLT }}, hover the mouse over More, and select Reset password***.
  order: 40
---
To reset an account password manually, right-click on the account in the {{ en.VLT }}, hover the mouse over ***More***, and select ***Reset password*** (1). Alternatively, click on the three dots menu and choose ***Reset password*** (2).

![Reset password](https://cdnweb.devolutions.net/docs/ab_getting-started-reset-passwords_1-1.png)

If the password rotation action is successful, the logs will display the ***PAM Password reset - Success*** message.

{% snippet, "badgeInfo" %}
Resetting a password for an account initiates both the password rotation action and the heartbeat action to confirm that the password rotation has been successfully completed.
{% endsnippet %}