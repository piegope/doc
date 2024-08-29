---
_schema: défaut
eleventyComputed:
  title: Lexique
---
{% var, "RDM" false %} est un logiciel qui possède un ensemble étendu de fonctionnalités. Voici les principaux concepts qu'il est important de comprendre pour utiliser le programme à son plein potentiel.

## Connexion{#connection}

Tout type d'entrée qui vous permet de vous connecter à un hôte distant, un service ou un appareil est une connexion. Une adresse IP ou un nom d'hôte est normalement utilisé ainsi que des identifiants.

## Entrée d'identifiants{#credential-entry}

Un identifiant est utilisé pour contrôler l'accès à une ressource en identifiant l'utilisateur. Il peut s'agir d'une paire classique nom d'utilisateur/mot de passe détenue par l'application ou même par une source externe.

## Source de données{#data-source}

C'est un conteneur pour les entrées. Il peut s'agir d'un fichier local ou d'une base de données (soit locale ou partagée). Vous pouvez utiliser plusieurs sources de données distinctes dans l'application, bien qu'une seule soit considérée comme active à un moment donné. Voir [Sources de données](/rdm/data-sources/) pour plus d'informations.

## Entrée{#entry}

Tous les éléments de votre source de données sont des entrées. Il en existe plusieurs types. L'entrée est un concept abstrait qui sert de conteneur pour tous les types spécifiques.

## Entrée d'information{#information-entry}

Une entrée d'information peut contenir divers éléments comme des informations de compte, des courriels et des numéros de série. Contrairement aux entrées d'identifiants, les entrées d'information sont destinées à être partagées. Par conséquent, les données dans les entrées d'information ne sont pas chiffrées. Son utilisation principale dans {% var, "RDM" false %} est de contenir des informations de site Web, de l'URL aux identifiants. Cela permet une connexion automatique sur le site Web spécifié.

## Session{#session}

Aux débuts de {% var, "RDM" false %}, il était principalement destiné à gérer Microsoft Remote Desktop. Une session était un terme utilisé à l'époque pour décrire une connexion aux services Bureau à distance de Microsoft. Il apparaît largement dans notre documentation. Toute technologie qui se connecte et qui nécessite d'utiliser l'authentification est une session.
