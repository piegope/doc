---
_schema: default
eleventyComputed:
  title: Providers
  description: >-
    The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD
    application information to be used for Azure AD automatic password rotation.
---
The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD application information to be used for Azure AD automatic password rotation.

{% snippet, "badgeHelp" %}
See [Create an Azure AD PAM provider](/hub/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration.
{% endsnippet %}

![Azure AD user provider](https://cdnweb.devolutions.net/docs/HUBB6017_2024_1.png)

## General

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Name</p></td><td><p>Display name of the provider</p></td></tr><tr><td><p>Description</p></td><td><p>Description of the provider</p></td></tr></tbody></table>

## Password settings

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Password template used on generation</p></td><td><p><a href="/hub/web-interface/administration/management/password-templates/">Password template</a> used to generate the password during the reset password operation</p></td></tr></tbody></table>

## Server

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Tenant ID</p></td><td><p>ID of the Azure tenant</p></td></tr><tr><td><p>Client ID</p></td><td><p>ID of the Azure application</p></td></tr><tr><td><p>Secret key</p></td><td><p>Secret key of the Azure application</p></td></tr><tr><td><p>Test connection </p></td><td><p>Test the connection. If the connection fails, check the validity of the information you have entered and try again.</p></td></tr></tbody></table>