---
eleventyComputed:
  title: "{{ en.ANYID }} providers"
  description: "{{ en.DPAM }} offers a variety of managed providers, but it is not feasible to support every identity provider."
---
{{ en.DPAM }} offers a variety of managed providers, but it is not feasible to support every identity provider. This is where {{ en.ANYID }} providers become essential.

{{ en.ANYID }} providers are an extension of managed providers, designed to bridge the gap between the identity providers natively supported by the {{ en.DPAM }} module through managed providers and the numerous other identity providers that Devolutions customers may be using.

An {{ en.ANYID }} provider can support various identity providers not natively supported by {{ en.DPAM }}, such as:
* **Cloud-based identity providers**: Providers like Okta or Google Workspace, which manage access to cloud applications and services.
* **Custom applications**: Any in-house system your organization has developed that maintains its own user database and authentication mechanisms.
* **Legacy systems**: Older applications or databases that may not easily integrate with modern identity management solutions.

{{ en.ANYID }} providers utilize various actions, written in PowerShell as action scripts, which are executed either on-demand or on a scheduled basis via scan configurations. These actions include discovering identity provider credentials, detecting credential changes, and rotating passwords for credentials.

* **Account discovery**: Enumerates credentials on an identity provider.
* **Heartbeat**: Detects whether a credential has changed since the last heartbeat.
* **Password rotation**: Changes account passwords to a new, secure password

If you are proficient in PowerShell, you can [create {{ en.ANYID }} providers](/pam/kb/how-to-articles/create-anyidentity-pam-provider-dvls) or utilize any of the [pre-built templates](https://github.com/Devolutions/PAM-Providers).

![{{ en.ANYID }} provider](https://cdnweb.devolutions.net/docs/DVLS4026_2024_2.png)