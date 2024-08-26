---
eleventyComputed:
  title: Résolution des problèmes de scripts d'action dans {{ fr.DVLS }}
  description: Lorsque les scripts d'action échouent au sein de {{ fr.ANYID }}, il est essentiel de comprendre comment identifier et résoudre le problème.
---
Lorsque les [scripts d'action](/pam/kb/how-to-articles/create-anyidentity-action-scripts-dvls) échouent au sein de {{ fr.ANYID }}, il est essentiel de comprendre comment identifier et résoudre le problème. Plusieurs problèmes peuvent survenir avec un fournisseur {{ fr.ANYID }} en raison des différentes étapes impliquées. De plus, {{ fr.ANYID }} dépend fortement des scripts d'action pour son fonctionnement, et selon la complexité du fournisseur d'identité, ces scripts d'action peuvent devenir complexes.

Des problèmes peuvent survenir si le fournisseur n'est pas testé de manière approfondie au préalable. Les directives suivantes aideront à identifier les problèmes potentiels et fourniront des étapes pour le dépannage.

## 1. Identifier le problème

Le problème peut ne pas toujours être immédiatement apparent. Bien que les scripts d'action puissent fonctionner correctement isolément, {{ fr.ANYID }} peut ne pas appliquer les changements de mot de passe comme prévu. Par exemple, si les scripts d'action sont mal construits et renvoient des informations inexactes, {{ fr.ANYID }} peut utiliser ces informations pour prendre des décisions, en supposant que tout fonctionne correctement alors que ce n'est pas le cas.

Dans certains cas, le problème peut être plus évident, comme voir un message "Hors synchronisation" pour l'utilisateur dans le {{ fr.DPAM }} {{ fr.VLT }} ou remarquer un problème dans les [journaux PAM](/pam/server/pam-reports).

## 2. Identifier le script d'action impliqué

Puisque {{ fr.ANYID }} fonctionne principalement comme un orchestrateur de scripts, la majorité de sa fonctionnalité dépend des scripts d'action. Si une erreur apparaît dans la console {{ fr.DVLS }}, il est important d'identifier d'abord quel script d'action est impliqué. Cela nécessite une compréhension de la manière dont {{ fr.ANYID }} "mappe" la fonctionnalité aux scripts d'action à travers sa terminologie.

* Configuration de l'analyse : Les configurations d'analyse utilisent le script d'action de détection de compte.
* Synchronisation : {{ fr.ANYID }} utilise le terme "synchronisation" pour désigner l'exécution du script d'action de battement de cœur.
* Réinitialisation du mot de passe : L'initiation d'une réinitialisation de mot de passe dans {{ fr.ANYID }} implique à la fois les scripts d'action de rotation de mot de passe et de battement de cœur.

## 3. Tester les scripts d'action en dehors de {{ fr.ANYID }}.

Après avoir identifié les scripts d'action impliqués, il est conseillé de les tester en dehors de {{ fr.ANYID }} pour s'assurer que le problème ne provient pas du script d'action lui-même. Les mêmes paramètres définis via les paramètres de script lors de la création du modèle doivent être passés au script. Il est crucial de vérifier que le script PowerShell renvoie les résultats attendus pour {{ fr.ANYID }} :

* Détection de compte : Doit produire au moins un objet `pscustomobject` avec les propriétés `id`, `username`, et `secret`.
* Battement de cœur : Doit avoir des paramètres `username` et `secret` et renvoyer une seule valeur booléenne, soit `$true` soit `$false`.
* Rotation de mot de passe : Doit inclure des paramètres pour le point d'accès du fournisseur d'identité, le nom d'utilisateur du point d'accès, le mot de passe du point d'accès, et un paramètre spécifiquement nommé `NewPassword`.
