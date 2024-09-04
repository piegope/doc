---
eleventyComputed:
  title: Add a PAM provider
  description: Add a PAM provider in Administration – Privileged access – Providers.
  order: 10
---
Add a PAM provider in ***Administration – Privileged access – Providers***. The available types are:

* ***Managed*** providers: ***Domain user*** (AD), ***Local user*** (SSH), ***SQL Server***, ***Windows user***, ***Azure AD user***
![Managed PAM providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2107.png)
* ***Password reset only*** (unmanaged) providers: ***MySQL user***, ***Cisco user***, ***Oracle user***
![Password reset only PAM providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)
* ***AnyIdentity*** providers: ***Windows accounts***, ***Windows local accounts***
![AnyIdentity PAM providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2109.png)

When adding the provider, ensure to enable the ***Add PAM {{ en.VLT }}*** and ***Add scan configuration*** options under ***Actions***.
![PAM provider configuration](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2110.png)

{% snippet, "badgeHelp" %}
For more information, please refer to [Providers](/pam/server/providers/).
{% endsnippet %}

When ***Save*** is clicked, the [Scan configuration](pam/server/getting-started/create-run-scan-configuration) appears.
