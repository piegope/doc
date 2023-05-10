---
title: Authenticator (TOTP)
---
{{ fr.RDM }} vous permet d&apos;utiliser un ***Authenticator (TOTP)*** tel que [Devolutions Workspace](https://devolutions.net/fr/workspace/) ou Google Authenticator pour fournir une couche de sécurité supplémentaire lors de l&apos;ouverture d&apos;une source de données. 

## Paramètres 

{% snippet icon.badgeInfo %} 
Avant de commencer la configuration, assurez-vous d&apos;avoir installé l&apos;application [Devolutions Workspace](https://devolutions.net/fr/workspace/) ou Google Authenticator sur votre appareil mobile. 
{% endsnippet %}
 
1. Si ce n&apos;est pas déjà fait, suivre ces [étapes de configuration de l&apos;authentification multifacteur](/fr/rdm/windows/data-sources/multi-factor-authentication/) . 
1. Après avoir sélectionné le type d&apos;AMF ***Authenticator (TOTP)*** , cliquer sur ***Configurer*** .  
![Configurer l'authentification multifacteur](/img/fr/rdm/windows/clip10007.png) 
1. Scanner le code QR qui apparaît dans la fenêtre de ***Configuration de compte Authenticator*** avec l&apos;application de votre appareil. 
1. Saisir le ***Code de validation*** fourni par l&apos; ***Authenticator (TOTP)*** .  
![Configuration de compte Authenticator](/img/fr/rdm/windows/clip10009.png) 
1. Cliquer sur ***Valider*** . 
1. Relancer {{ fr.RDM }} pour être invité à entrer le code d&apos; ***Authenticator (TOTP)*** . 

