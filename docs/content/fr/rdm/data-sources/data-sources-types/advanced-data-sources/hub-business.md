---
eleventyComputed:
  title: '{{ fr.DHUBB }}'
  description: >-
    {{ fr.DHUBB }} est destiné aux entreprises qui ont besoin de partager des mots de passe et des identifiants au sein de leur organisation.
_schema: default
---

{% youtube 'wI4Jn3zLC8U' %}

{{ fr.DHUBB }} est destiné aux entreprises qui ont besoin de partager des mots de passe et des identifiants au sein de leur organisation.

Veuillez consulter notre [site Web](https://devolutions.net/password-hub/) pour plus d'informations sur ce service.

{% snippet, "badgeInfo" %}
Commencez votre [essai gratuit de {{ fr.DHUBB }}](https://devolutions.net/password-hub/business/sign-up) dès aujourd'hui !
{% endsnippet %}

## Paramètres

### Général

![Onglet Général](https://cdnweb.devolutions.net/docs/HUBB6004_2024_2.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Nom</p></td><td><p>Nom de la source de données.</p></td></tr><tr><td><p>Courriel</p></td><td><p>L'adresse courriel de votre <a href="https://portal.devolutions.com/">compte Devolutions</a>.</p></td></tr><tr><td><p>Hôte</p></td><td><p>Copier dans l'<em><strong>Hôte</strong></em> votre URL Devolutions Hub Business (ex : https://windjammer.devolutions.app/) ou cliquer sur les 3 points pour obtenir une liste déroulante à sélectionner.</p></td></tr></tbody></table>

### VPN

Ouvrir un VPN pour accéder à vos données avant de vous connecter à votre {{ fr.DHUB }}. ![Onglet VPN](https://cdnweb.devolutions.net/docs/HUBB6001_2024_2.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Type</p></td><td><p>Sélectionner entre <em><strong>Aucun</strong></em> ou <em><strong>À la première connexion</strong></em>.</p></td></tr><tr><td><p>Fichier RDM</p></td><td><p>Ouvrir un <em><strong>type d'entrée VPN</strong></em> à partir d'un <em><strong>fichier RDM</strong></em> avant de se connecter à la source de données.</p></td></tr><tr><td><p>Remplacer les identifiants</p></td><td><p>Remplacer les identifiants tels que <em><strong>Nom d'utilisateur, Domaine</strong></em>, et <em><strong>Mot de passe</strong></em>.</p></td></tr></tbody></table>

### PowerShell

Entrer les informations de l'application. Le [module Devolutions.PowerShell](/powershell/overview/what-is-powershell/)([cmdlets RDM](/rdm/commands/tools/tools/powershell/)) utilise les informations de l'application pour l'authentification, permettant une connexion transparente sans intervention de l'utilisateur (c'est-à-dire ouverture de page Web).

![Onglet PowerShell](https://cdnweb.devolutions.net/docs/HUBB6005_2024_2.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>ID de locataire</p></td><td><p>Entrer l'<em><strong>ID de locataire</strong></em>.</p></td></tr><tr><td><p>Mot de passe</p></td><td><p>Entrer le <em><strong>Mot de passe</strong></em>.</p></td></tr></tbody></table>

### Avancé

Définir l'intervalle pour le rafraîchissement automatique. ![Onglet Avancé](https://cdnweb.devolutions.net/docs/HUBB6006_2024_2.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Rafraîchissement automatique</p></td><td><p>Sélectionner l'intervalle de temps pour rafraîchir automatiquement la source de données.</p></td></tr><tr><td><p>Inviter à rafraîchir tous les coffres au démarrage</p></td><td><p>Inviter à rafraîchir tous les <a href="/rdm/concepts/basic-concepts/vaults/">{% var, "VLT" false %}</a> au démarrage.</p></td></tr><tr><td><p>Taille maximale du fichier (Mo)</p></td><td><p>Choisir la <em><strong>taille maximale du fichier (Mo)</strong></em> à appliquer aux <em><strong>documents</strong></em> et <em><strong>pièces jointes</strong></em>.</p></td></tr><tr><td><p>Délai d'attente de la requête Http</p></td><td><p>Sélectionner l'intervalle de temps pour le <em><strong>délai d'attente de la requête Http</strong></em>.</p></td></tr></tbody></table>
