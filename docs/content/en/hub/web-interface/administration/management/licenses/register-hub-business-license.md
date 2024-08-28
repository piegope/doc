---
eleventyComputed:
  title: Register a {{ en.DHUBB }} license
  description: Register a new {{ en.DHUBB }} license by following the steps that best represent the current situation.
---
Register a new {{ en.DHUBB }} license by following the steps that best represent the current situation:

* [Current license is still active](#my-current-license-is-still-active)
* [Current license is expired](#my-current-license-is-expired)

{% snippet, "badgeCaution" %}
Only ***Administrators*** and users with permissions in the ***System Permissions*** section have access to register a license in {{ en.DHUBB }}.
{% endsnippet %}

### Current license is still active

1. Connect to the {{ en.DHUBB }} in question.
1. Go to ***Administration*** – ***Licenses***.
1. Click the ***Edit*** button.
![Edit license button](https://cdnweb.devolutions.net/docs/HUBB4015_2024_2.png)
1. Paste the new {{ en.DHUBB }} license, and click ***Save***.
![New license Save button](https://cdnweb.devolutions.net/docs/HUBB4016_2024_2.png)

### Current license is expired

1. Connect to {{ en.DHUBB }}.
1. An ***Access denied*** message should appear.
{% snippet, "badgeCaution" %}
Only ***Administrators*** and users with the ***System Permissions*** to ***Manage product licenses*** should see this message.
{% endsnippet %}

![!!Hub4095](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4095.png)

3. Paste the new {{ en.DHUBB }} license.
1. Click the padlock to save.

The new hub should then connect automatically.