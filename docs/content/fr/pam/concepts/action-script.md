---
_schema: défaut
eleventyComputed:
  title: Script d'action
  description: >-
    Un script d'action est la manière dont un fournisseur {{ fr.ANYID }} implémente ses actions.
---
Un ***script d'action*** est la manière dont un fournisseur {{ fr.ANYID }} implémente ses actions.

{{ fr.DPAM }} prend en charge deux types de fournisseurs différents : gérés et {{ fr.ANYID }} (AnyId). Les deux fournisseurs utilisent des actions pour faire tourner les mots de passe, mais ils exécutent ces actions différemment. Les fournisseurs gérés (et leurs actions) sont développés en interne et intégrés directement dans {{ fr.DPAM }}. En revanche, les fournisseurs {{ fr.ANYID }} implémentent des actions via des scripts PowerShell personnalisables par l'utilisateur. Un script d'action exécute la fonctionnalité de l'action.

Pour les fournisseurs {{ fr.ANYID }}, {{ fr.DPAM }} fonctionne comme le coordinateur d'action, déléguant des tâches aux scripts d'action pour découvrir, comparer et changer les mots de passe lors de la réception de demandes de rotation de mot de passe.

{% snippet, "badgeInfo" %}
Les scripts d'action sont uniquement accessibles lors de la création de modèles {{ fr.ANYID }}. Une fois créés, les scripts d'action ne sont pas visibles lors de la gestion des fournisseurs {{ fr.ANYID }}.
{% ENDSNIPPET %}
