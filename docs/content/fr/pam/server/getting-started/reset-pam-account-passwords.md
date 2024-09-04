---
eleventyComputed:
  title: Réinitialiser les mots de passe des comptes PAM
  description: Pour réinitialiser manuellement un mot de passe de compte, faire un clic droit sur le compte dans le {{ fr.VLT }}, survoler avec la souris Plus, et sélectionner Réinitialiser le mot de passe***.
  order: 40
---
Pour réinitialiser manuellement un mot de passe de compte, faire un clic droit sur le compte dans le {{ fr.VLT }}, survoler avec la souris ***Plus***, et sélectionner ***Réinitialiser le mot de passe*** (1). Alternativement, cliquer sur le menu à trois points et choisir ***Réinitialiser le mot de passe*** (2).

![Reset password](https://cdnweb.devolutions.net/docs/ab_getting-started-reset-passwords_1-1.png)

Si l'action de rotation du mot de passe est réussie, les journaux afficheront le message ***Réinitialisation du mot de passe PAM - Succès***.

{% snippet, "badgeInfo" %}
Réinitialiser un mot de passe pour un compte initie à la fois l'action de rotation du mot de passe et l'action de vérification pour confirmer que la rotation du mot de passe a été complétée avec succès.
{% endsnippet %}
