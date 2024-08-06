---
_schema: default
eleventyComputed:
  title: PAM {{ en.VLT }}s
  description: >-
    PAM {{ en.VLT }}s are one of the key features of {{ en.DHUB }}'s privileged
    access management module. They are secure {{ en.VLT }}s that allow you to
    manage all your different privileged accounts.
---
PAM {{ en.VLT }}s are one of the key features of {{ en.DHUB }}'s privileged access management module. They are secure {{ en.VLT }}s that allow admins to manage their different privileged accounts.

## PAM {{ en.VLT }} creation

Creating a PAM {{ en.VLT }} via the {{ en.DHUB }} web interface is not that much different from creating a regular {{ en.VLT }}. In ***Administration – {{ en.VLT_MAJ }}s***, click on ***Add (+)***, then ***Add PAM {{ en.VLT }}*** as shown in the image below.

![Add a PAM](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2288.png)

## PAM {{ en.VLT }} setup

Once this is done, the setup window for a new PAM {{ en.VLT }} should appear.

![PAM  setup](https://cdnweb.devolutions.net/docs/HUBB4007_2024_2.png "PAM  setup")

Start by entering a ***Name*** for the PAM {{ en.VLT }} (mandatory) and a ***Description*** (optional). Then, set its visibility:

* ***Default***: Refers to the system-wide {{ en.VLT }} visibility set in ***Administration – Configuration & Security – System Settings – {{ en.VLT_MAJ }}***.
* ***Private***: A private PAM {{ en.VLT }} is not visible to users that do not have access to it. Thus, {{ en.VLT }} access requests cannot be performed. It can only be accessed on invitation.
* ***Public***: A public {{ en.VLT }} is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public {{ en.VLT }}.

{% snippet, "badgeHelp" %}
For more information on {{ en.VLT }} access and visibility, visit [{{ en.VLT_MAJ }} access in {{ en.DHUBB }}](/hub/web-interface/vault-access/).
{% endsnippet %}

Then, set the {{ en.VLT }}'s PAM checkout policy:

![PAM checkout policy](https://cdnweb.devolutions.net/docs/HUBB4008_2024_2.png "PAM checkout policy")

And its PAM password rotation policy:

![PAM password rotation policy](https://cdnweb.devolutions.net/docs/HUBB4009_2024_2.png "PAM password rotation policy")

In the ***Password Settings***, choose whether to use the provider's password template or select a custom one.

{% snippet, "badgeCaution" %}IWhen using a custom template, make sure it follows the provider's password policies.{% endsnippet %}

When clicking ***Add***, the new PAM {{ en.VLT }} will be created. It can then be found in ***Administration – {{ en.VLT_MAJ }}s***. The number of PAM {{ en.VLT }}s is also displayed at the top.

![s list](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2291.png)

All the {{ en.VLT }}s can be accessed via the {{ en.VLT }} selector in the ***{{ en.NPANE }}***.

![Vault selector](https://cdnweb.devolutions.net/docs/HUBB4010_2024_2.png "Vault selector")

{% snippet, "badgeHelp" %}The next step is to add privileged accounts to the new PAM {{ en.VLT }}. Visit [Privileged accounts](/pam/privileged-accounts/index/) for more information.{% endsnippet %}