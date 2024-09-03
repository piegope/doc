---
_schema: default
eleventyComputed:
  title: Microsoft Azure SQL
  description: >-
    Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour enregistrer et gérer les entrées.
---
Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour enregistrer et gérer les entrées.

Les fonctionnalités suivantes sont également prises en charge :

* Groupe de disponibilité Always On
* Clustering
* Expédition de journaux
* Miroir de base de données

## Exigence minimale pour la base de données Azure SQL pour {{ fr.RDM }}

Microsoft Azure SQL offre différents niveaux de service dans son modèle d'achat pour les DTUS. Nous recommandons au minimum un forfait de niveau Standard S0 pour 5 utilisateurs et plus. Visitez leur site Web pour plus d'informations.

## Points forts

* Prend en charge la [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) avec un modèle de sécurité supérieur.
* Prend en charge le [Mode hors ligne](/rdm/windows/data-sources/offline-mode/) lorsque le serveur ou le réseau est indisponible.
* Prend en charge les journaux d'entrée et les pièces jointes.

{% snippet, "badgeHelp" %}
Obtenez plus d'informations sur [Microsoft Azure SQL](https://azure.microsoft.com/en-us/services/sql-database/).
{% endsnippet %}

{% snippet, "badgeWarning" %}
Une stratégie de sauvegarde de base de données appropriée doit être mise en œuvre pour éviter une éventuelle perte de données.
{% endsnippet %}

## Configuration

Consultez [Configurer Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/) pour plus d'informations sur la configuration.

## Paramètres

### Général

![Microsoft Azure SQL - General](https://cdnweb.devolutions.net/docs/RDMW6087_2024_2.png)

\| OPTION                \| DESCRIPTION \| \|-----------------------\|-------------\| \| Nom                  \| Saisir un nom pour la source de données.                                                                   \| \| Hôte                  \| Saisir le nom d'hôte ou l'adresse IP du serveur.                                                            \| \| Mode de connexion            \| Spécifier le mode d'authentification à utiliser. Sélectionner entre :

* ***Connexion à la base de données***
* ***Connexion personnalisée***
* ***Mot de passe Active Directory***
* ***Intégré Active Directory***
* ***Interactif Active Directory (avec support AMF)***

\| \| Nom d'utilisateur              \| Saisir le nom d'utilisateur pour accéder à la base de données Azure SQL.                                                \| \| Mot de passe              \| Saisir le mot de passe pour accéder à la base de données Azure SQL.                                                \| \| Toujours demander le mot de passe   \| Demander le mot de passe lorsqu'un utilisateur se connecte à la source de données.                                    \| \| Autoriser la modification du nom d'utilisateur \| Permettre la modification du nom d'utilisateur lors de la connexion à la source de données (uniquement avec ***Toujours demander le mot de passe*** activé). \| \| Base de données              \| Saisir le nom de la base de données Azure SQL.                                                           \| \| Deux facteurs            \| Activer l'[Authentification multifacteur](/rdm/windows/data-sources/multi-factor-authentication/).   \| \| Tester la base de données         \| Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.      \|

&nbsp;

### Paramètres

![Microsoft Azure SQL - Settings Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11363.png)

\| OPTION          \| DESCRIPTION \| \|-----------------\|-------------\| \| Filtre racine     \| Saisir le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.               \| \| Méthode de ping en ligne \| Indiquer la méthode de ping en ligne préférée. Sélectionner entre :

* Aucun
* Ping
* Analyse de port

\| \| Passer automatiquement hors ligne \| Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.                                \| \| Désactiver le verrouillage    \| Désactiver l'option de verrouiller directement la source de données. Vous pouvez toujours verrouiller l'application mais vous ne serez pas invité à saisir le mot de passe de la source de données si cette option est désactivée.                                                                                                           \|

&nbsp;

### {{ fr.UVLT_MAJ }}

![Microsoft Azure SQL –  tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3416.png)

\| OPTION \| DESCRIPTION \| \|--------\|-------------\| \| Type   \| Sélectionner le type de [{{ fr.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Sélectionner entre :

* ***Par défaut*** : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.
* ***Aucun*** : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.
* ***{{ fr.DOD }}*** : utiliser un fichier {{ fr.DOD }} (\*.dod) comme {{ fr.UVLT }}.

\|

&nbsp;

### Mise à niveau

![Microsoft Azure SQL - Upgrade Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10377.png)

\| OPTION                \| DESCRIPTION \| \|-----------------------\|-------------\| \| Créer la base de données       \| Créer la base de données sur le serveur SQL pour utiliser {{ fr.RDM }}.                                     \| \| Mettre à jour la base de données       \| Mettre à jour la base de données sur le serveur SQL, si nécessaire pour utiliser {{ fr.RDM }}.                        \| \| Tester la base de données         \| Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies. \| \| Envoyer le schéma au support \| Envoyer votre schéma à notre équipe de support.                                                        \|

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre base de données Microsoft Azure SQL. ![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2253.png)

### Avancé

![Microsoft Azure SQL - Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10370.png)

\| OPTION                           \| DESCRIPTION \| \|----------------------------------\|-------------\| \| Mode de mise en cache                     \| Détermine comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter [Mise en cache](/rdm/windows/data-sources/caching/). \| \| Délai d'expiration de la connexion               \| Définir le délai d'expiration de la connexion.                                              \| \| Délai d'expiration de la commande                  \| Définir le délai d'expiration de la commande.                                                 \| \| Actualisation automatique                     \| Définir l'intervalle pour l'actualisation automatique.                                           \| \| Demander le mode hors ligne au démarrage \| Demander d'utiliser la source de données en mode hors ligne lorsqu'un utilisateur se connecte à la source de données. \| \| Autoriser la mise à niveau de la base de données bêta      \| Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de {{ fr.RDM }}).       \| \| Gérer le cache                     \| Gérer le cache de la source de données. Sur les grandes sources de données, la mise en cache est indispensable et augmentera considérablement les performances. Pour plus d'informations, veuillez consulter [Gérer le cache](/rdm/windows/data-sources/manage-cache/).                                                    \| \| Plus de paramètres                    \| Modifier directement les valeurs de la chaîne de connexion.                                           \|
