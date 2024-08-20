---
eleventyComputed:
  title: Licenses
  description: Gérer l'enregistrement globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans Administration – Licenses.
---
Gérer l'enregistrement globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans ***Administration – Licenses***. Les licences ont un nombre limité d'utilisateurs et peuvent être attribuées automatiquement avec ***Auto assign*** ou à des utilisateurs spécifiques dans l'onglet ***Assigned to***.
![Adding a license](https://cdnweb.devolutions.net/docs/DVLS0015_2024_2.png)

Voici les différents types de licences qui peuvent être ajoutés dans {{ fr.DVLS }} :
* {{ fr.RDM }}
* {{ fr.DLAUNCHER }}
* [{{ fr.DGW }}](/dgw/overview/what-is-dgw/) module
* [Gestion des accès privilégiés (PAM)](/pam/overview/what-is-pam/) module
* Intégrations PAM tierces (CyberArk, Delinea Secret Server, BeyondTrust)
* Licence d'accès client (user CAL)

{% snippet, "badgeInfo" %}
Seule la licence CyberArk a un nombre illimité d'utilisateurs.

Une licence {{ fr.DGW }} n'est pas nécessaire lors de la configuration d'une passerelle, seulement lors de l'ouverture d'une connexion.
{% endsnippet %}

## Général
![General](https://cdnweb.devolutions.net/docs/DVLS0016_2024_2.png)

| Option      | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| License     | Entrer la licence à stocker.                                                                     |
| Import      | Importer la licence en utilisant un fichier **LIC**.                                             |
| Auto assign | Attribuer automatiquement la clé de licence à chaque nouveau compte utilisateur (non disponible pour les licences PAM). |

## Assigné à
![Assigned to](https://cdnweb.devolutions.net/docs/DVLS0017_2024_2.png)

| Option         | Description                                                          |
|----------------|----------------------------------------------------------------------|
| Filter         | Filtrer la liste en fonction de la colonne ***Name*** ou ***Description***. |
| Assign all     | Attribuer la licence à tous les comptes.                              |
| Assign missing | Attribuer la licence aux comptes qui ne sont pas déjà sélectionnés.   |
| Clear all      | Retirer la licence de tous les comptes.                               |