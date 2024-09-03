---
eleventyComputed:
  title: Create and run a scan configuration
  description: A scan configuration is a set of instructions that dictate which provider to use, along with an optional recurrence schedule for periodically running the account discovery action on that provider.
  order: 20
---
A scan configuration is a set of instructions that dictate which provider to use, along with an optional recurrence schedule for periodically running the account discovery action on that provider.

1. To locate all existing scan configurations and create a new one, navigate to ***Administration – Privileged access – Scan configurations***. To create a new scan configuration, click on ***Add a new scan configuration***.
![Add a new scan configuration](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_1-6.png)
1. Scan configurations can be applied to both managed and {{ en.ANYID }} providers. You may choose either option here.
![Built-in/{{ en.ANYID }} providers](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_2-6.png)
1. Select the provider, set the name, and click ***OK***.
![Provider name](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_3-6.png)

{% snippet, "badgeNotice" %}
While any name can be assigned to a scan configuration, it is recommended to name it based on the provider it is associated with.
{% endsnippet %}

Upon creating the scan configuration, a job will be queued, indicated by an hourglass icon next to it. The job is scheduled by the {{ en.DVLS }} Windows service on the {{ en.DVLS }} host. Depending on the backlog, this process may take a few minutes.

![Queued job](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_4-6.png)

Once the job is complete, the status will display a green check mark, and the results will be shown.

![Completed job](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_5-6.png)

Each result represents an account that the account discovery action has found. If results are visible at this stage and they align with what the account discovery action returned, it indicates that the account discovery action is functioning correctly.

By clicking on the results, you can view all of the accounts identified by the account discovery action.

![Discovered accounts](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_6-6.png)

{% snippet, "badgeInfo" %}
For more information, please refer to [Scan configurations](/pam/scan-configurations/).
{% endsnippet %}

Next, learn how to [import accounts from a scan configuration](pam/server/getting-started/import-accounts-scan-configuration).