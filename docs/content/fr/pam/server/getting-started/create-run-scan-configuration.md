---
eleventyComputed:
  title: Créer et exécuter une configuration de scan
  description: Une configuration de scan est un ensemble d'instructions qui dictent quel fournisseur utiliser, ainsi qu'un calendrier de récurrence optionnel pour exécuter périodiquement l'action de détection de compte sur ce fournisseur.
  order: 20
---
Une configuration de scan est un ensemble d'instructions qui dictent quel fournisseur utiliser, ainsi qu'un calendrier de récurrence optionnel pour exécuter périodiquement l'action de détection de compte sur ce fournisseur.

1. Pour localiser toutes les configurations de scan existantes et en créer une nouvelle, naviguer vers ***Administration – Accès privilégié – Configurations de scan***. Pour créer une nouvelle configuration de scan, cliquer sur ***Ajouter une nouvelle configuration de scan***.
![Add a new scan configuration](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_1-6.png)
1. Les configurations de scan peuvent être appliquées à la fois aux fournisseurs gérés et {{ fr.ANYID }}. Choisir l'une ou l'autre option ici.
![Built-in/{{ en.ANYID }} providers](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_2-6.png)
1. Sélectionner le fournisseur, définir le nom, et cliquer sur ***OK***.
![Provider name](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_3-6.png)

{% snippet, "badgeNotice" %}
Bien que n'importe quel nom puisse être attribué à une configuration de scan, il est recommandé de le nommer en fonction du fournisseur avec lequel il est associé.
{% endsnippet %}

Lors de la création de la configuration de scan, un travail sera mis en file d'attente, indiqué par une icône de sablier à côté. Le travail est planifié par le service Windows {{ fr.DVLS }} sur l'hôte {{ fr.DVLS }}. Selon le retard accumulé, ce processus peut prendre quelques minutes.

![Queued job](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_4-6.png)

Une fois le travail terminé, le statut affichera une coche verte, et les résultats seront montrés.

![Completed job](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_5-6.png)

Chaque résultat représente un compte que l'action de détection de compte a trouvé. Si des résultats sont visibles à ce stade et qu'ils correspondent à ce que l'action de détection de compte a retourné, cela indique que l'action de détection de compte fonctionne correctement.

En cliquant sur les résultats, vous pouvez voir tous les comptes identifiés par l'action de détection de compte.

![Discovered accounts](https://cdnweb.devolutions.net/docs/ab_getting-started-create-run-scan-configuration_6-6.png)

{% snippet, "badgeInfo" %}
Pour plus d'informations, veuillez vous référer à [Configurations de scan](/pam/scan-configurations/).
{% endsnippet %}

Ensuite, apprendre comment [importer des comptes à partir d'une configuration de scan](pam/server/getting-started/import-accounts-scan-configuration).
