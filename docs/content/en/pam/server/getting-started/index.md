---
eleventyComputed:
  title: Getting started
  description: To get started with the Privileged Access Management (PAM) features of {{en.DVLS }}, first log in as an administrator in your {{ en.DVLS }}.
  order: 10
---
To get started with the ***Privileged Access Management*** (PAM) features in {{ en.DVLS }}, first log in as an administrator in your {{ en.DVLS }}. Then, follow the configuration steps below.

## Configure PAM settings

1. In {{ en.DVLS }}, head to ***Administration – Licenses***.
1. Add your PAM license using the ***Add*** (+) button. When done, the license appears in the license list and the ***Privileged access*** menu appears in the side panel of your {{ en.DVLS }}.
![PAM license](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2104.png)
1. In ***Administration – Privileged access – Default settings***, configure the settings for the [{{ en.VLT }} visibility](/server/web-interface/vault-access/), [checkout system](/pam/server/checkout-process/request-checkout/), [credentials brokering](/pam/server/view-sensitive-data-account-brokering/), [sensitive information access](/pam/server/view-sensitive-data-account-brokering/), default checkout times, and synchronizations.
![Administration – Privileged access – Default settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2105.png)
1. Next, head to ***Administration – System permissions – Modules***.
1. Configure access to the PAM system for users/admins and manage privileged accounts rights on who can edit the privileged entries. Then, click ***Save***.
![Administration – System permissions – Modules – Privileged access](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2106.png)

### Next steps

1. [Add a PAM provider](pam/server/getting-started/add-pam-provider)
1. [Create and run a scan configuration](pam/server/getting-started/create-run-scan-configuration)
1. [Import accounts from a scan configuration](pam/server/getting-started/import-accounts-scan-configuration)
1. [Reset PAM account passwords](pam/server/getting-started/reset-pam-account-passwords)

For {{ en.ANYID }}, also see [Import an {{ en.ANYID }} PAM provider](pam/server/getting-started/anyidentity/import-anyidentity-pam-provider).
