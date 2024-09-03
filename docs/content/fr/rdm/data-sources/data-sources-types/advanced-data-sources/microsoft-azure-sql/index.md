---
eleventyComputed:
  title: Microsoft Azure SQL
  description: >-
    Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la
    plateforme cloud de Microsoft pour enregistrer et gérer les entrées.
---
Avec une source de données Microsoft Azure SQL, {{ fr.RDM }} utilise la plateforme cloud de Microsoft pour enregistrer et gérer les entrées.

Les fonctionnalités suivantes sont également prises en charge :

* Groupe de disponibilité Always On
* Clustering
* Expédition des journaux
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
Une stratégie de sauvegarde de base de données appropriée doit être mise en œuvre pour éviter toute perte de données possible.
{% endsnippet %}

## Configuration

Consultez [Configurer Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/configure/) pour plus d'informations sur la configuration.

## Paramètres

### Général

![Microsoft Azure SQL - Onglet Général](https://cdnweb.devolutions.net/docs/RDMW6087_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Nom</p></td><td><p>Entrer un nom pour la source de données.</p></td></tr><tr><td><p>Hôte</p></td><td><p>Entrer le nom d'hôte du serveur ou l'adresse IP.</p></td></tr><tr><td><p>Mode de connexion</p></td><td><p>Spécifier le mode d'authentification à utiliser. Sélectionner entre :</p><ul><li><p><em><strong>Connexion à la base de données</strong></em></p></li><li><p><em><strong>Connexion personnalisée</strong></em></p></li><li><p><em><strong>Mot de passe Active Directory</strong></em></p></li><li><p><em><strong>Intégré Active Directory</strong></em></p></li><li><p><em><strong>Interactif Active Directory (avec support A2F)</strong></em></p></li></ul></td></tr><tr><td><p>Nom d'utilisateur</p></td><td><p>Entrer le nom d'utilisateur pour accéder à la base de données Azure SQL.</p></td></tr><tr><td><p>Mot de passe</p></td><td><p>Entrer le mot de passe pour accéder à la base de données Azure SQL.</p></td></tr><tr><td><p>Toujours demander le mot de passe</p></td><td><p>Demander le mot de passe lorsqu'un utilisateur se connecte à la source de données.</p></td></tr><tr><td><p>Autoriser le changement de nom d'utilisateur</p></td><td><p>Permettre l'édition du nom d'utilisateur lors de la connexion à la source de données (uniquement avec <em><strong>Toujours demander le mot de passe</strong></em> activé).</p></td></tr><tr><td><p>Base de données</p></td><td><p>Entrer le nom de la base de données Azure SQL.</p></td></tr><tr><td><p>Tester la base de données</p></td><td><p>Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.</p></td></tr></tbody></table>

&nbsp;

### Paramètres

![Microsoft Azure SQL - Onglet Paramètres](https://cdnweb.devolutions.net/docs/RDMW6088_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Filtre racine</p></td><td><p>Entrer le nom d'un dossier de niveau racine pour afficher uniquement les entrées contenues dans ce dossier.</p></td></tr><tr><td><p>Méthode de ping en ligne</p></td><td><p>Indiquer la méthode de ping en ligne préférée. Sélectionner entre :</p><ul><li><p>Aucun</p></li><li><p>Ping</p></li><li><p>Scan de port</p></li></ul></td></tr><tr><td><p>Passer automatiquement en mode hors ligne lors de l'invite hors ligne </p></td><td><p>Utiliser la source de données en mode hors ligne lorsque la méthode de ping ne répond pas.</p></td></tr></tbody></table>

&nbsp;

### {{ fr.UVLT_MAJ }}

![Microsoft Azure SQL – Onglet coffre de l'utilisateur](https://cdnweb.devolutions.net/docs/RDMW6089_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Type</p></td><td><p>Sélectionner le type de <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/user-vault/">{% var, "UVLT" false %}</a> à utiliser. Sélectionner entre :</p><ul><li><p><em><strong>Par défaut</strong></em> : utiliser le {% var, "UVLT" false %} par défaut, qui est stocké dans la base de données.</p></li><li><p><em><strong>Aucun</strong></em> : désactiver le {% var, "UVLT" false %} pour tous les utilisateurs.</p></li><li><p><em><strong>{% var, "DOD" false %}</strong></em> : utiliser un <em><strong>{% var, "DOD" false %}</strong></em> (*.dod) comme {% var, "UVLT" false %}.</p></li></ul></td></tr><tr><td><p>Clé maîtresse</p></td><td><p></p></td></tr><tr><td><p>Toujours demander la clé maîtresse </p></td><td><p></p></td></tr></tbody></table>

&nbsp;

### Mise à niveau

![Microsoft Azure SQL - Onglet Mise à niveau](https://cdnweb.devolutions.net/docs/RDMW6092_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Créer la base de données</p></td><td><p>Créer la base de données sur le serveur SQL pour utiliser Remote Desktop Manager.</p></td></tr><tr><td><p>Mettre à jour la base de données</p></td><td><p>Mettre à jour la base de données sur le serveur SQL, si nécessaire pour utiliser Remote Desktop Manager.</p></td></tr><tr><td><p>Tester la base de données</p></td><td><p>Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.</p></td></tr><tr><td><p>Envoyer le schéma par courriel au support</p></td><td><p>Envoyer votre schéma à notre équipe de support.</p></td></tr></tbody></table>

###

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre base de données Microsoft Azure SQL. ![Microsoft Azure SQL - VPN](https://cdnweb.devolutions.net/docs/RDMW6090_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Type</p></td><td><p>Sélectionner entre <em><strong>Aucun</strong></em> ou <em><strong>À la première connexion</strong></em>.</p></td></tr><tr><td><p>Fichier RDM</p></td><td><p>Ouvrir un <em><strong>type d'entrée VPN</strong></em> à partir d'un <em><strong>fichier RDM</strong></em> avant de se connecter à la source de données.</p></td></tr><tr><td><p>Remplacer les identifiants</p></td><td><p>Remplacer les identifiants tels que <em><strong>Nom d'utilisateur, Domaine</strong></em>, et <em><strong>Mot de passe</strong></em>.</p></td></tr></tbody></table>

### Avancé

![Microsoft Azure SQL - Onglet Avancé](https://cdnweb.devolutions.net/docs/RDMW6093_2024_2.png)

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Mode de mise en cache</p></td><td><p>Déterminer comment les entrées seront rechargées dans la source de données. Pour plus d'informations, veuillez consulter <a href="https://docs.devolutions.net/rdm/windows/data-sources/caching/">Mise en cache</a>.</p></td></tr><tr><td><p>Certificat de confiance </p></td><td><p>Définir comment la source de données gère les certificats.</p></td></tr><tr><td><p>Délai d'expiration de la connexion</p></td><td><p>Définir le délai d'expiration de la connexion.</p></td></tr><tr><td><p>Délai d'expiration de la commande</p></td><td><p>Définir le délai d'expiration de la commande.</p></td></tr><tr><td><p>Actualisation automatique</p></td><td><p>Définir l'intervalle pour l'actualisation automatique.</p></td></tr><tr><td><p>Demander le mode hors ligne au démarrage</p></td><td><p>Demander d'utiliser la source de données en mode hors ligne lorsqu'un utilisateur se connecte à la source de données.</p></td></tr><tr><td><p>Autoriser la mise à niveau de la base de données bêta</p></td><td><p>Autoriser la mise à niveau bêta de la base de données (lors de l'utilisation d'une version bêta de Remote Desktop Manager).</p></td></tr><tr><td><p>Gérer le cache</p></td><td><p>Gérer le cache de la source de données. Sur les grandes sources de données, la mise en cache est indispensable et augmentera considérablement les performances. Pour plus d'informations, veuillez consulter <a href="https://docs.devolutions.net/rdm/windows/data-sources/manage-cache/">Gérer le cache</a>.</p></td></tr><tr><td><p>Plus de paramètres</p></td><td><p>Modifier directement les valeurs de la chaîne de connexion.</p></td></tr></tbody></table>
