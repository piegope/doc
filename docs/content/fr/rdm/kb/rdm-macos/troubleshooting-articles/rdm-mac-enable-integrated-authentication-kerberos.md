---
_schema: défaut
eleventyComputed:
  title: "{{ fr.RDMMAC }} Activer l'authentification intégrée avec Kerberos"
  description: >-
    {{ fr.RDMMAC }} dispose d'une validation intégrée pour la source de données SQL Server qui
    nécessite que les champs Nom d'utilisateur/Mot de passe contiennent des informations.
---
{{ fr.RDMMAC }} dispose d'une validation intégrée pour la source de données SQL Server qui nécessite que les ***champs Nom d'utilisateur/Mot de passe*** soient remplis avant de pouvoir configurer le paramètre ***Sécurité intégrée (Active Directory) - Expérimental***.

### Étapes

1. Entrer le ***Nom*** et l'***Hôte***.
2. Remplir les ***champs Nom d'utilisateur et mot de passe***. ![Fill the Username and password fields](https://cdnweb.devolutions.net/docs/RDMM6002_2024_2.png)
3. Sélectionner ***Sécurité intégrée (Active Directory) - Expérimental***. ![Select Integrated Security (Active Directory) - Experimental](https://cdnweb.devolutions.net/docs/RDMM6003_2024_2.png)
4. Cliquer sur ***OK*** pour enregistrer et quitter la fenêtre de configuration.
