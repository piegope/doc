---
eleventyComputed:
  title: Créer un script d'action {{ fr.ANYID }} dans {{ fr.DVLS }}
  description: Lorsqu'un fournisseur {{ fr.ANYID }} personnalisé est requis, il est nécessaire de d'abord développer les scripts d'action qui seront exécutés par les actions du fournisseur.
---
Lorsqu'un fournisseur {{ fr.ANYID }} personnalisé est requis, il est nécessaire de d'abord développer les scripts d'action qui seront exécutés par les actions du fournisseur. Ces scripts d'action seront placés dans la section ***Script*** de chaque action lors du processus de création de modèle.

Les scripts d'action sont des scripts PowerShell exécutés par {{ fr.DPAM }}, et par conséquent, les mêmes meilleures pratiques applicables à tout script PowerShell doivent être respectées. Cependant, il y a des nuances spécifiques à considérer lors de la création de ces scripts d'action.

{% snippet, "badgeNotice" %}
La maîtrise du script PowerShell est essentielle pour créer des fournisseurs {{ fr.ANYID }}. Il est recommandé que les individus possèdent au moins un niveau intermédiaire de compétence en script avant de tenter de créer des scripts d'action.
{% endsnippet %}

## Paramètres de script de point d'accès du fournisseur d'identité

Chaque script d'action doit inclure un ensemble de paramètres par lesquels le fournisseur {{ fr.ANYID }} passera des valeurs. Bien que les paramètres spécifiques pour chaque script d'action puissent varier (comme montré dans les exemples ci-dessous), ils partageront tous un ensemble commun de paramètres requis pour se connecter au point d'accès du fournisseur d'identité. Les scripts d'action se connectent à un fournisseur d'identité, et pour faciliter cela, ils doivent recevoir les identifiants nécessaires du fournisseur {{ fr.ANYID }}.

Voici un exemple de comment définir ces paramètres de point d'accès du fournisseur d'identité.

---
[Parameter(Mandatory)]
[string]$IdentityProviderEndpoint,
[Parameter(Mandatory)]
[string]$IdentityProviderEndpointUserName,
[Parameter(Mandatory)]
[securestring]$IdentityProviderEndpointPassword
---

