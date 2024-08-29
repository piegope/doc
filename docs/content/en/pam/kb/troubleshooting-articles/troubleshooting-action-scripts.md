---
eleventyComputed:
  title: Troubleshooting action scripts in {{ en.DVLS }}
  description: When action scripts fail within {{ en.ANYID }}, it is essential to understand how to identify and troubleshoot the issue.
---
When [action scripts](/pam/kb/how-to-articles/create-anyidentity-action-script-dvls) fail within {{ en.ANYID }}, it is essential to understand how to identify and troubleshoot the issue. Multiple issues can arise with an {{ en.ANYID }} provider due to the various steps involved. Additionally, {{ en.ANYID }} heavily relies on action scripts for functionality, and depending on the complexity of the identity provider, these action scripts can become intricate.

Problems may occur if the provider is not thoroughly tested beforehand. The following guidelines will help identify potential issues and provide steps for troubleshooting.

## 1. Identify the problem

The problem may not always be immediately apparent. While the action scripts may function correctly in isolation, {{ en.ANYID }} may not apply password changes as expected. For instance, if the action scripts are incorrectly built and return inaccurate information, {{ en.ANYID }} may use this information to make decisions, assuming everything is functioning properly when it is not.

In some cases, the issue may be more obvious, such as seeing an "Out of sync" warning message for the user in the {{ en.DPAM }} {{ en.VLT }} or noticing a problem in the [PAM logs](/pam/server/pam-reports).

!["Out of sync" warning](https://cdnweb.devolutions.net/docs/ab_providers-troubleshooting-anyidentity-providers_1-1.png)

## 2. Identify the action script involved

Since {{ en.ANYID }} operates primarily as a script orchestrator, the majority of its functionality depends on the action scripts. If an error appears in the {{ en.DVLS }} console, it is important to first identify which action script is involved. This requires an understanding of how {{ en.ANYID }} "maps" functionality to the action scripts through its terminology.

* Scan configuration: Scan configurations use the account discovery action script.
* Synchronization: {{ en.ANYID }} uses the term "synchronization" to refer to running the heartbeat action script.
* Password reset: Initiating a password reset in {{ en.ANYID }} involves both the password rotation and heartbeat action scripts.

## 3. Test action scripts outside of {{ en.ANYID }}.

After identifying the action scripts involved, it is advisable to test them outside of {{ en.ANYID }} to ensure that the issue does not originate from the action script itself. The same parameters defined via Script Parameters when creating the template should be passed to the script. It is crucial to verify that the PowerShell script returns the expected results for {{ en.ANYID }}:

* Account discovery: Should output at least one `pscustomobject` object with `id`, `username`, and `secret` properties.
* Heartbeat: Should have `username` and `secret` parameters and return a single boolean value, either `$true` or `$false`.
* Password rotation: Should include parameters for the identity provider endpoint, endpoint username, endpoint password, and a specifically named parameter called `NewPassword`.