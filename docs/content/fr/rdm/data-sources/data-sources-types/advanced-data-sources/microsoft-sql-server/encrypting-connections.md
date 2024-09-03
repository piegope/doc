---
_schema: default
eleventyComputed:
  title: Chiffrement des connexions à SQL Server
---
Pour garantir que la communication entre {{ fr.RDM }} et la base de données Microsoft SQL Server soit chiffrée, une procédure approfondie doit être suivie sur l'instance Microsoft SQL Server.

Veuillez consulter cet article de Microsoft technet qui fournit des instructions détaillées : [Chiffrement des connexions à SQL Server (technet)](https://technet.microsoft.com/en-us/library/ms189067&#40;v=sql.105&#41;.aspx).

Après avoir été correctement configuré, la seule modification à effectuer dans {{ fr.RDM }} est de définir une propriété dans les ***Paramètres supplémentaires*** de la source de données.

## Procédure

1. Créer ou modifier une source de données Microsoft SQL Server, accéder à l'onglet ***Avancé*** et cliquer sur le bouton ***Paramètres supplémentaires***. ![More settings button](https://cdnweb.devolutions.net/docs/RDMW6085_2024_2.png)
2. Définir la valeur de la propriété ***Chiffrer*** sur ***true***. Cliquer sur ***OK*** pour valider. ![!!clip7001](https://cdnweb.devolutions.net/docs/RDMW6086_2024_2.png)