{% snippet, "badgeNotice" %}
Bien qu'il y ait une flexibilité dans le nommage des paramètres au sein des scripts d'action (à condition qu'ils correspondent à ce qui est spécifié lors du processus de création de modèle dans {{ fr.ANYID }}), il est conseillé d'utiliser un ensemble standard de paramètres pour maintenir la cohérence et la clarté dans les conventions de nommage.
{% endsnippet %}

Chaque paramètre est marqué comme obligatoire, garantissant que le fournisseur {{ fr.ANYID }} est contraint d'utiliser ces paramètres. Il est également important de noter l'utilisation du type `securestring` pour le paramètre `IdentityEndpointPassword`. {{ fr.ANYID }} impose l'utilisation de `securestring` pour éviter la transmission et le traitement de mots de passe en texte clair dans les scripts d'action.

Lors de la construction du modèle {{ fr.ANYID }}, ces paramètres de point d'accès du fournisseur d'identité correspondront aux paramètres définis lors du processus de création de modèle.

![Paramètres de rotation de mot de passe avec le paramètre requis ***NewPassword*** (uniquement pour la rotation de mot de passe)](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_1-8.png)

## Gestion des paramètres optionnels et par défaut

Lorsqu'il est nécessaire de fournir la possibilité de passer une valeur à un paramètre de script sans l'exiger, ce paramètre est considéré comme optionnel. Il n'est utilisé que lorsqu'une valeur lui est passée.

Lors de la création d'un modèle {{ fr.ANYID }}, il est possible de définir les propriétés du fournisseur et du compte et de spécifier si elles sont obligatoires ou optionnelles.

![Propriétés optionnelles du fournisseur ***Port*** et ***Instance***](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_2-8.png)

Les paramètres au sein du script d'action pour le fournisseur mentionné ci-dessus peuvent être structurés comme suit, chaque paramètre de script correspondant aux propriétés du modèle {{ fr.ANYID }} et des valeurs par défaut assignées aux paramètres optionnels.

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

Si ce script PowerShell est exécuté en dehors de {{ fr.ANYID }} sans que les paramètres optionnels ne soient spécifiés, il fonctionnerait comme prévu, en utilisant les valeurs par défaut des paramètres.

```powershell
.\actionscript.ps1 -IdentityProviderEndpoint 'hostname' -IdentityProviderEndpointUserName 'admin' -IdentityProviderEndpointPassword (ConvertTo-SecureString -String 'P@$$word' -AsPlainText -Force)
```

![!!ab_how-to-articles-create-anyidentity-action-scripts_3-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_3-8.png)

Cependant, lors de la construction du modèle {{ fr.ANYID }} et en fournissant uniquement les paramètres obligatoires, en se fiant aux valeurs par défaut internes du script, {{ fr.ANYID }} remplacera ces valeurs par défaut.

![!!ab_how-to-articles-create-anyidentity-action-scripts_4-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_4-8.png)

Lorsque {{ fr.ANYID }} exécute un script d'action, il passe invariablement des valeurs à tous les paramètres. Dans les cas où aucune valeur n'est définie, {{ fr.ANYID }} passera une valeur `null`, ou si le paramètre est de type entier, une valeur `0`.

Pour contourner cela, les valeurs par défaut ne doivent pas être définies dans les paramètres du script. Au lieu de cela, des conditions dans le script doivent déterminer les valeurs par défaut.

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

Bien que cela ne soit généralement pas recommandé par les meilleures pratiques PowerShell, fournir des valeurs par défaut de paramètre de cette manière est une exigence pour {{ fr.ANYID }}.

![!!ab_how-to-articles-create-anyidentity-action-scripts_5-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_5-8.png)

## Gestion de la sortie

Les scripts d'action sont finalement exécutés dans l'environnement {{ fr.ANYID }}. Toute sortie générée par ces scripts est interprétée, stockée et/ou affichée dans l'interface web de {{ fr.DVLS }}.

Pour garantir que les scripts d'action produisent la sortie attendue, il est recommandé qu'ils retournent la sortie de seulement quatre manières :
* Utiliser le mot-clé `throw` pour générer une erreur terminante en utilisant le flux d'erreurs.
* Utiliser l'applet de commande `Write-Error` pour générer une erreur non terminante en utilisant le flux d'erreurs.
* Utiliser l'applet de commande `Write-Output` pour retourner des informations au flux de sortie.
* Sortir des informations directement au flux de sortie.

Voici des exemples de scripts d'action et les résultats correspondants dans la fonctionnalité ***Test script*** de la zone ***Results*** de {{ fr.ANYID }}.

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
Pour garantir qu'un script d'action retourne des informations à {{ fr.ANYID }}, il est conseillé de **ne pas** utiliser `Write-Verbose`, `Write-Information`, ou `Write-Host`.
{% endsnippet %}

## Détection de compte

La première action exécutée par un fournisseur {{ fr.ANYID }} est l'action de détection de compte. Cette action énumère les comptes sur un fournisseur d'identité et remplit la base de données {{ fr.DVLS }} pour une gestion ultérieure.

* **Paramètres d'entrée requis**

    Le script d'action pour l'action de détection de compte est relativement simple, car il nécessite principalement des paramètres de script de point d'accès communs. Aucun paramètre supplémentaire n'est nécessaire sauf si dicté par le fournisseur d'identité spécifique.

* **Sortie requise**

    Le script de détection de compte doit retourner un type de sortie spécifique. Chaque script d'action de détection de compte doit retourner un ou plusieurs objets de type `PSCustomObject`, chaque objet représentant un compte individuel et contenant trois propriétés : `id`, `username`, et `secret`.
    * La propriété `id` doit servir d'identifiant unique pour chaque compte. Bien que cet identifiant soit généralement un nom d'utilisateur, il peut être tout identifiant unique pour le compte.
    * La propriété `username` doit servir d'étiquette pour chaque compte. Cette étiquette est généralement un nom d'utilisateur mais peut être tout identifiant qui représente le compte.
    * La propriété `secret` est l'identifiant de mot de passe. Cela peut être une chaîne chiffrée ou un mot de passe en texte clair et sera utilisé pour comparer avec d'autres secrets via l'action de battement de cœur.

    Si le code du fournisseur d'identité ne retourne pas nativement cet objet avec les propriétés spécifiées, il est nécessaire de le convertir en créant un `PSCustomObject`. Voici un exemple de comment accomplir cela.

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
    

    Lors de la création d'un modèle {{ fr.ANYID }} et de son test (instructions fournies ci-dessous) avec une [configuration de scan](https://docs.devolutions.net/pam/server/scan-configurations/), les champs ***Username*** et ***Unique Identifier*** seront remplis avec les valeurs des propriétés `username` et `id` du script d'action.

![!!ab_how-to-articles-create-anyidentity-action-scripts_8-8.png](https://cdnweb.devolutions.net/docs/ab_how-to-articles-create-anyidentity-action-scripts_8-8.png)

## Battement de cœur

Après la récupération de tous les comptes du fournisseur d'identité par l'action de détection de compte, l'action de battement de cœur est initiée. L'action de battement de cœur lit la valeur actuelle du mot de passe d'un compte et la compare à la valeur stockée par les modules PAM. Si les deux valeurs diffèrent, un changement est détecté.

* **Paramètres d'entrée requis**

    En plus des paramètres de point d'accès communs, un script d'action de battement de cœur doit inclure au moins deux paramètres : `username` et `secret`.
    * La valeur de la propriété `username` retournée par le script d'action de détection de compte. Ce paramètre est de type `string`.
    * La valeur de la propriété `secret` retournée par le script d'action de détection de compte. Ce paramètre est de type `securestring`.

* **Sortie requise**

    Un script d'action de battement de cœur retourne un seul objet booléen (`$true` ou `$false`) pour indiquer si la valeur actuelle du mot de passe d'un compte correspond à la valeur connue des modules PAM.

Voici un exemple de script d'action de battement de cœur.

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

## Rotation de mot de passe

Lorsque {{ fr.ANYID }} exécute l'action de battement de cœur et que le script d'action retourne une valeur `$false`, indiquant que le nouveau mot de passe dans {{ fr.ANYID }} diffère du mot de passe sur le fournisseur d'identité, l'action de rotation de mot de passe est déclenchée.

L'action de rotation de mot de passe est responsable de la synchronisation des mots de passe générés par le module PAM avec le fournisseur d'identité.

* **Paramètres d'entrée requis**

    En plus des paramètres de point d'accès communs, un script d'action de rotation de mot de passe doit inclure un paramètre : `NewPassword`. C'est un paramètre `securestring` qui permet à {{ fr.ANYID }} de passer la nouvelle valeur de mot de passe au script d'action.

* **Sortie requise**

    Le script de rotation de mot de passe ne doit retourner qu'une valeur booléenne `$true` si le changement de mot de passe est réussi.

Voici un exemple basique de script d'action de rotation de mot de passe.

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
