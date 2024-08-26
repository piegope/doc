---
_schema: default
eleventyComputed:
  title: Gérer les variables personnalisées
  description: >-
    {{ fr.RDM }} dispose de listes de toutes les variables personnalisées qui peuvent être gérées à deux endroits différents selon leur utilisation prévue.
---
{{ fr.RDM }} dispose de listes de toutes les variables personnalisées, qui peuvent être créées, modifiées ou supprimées à trois endroits différents selon leur utilisation prévue.

1\. Dans ***Fichier*** – ***Paramètres*** – ***Applications*** – ***Variables personnalisées***, chaque variable nécessite au moins un ***Nom*** et une ***Valeur***. Notez que ces [variables](/rdm/concepts/intermediate-concepts/variables/) sont spécifiques à l'utilisateur et peuvent être utilisées dans toutes les sources de données.

![Variables personnalisées locales spécifiques à l'utilisateur](https://cdnweb.devolutions.net/docs/RDMW4008_2024_1.png)

2\. Dans ***Administration*** – ***Paramètres {{ fr.VLT_MAJ }}*** – ***Vue*** – ***Variables***, chaque variable nécessite au moins un ***Nom***, une ***Valeur*** et une ***Description***. Tous les utilisateurs ayant accès aux ***Paramètres {{ fr.VLT_MAJ }}*** peuvent les voir et les utiliser, mais elles ne peuvent être utilisées que dans ce {{ fr.VLT }} spécifique.

![-variables personnalisées spécifiques](https://cdnweb.devolutions.net/docs/RDMW4009_2024_1.png)

3\. Dans ***Administration*** – ***Paramètres système*** – ***Commun*** – ***Variables personnalisées***, elles fonctionnent exactement comme celles situées dans les ***Paramètres {{ fr.VLT_MAJ }}***, sauf qu'elles sont spécifiques à l'ensemble de la source de données.

![Variables personnalisées de la source de données](https://cdnweb.devolutions.net/docs/DVLS4053_2024_2.png "Variables personnalisées de la source de données")

{% snippet, "badgeHelp" %}
Les variables personnalisées apparaîtront également dans la sous-section ***Variables personnalisées*** située sous ***Général*** dans la fenêtre ***Variables d'entrée*** des ***Propriétés*** de l'entrée, comme indiqué dans [Accéder et gérer les variables](/rdm/kb/rdm-windows/knowledge-base/access-manage-rdm-variables/).
{% endsnippet %}
