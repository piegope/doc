---
eleventyComputed:
  title: Paramètres système
  description: La section Paramètres système du panneau d'administration est utilisée pour gérer les paramètres globaux de tous les utilisateurs et groupes d'utilisateurs dans {{ fr.DHUBB }}.  
---
La section ***Paramètres système*** du panneau ***Administration*** est utilisée pour gérer les paramètres globaux de tous les utilisateurs et groupes d'utilisateurs dans {{ fr.DHUBB }}.  

## Général

Dans la section ***Général*** des ***Paramètres système***, gérer les paramètres liés aux mots de passe temporaires, au réseau, aux billets de support, aux sessions ouvertes et aux profils d'interface utilisateur.
![Administration – Paramètres système – Général](https://cdnweb.devolutions.net/docs/HUBB4018_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Envoyer le mot de passe temporaire par courriel  | Sélectionner comment le mot de passe temporaire est envoyé à vos utilisateurs lors de la création de leur {{ fr.DA }} à partir d'une invitation dans {{ fr.DHUBB }} :<ul><li>***Demander*** : Lors de la création d'un nouveau {{ fr.DA }}, une invite apparaîtra pour envoyer ou non le mot de passe temporaire de l'utilisateur par courriel.</li><li>***Envoyer*** : Lors de la création d'un nouveau {{ fr.DA }}, les utilisateurs recevront leur mot de passe temporaire par courriel.</li><li>***Ne pas envoyer*** : Lors de la création d'un nouveau {{ fr.DA }}, les utilisateurs ne recevront pas leur mot de passe temporaire par courriel. À ce moment-là, une invite apparaîtra avec leur mot de passe temporaire. Vous pouvez alors décider comment fournir cette information critique à vos utilisateurs.</li></ul> |
| Bloquer le trafic Tor | Bloque le trafic Internet provenant du réseau Tor. |
| Permettre aux utilisateurs de soumettre un billet de support | Active l'option pour les utilisateurs de soumettre un billet à l'équipe de support. |
| Marquer automatiquement comme "Fermé" après X jours | Marque les sessions ouvertes comme fermées après un certain nombre de jours. |
| Profils d'interface utilisateur | Sélectionner le profil d'interface utilisateur par défaut qui sera attribué aux utilisateurs entre ***Professionnel de l'informatique***, ***Utilisateur d'affaires***, ou le ***Défaut***. |

## {{ fr.VLT_MAJ  }}

Dans la section {{ fr.VLT  }} des ***Paramètres système***, gérer les paramètres liés à l'utilisateur {{ fr.VTL }} et à la visibilité. 

![Administration – Paramètres système – {{ fr.VLT_MAJ  }}](https://cdnweb.devolutions.net/docs/HUBB4019_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Permettre {{ fr.UVLT_MAJ   }}         | Permettre {{ fr.UVLT_MAJ }} pour les utilisateurs.                           |
| Public -  Permettre la demande d'accès    | Définir la visibilité {{ fr.VLT   }} sur public. Chaque utilisateur peut voir les {{ fr.VLT   }} publics, mais seuls ceux qui ont demandé l'accès peuvent les utiliser.  |
| Privé -  Sur invitation uniquement        | Définir la visibilité {{ fr.VLT  }} sur privé. Seuls les utilisateurs avec une invitation peuvent les voir et les utiliser. |

{% snippet, "badgeHelp" %}
Notez que la visibilité {{ fr.VLT   }} peut également être modifiée pour chaque {{ fr.VLT   }} individuellement. Voir [accès {{ fr.VLT_MAJ   }} dans {{ fr.DHUBB }}](https://docs.devolutions.net/hub/web-interface/vault-access/#individual-vault-visibility) pour plus d'informations.
{% endsnippet %}

## RDM et outils connexes

![Administration – Paramètres système – RMD et outils connexes](https://cdnweb.devolutions.net/docs/HUBB4020_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Cache/Hors ligne                     | Définir la durée pendant laquelle les données hors ligne sont stockées avant d'expirer.                            |
| Imposer un mot de passe d'application sur RDM            |  Exiger un mot de passe pour accéder à {{ fr.RDM }}.                                                        |
| Imposer le verrouillage biométrique                       | Exiger l'utilisation de la biométrie lors de la connexion à la source de données. |

## Avancé

Dans la section ***Avancé*** des ***Paramètres système***, gérer les paramètres liés au Cache, au mode hors ligne, à l'autocomplétion {{ fr.WBEX }} et au partage externe. 

![Administration – Paramètres système – Avancé](https://cdnweb.devolutions.net/docs/HUBB4021_2024_2.png)

| OPTION | DESCRIPTION |
|--------|-------------|
| Permettre l'autocomplétion {{ fr.WBEX }}                 | Permettre à {{ fr.WBEX }} de remplir automatiquement les identifiants.                                                        |
| Permettre à l'utilisateur d'envoyer des messages et des mots de passe de manière sécurisée via Devolutions Send   | Les utilisateurs peuvent envoyer des messages et des mots de passe chiffrés en utilisant [Devolutions Send](/hub/send/).
