---
_schema: default
eleventyComputed:
  title: >-
    HTTP Status Code Unauthorized error message when connecting to {{ fr.DVLS}}
    from {{ fr.RDM }}
  description: >-
    When the Basic Authentication option is enabled on the {{ fr.DVLS}} website
    Authentication feature, {{ fr.RDM}} displays the following error message:
  status:
  keywords:
---
When the ***Basic Authentication option*** is enabled on the {% var, "DVLS" false %} website Authentication feature, {% var, "RDM" false %} displays the following error message:

![HTTPStatusCode: Unauthorized error message](https://cdnweb.devolutions.net/docs/RDMW6075_2024_2.png "HTTPStatusCode: Unauthorized error message")

Here are the steps to solve this problem.

1. Ouvrir ***IIS Manager***.
2. Développer l'arborescence dans le ***volet de gauche***.
3. Sélectionner le site Web ou l'application {% var, "DVLS" false %}.
4. Ouvrir la ***fonctionnalité d'authentification***.
5. Désactiver l'***authentification de base***.

![Disable Basic Authentication in IIS Manager](https://cdnweb.devolutions.net/docs/RDMW6077_2024_2.png "Disable Basic Authentication in IIS Manager")

Si d'autres sites sur cette machine ne nécessitent pas l'***authentification de base***, il est possible de la désinstaller à partir des ***rôles de serveur*** dans le ***gestionnaire de serveur***.
