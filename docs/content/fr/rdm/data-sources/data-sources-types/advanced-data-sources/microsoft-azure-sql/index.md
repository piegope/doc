---
eleventyComputed:
  title: Microsoft Azure SQL
  description: >-
    Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour sauvegarder et gérer les entrées.
---
Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour sauvegarder et gérer les entrées.

Les fonctionnalités suivantes sont également prises en charge :

* Groupe de disponibilité Always On
* Clustering
* Expédition des journaux
* Miroir de base de données

## Exigence minimale pour la base de données Azure SQL pour {{ fr.RDM }}

Microsoft Azure SQL offre différents niveaux de service dans son modèle d'achat pour les DTUS. Nous recommandons au minimum un forfait de niveau Standard S0 pour 5 utilisateurs et plus. Visitez leur site Web pour plus d'informations.

## Points forts

* Prend en charge la [Gestion des utilisateurs](/rdm/windows/commands/administration/management/user-management/) avec un modèle de sécurité supérieur.
* Prend en charge le [mode hors ligne](/rdm/windows/data-sources/offline-mode/) lorsque le serveur ou le réseau est indisponible.
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

![Microsoft Azure SQL - Général](https://cdnweb.devolutions.net/docs/RDMW6087_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Nom</p></td><td><p>Entrer un nom pour la source de données.</p></td></tr><tr><td><p>Hôte</p></td><td><p>Entrer le nom d'hôte du serveur ou l'adresse IP.</p></td></tr><tr><td><p>Mode de connexion</p></td><td><p>Spécifier le mode d'authentification à utiliser. Sélectionner entre :</p><ul><li><p><em><strong>Connexion à la base de données</strong></em></p></li><li><p><em><strong>Connexion personnalisée</strong></em></p></li><li><p><em><strong>Mot de passe Active Directory</strong></em></p></li><li><p><em><strong>Intégré Active Directory</strong></em></p></li><li><p><em><strong>Interactif Active Directory (avec support A2F)</strong></em></p></li></ul></td></tr><tr><td><p>Nom d'utilisateur</p></td><td><p>Entrer le nom d'utilisateur pour accéder à la base de données Azure SQL.</p></td></tr><tr><td><p>Mot de passe</p></td><td><p>Entrer le mot de passe pour accéder à la base de données Azure SQL.</p></td></tr><tr><td><p>Toujours demander le mot de passe</p></td><td><p>Demander le mot de passe lorsqu'un utilisateur se connecte à la source de données.</p></td></tr><tr><td><p>Autoriser le changement de nom d'utilisateur</p></td><td><p>Permettre l'édition du nom d'utilisateur lors de la connexion à la source de données (uniquement avec <em><strong>Toujours demander le mot de passe</strong></em> activé).</p></td></tr><tr><td><p>Base de données</p></td><td><p>Entrer le nom de la base de données Azure SQL.</p></td></tr><tr><td><p>Tester la base de données</p></td><td><p>Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.</p></td></tr></tbody></table>

&nbsp;

### Paramètres

![Microsoft Azure SQL - Onglet Paramètres](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11363.png)

\| OPTION          \| DESCRIPTION \| \|-----------------\|-------------\| \| Filtre racine     \| Entrer le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.               \| \| Méthode de ping en ligne \| Indiquer la méthode de ping en ligne préférée. Sélectionner entre :

* Aucun
* Ping
* Scan de port

\| \| Passer automatiquement hors ligne \| Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.                                \| \| Désactiver le verrouillage    \| Désactiver l'option de verrouiller directement la source de données. Vous pouvez toujours verrouiller l'application mais vous ne serez pas invité à entrer le mot de passe de la source de données si cette option est désactivée.                                                                                                           \|

&nbsp;

### {{ fr.UVLT_MAJ }}

![Microsoft Azure SQL – onglet](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3416.png)

\| OPTION \| DESCRIPTION \| \|--------\|-------------\| \| Type   \| Sélectionner le type de [{{ fr.UVLT }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/) à utiliser. Sélectionner entre :

* ***Par défaut*** : utiliser le {{ fr.UVLT }} par défaut, qui est stocké dans la base de données.
* ***Aucun*** : désactiver le {{ fr.UVLT }} pour tous les utilisateurs.
* ***{{ fr.DOD }}*** : utiliser un fichier {{ fr.DOD }} (\*.dod) comme {{ fr.UVLT }}.

\|

&nbsp;

### Mise à niveau

![Microsoft Azure SQL - Onglet Mise à niveau](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10377.png)

\| OPTION                \| DESCRIPTION \| \|-----------------------\|-------------\| \| Créer la base de données       \| Créer la base de données sur le serveur SQL pour utiliser {{ fr.RDM }}.                                     \| \| Mettre à jour la base de données       \| Mettre à jour la base de données sur le serveur SQL, si nécessaire pour utiliser {{ fr.RDM }}.                        \| \| Tester la base de données         \| Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies. \| \| Envoyer le schéma au support \| Envoyer votre schéma à notre équipe de support.                                                        \|

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre base de données Microsoft Azure SQL. ![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2253.png)

### Avancé

![Microsoft Azure SQL - Onglet Avancé](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10370.png)

\| OPTION                           \| DESCRIPTION \| \|----------------------------------\|-------------\| \| Mode de mise en cache                     \| Détermine comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter [Mise en cache](/rdm/windows/data-sources/caching/). \| \| Délai d'attente de connexion               \| Définir le délai d'attente de la connexion.                                              \| \| Délai d'attente de commande                  \| Définir le délai d'attente de la commande.                                                 \| \| Actualisation automatique                     \| Définir l'intervalle pour l'actualisation automatique.                                           \| \| Demander le mode hors ligne au démarrage \| Demander d'utiliser la source de données en mode hors ligne lorsqu'un utilisateur se connecte à la source de données. \| \| Autoriser la mise à niveau de la base de données bêta      \| Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de {{ fr.RDM }}).       \| \| Gérer le cache                     \| Gérer le cache de la source de données. Sur les grandes sources de données, la mise en cache est indispensable et augmentera considérablement les performances. Pour plus d'informations, veuillez consulter [Gérer le cache](/rdm/windows/data-sources/manage-cache/).                                                    \| \| Plus de paramètres                    \| Modifier directement les valeurs de la chaîne de connexion.                                           \|
