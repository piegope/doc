---
eleventyComputed:
  title: Ralentissements ou message de délai d'attente lors de la connexion à une source de données {{ fr.DVLS }}
  description: La connexion à une source de données {{ fr.DVLS }} avec {{ fr.RDM }} peut parfois être lente. Il existe plusieurs façons de résoudre rapidement ce problème.
---
La connexion à une source de données {{ fr.DVLS }} avec {{ fr.RDM }} peut parfois être lente. Il existe plusieurs façons de résoudre ce problème. Le message d'erreur lié à ce problème devrait ressembler à ceci :
```
System.TimeoutException: The request timed out.
at Devolutions.Server.ApiWrapper.RDMSWebClient.RunSynchronous[T](Task`1 task)
at Devolutions.Server.ApiWrapper.RDMSWebClient.GetPublicWebInstanceInformation()
```

## Désactiver la connexion Internet
Lorsque l'accès à Internet n'est pas autorisé dans un environnement, activer ***Pas de connexion Internet*** dans ***Fichier*** – ***Paramètres*** – ***Avancé***. Cela empêche {{ fr.RDM }} de faire des appels à Internet qui pourraient causer des délais d'attente ou des ralentissements.
![No Internet connection](https://cdnweb.devolutions.net/docs/RDMW0011_2024_2.png)

{% snippet, "shieldInfo" %}
En activant l'option ***Pas de connexion Internet***, certains services de sécurité cesseront également de fonctionner (par exemple, [Vérification des mots de passe compromis (Pwned)](/rdm/kb/rdm-windows/how-to-articles/pwned-password-check/) ou l'option ***Afficher les mots de passe compromis (pwned)*** dans l'[Analyseur de sécurité des entrées](/rdm/commands/reports/entry-security-analyzer/)).
{% endsnippet %}

## Désactiver les vérifications de révocation de certificat
Désactiver ***Appliquer la vérification de révocation de certificat*** sous ***Fichier*** – ***Paramètres*** – ***Sécurité***. Cela empêche Windows d'essayer d'atteindre les serveurs de révocation configurés dans le certificat. Dans la plupart des cas, les serveurs de révocation devraient être autorisés à travers le pare-feu, sauf s'ils sont également gérés localement.
![Enforce certificate revocation check](https://cdnweb.devolutions.net/docs/RDMW0012_2024_2.png)
Dans des situations spécifiques, cela peut résoudre le message d'erreur ***Impossible de se connecter à votre source de données*** ou ***Le serveur DVLS n'a pas répondu à temps***.
![Unable to connect to your data Source](https://cdnweb.devolutions.net/docs/RDMW0024_2024_2.png)

{% snippet, "shieldInfo" %}
La vérification de révocation de certificat en ligne de Windows n'utilisera pas les proxys configurés sur l'hôte pour des raisons de sécurité.
{% endsnippet %}

Alternativement, activer ***Validation de certificat améliorée*** peut prévenir les déconnexions dans certains cas. Activer cette fonctionnalité fait en sorte que {{ fr.RDM }} valide les certificats en utilisant une méthode différente, contournant potentiellement la source des ralentissements.
![Enhanced certificate validation](https://cdnweb.devolutions.net/docs/RDMW0013_2024_2.png)

## Utiliser le profilage de performance intégré pour diagnostiquer les connexions
Utiliser le ***Profileur*** de {{ fr.RDM }} pour diagnostiquer la durée de validation des certificats.
1. Cliquer sur l'onglet ***Aide*** et sélectionner le ***Profileur***.
![Profiler](https://cdnweb.devolutions.net/docs/RDMW0014_2024_2.png)
1. Régler le ***Niveau de débogage*** à 4.
1. Aller à l'onglet ***Débogage uniquement*** et cliquer sur le bouton des points de suspension (***...***).
1. Cocher l'option ***Chronomètre***.
1. Lancer une connexion à distance et rechercher la ligne `Certificate Validation – Chain.Build`.
![Performance profiling](https://cdnweb.devolutions.net/docs/RDMW0015_2024_2.png)
Cela fournira le temps qu'il a fallu pour se connecter en millisecondes (***ms***).