---
_schema: défaut
eleventyComputed:
  title: Propagation
  description: >-
    *La propagation est une fonctionnalité dans un fournisseur de {{ fr.DPAM }} qui sert de quatrième et dernière action qu'un fournisseur effectue lors de la rotation des mots de passe.
---
***Propagation***, également connue sous le nom de propagation de mot de passe ou parfois appelée scripts de propagation, est une fonctionnalité dans un fournisseur de {{ fr.DPAM }} qui sert de quatrième et dernière action qu'un fournisseur effectue lors de la rotation des mots de passe.

La propagation est une action optionnelle mise en œuvre sous forme de script PowerShell personnalisable par l'utilisateur qui s'exécute comme dernière étape dans la séquence d'actions du fournisseur de détection, de pulsation et de rotation des mots de passe. Son objectif est flexible, lui permettant d'effectuer des tâches de suivi qui doivent se produire après qu'un mot de passe a été changé.

Par exemple, lorsque les mots de passe sont stockés dans des fonctionnalités logicielles comme [Windows services](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/windows_service), synchronisés avec des services comme [Azure Key Vault en tant que secrets](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/azure_key_vault), ou utilisés dans des tâches planifiées Windows, la propagation peut être utilisée pour mettre à jour ces mots de passe. Les scripts de propagation peuvent également effectuer des actions telles que créer des billets d'assistance ou envoyer des événements de notification à des services comme [Slack](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/slack_message) ou [Microsoft Teams](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/teams_message).
