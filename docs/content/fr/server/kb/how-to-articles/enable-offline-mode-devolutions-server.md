---
_schema: défaut
eleventyComputed:
  title: Activer le mode hors ligne
  description: >-
    Configurer le mode hors ligne dans {{ fr.DVLS }} permet aux utilisateurs ou groupes d'accéder aux ressources sans nécessiter une connexion internet continue.
---
Configurer le ***mode hors ligne*** permet aux utilisateurs ou groupes d'accéder aux ressources sans nécessiter une connexion internet continue lors de l'utilisation d'une [source de données](/rdm/concepts/basic-concepts/data-sources/) {{ fr.DVLS }} dans {% var, "RDM" false %}.

## Activer le mode hors ligne dans {% var, "DVLS" false %}

1. Se connecter à l'interface web de {{ fr.DVLS }}, naviguer vers la section ***Administration***, et choisir d'activer le mode hors ligne pour des ***Utilisateurs*** individuels ou pour des ***Groupes d'utilisateurs***. ![Administration – Utilisateurs/Groupes d'utilisateurs](https://cdnweb.devolutions.net/docs/DVLS4018_2024_1.png)
2. Trouver et sélectionner l'utilisateur ou le groupe dans la liste, et cliquer sur le bouton ***Modifier***. ![Liste des utilisateurs et bouton Modifier](https://cdnweb.devolutions.net/docs/DVLS6078_2024_1.png)
3. Dans le menu de modification, cliquer sur ***Paramètres***, et sélectionner le mode hors ligne approprié. ![Paramètres – Mode hors ligne](https://cdnweb.devolutions.net/docs/DVLS4021_2024_1.png)

{% snippet, "badgeNotice" %}
S'assurer que les utilisateurs ou groupes ont les permissions nécessaires pour fonctionner avec une connectivité réduite, et mettre à jour et synchroniser régulièrement les paramètres lorsque la connectivité est disponible pour maintenir la sécurité et la fonctionnalité.
{% endsnippet %}

## Activer le mode hors ligne dans {% var, "RDM" false %}

1. Ouvrir {% var, "RDM" false %}.
2. Sélectionner la [source de données](/concepts/basic-concepts/data-sources/) {% var, "DVLS" false %}.
3. Activer le [mode hors ligne](/rdm/concepts/intermediate-concepts/offline/) en cliquant sur ***Fichier - Passer hors ligne***.![Fichier - Passer hors ligne](https://cdnweb.devolutions.net/docs/RDMW6096_2024_2.png)
4. La [source de données](/concepts/basic-concepts/data-sources/) {% var, "DVLS" false %} est maintenant disponible en mode hors ligne.

![Mode hors ligne](https://cdnweb.devolutions.net/docs/RDMW6097_2024_2.png)
