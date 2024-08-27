---
eleventyComputed:
  title: Gestionnaire de sauvegarde
  description: La section Gestionnaire de sauvegarde permet aux administrateurs de configurer les paramètres pour sauvegarder la base de données et le dossier de l'application web.
---
La section ***Gestionnaire de sauvegarde*** permet aux administrateurs de configurer les paramètres pour sauvegarder la base de données et le dossier de l'application web. Cliquer sur le bouton ***Sauvegarder maintenant*** en haut pour créer immédiatement une sauvegarde de la base de données SQL et/ou du dossier de l'application web.

{% snippet, "badgeInfo" %}
* Les tâches de sauvegarde planifiées sont déclenchées par le compte de service du planificateur.
* Les tâches de sauvegarde initiées manuellement sont déclenchées par l'identité du pool d'applications.
* Les sauvegardes de base de données sont toujours gérées par le compte de service SQL Server. Initialement, un fichier **.bak** est créé, qui est ensuite supprimé par le compte qui a initié la sauvegarde (soit l'identité du pool d'applications, soit le compte de service du planificateur), ne laissant que le fichier **.zip**.
{% endsnippet %}

![Administration – Backup Manager](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2084.png)

## Paramètres

### Configuration de la base de données
| Option                    | Description                                                                                          |
|---------------------------|------------------------------------------------------------------------------------------------------|
| Activer la sauvegarde de la base de données    | Activer la sauvegarde de la base de données SQL.                                                            |
| Chemin du fichier de sauvegarde de la base de données | C'est le chemin vers le dossier où la sauvegarde de la base de données SQL sera enregistrée. Nous recommandons l'utilisation d'un dossier réseau partagé (chemin UNC) avec les permissions appropriées pour pouvoir enregistrer le fichier de sauvegarde.<br>Note : Étant donné que la commande de sauvegarde s'exécute sur le SQL Server et sur la machine où {{ fr.DVLS }} est hébergé, ce chemin doit être accessible depuis les deux.<br> Le compte de service défini sur le ***Service du planificateur*** nécessite l'autorisation "écriture" sur le dossier de destination pour supprimer les fichiers de sauvegarde excédentaires définis dans ***Conserver le nombre de sauvegardes***. Le processus de sauvegarde est appelé depuis {{ fr.DVLS }}(***Service du planificateur*** ou ***Identité du pool d'applications IIS***), mais SQL Server est le processus réel qui dépose le fichier ; par conséquent, le chemin UNC doit également permettre au compte de service SQL Server d'avoir des permissions d'écriture. |
| Mot de passe de sauvegarde de la base de données  | Le mot de passe protège le fichier de sauvegarde ZIP compressé. Vous devez le fournir pour décompresser le fichier. |

### Configuration web
| Option                   | Description                                                                                          |
|--------------------------|------------------------------------------------------------------------------------------------------|
| Activer la sauvegarde web        | Activer la sauvegarde de l'application web.                                                         |
| Chemin du fichier de sauvegarde web     | Le chemin vers le dossier où la sauvegarde de l'application web sera enregistrée. Nous recommandons l'utilisation d'un dossier réseau partagé avec les permissions appropriées pour pouvoir enregistrer le fichier de sauvegarde.<br>Note : Si des comptes de service sont définis sur le ***Service du planificateur*** et sur l'***Identité du pool d'applications IIS***, les deux comptes ont besoin de l'autorisation "écriture" sur le dossier de destination.   |
| Mot de passe du fichier de sauvegarde web | Le mot de passe protège le fichier de sauvegarde ZIP compressé. Vous devez le fournir pour décompresser le fichier. |

### Algorithme de chiffrement de sauvegarde
| Option               | Description                                                                                      |
|----------------------|--------------------------------------------------------------------------------------------------|
| Algorithme de chiffrement | C'est l'algorithme de chiffrement AES-256 utilisé pour chiffrer la sauvegarde si un mot de passe de sauvegarde est défini. |

### Notification
| Option                                   | Description                                                          |
|------------------------------------------|----------------------------------------------------------------------|
| Notifier l'administrateur en cas d'échec de la sauvegarde    | Envoyer un courriel aux administrateurs lorsqu'un processus de sauvegarde échoue.    |
| Notifier l'administrateur en cas de succès de la sauvegarde   | Envoyer un courriel aux administrateurs lorsqu'un processus de sauvegarde réussit. |

### Planification
| Option            | Description                                                   |
|-------------------|---------------------------------------------------------------|
| Heure de début de la sauvegarde | Date et heure à laquelle la sauvegarde sera automatiquement lancée. |
| Répéter tous les      | L'intervalle de temps entre les exécutions de sauvegarde.                        |

### Avancé
| Option                                | Description                                                                                   |
|---------------------------------------|-----------------------------------------------------------------------------------------------|
| Délai d'attente SQL de sauvegarde de la base de données (Minutes) | Nombre de minutes avant un délai d'attente dans l'instance SQL.                                       |
| Conserver le nombre de sauvegardes                | Nombre maximum de sauvegardes qui seront conservées dans le dossier de sauvegarde.                             |
| Sauvegarde de base de données uniquement             | Une sauvegarde SQL Server qui est indépendante de la séquence des sauvegardes SQL Server conventionnelles. Pour plus d'informations, veuillez consulter la page d'aide Microsoft [Sauvegardes de copie uniquement](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/copy-only-backups-sql-server?view=sql-server-ver16). |
