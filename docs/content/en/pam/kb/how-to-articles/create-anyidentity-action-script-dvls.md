---
eleventyComputed:
  title: Create an {{ en.ANYID }} action script in {{ en.DVLS }}
  description: When a custom {{ en.ANYID }} provider is required, it is necessary to first develop the action scripts that will be executed by the provider actions.
---
When a custom {{ en.ANYID }} provider is required, it is necessary to first develop the action scripts that will be executed by the provider actions. These action scripts will be placed in the ***Script*** section of each action during the template-building process.

Action scripts are PowerShell scripts executed by {{ en.DPAM }}, and therefore, the same best practices applicable to any PowerShell script should be adhered to. However, there are specific nuances to consider when crafting these action scripts.

{% snippet, "badgeNotice" %}
Proficiency in PowerShell scripting is essential for creating {{ en.ANYID }} providers. It is recommended that individuals possess at least an intermediate level of scripting skill before attempting to create action scripts.
{% endsnippet %}

## Identity provider endpoint script parameters

Each action script must include a set of parameters through which the {{ en.ANYID }} provider will pass values. While the specific parameters for each action script may vary (as shown in the examples below), they will all share a common set of parameters required to connect to the identity provider endpoint. Action scripts connect to an identity provider, and to facilitate this, they must receive the necessary credentials from the {{ en.ANYID }} provider.

Below is an example of how to define these identity provider endpoint parameters. 
 
```powershell
[Parameter(Mandatory)]
[string]$IdentityProviderEndpoint,
[Parameter(Mandatory)]
[string]$IdentityProviderEndpointUserName,
[Parameter(Mandatory)]
[securestring]$IdentityProviderEndpointPassword
```
 
{% snippet, "badgeNotice" %}
Although there is flexibility in naming the parameters within action scripts (provided that they match what is specified during the template-building process in {{ en.ANYID }}), it is advisable to use a standard set of parameters to maintain consistency and clarity in naming conventions.
{% endsnippet %}

Each parameter is marked as mandatory, ensuring that the {{ en.ANYID }} provider is forced to use these parameters. It is also important to note the use of the `securestring` type for the `IdentityEndpointPassword` parameter. {{ en.ANYID }} mandates the use of `securestring` to prevent the transmission and processing of plaintext passwords within action scripts.

When constructing the {{ en.ANYID }} template, these identity provider endpoint parameters will correspond to the parameters defined during the template creation process.

![Password rotation parameters with the required ***NewPassword*** parameter (only for password rotation)](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_1-8.png)

## Handling optional, default parameters  

When you need to provide the ability to pass a value to a script parameter but not require it, that parameter is considered optional. It's only used when a value is passed to it.

During the creation of an {{ en.ANYID }} template, it is possible to define provider and account properties and specify whether they are mandatory or optional.

![Optional provider properties ***Port*** and ***Instance***](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_2-8.png)

The parameters within the action script for the provider mentioned above may be structured as follows, with each script parameter matching the {{ en.ANYID }} template's properties and default values assigned to the optional parameters.  
 
```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpoint,
    
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpointUserName,
    
    [Parameter(Mandatory)]
    [securestring]$IdentityProviderEndpointPassword,
    
    [Parameter()]
    [string]$Instance = '.',
    
    [Parameter()]
    [int]$Port = 1433
)
Write-Host "Using the instance of [$Instance] and the port of [$Port] here in the code somewhere."
```
 
Should this PowerShell script be executed outside of {{ en.ANYID }} without the optional parameters being specified, it would operate as expected, utilizing the default parameter values.  
 
```powershell
.\actionscript.ps1 -IdentityProviderEndpoint 'hostname' -IdentityProviderEndpointUserName 'admin' -IdentityProviderEndpointPassword (ConvertTo-SecureString -String 'P@$$word' -AsPlainText -Force)
```
 
![!!ab_how-to-articles-create-anyidentity-action-scripts_3-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_3-8.png)

However, when constructing the {{ en.ANYID }} template and providing only the mandatory parameters, relying on the script’s internal default values, {{ en.ANYID }} will override these defaults.

![!!ab_how-to-articles-create-anyidentity-action-scripts_4-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_4-8.png)

When {{ en.ANYID }} executes an action script, it invariably passes values to all parameters. In instances where no value is defined, {{ en.ANYID }} will pass a `null` value, or if the parameter is of an integer type, a `0` value.

To circumvent this, default values should not be set within the script parameters. Instead, conditions within the script should determine default values.  
 
```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpoint,
    
    [Parameter(Mandatory)]
    [string]$IdentityProviderEndpointUserName,
    
    [Parameter(Mandatory)]
    [securestring]$IdentityProviderEndpointPassword,
    
    [Parameter()]
    [string]$Instance,
    
    [Parameter()]
    [int]$Port
)
if (!$Instance) { $Instance = '.' }
if (!$Port) { $Port = 1433 }
Write-Output "Using the instance of [$Instance] and the port of [$Port] here in the code somewhere."
```
 
Although it is not generally recommended by PowerShell best practices, providing default parameter values in this manner is a requirement for {{ en.ANYID }}.  

![!!ab_how-to-articles-create-anyidentity-action-scripts_5-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_5-8.png)

## Handling output

Action scripts are ultimately executed within the {{ en.ANYID }} environment. Any output generated by these scripts is interpreted, stored, and/or displayed in the {{ en.DVLS }} web interface.

