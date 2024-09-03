---
eleventyComputed:
  title: Import accounts from a scan configuration
  description: Once a list of accounts has been discovered, the next step is to import privileged accounts into a {{ en.DPAM }} {{ en.VLT }}.
  order: 30
---
Once a list of accounts has been discovered, the next step is to import privileged accounts into a {{ en.DPAM }} {{ en.VLT }}. If a {{ en.VLT }} was selected during the creation of the provider, a {{ en.VLT }} with the same name as the provider will have been created; otherwise, it will be necessary to [create one manually](/pam/hub/pam-vaults/#pam-vault-setup).

## Import accounts
1. To import accounts into a {{ en.VLT }}, select each discovered user and click on ***Import selected accounts***.
![Import selected accounts](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_1-5.png)
1. Select the ***Provider*** and the ***Path*** to the {{ en.VLT }} where the accounts will be added.
![Provider and path](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_2-5.png)
1. To reset passwords immediately for all imported accounts, select the ***Reset password on import*** option. This will automatically initiate a heartbeat and password rotation action on every imported account.
1. Click ***OK*** to import the accounts into the {{ en.VLT }}.

Once imported, the accounts should appear under the provider’s {{ en.VLT }}.
![Accounts in the provider's {{ en.VLT }}](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_3-5.png)

## Verifying heartbeat and password rotation actions on import
At this stage, the provider should have executed the heartbeat and password rotation actions, checking and resetting the account passwords if the ***Reset password on import*** option was selected. Verification of this process is recommended.

To verify, click on the account and navigate to the ***Logs*** category.

![Account logs](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_4-5.png)

Within the logs, three key messages should be present:
* ***Entry added***: Indicates that a new account has been added to the {{ en.VLT }}.
* ***PAM password reset - Success***: Confirms that the provider executed the password rotation action and successfully changed the password.
***Check synchronization - Success***: Confirms that the heartbeat action compared the current password stored by {{ en.DPAM }} with the password assigned to the account, confirming they match.

If all these messages are present, it can be confirmed that the provider has successfully executed all actions.

Although importing a new account into a {{ en.VLT }} automatically initiates a heartbeat and password rotation action, these actions can also be tested at any time.

While viewing the account in the {{ en.VLT }}, the heartbeat action can be tested by right-clicking on the account and selecting ***Check synchronization status*** (1) or by clicking on the atom symbol (2) as shown below.

![Check synchronization status](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_5-5.png)

If successful, the ***Check synchronization - Success*** message will appear in the account logs.