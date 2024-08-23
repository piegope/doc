---
eleventyComputed:
  title: Create an {{ en.ANYID }} PAM provider in {{ en.DVLS }}
  description: To create an {{ en.ANYID }} PAM provider, you first need to create a provider template or import an existing one.
---
To create an {{ en.ANYID }} PAM provider, you first need to create a provider template or import an existing one. There already exists [templates](#import-an-anyidentity-template) for a few providers.

{% snippet, "badgeCaution" %}
The [WinRM](/server/kb/how-to-articles/winrm-trustedhostslist/) needs to be enabled for this to work.
{% endsnippet %}

## Create an {{ en.ANYID }} template  
Once the [action scripts](/pam/kb/how-to-articles/create-anyidentity-) have been created, the next step is to develop the {{ en.ANYID }} template within {{ en.DVLS }}. This process integrates the work done into the {{ en.ANYID }} template.
1. In {{ en.DVLS }}, go to ***Administration – Privileged access – Providers***.
1. Click on ***{{ en.ANYID }} templates***.
![Administration – Privileged access – Providers – {{ en.ANYID }} templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2173.png)
1. Click ***Add*** to create a new template.
![Add a new {{ en.ANYID }} template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2174.png)
1. In ***General***, provide a ***Name*** (mandatory) and a ***Description*** (optional) for your new template. It is also possible to change the displayed icon.
1. Three actions can be enabled, each with their own script. Check the boxes next to the ones that you wish this provider to implement.
   {% snippet, "badgeNotice" %}
   While it is not mandatory to enable each action, it is recommended to do so to fully leverage the benefits of an {{ en.ANYID }} provider.
   {% endsnippet %}

    * ***Password rotation***, to reset account passwords.
    * ***Heartbeat***, to synchronize accounts.
    * ***Account discovery***, for scanning.
   ![General settings](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2175.png)
6. In ***Provider properties*** and ***Account properties***, set the fields that the providers and accounts will implement.
    * ***Provider properties*** define the attributes {{ en.ANYID }} uses to authenticate and connect to an identity provider. These properties may include username, password, hostname, or any other unique attribute of an identity provider.
    * ***Account properties*** are attributes related to a specific account on an identity provider. Common account properties include ID, username, and secret. Account properties uniquely identify provider accounts and provide a value to store an account's password or other secure credentials.

    Add properties by clicking on ***Add property***. For each property, provide a ***Name*** and a ***Type***. Below is a list of the different types:
    * ***Boolean***
    * ***Description*** (string)
    * ***Int***
    * ***Password*** (string)
    * ***Sensitive Data*** (SecureString)
    * ***String***
    * ***Unique Identifier*** (string)
    * ***Username*** (string)
![Provider and account properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2176.png)
1. Check the ***Mandatory*** box next to a property if the fields are required for creation/editing.
1. For each action that was enabled in the ***General*** section, go to the corresponding section in the left menu.
1. Map the properties of the provider/account that the script needs to work by providing the following:
    * ***Name***: Name of the variable in the script.
    * ***Source***: If the value is provided by the provider or the account.
    * ***Property***: The source property that will be injected into the script.

    All actions have associated action scripts with at least two or three parameters. {{ en.ANYID }} must understand how to map a property to a script parameter to define the relationship between the {{ en.ANYID }} object (provider or account) and each action script. Script parameters allow you to specify to {{ en.ANYID }} which parameters each of your action scripts possesses and which {{ en.ANYID }} property that script parameter should be mapped to. If need be, you can add other script parameters. 
![Actions parameters](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2177.png)
10. Insert the script of the action by either browsing on your computer to find it or manually editing the ***Script*** field. You can also generate a base script to build upon.
![Action script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2178.png)
1. Test your script once it is complete, then ***Save*** your new template.
Your new {{ en.ANYID }} template has been created and can be found in the templates list. You can skip to [Create an {{ en.ANYID }} Provider](#create-an-anyidentity-pam-provider).

### Template example
Below is an example of values for a completed {{ en.ANYID }} template based on the following action scripts:

```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpoint,
    
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpointUserName,
    
    [Parameter(Mandatory)]
    [securestring]$IdentityProviderEndpointPassword
)
```

```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpoint,
    
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpointUserName,
    
    [Parameter(Mandatory)]
    [securestring]$IdentityProviderEndpointPassword,
    
    [Parameter(Mandatory)]
    [securestring]$NewPassword,
    
    [Parameter(Mandatory)]
    [string]$AccountUserName
)
```

```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpoint,
    
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpointUserName,
    
    [Parameter(Mandatory)]
    [securestring]$IdentityProviderEndpointPassword,
    
    [Parameter(Mandatory)]
    [securestring]$AccountSecret,
    
    [Parameter(Mandatory)]
    [string]$AccountUserName
)
```

#### Provider properties

| Property name                    | Property type | Mandatory |
| -------------------------------- | ------------- | --------- |
| IdentityProviderEndpoint         | String        | Yes       |
| IdentityProviderEndpointUserName | UserName      | Yes       |
| IdentityProviderEndpointPassword | Password      | Yes       |

#### Account properties

| Property name   | Property type    | Mandatory |
| --------------- | ---------------- | --------- |
| AccountUserName | UniqueIdentifier | Yes       |
| AccountSecret   | Password         | Yes       |

#### Script parameter types

| Parameter name                   | Action(s)                                       | Property                         | Source   | Mandatory |
| -------------------------------- | ----------------------------------------------- | -------------------------------- | -------- | --------- |
| IdentityProviderEndpoint         | Password rotation, Heartbeat, Account discovery | IdentityProviderEndpoint         | Provider | Yes       |
| IdentityProviderEndpointUserName | Password rotation, Heartbeat, Account discovery | IdentityProviderEndpointUserName | Provider | Yes       |
| IdentityProviderEndpointPassword | Password rotation, Heartbeat, Account discovery | IdentityProviderEndpointPassword | Provider | Yes       |
| NewPassword                      | Password Rotation                               | N/A                              | System   | Yes       |
| AccountUserName                  | Password rotation, Heartbeat                    | AccountUserName                  | Account  | Yes       |
| AccountSecret                    | Heartbeat                                       | AccountSecret                    | Account  | Yes       |

## Import an {{ en.ANYID }} template
{% snippet, "badgeHelp" %}
You can access our public [GitHub repository](https://github.com/Devolutions/PAM-Providers) to find {{ en.ANYID }} PAM providers made by the Devolutions team and instructions on how to use them.
{% endsnippet %}

1. In {{ en.DVLS }}, go to ***Administration – Privileged access – Providers***.
1. Click on ***{{ en.ANYID }} templates***.
![Administration – Privileged access – Providers – {{ en.ANYID }} templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2173.png)
1. Click on ***Import***.
![Import an {{ en.ANYID }} template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2179.png)
1. Upload your .json file, then click on ***Import***.
1. Adapt the template settings if need be, then click on ***Save***.

Your template has now been imported and can be found in the ***{{ en.ANYID }} templates*** list.

## Create an {{ en.ANYID }} PAM provider
Once your template has been created or imported, you are ready to create an {{ en.ANYID }} provider.
1. Go to ***Administration – Privileged access – Providers***, then click ***Add***.
![Administration – Privileged access – Providers – Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2180.png)
1. Go to ***{{ en.ANYID }}*** in the left menu, then select your new template in the list. Click ***Continue***.
![{{ en.ANYID }} template selection](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2181.png)
1. In the ***Provider*** configuration page, provide a ***Name*** and a ***Username***, as this information is mandatory. Then, if necessary, set the other options according to your needs.
![Provider configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2182.png)
1. Click ***Save***.

Your new {{ en.ANYID }} provider has been created and can be found in the providers list.