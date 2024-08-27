---
eleventyComputed:
  title: Créer un fournisseur PAM {{ fr.ANYID }} dans {{ fr.DVLS }}
  description: Pour créer un fournisseur PAM {{ fr.ANYID }}, il faut d'abord créer un modèle de fournisseur ou en importer un existant.
---
Les fournisseurs {{ fr.ANYID }} sont construits et gérés à l'aide de modèles. Les modèles tirent parti des efforts de Devolutions et de la communauté pour construire des fournisseurs, réduisant ainsi le besoin pour les utilisateurs de les créer à partir de zéro.

Un modèle est un objet au sein de {{ fr.DPAM }} qui sert de cadre pour construire un fournisseur {{ fr.ANYID }}.

Les modèles guident {{ fr.DVLS }} dans le mappage des paramètres et des sorties des scripts d'action aux propriétés internes de {{ fr.DPAM }}, facilitant l'entrée et l'échange d'informations. Les modèles permettent aux utilisateurs de remplir les propriétés d'un fournisseur d'identité pour créer un fournisseur.

[Créer un modèle {{ fr.ANYID }}](#create-an-anyidentity-template) ou [importer l'un des modèles](#import-an-anyidentity-template) qui existent déjà.

{% snippet, "badgeCaution" %}
Le [WinRM](/server/kb/how-to-articles/winrm-trustedhostslist/) doit être activé pour que cela fonctionne.
{% endsnippet %}

## Créer un modèle {{ fr.ANYID }}
Une fois les [scripts d'action](/pam/kb/how-to-articles/create-anyidentity-action-scripts-dvls) créés, l'étape suivante consiste à développer le modèle {{ fr.ANYID }} au sein de {{ fr.DVLS }}.

1. Dans {{ fr.DVLS }}, aller à ***Administration – Accès privilégié – Fournisseurs***.
1. Cliquer sur ***Modèles {{ fr.ANYID }}***.
![Administration – Accès privilégié – Fournisseurs – Modèles {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2173.png)
1. Cliquer sur ***Ajouter*** pour créer un nouveau modèle.
![Ajouter un nouveau modèle {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2174.png)
1. Dans ***Général***, fournir un ***Nom*** (obligatoire) et une ***Description*** (facultative) pour votre nouveau modèle. Il est également possible de changer l'icône affichée.
1. Trois actions peuvent être activées, chacune avec son propre script. Cocher les cases à côté de celles que vous souhaitez que ce fournisseur implémente.
   {% snippet, "badgeNotice" %}
   Bien qu'il ne soit pas obligatoire d'activer chaque action, il est recommandé de le faire pour tirer pleinement parti des avantages d'un fournisseur {{ fr.ANYID }}.
   {% endsnippet %}

    * ***Rotation de mot de passe***, pour réinitialiser les mots de passe des comptes.
    * ***Heartbeat***, pour synchroniser les comptes.
    * ***Détection de compte***, pour la numérisation.
   ![Paramètres généraux](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2175.png)
6. Dans ***Propriétés du fournisseur*** et ***Propriétés du compte***, définir les champs que les fournisseurs et les comptes implémenteront.
    * ***Propriétés du fournisseur*** définissent les attributs que {{ fr.ANYID }} utilise pour authentifier et se connecter à un fournisseur d'identité. Ces propriétés peuvent inclure le nom d'utilisateur, le mot de passe, le nom d'hôte ou tout autre attribut unique d'un fournisseur d'identité.
    * ***Propriétés du compte*** sont des attributs liés à un compte spécifique sur un fournisseur d'identité. Les propriétés de compte courantes incluent l'ID, le nom d'utilisateur et le secret. Les propriétés de compte identifient de manière unique les comptes de fournisseur et fournissent une valeur pour stocker le mot de passe d'un compte ou d'autres identifiants sécurisés.

    Ajouter des propriétés en cliquant sur ***Ajouter une propriété***. Pour chaque propriété, fournir un ***Nom*** et un ***Type***. Voici une liste des différents types :
    * ***Booléen***
    * ***Description*** (chaîne)
    * ***Int***
    * ***Mot de passe*** (chaîne)
    * ***Données sensibles*** (SecureString)
    * ***Chaîne***
    * ***Identifiant unique*** (chaîne)
    * ***Nom d'utilisateur*** (chaîne)
![Propriétés du fournisseur et du compte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2176.png)
1. Cocher la case ***Obligatoire*** à côté d'une propriété si les champs sont requis pour la création/modification.
1. Pour chaque action activée dans la section ***Général***, aller à la section correspondante dans le menu de gauche.
1. Mapper les propriétés du fournisseur/compte dont le script a besoin pour fonctionner en fournissant les éléments suivants :
    * ***Nom*** : Nom de la variable dans le script.
    * ***Source*** : Si la valeur est fournie par le fournisseur ou le compte.
    * ***Propriété*** : La propriété source qui sera injectée dans le script.

    Toutes les actions ont des scripts d'action associés avec au moins deux ou trois paramètres. {{ fr.ANYID }} doit comprendre comment mapper une propriété à un paramètre de script pour définir la relation entre l'objet {{ fr.ANYID }} (fournisseur ou compte) et chaque script d'action. Les paramètres de script vous permettent de spécifier à {{ fr.ANYID }} quels paramètres chacun de vos scripts d'action possède et à quelle propriété {{ fr.ANYID }} ce paramètre de script doit être mappé. Si besoin, vous pouvez ajouter d'autres paramètres de script.
![Paramètres des actions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2177.png)
10. Insérer le script de l'action en le recherchant sur votre ordinateur ou en éditant manuellement le champ ***Script***. Vous pouvez également générer un script de base sur lequel construire.
![Script d'action](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2178.png)
1. Tester votre script une fois terminé, puis ***Enregistrer*** votre nouveau modèle.
Votre nouveau modèle {{ fr.ANYID }} a été créé et peut être trouvé dans la liste des modèles. Vous pouvez passer à [Créer un fournisseur PAM {{ fr.ANYID }}](#create-an-anyidentity-pam-provider).

### Exemple de modèle
Voici un exemple de valeurs pour un modèle {{ fr.ANYID }} complété basé sur les scripts d'action suivants :

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

#### Propriétés du fournisseur

| Nom de la propriété              | Type de propriété | Obligatoire |
| -------------------------------- | ----------------- | ----------- |
| IdentityProviderEndpoint         | Chaîne            | Oui         |
| IdentityProviderEndpointUserName | Nom d'utilisateur | Oui         |
| IdentityProviderEndpointPassword | Mot de passe      | Oui         |

#### Propriétés du compte

| Nom de la propriété | Type de propriété    | Obligatoire |
| ------------------- | -------------------- | ----------- |
| AccountUserName     | Identifiant unique   | Oui         |
| AccountSecret       | Mot de passe         | Oui         |

#### Types de paramètres de script

| Nom du paramètre                 | Action(s)                                       | Propriété                         | Source   | Obligatoire |
| -------------------------------- | ----------------------------------------------- | -------------------------------- | -------- | ----------- |
| IdentityProviderEndpoint         | Rotation de mot de passe, Heartbeat, Détection de compte | IdentityProviderEndpoint         | Fournisseur | Oui         |
| IdentityProviderEndpointUserName | Rotation de mot de passe, Heartbeat, Détection de compte | IdentityProviderEndpointUserName | Fournisseur | Oui         |
| IdentityProviderEndpointPassword | Rotation de mot de passe, Heartbeat, Détection de compte | IdentityProviderEndpointPassword | Fournisseur | Oui         |
| NewPassword                      | Rotation de mot de passe                        | N/A                              | Système   | Oui         |
| AccountUserName                  | Rotation de mot de passe, Heartbeat             | AccountUserName                  | Compte    | Oui         |
| AccountSecret                    | Heartbeat                                       | AccountSecret                    | Compte    | Oui         |

## Importer un modèle {{ fr.ANYID }}
{% snippet, "badgeHelp" %}
Vous pouvez accéder à notre [répertoire public GitHub](https://github.com/Devolutions/PAM-Providers) pour trouver des fournisseurs PAM {{ fr.ANYID }} réalisés par l'équipe Devolutions et des instructions sur la façon de les utiliser.
{% endsnippet %}

1. Dans {{ fr.DVLS }}, aller à ***Administration – Accès privilégié – Fournisseurs***.
1. Cliquer sur ***Modèles {{ fr.ANYID }}***.
![Administration – Accès privilégié – Fournisseurs – Modèles {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2173.png)
1. Cliquer sur ***Importer***.
![Importer un modèle {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2179.png)
1. Télécharger votre fichier .json, puis cliquer sur ***Importer***.
1. Adapter les paramètres du modèle si nécessaire, puis cliquer sur ***Enregistrer***.

Votre modèle a maintenant été importé et peut être trouvé dans la liste des ***Modèles {{ fr.ANYID }}***.

## Créer un fournisseur PAM {{ fr.ANYID }}
Une fois votre modèle créé ou importé, vous êtes prêt à créer un fournisseur {{ fr.ANYID }}.
1. Aller à ***Administration – Accès privilégié – Fournisseurs***, puis cliquer sur ***Ajouter***.
![Administration – Accès privilégié – Fournisseurs – Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2180.png)
1. Aller à ***{{ fr.ANYID }}*** dans le menu de gauche, puis sélectionner votre nouveau modèle dans la liste. Cliquer sur ***Continuer***.
![Sélection du modèle {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2181.png)
1. Dans la page de configuration du ***Fournisseur***, fournir un ***Nom*** et un ***Nom d'utilisateur***, car ces informations sont obligatoires. Ensuite, si nécessaire, définir les autres options selon vos besoins.
![Configuration du fournisseur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2182.png)
1. Cliquer sur ***Enregistrer***.

Votre nouveau fournisseur {{ fr.ANYID }} a été créé et peut être trouvé dans la liste des fournisseurs.
