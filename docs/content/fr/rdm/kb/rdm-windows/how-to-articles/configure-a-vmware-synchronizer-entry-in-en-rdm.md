---
_schema: default
eleventyComputed:
  title: Configurer une entrée de synchroniseur VMware dans {{ fr.RDM }}
  description: |
    Comment configurer une entrée de synchroniseur VMware dans {{ fr.RDM }}.
  status:
  keywords:
---
Chaque champ de l'***entrée de synchroniseur VMware*** est décrit ci-dessous.

{% snippet, "badgeInfo" %}Notez que l'***onglet Planification*** n'est disponible que dans une source de données {{ fr.DVLS }}. Il nécessite également que le ***Planificateur*** {{ fr.DVLS }} soit configuré.{% endsnippet %}

## Synchroniseur

L'entrée se trouve sous ***Nouvelle entrée*** – ***Synchroniseur.***

![New Entry – Synchronizer](https://cdnweb.devolutions.net/docs/RDMW6068_2024_2.png "New Entry – Synchronizer")

* ***Nom***: Nom de l'entrée dans {{ fr.RDM }}.
* ***Dossier***: Dans quel dossier {{ fr.RDM }} l'entrée sera.
* ***Informations d'identification***: En savoir plus sur les options des [***informations d'identification***](/rdm/windows/commands/edit/entries/entry-credentials-options/).
* ***Synchroniser automatiquement***: L'entrée {{ fr.RDM }} se synchronisera automatiquement.

### Onglet Général

![General tab](https://cdnweb.devolutions.net/docs/RDMW6067_2024_2.png "General tab")

* ***Hôte:*** L'adresse IP ou le nom d'hôte du serveur VMware.
* ***Nom d'utilisateur:*** Le nom d'utilisateur requis pour s'authentifier et accéder au serveur VMware.
* ***Mot de passe:*** Le mot de passe du nom d'utilisateur fourni pour l'authentification sur le serveur VMware.
* ***Mode de synchronisation***
  * ***Tous les centres de données:*** Synchroniser ***tous les centres de données*** disponibles.
  * ***Centre de données spécifique:*** Synchroniser uniquement le ***centre de données spécifié***.
* ***Centre de données:*** Le centre de données spécifique à synchroniser si ***Centre de données spécifique*** est sélectionné comme ***Mode de synchronisation***.
* ***Type de connexion***
  * ***Par défaut:*** Utiliser le type de connexion par défaut.
  * ***VMware Remote Console:*** Se connecter en utilisant ***VMware Remote Console***.
  * ***RDP:*** Se connecter en utilisant le ***protocole de Bureau à distance***.
* ***Mode de connexion à la console***
  * ***VMware PowerCLI:*** Utiliser ***VMware PowerCLI*** pour les connexions à la console.
  * ***VMware Player:*** Utiliser ***VMware Player*** pour les connexions à la console.
  * ***VMware VMRC 8.0:*** Utiliser ***VMware VMRC 8.0*** pour les connexions à la console.
* ***Mode API***
  * ***Par défaut:*** Utiliser le ***mode API par défaut*** configuré.
  * ***Expérimental:*** Utiliser le ***mode API expérimental.***
  * ***Ancien:*** Utiliser le ***mode API ancien*** pour la compatibilité avec les anciennes versions du serveur VMware.

### Onglet Champs

![Fields tab](https://cdnweb.devolutions.net/docs/RDMW6069_2024_2.png)

Choisir quels champs seront toujours synchronisés, et lesquels ne le seront pas. Par exemple, vous pourriez choisir de ne pas synchroniser la description, car vous souhaitez la modifier vous-même.

* ***Champ***: Sélectionner quels champs seront toujours synchronisés, et lesquels ne le seront pas.
* ***Préfixe du nom de session***: Un préfixe pour l'entrée qui sera créée via le synchroniseur.
* ***Suffixe du nom de session***: Un suffixe pour l'entrée qui sera créée via le synchroniseur.

### Paramètres

![Settings tab](https://cdnweb.devolutions.net/docs/RDMW6073_2024_2.png)

* ***Modèle***: [Modèles](/rdm/concepts/intermediate-concepts/templates/) créés dans {% var, "RDM" false %}.
* ***Dossier de destination:*** Cliquer sur le bouton des points de suspension pour définir le chemin du dossier dans l'arborescence {% var, "RDM" false %} (qui ne peut être que dans le même coffre).
* ***Filtrer par groupe:*** Les VM VMware ont un chemin (hiérarchie de groupe). Par exemple, si la valeur entrée est ***SiteA\\LocationB\\CustomerC***, {% var, "RDM" false %} ne synchronisera que les VM qui correspondent à ce chemin (et sous-chemins).

### Onglet Avancé

![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW6070_2024_2.png "Advanced tab")

* ***Mode silencieux***: Cette option désactive les dialogues d'erreur (utile lorsque le synchroniseur s'exécute automatiquement à des intervalles définis).
* ***Ignorer le type d'entrée***: Ignorer le type d'entrée lors de l'exécution de certaines actions.
* ***Vérification des doublons*** n'importera pas les entrées du même type et hôte.
  * ***Racine***: Vérifier les doublons dans toute la source de données.
  * ***Dossier de destination***: Vérifier les doublons uniquement dans le dossier de destination {{ fr.RDM }} ou sous-dossier.
* ***Action en cas de non-concordance d'entrée***
  * ***Aucune***: Ne rien faire.
  * ***Supprimer***: Supprimer cette entrée.
  * ***Déplacer vers***: Déplacer vers le ***dossier de destination*** sélectionné.
  * ***Marquer comme expiré***: Marquer cette entrée comme expirée (un message d'expiration peut être configuré).

### Onglet Planification

![Schedule tab](https://cdnweb.devolutions.net/docs/RDMW6072_2024_2.png "Schedule tab")

* ***Activé***: Planification activée/désactivée
  * ***Tous les (jours)***: Intervalle entre les exécutions du synchroniseur.
  * ***À***: Heure spécifique pour synchroniser.

&nbsp;
