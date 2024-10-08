---
eleventyComputed:
  title: Rapports PAM dans {{ fr.DVLS }}
  description: Lorsque les fournisseurs exécutent des actions, ces actions sont enregistrées dans un ensemble de journaux qui peuvent être inspectés dans {{ fr.DVLS }}.
---
Lorsque les fournisseurs exécutent des actions, ces actions sont enregistrées dans un ensemble de journaux qui peuvent être inspectés dans {{ fr.DVLS }}. Tous les journaux peuvent être trouvés dans la section ***Rapports*** de {{ fr.DVLS }}.

![PAM reports](https://cdnweb.devolutions.net/docs/DVLS2037_2024_2.png)

* ***Accès privilégié*** : Après qu'un compte a été importé dans un {{ fr.DPAM }} {{ fr.VLT }}, l'activité commencera à apparaître dans ***Accès privilégié - Activités récentes***. Ce journal fournit un enregistrement de l'activité à la fois pour les comptes individuels et pour le fournisseur lui-même. Dans ce journal, il est possible d'obtenir des informations sur les activités de pulsation et de rotation des mots de passe pour les comptes, bien que des informations plus détaillées concernant la rotation des mots de passe puissent être trouvées dans le rapport ***Accès privilégié - Rotation des mots de passe***.
!["Out of sync" warning](https://cdnweb.devolutions.net/docs/ab_providers-troubleshooting-logs_2-4.png)
* ***Journaux de la source de données*** : Bien que non spécifique à l'activité PAM, lorsqu'un problème survient dans un script d'action {{ fr.ANYID }}, par exemple, l'activité peut être enregistrée dans les journaux de la source de données. Cette section contient des informations plus générales ainsi que des messages d'erreur spécifiques renvoyés par les scripts d'action.
!["Out of sync" warning](https://cdnweb.devolutions.net/docs/ab_providers-troubleshooting-logs_4-4.png)