To ensure that action scripts produce the expected output, it is recommended that they return output in only four ways:
* Use the `throw` keyword to generate a terminating error using the error stream.
* Use the `Write-Error` cmdlet to generate a non-terminating error using the error stream.
* Use the `Write-Output` cmdlet to return information to the output stream.
* Output information directly to the output stream.

Below are examples of action scripts and the corresponding results within the ***Test script*** functionality of {{ en.ANYID }}’s ***Results*** area.  
 
```powershell
Write-Verbose -Message 'This is a verbose message.'
Write-Information -MessageData 'information action'
Write-Output 'output stream here'
Write-Host 'write-host output here'
Write-Error 'error'
```
 
![!!ab_how-to-articles-create-anyidentity-action-scripts_6-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_6-8.png)
 
```powershell
Write-Verbose -Message 'This is a verbose message.'
Write-Information -MessageData 'information action'
Write-Output 'output stream here'
'output stream here directly'
Write-Host 'write-host output here'
```
 
![!!ab_how-to-articles-create-anyidentity-action-scripts_7-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_7-8.png)
 
{% snippet, "badgeNotice" %}
To ensure that an action script returns information to {{ en.ANYID }}, it is advised **not** to use `Write-Verbose`, `Write-Information`, or `Write-Host`.
{% endsnippet %}
 
## Account discovery

The initial action executed by an {{ en.ANYID }} provider is the account discovery action. This action enumerates accounts on an identity provider and populates the {{ en.DVLS }} database for subsequent management.

* **Required input parameters**

    The action script for the account discovery action is relatively straightforward, as it primarily requires common endpoint script parameters. No additional parameters are necessary unless dictated by the specific identity provider.

* **Required output**

    The account discovery script must return a specific type of output. Each account discovery action script must return one or more `PSCustomObject` type objects, with each object representing an individual account and containing three properties: `id`, `username`, and `secret`.
    * The `id` property must serve as a unique identifier for each account. While this identifier is typically a username, it can be any unique identifier for the account.
    * The `username` property should serve as a label for each account. This label is generally a username but can be any identifier that represents the account.
    * The `secret` property is the password identifier. This can be an encrypted string or a plaintext password and will be used to compare with other secrets via the heartbeat action.

    If the identity provider's code does not natively return this object with the specified properties, it is necessary to convert it by creating a `PSCustomObject`. Below is an example of how to accomplish this.  
 
    ```powershell
    ## some code that returns an object for each account
    $accounts = Get-AccountFromIdentityProvider 
    
    ## Create custom fields for Select-Object to return the id and username properties instead of name, and name
    $selectProps = @(
        @{'n'='id';e={$_.name}} ## "convert" the name property from the account to id
        @{'n'='username';e={$_.name}} ## "convert" the name property from the account to username
        @{'n'='secret';e={$_.password_hash}} ## "convert" the password_hash property from the account to secret
    )
    
    ## Pass each account to Select-Object to return the property names
    $accounts | Select-Object -Property $selectProps
    ```

    When creating an {{ en.ANYID }} template and testing it (instructions provided below) with a [scan configuration](https://docs.devolutions.net/pam/server/scan-configurations/), the ***Username*** and ***Unique Identifier*** fields will be populated with the property values for the `username` and `id` properties from the action script.
 
![!!ab_how-to-articles-create-anyidentity-action-scripts_8-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_8-8.png)

## Heartbeat

Following the retrieval of all accounts from the identity provider by the account discovery action, the heartbeat action is initiated. The heartbeat action reads the current password value of an account and compares it to the value stored by PAM. If the two values differ, a change is detected.

* **Required input parameters**

    In addition to the common endpoint parameters, a heartbeat action script must include at least two parameters: `username` and `secret`.
    * The value of the `username` property returned by the account discovery action script. This parameter is of type `string`.
    * The value of the `secret` property returned by the account discovery action script. This parameter is of type `securestring`.

* **Required output**

    A heartbeat action script returns a single boolean object (`$true` or `$false`) to indicate whether the current password value of an account matches the value known to the PAM modules.

Below is an example of a heartbeat action script.  
 
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
    [string]$UserName,
    
    [Parameter(Mandatory)]
    [securestring]$Secret
)
## Code to query for a single user account here. Let's say it is $account.
## Convert the password to a secure string.
$secPw = $account.password | ConvertTo-SecureString -AsPlainText -Force
## Compare the results.
$secPw -eq $Secret
```
 
## Password rotation

When {{ en.ANYID }} executes the heartbeat action and the action script returns a `$false` value, indicating that the new password in {{ en.ANYID }} differs from the password on the identity provider, the password rotation action is triggered.  

The password rotation action is responsible for synchronizing passwords generated by the PAM module with the identity provider.

* **Required input parameters**

    In addition to the common endpoint parameters, a password rotation action script must include one parameter: `NewPassword`. This is a `securestring` parameter that allows {{ en.ANYID }} to pass the new password value to the action script.

* **Required output**

    The password rotation script should only return a boolean `$true` value if the password change is successful.

Below is a basic example of a password rotation action script.  
 
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
    [securestring]$NewPassword
)
## $result = Dowhatevertochangethepasword
if ($Result) {
    $True
} else {
    Write-Error "Failed to update secret."
}
```