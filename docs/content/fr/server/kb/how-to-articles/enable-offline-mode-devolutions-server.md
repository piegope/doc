---
_schema: default
eleventyComputed:
  title: Activer le mode hors connexion
  description: >-
    Configurer le mode hors connexion dans {{ fr.DVLS }} permet aux utilisateurs ou groupes d'accéder aux ressources sans nécessiter une connexion Internet continue.
---
Configurer le ***mode hors connexion*** permet aux utilisateurs ou groupes d'accéder aux ressources sans nécessiter une connexion Internet continue lors de l'utilisation d'une [source de données](/rdm/concepts/basic-concepts/data-sources/) dans {% var, "RDM" false %}.

## Activer le mode hors connexion

1. Se connecter à l'interface web de {{ fr.DVLS }}, naviguer vers la section ***Administration***, et choisir d'activer le mode hors connexion pour des ***Utilisateurs*** individuels ou pour des ***Groupes d'utilisateurs***. ![Administration – Utilisateurs/Groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS4018_2024_1.png)
2. Trouver et sélectionner l'utilisateur ou le groupe dans la liste, et cliquer sur le bouton ***Modifier***. ![Liste des utilisateurs et bouton Modifier](https://cdnweb.devolutions.net/docs/DVLS4019_2024_1.png)
3. Dans le menu de modification, cliquer sur ***Paramètres***, et sélectionner le mode hors connexion approprié. ![Paramètres – Mode hors connexion](https://cdnweb.devolutions.net/docs/DVLS4021_2024_1.png)

{% snippet, "badgeNotice" %}
S'assurer que les utilisateurs ou groupes ont les permissions nécessaires pour fonctionner avec une connectivité réduite, et mettre à jour et synchroniser régulièrement les paramètres lorsque la connectivité est disponible pour maintenir la sécurité et la fonctionnalité.
{% endsnippet %}
