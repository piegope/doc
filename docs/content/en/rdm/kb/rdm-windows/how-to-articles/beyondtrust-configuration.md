---
_schema: default
eleventyComputed:
  title: BeyondTrust configuration
---
Here is the information required to configure the properties of a BeyondTrust entry.

## Settings

In the ***General*** section of the BeyondTrust entry:

1. Enter the ***Host***, which is the URL of your BeyondTrust portal.
2. Enter the ***Username*** and ***Password*** of an account that has the permissions to connect to BeyondTrust.
3. Enter the ***Application API key***, which is the key of one of your BeyondTrust ***API Registrations***. ![General](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4944.png)

   &nbsp;

   ![BeyondTrust key](https://cdnweb.devolutions.net/docs/INTERFACE4052.png "BeyondTrust key"){% snippet, "shieldCaution" %}Devolutions strongly advises activating the***User password required*** option in the API registration for {% var, "RDM" false %}. Failure to do so might allow impersonation of:

   * Any users allowed to use that API Key Policy that do not have their second factor configured if ***Enforce multi-factor authentication*** is selected.

   * Any user allowed to use that API Key Policy If the ***Enforce multi-factor authentication*** option is NOT selected.{% endsnippet %}

In the ***Advanced*** section of the same BeyondTrust entry:

4. Select the system you want to connect to using the ellipsis button next to the ***System*** field. ![System](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4945.png)

{% snippet, "badgeHelp" %}
The template section allows you to apply a template for the session you want to open. For more information on templates, please refer to [Creating templates](https://docs.devolutions.net/rdm/windows/commands/file/templates/creating-templates).
{% endsnippet %}