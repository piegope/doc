---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
Bien que chaque script Devolutions PowerShell ait des dépendances spécifiques liées aux tâches qu'il est censé accomplir, tous doivent répondre à certaines exigences minimales pour pouvoir être exécutés. Heureusement, ces prérequis ne doivent être configurés qu'une seule fois par machine.

{% snippet, "badgeInfo" %}Pour que le module Devolutions.PowerShell fonctionne avec la solution souhaitée, les deux doivent être installés sur la même machine.{% endsnippet %}

#### Installer PowerShell v7+

Il existe deux types de PowerShell : Windows PowerShell et simplement PowerShell. Le premier est installé par défaut sur chaque version de Windows, mais le second ne l'est pas et nécessite donc une installation séparée. Étant donné que les produits Devolutions ne prennent en charge que PowerShell proprement dit, il devra être installé manuellement.

Pour ce faire, rendez-vous sur la [page des versions du dépôt GitHub de PowerShell de Microsoft](https://github.com/PowerShell/PowerShell/releases), faites défiler jusqu'à la section Assets, et téléchargez le package Windows .msi.

![Windows .msi package from the Assets list](https://cdnweb.devolutions.net/docs/INTERFACE4042.png "Windows .msi package from the Assets list")

#### Politique d'exécution de l'utilisateur

L'utilisateur sous lequel PowerShell exécute les scripts doit avoir certaines permissions. Pour les obtenir, ouvrez PowerShell et exécutez la commande `Get-ExecutionPolicy` pour connaître la politique d'exécution actuelle. Si la politique est définie sur RemoteSigned, changez-la en **Unrestricted** en utilisant la commande `Set-ExecutionPolicy`.

![Setting the ExecutionPolicy to Unrestricted](https://cdnweb.devolutions.net/docs/INTERFACE4045.png "Setting the ExecutionPolicy to Unrestricted")

#### Installer le module PowerShell de Devolutions

Pour installer le module PowerShell de Devolutions, exécutez le script `Install-Module Devolutions.PowerShell`.

Une invite devrait alors apparaître vous demandant de faire confiance à un dépôt PSGallery. Entrez `Yes` pour accepter.

![Installing Devolutions.PowerShell](https://cdnweb.devolutions.net/docs/INTERFACE4046.png "Installing Devolutions.PowerShell")

Si l'installation s'est bien déroulée, l'exécution du script `Get-Command -Module Devolutions.PowerShell` devrait renvoyer toutes les commandes Devolutions.PowerShell.

![List of all the Devolutions.PowerShell commands](https://cdnweb.devolutions.net/docs/INTERFACE4048.png "List of all the Devolutions.PowerShell commands")

### Tester la connexion à une source de données

Avec le module installé, l'étape suivante consiste à vérifier la connexion à une source de données Devolutions. Pour ce faire, exécutez le script `Get-RDMCurrentDatasource`.

![Successful connection to an SQLite data source](https://cdnweb.devolutions.net/docs/INTERFACE4047.png "Successful connection to an SQLite data source")

Si {% var, "RDM" false %} est installé sur la machine, l'exécution de `Get-RDMEntry` devrait renvoyer une liste de toutes les entrées disponibles, ce qui signifie que la connexion à la source de données est correctement établie, que des requêtes peuvent être effectuées, et que les scripts peuvent alors être exécutés sans problème.

&nbsp;

&nbsp;

&nbsp;
