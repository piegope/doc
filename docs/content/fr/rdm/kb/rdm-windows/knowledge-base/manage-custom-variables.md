---
eleventyComputed:
  title: Gérer les variables personnalisées
  description: >-
    {{ fr.RDM }} dispose de listes de toutes les variables personnalisées qui peuvent être gérées à deux endroits différents selon leur utilisation prévue.
---
{{ fr.RDM }} dispose de listes de toutes les variables personnalisées, qui peuvent être gérées à trois endroits différents selon leur utilisation prévue.

1\. Pour créer, modifier ou supprimer des variables personnalisées, aller à ***Fichier*** – ***Paramètres*** – ***Applications*** – ***Variables personnalisées***. Chaque variable nécessite au moins un ***Nom*** et une ***Valeur***. Noter que ces [variables](/rdm/concepts/intermediate-concepts/variables/) sont spécifiques à l'utilisateur et peuvent être utilisées dans toutes les sources de données.

![User-specific local custom variables](https://cdnweb.devolutions.net/docs/RDMW4008_2024_1.png)

2\. Les variables personnalisées peuvent également être gérées dans ***Administration*** – ***Paramètres {{ fr.VLT_MAJ }}*** – ***Afficher*** – ***Variables***. Chacune nécessite au moins un ***Nom***, une ***Valeur*** et une ***Description***. Tous les utilisateurs ayant accès aux ***Paramètres {{ fr.VLT_MAJ }}*** peuvent les voir et les utiliser, mais elles ne peuvent être utilisées que dans ce {{ fr.VLT }} spécifique.

![-specific custom variables](https://cdnweb.devolutions.net/docs/RDMW4009_2024_1.png)

3\. Il est également possible de gérer des variables personnalisées dans ***Administration*** – ***Paramètres système*** – ***Commun*** – ***Variables personnalisées***. Elles fonctionnent exactement comme celles situées dans les ***Paramètres {{ fr.VLT_MAJ }}***, sauf qu'elles sont spécifiques à l'ensemble de la source de données.

![Data source custom variables](https://cdnweb.devolutions.net/docs/DVLS4053_2024_2.png "Data source custom variables")

{% snippet, "badgeHelp" %}
Les variables personnalisées apparaîtront également dans la sous-section ***Variables personnalisées*** située sous ***Général*** dans la fenêtre ***Variables d'entrée*** des ***Propriétés*** de l'entrée, comme indiqué dans [Accéder et gérer les variables](/rdm/kb/rdm-windows/knowledge-base/access-manage-rdm-variables/).
{% endsnippet %}
