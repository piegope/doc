---
_schema: default
eleventyComputed:
  title: Actions
  description: >-
    Ces actions sont effectuées à travers trois types différents : découverte, pulsation, et rotation de mot de passe.
---
Pour faire tourner un mot de passe, {{ fr.DPAM }} doit :
* Découvrir des comptes sur un fournisseur d'identité et stocker ces comptes en toute sécurité.
* Comparer les mots de passe connus avec les mots de passe actuels des comptes.
* Changer les mots de passe des comptes et stocker les nouveaux mots de passe en toute sécurité.

Ces ***actions*** sont effectuées à travers trois types différents : découverte, pulsation, et rotation de mot de passe.

{% snippet, "badgeInfo" %}
Bien que les fournisseurs gérés effectuent des étapes similaires pour la rotation de mot de passe, la gestion directe de ces actions n'est possible que lors de la création de modèles de fournisseurs {{ fr.ANYID }}.
{% endsnippet %}
