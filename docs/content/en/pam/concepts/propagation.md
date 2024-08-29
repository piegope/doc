---
_schema: default
eleventyComputed:
  title: Propagation
  description: >-
    *Propagation is a feature in a {{ en.DPAM }} provider that serves as the fourth and final action a provider performs when rotating passwords.
---
***Propagation***, also known as password propagation or sometimes referred to as propagation scripts, is a feature in a {{ en.DPAM }} provider that serves as the fourth and final action a provider performs when rotating passwords.

Propagation is an optional action implemented as a user-customizable PowerShell script that executes as the last step in the provider action sequence of discovery, heartbeat, and password rotation. Its purpose is flexible, allowing it to perform follow-up tasks that must occur after a password is changed.

For example, when passwords are stored in software features like [Windows services](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/windows_service), synced to services like [Azure Key Vault as secrets](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/azure_key_vault), or used in Windows scheduled tasks, propagation can be used to update those passwords. Propagation scripts can also perform actions such as creating helpdesk tickets or sending notification events to services like [Slack](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/slack_message) or [Microsoft Teams](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/teams_message).
