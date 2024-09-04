---
eleventyComputed:
  title: Importer un fournisseur PAM {{ fr.ANYID }}
  description: Importer un fournisseur PAM {{ fr.ANYID }} en suivant les étapes ci-dessous.
---
Importer un fournisseur PAM {{ fr.ANYID }} en suivant les étapes ci-dessous.

1. Pour créer le fournisseur, naviguer d'abord vers ***Administration – Accès privilégié*** dans {{ fr.DVLS }} et sélectionner ***Fournisseurs***.
![Administration – Accès privilégié – Fournisseurs](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_1-7.png)
1. Cliquer sur le signe + pour ajouter un fournisseur.
![Ajouter un fournisseur](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_2-7.png)
1. Sélectionner ***{{ fr.ANYID }}*** puis choisir votre modèle. Un modèle de fournisseur existant nommé ***Microsoft SQL Server Login*** est affiché ici.
![Sélectionner un fournisseur {{ fr.ANYID }}](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_3-7.png)
1. Définir un nom et fournir des valeurs pour toutes les propriétés du fournisseur. Dans la capture d'écran ci-dessous, la propriété du fournisseur ***Serveur*** est marquée comme ***Obligatoire*** dans le modèle, indiquée par l'astérisque rouge et le cadre rouge autour du champ.
![Propriétés du fournisseur](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_4-7.png)

{% snippet, "badgeNotice" %}
Les fournisseurs {{ fr.ANYID }} sont conçus pour se connecter à un point de terminaison de fournisseur d'identité unique. Il est généralement recommandé de créer un fournisseur {{ fr.ANYID }} par fournisseur d'identité.
{% endsnippet %}

Après avoir fourni des valeurs pour toutes les propriétés du fournisseur, il y a une option pour [ajouter un PAM {{ fr.VLT }}](https://docs.devolutions.net/pam/hub/pam-vaults/#pam-vault-setup) pour le fournisseur ou pour ajouter une configuration de scan. Par défaut, ***Ajouter PAM {{ fr.VLT }}*** est sélectionné ; voir [Configuration de scan](/pam/scan-configurations/) pour en savoir plus sur l'ajout d'une.

![Ajouter PAM {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_5-7.png)

Sur cette page, un identifiant peut également être spécifié pour exécuter toutes les actions, ou un hôte Windows spécifique peut être désigné pour exécuter les actions.

![Identifiant et hôte Windows](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_6-7.png)

{% snippet, "badgeInfo" %}
Par défaut, un fournisseur {{ fr.ANYID }} exécute toutes les actions sur {{ fr.DVLS }} sous le compte utilisateur ***NETWORK SERVICE***. Si un nom d'utilisateur et un mot de passe sont spécifiés sous ***Exécuter en tant que***, {{ fr.ANYID }} tentera d'abord de s'authentifier sur le {{ fr.DVLS }} en utilisant ce compte utilisateur et exécutera tous les scripts d'action sous ce compte. Si un ***Nom d'hôte*** est spécifié, {{ fr.ANYID }} suppose un hôte Windows distant et tentera d'exécuter tous les scripts d'action localement sur cet hôte via [PowerShell remoting](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/08-powershell-remoting?view=powershell-7.4).
{% endsnippet %}

Enfin, sous ***Paramètres***, un [modèle de mot de passe](/rdm/commands/file/templates/password-templates/) personnalisé peut être fourni, si nécessaire. Tous les modèles de mot de passe personnalisés disponibles peuvent être trouvés sous ***Administration – Modèles de mot de passe***. Lorsque l'action de rotation du mot de passe s'exécute, elle utilisera le modèle de mot de passe défini ici pour générer un nouveau mot de passe.

![Modèle de mot de passe](https://cdnweb.devolutions.net/docs/ab_getting-started-anyidentity-import-provider_7-7.png)
