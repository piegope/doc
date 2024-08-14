---
_schema: default
eleventyComputed:
  title: >-
    Message d'erreur HTTP Status Code Unauthorized lors de la connexion à {{ fr.DVLS}}
    depuis {{ fr.RDM }}
  description:
  status:
  keywords:
---
Lorsque l'***option d'authentification de base*** est activée sur la fonctionnalité d'authentification du site Web {% var, "DVLS" false %}, {% var, "RDM" false %} affiche le message d'erreur suivant :

![HTTPStatusCode: Unauthorized error message](https://cdnweb.devolutions.net/docs/RDMW6075_2024_2.png "HTTPStatusCode: Unauthorized error message")

Voici les étapes pour résoudre ce problème.

1. Ouvrir ***IIS Manager***.
2. Développer l'arborescence dans le ***volet de gauche***.
3. Sélectionner le site Web ou l'application {% var, "DVLS" false %}.
4. Ouvrir la fonctionnalité ***Authentication***.
5. Désactiver l'***authentification de base***.

![Disable Basic Authentication in IIS Manager](https://cdnweb.devolutions.net/docs/RDMW6076_2024_2.png "Disable Basic Authentication in IIS Manager")

Si d'autres sites sur cette machine ne nécessitent pas l'***authentification de base***, vous pouvez la désinstaller des ***rôles de serveur*** dans le ***gestionnaire de serveur***.
