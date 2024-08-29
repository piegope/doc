---
eleventyComputed:
  title: Licenses
  description: Gérer l'enregistrement de {{ fr.RDM }} globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans une source de données avancée.
---
Gérer l'enregistrement de {{ fr.RDM }} globalement pour tous vos utilisateurs peut être fait avec une clé de licence stockée dans une source de données avancée (petites équipes et entreprises) : {{ fr.DVLS }}, {{ fr.DHUBB }}, CyberArk, Microsoft Azure SQL et Microsoft SQL Server.

Le menu ***Licenses*** est disponible pour tous les types de sources de données (à condition que vous ayez accès à la section ***Administration***) mais se comporte différemment :
* Pour {{ fr.DVLS }}, {{ fr.DHUBB }} et {{ fr.DHUBP }}, le menu ouvre la page web de la source de données correspondante. Vous pourriez être invité à vous connecter à votre compte sur le web.
* Pour tous les autres types de sources de données, le menu s'ouvre dans {{ fr.RDM }}.

Avec la licence stockée dans une [source de données avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), il n'est pas nécessaire d'enregistrer {{ fr.RDM }} car la clé de licence est directement récupérée à partir de celle-ci. Lors du lancement de l'application pour la première fois, ajouter la source de données contenant la clé.

{% snippet, "badgeInfo" %}
Il est possible de [demander un essai](/rdm/windows/installation/client/registration/trial-request/) pour essayer {{ fr.RDM }} pendant 30 jours. Si vous décidez de ne pas enregistrer l'application à la fin de la période de 30 jours, vos données ne seront pas altérées ou effacées, et vous y aurez pleinement accès une fois que vous fournirez une clé de licence valide.
{% endsnippet %}

1. Pour ajouter une clé de licence, naviguer vers ***Administration – Licenses***.
![Administration – Licenses](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3417.png)
1. Cliquer sur ***Add License***.
![User and Security Mangement – Add License](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6035.png)
1. Entrer la licence ou importer le fichier de licence en utilisant le bouton ***Import***.
   {% snippet, "badgeInfo" %}
   Importer la licence en utilisant le fichier **.lic** est le plus utile lorsque vous êtes hors ligne. Voir la section suivante sur l'enregistrement hors ligne pour plus d'informations.
   {% endsnippet %}

   ![License](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2238.png)
1. Cliquer sur ***Ok*** pour enregistrer la licence.
1. Optionnel : L'option ***Auto assign*** sera affichée lorsque vous entrez la licence. La case est déjà cochée pour fournir le numéro de série {{ fr.RDM }} à tous les nouveaux utilisateurs créés. Une fenêtre d'avertissement apparaîtra si vous décochez la case et cliquez sur ***OK***.
![Warning window](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6033.png)

Votre licence est maintenant enregistrée dans la source de données avancée. Suivre [Assign Licenses](/rdm/windows/commands/administration/management/licenses/assign/) pour les attribuer automatiquement aux utilisateurs sélectionnés, éliminant ainsi le besoin d'interagir localement avec leur {{ fr.RDM }}. Les licences ont un nombre limité d'utilisateurs et peuvent être attribuées automatiquement avec ***Auto assign*** ou à des utilisateurs spécifiques dans l'onglet ***Assigned to***.

{% snippet, "badgeInfo" %}
Seule la licence CyberArk a un nombre illimité d'utilisateurs.

Une licence {{ fr.DGW }} n'est pas nécessaire lors de la configuration d'une passerelle, seulement lors de l'ouverture d'une connexion.
{% endsnippet %}

### Enregistrement hors ligne
Si vous devez enregistrer votre licence hors ligne (si Internet est désactivé ou si pour une raison quelconque vous ne pouvez pas atteindre les serveurs), vous ne pouvez le faire qu'en important le fichier **.lic** qui vous a été fourni, lequel contient un JSON Web Token (JWT).

* ***Licence d'essai*** : Le fichier de licence doit être téléchargé à partir de l'email de confirmation de Devolutions et importé comme décrit dans les étapes ci-dessus pour {{ fr.RDM }} 2023.3 et versions ultérieures.
* ***Licence achetée*** : La licence achetée doit être téléchargée à partir de votre compte {{ fr.DPORTAL }} et importée comme décrit dans les étapes ci-dessus pour {{ fr.RDM }} 2023.3 et versions ultérieures.
