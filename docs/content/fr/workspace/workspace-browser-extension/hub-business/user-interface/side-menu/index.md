---
_schema: default
eleventyComputed:
  title: Menu latéral
---
Utiliser les onglets du ***Menu latéral*** pour accéder à diverses fonctionnalités de {{ fr.WBEX }}. Chaque onglet affichera une vue différente dans la ***Zone de contenu***.

Lors de l'utilisation de {{ fr.WBEX }} avec {{ fr.DHUBB }}, les onglets disponibles sont l'onglet ***Correspondance***, l'onglet ***{{ fr.VLT_MAJ }}s***, l'onglet ***{{ fr.UVLT_MAJ }}*** et l'onglet ***Générateur de mots de passe***.

Dans tous les onglets sauf l'onglet ***Générateur de mots de passe***, en survolant une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***. Aller à la section [Fonctionnalités des entrées](#entry-functionalities) pour plus d'informations.

## Onglets du Menu latéral

### Onglet Correspondance

L'extension s'ouvre sur l'onglet ***Correspondance***. C'est ici que vous verrez la liste des identifiants disponibles pour le site web particulier sur lequel vous vous trouvez.

{% snippet, "badgeInfo" %}
Pour les méthodes de récupération de vos identifiants, visiter [Récupérer les identifiants de {{ fr.DHUBB}} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).
{% endsnippet %}

![Onglet Correspondance](https://cdnweb.devolutions.net/docs/WEBX4097_2024_2.png "Onglet Correspondance")

En haut, utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement ceux applicables au site web. Vous pouvez également utiliser le bouton ***Actualiser*** à côté pour mettre à jour les résultats de la recherche.

Le bouton ***Ajouter un site web*** (+) ouvre un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée de site web dans {{ fr.DHUBB }} via le {{ fr.WBEX }}.

{% snippet, "badgeInfo" %}
Pour une liste complète des champs disponibles dans la fenêtre ***Ajouter un site web***, visiter [Ajouter un site web](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/). Vous pouvez également consulter notre guide étape par étape sur [comment ajouter une entrée de site web](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).
{% endsnippet %}

### Onglet Favoris

L'onglet Favoris vous permet de parcourir toutes vos entrées favorites.

![Onglet Favoris](https://cdnweb.devolutions.net/docs/WEBX4098_2024_2.png "Onglet Favoris")

### Onglet {{ fr.VLT_MAJ }}s

{% snippet, "badgeHelp" %}
Lors de l'accès à l'onglet ***{{ fr.VLT_MAJ }}s*** pour la première fois, vous devez sélectionner les {{ fr.VLT }}s de {{ fr.DHUBB }} que vous souhaitez synchroniser avec le {{ fr.WBEX }}. En savoir plus à ce sujet dans [Première connexion avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/first-login/).
{% endsnippet %}

L'onglet ***{{ fr.VLT_MAJ }}s*** vous permet de parcourir tous vos {{ fr.VLT }}s synchronisés pour vos entrées. ![Onglet Coffres](https://cdnweb.devolutions.net/docs/WEBX4099_2024_2.png "Onglet Coffres")

En haut, utiliser la barre de ***Filtre*** pour rechercher dans tous vos {{ fr.VLT }}s pour des entrées.

Pour accéder à un {{ fr.VLT }} dans le {{ fr.WBEX }}, cliquer dessus et naviguer à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DHUBB }}.

Lors de la navigation dans les dossiers, le bouton [***Ajouter un site web***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/) apparaîtra en bas de la ***Zone de contenu***.

### Onglet {{ fr.UVLT_MAJ }}

L'onglet ***{{ fr.UVLT }}*** fonctionne de la même manière que l'onglet ***{{ fr.VLT_MAJ }}s***, sauf que vous naviguez à travers votre ***{{ fr.UVLT }}*** au lieu de vos autres {{ fr.VLT }}s. Vous n'avez pas non plus besoin de sélectionner des {{ fr.VLT }}s à synchroniser car le seul {{ fr.VLT }} disponible dans cet onglet est votre propre ***{{ fr.UVLT }}***. ![Onglet](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2120.png)

En haut, utiliser la barre de ***Filtre*** pour rechercher dans tous vos dossiers et entrées.

Pour accéder à une entrée dans le {{ fr.WBEX }}, naviguer à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DHUBB }}.

Lors de la navigation dans les dossiers, le bouton [***Ajouter un site web***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/) apparaîtra en bas de la ***Zone de contenu***.

### Onglet Générateur de mots de passe

L'onglet ***Générateur de mots de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site web pour votre nouveau compte. ![Onglet Générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2111.png)

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est réglée par défaut à 12, peut également être ajustée.

Dans la section déroulante ***Général***, vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doivent être inclus. ![Section Générale](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2114.png)

Dans la section déroulante ***Avancé***, vous pouvez personnaliser davantage votre mot de passe en entrant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, vous pouvez également entrer les caractères que vous souhaitez exclure de votre mot de passe. ![Section Avancée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2115.png)

{% snippet, "badgeInfo" %}
Pour apprendre à utiliser le ***Générateur de mots de passe*** lors de la création d'un compte sur un site web, visiter [Créer un compte pour un site web dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/create-account-website-hub-business/).
{% endsnippet %}

### Fonctionnalités des entrées

Peu importe l'onglet dans lequel vous vous trouvez (sauf l'onglet ***Générateur de mots de passe***), en survolant une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***. ![Options Copier le nom d'utilisateur, Copier le mot de passe et Voir](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2116.png)

Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/mot de passe de l'entrée dans votre presse-papiers.

Le bouton ***Voir*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :

* ***Modifier***/***Supprimer*** l'entrée avec le bouton à points de suspension en haut à droite.
* Voir l'emplacement de votre entrée sous les sections ***{{ fr.VLT }}*** et ***dossier*** (si elle est située sous un dossier).
* Voir quand l'entrée a été modifiée et créée pour la dernière fois sous les sections ***Dernière modification le*** et ***Créé le*** respectivement.

D'autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.). ![Aperçu de l'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2118.png)
