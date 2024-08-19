---
_schema: default
eleventyComputed:
  title: Enquête sur les comptes avant déploiement
  description: >-
    Avant le déploiement d'une instance de {{ fr.DVLS }}, certains comptes sont nécessaires pour
    faire fonctionner les différents services impliqués dans un déploiement sécurisé de {{ fr.DVLS }}.
  status: Topic available in German language
---
Avant le déploiement d'une instance de {{ fr.DVLS }}, certains comptes sont nécessaires pour faire fonctionner les différents services impliqués dans un déploiement sécurisé de {{ fr.DVLS }}. La première décision est d'utiliser soit des comptes de domaine pour faire fonctionner la plateforme, soit d'utiliser des comptes SQL locaux associés à des comptes de service locaux. Puisque cette décision est une question de préférence personnelle, nous supportons les deux modèles.

{% snippet, "badgeInfo" %}
Avant de continuer, veuillez prendre en compte les éléments suivants :
* Les noms utilisés dans ce guide sont pour faciliter la compréhension du rôle rempli par le compte. Notre documentation utilise également ces noms, mais il n'est pas obligatoire de les utiliser.
* Les comptes suivants interagissant avec la base de données SQL se verront accorder les permissions de moindre privilège à partir de scripts qui s'exécuteront lors de la création et de la mise à niveau de l'instance de {{ fr.DVLS }}.
{% endsnippet %}

## Fonctionnement basé sur le domaine (option de sécurité intégrée)

Les ***informations d'identification d'administration*** nécessitent des permissions de lecture complète sur la structure AD, mais n'effectuent AUCUN changement à votre répertoire. Malheureusement, en raison d'un effet secondaire de la manière dont les services de répertoire net sont construits, il y a un problème lorsque ce compte essaie de lire les propriétés des groupes AD qui peuvent résider dans une zone protégée de votre répertoire. La solution la plus simple était d'accorder des permissions d'administrateur complet, mais nous cherchons à mettre en œuvre une meilleure stratégie de repli pour gérer le cas où l'accès est refusé. Cela peut nécessiter des privilèges plus élevés que de faire partie du groupe intégré des utilisateurs du domaine. Dans la plupart des cas, cela devrait être suffisant.

&nbsp;

<table><thead><tr><th><p>Nom</p></th><th><p>ORIGINE</p></th><th><p>DESCRIPTION</p></th><th><p>DÉFINI DANS...</p></th></tr></thead><tbody><tr><td><p>VaultDBOwner</p></td><td><p>AD</p></td><td><p>Compte avec des privilèges complets sur la base de données</p></td><td><p>Session Windows interactive utilisée pour exécuter l'installation/la mise à niveau d'une instance de {% var, "DVLS" false %}. Ce compte doit être un administrateur local de la machine hôte de {% var, "DVLS" false %}.</p></td></tr><tr><td><p>VaultDBRunner</p></td><td><p>AD</p></td><td><p>Compte de moindre privilège pour exécuter l'application web. Utilisé pour se connecter à la base de données et lire à partir du système de fichiers.</p></td><td><p>Pool d'applications IIS exécutant une instance de {% var, "DVLS" false %}.</p></td></tr><tr><td><p>VaultADReader</p></td><td><p>AD</p></td><td><p>Compte de moindre privilège pour interroger l'AD.</p></td><td><p><em><strong>Paramètres de l'instance de {% var, "DVLS" false %} - Informations d'identification d'administration.</strong></em></p></td></tr><tr><td><p>VaultDBSchedulerService<br /></p></td><td><p>AD</p></td><td><p>Compte de moindre privilège pour faire fonctionner le service de planification. Utilisé pour se connecter à la base de données et lire/écrire à partir du système de fichiers.</p></td><td><p>Gestionnaire de contrôle des services Windows.</p></td></tr></tbody></table>

## Fonctionnement non basé sur le domaine ou environnement Azure SQL

Dans un déploiement non basé sur le domaine, une seule chaîne de connexion est utilisée pour trois aspects différents du système. Cela sera amélioré dans une future version pour respecter le principe de moindre privilège.

Pour une base de données hébergée sur Azure SQL, le fonctionnement basé sur le domaine (option de sécurité intégrée) n'est pas pris en charge.

\| \# \| Nom \| Origine \| Description \| Défini dans... \| \| - \| ----------------------- \| ------ \| --------------------------------------------------------------------------------------------------- \| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- \| \| 1 \| VaultDBOwner \| SQL \| Compte avec des privilèges complets sur la base de données. \| Le {{ fr.DVLSCONSOLE }} uniquement pour les sessions d'installation/mise à niveau. \| \| 2 \| VaultDBRunner \| SQL \| Compte de moindre privilège pour exécuter l'application web. \| Le {{ fr.DVLSCONSOLE }} pour les opérations de l'instance. \| \| 3 \| VaultADReader \| AD \| Compte de moindre privilège pour interroger l'AD via LDAP. \| Paramètres de l'instance de {{ fr.DVLS }} - Informations d'identification d'administration. \| \| 4 \| VaultDBSchedulerService \| SQL \| Compte de moindre privilège pour faire fonctionner le service de planification. Utilisé pour lire/écrire à partir du système de fichiers. \| {{ fr.DVLSCONSOLE }} – Service de planification. L'accès à la base de données sera effectué par la seule ConnectionString qui fait l'objet de la note d'information ci-dessus. \|
