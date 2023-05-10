---
title: Yubikey
---
{{ fr.RDM }} vous permet de configurer un Yubikey pour fournir une couche de sécurité supplémentaire lors de l&apos;ouverture d&apos;une source de données. 

{% snippet icon.badgeCaution %} 
Pour l&apos;instant, {{ fr.RDM }} ne prend en charge que Yubico OTP. 
{% endsnippet %}
 
## Paramètres 

{% snippet icon.badgeInfo %} 
Avant de commencer la configuration, assurez-vous d&apos;avoir un ***Yubikey*** en votre possession. 
{% endsnippet %}
 
1. Si ce n&apos;est pas déjà fait, suivre ces [étapes de configuration de l&apos;authentification multifacteur](/fr/rdm/windows/data-sources/multi-factor-authentication/) . 
1. Après avoir sélectionné le type d&apos;AMF ***Yubikey*** , cliquer sur ***Configurer*** .  
![Configurer l'authentification multifacteur](/img/fr/rdm/windows/clip10014.png) 
1. Insérer le ***Yubikey*** dans un port USB de votre ordinateur. 
1. Maintenir le bouton doré sur le ***Yubikey*** pour que le code s&apos;insère dans le champ.  
![Programme d'installation Yubikey](/img/fr/rdm/windows/clip10015.png) 
1. Cliquer sur ***Enregistrer*** . 
1. Relancer {{ fr.RDM }} pour être invité à entrer le code ***Yubikey*** . 

