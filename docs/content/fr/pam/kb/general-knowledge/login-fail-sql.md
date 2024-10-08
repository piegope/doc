---
eleventyComputed:
  title: Échec de connexion pour UserX avec SQL
---
Si le code d'erreur "(0x80131904): Login failed for user 'UserX'" apparaît lors de la tentative de connexion à la source de données, il est possible que le compte ait été verrouillé après plusieurs tentatives de connexion. Cela dépend de l'application de la politique de mot de passe configurée.

## Déverrouillage de la base de données SQL
La requête SQL suivante confirmera si l'utilisateur a été verrouillé : SELECT LOGINPROPERTY('UserX','islocked')  

L'utilisateur peut être déverrouillé manuellement en accédant aux ***Propriétés*** de l'utilisateur – ***Statut*** et en décochant ***Verrouiller l'utilisateur SQL***. Ensuite, changer le mot de passe et enfin exécuter les modifications.

### Alternative
Alternativement, la requête suivante peut être utilisée :

ALTER LOGIN [SQLID] WITH PASSWORD = '****' UNLOCK  
{% snippet, "badgeHelp" %}
Pour en savoir plus, lisez la [documentation SQL de Microsoft](https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16).
{% endsnippet %}
