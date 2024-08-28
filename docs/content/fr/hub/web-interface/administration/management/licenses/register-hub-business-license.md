---
eleventyComputed:
  title: Enregistrer une licence {{ fr.DHUBB }}
  description: Enregistrer une nouvelle licence {{ fr.DHUBB }} en suivant les étapes qui représentent le mieux la situation actuelle.
---
Enregistrer une nouvelle licence {{ fr.DHUBB }} en suivant les étapes qui représentent le mieux la situation actuelle :

* [La licence actuelle est toujours active](#my-current-license-is-still-active)
* [La licence actuelle est expirée](#my-current-license-is-expired)

{% snippet, "badgeCaution" %}
Seuls les ***Administrateurs*** et les utilisateurs avec des permissions dans la section ***Permissions du système*** ont accès pour enregistrer une licence dans {{ fr.DHUBB }}.
{% endsnippet %}

### La licence actuelle est toujours active

1. Se connecter au {{ fr.DHUBB }} en question.
1. Aller à ***Administration*** – ***Licences***.
1. Cliquer sur le bouton ***Modifier***.
![Edit license button](https://cdnweb.devolutions.net/docs/HUBB4015_2024_2.png)
1. Coller la nouvelle licence {{ fr.DHUBB }}, et cliquer sur ***Enregistrer***.
![New license Save button](https://cdnweb.devolutions.net/docs/HUBB4016_2024_2.png)

### La licence actuelle est expirée

1. Se connecter à {{ fr.DHUBB }}.
1. Un message ***Accès refusé*** devrait apparaître.
{% snippet, "badgeCaution" %}
Seuls les ***Administrateurs*** et les utilisateurs avec les ***Permissions du système*** pour ***Gérer les licences de produit*** devraient voir ce message.
{% endsnippet %}

![!!Hub4095](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4095.png)

3. Coller la nouvelle licence {{ fr.DHUBB }}.
1. Cliquer sur le cadenas pour enregistrer.

Le nouveau hub devrait alors se connecter automatiquement.