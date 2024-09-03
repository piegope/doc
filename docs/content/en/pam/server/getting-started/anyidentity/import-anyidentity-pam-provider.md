---
eleventyComputed:
  title: Import an {{ en.ANYID }} PAM provider
  description: Import an {{ en.ANYID }} PAM provider by following the steps below.
---
Import an {{ en.ANYID }} PAM provider by following the steps below.

1. To create the provider, first navigate to ***Administration – Privileged access*** in {{ en.DVLS }} and select ***Providers***.
![Administration – Privileged access – Providers](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_1-7.png)
1. Click on the + sign to add a provider.
![Add a provider](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_2-7.png)
1. Select ***{{ en.ANYID }}*** and then choose your template. An existing provider template named ***Microsoft SQL Server Login*** is displayed here.
![Select an {{ en.ANYID }} provider](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_3-7.png)
1. Define a name and provide values for all of the provider properties. In the screenshot below, the ***Server*** provider property is marked as ***Mandatory*** in the template, indicated by the red asterisk and red box around the field.
![Provider properties](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_4-7.png)

{% snippet, "badgeNotice" %}
{{ en.ANYID }} providers are designed for connecting to a single identity provider endpoint. It is generally recommended to create one {{ en.ANYID }} provider per identity provider.
{% endsnippet %}

After providing values for all of the provider properties, there is an option to [add a PAM {{ en.VLT }}](https://docs.devolutions.net/pam/hub/pam-vaults/#pam-vault-setup) for the provider or to add a scan configuration. By default, ***Add PAM {{ en.VLT }}*** is selected; see [Scan configuration](/pam/scan-configurations/) to learn about adding one.

![Add PAM {{ en.VLT }}](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_5-7.png)

On this page, a credential can also be specified to run all actions under, or a specific Windows host can be designated to execute the actions.

![Credential and Windows host](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_6-7.png)

{% snippet, "badgeInfo" %}
By default, an {{ en.ANYID }} provider executes all actions on {{ en.DVLS }} under the ***NETWORK SERVICE*** user account. If a username and password are specified under ***Run as***, {{ en.ANYID }} will first attempt to authenticate to the {{ en.DVLS }} using that user account and execute all action scripts under that account. If a ***Host name*** is specified, {{ en.ANYID }} assumes a remote Windows host and will attempt to run all action scripts locally on that host via [PowerShell remoting](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/08-powershell-remoting?view=powershell-7.4).
{% endsnippet %}

Finally, under ***Settings***, a custom [password template](/rdm/commands/file/templates/password-templates/) can be provided, if necessary. All available custom password templates can be found under ***Administration – Password templates***. When the password rotation action runs, it will use the password template defined here to generate a new password.

![Password template](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_7-7.png)