---
_schema: default
eleventyComputed:
  title: Action script
  description: >-
    An action script is how an {{ en.ANYID }} provider implements its actions.
---
An ***action script*** is how an {{ en.ANYID }} provider implements its actions.

{{ en.DPAM }} supports two different types of providers: managed and {{ en.ANYID }} (AnyId). Both providers use actions to rotate passwords, but they perform these actions differently. Managed providers (and their actions) are developed internally and integrated directly into {{ en.DPAM }}. In contrast, {{ en.ANYID }} providers implement actions through user-customizable PowerShell scripts. An action script executes the functionality of the action.

For {{ en.ANYID }} providers, {{ en.DPAM }} functions as the action coordinator, delegating tasks to action scripts to discover, compare, and change passwords upon receiving password rotation requests.

{% snippet, "badgeInfo" %}
Action scripts are only accessible during the creation of {{ en.ANYID }} templates. Once created, action scripts are not visible when managing {{ en.ANYID }} providers.
{% endsnippet %}