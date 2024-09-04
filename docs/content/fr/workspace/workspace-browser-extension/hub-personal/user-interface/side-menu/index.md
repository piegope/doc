---
_schema: default
eleventyComputed:
  title: Menu latéral
---
Utiliser les onglets du ***Menu latéral*** pour accéder à diverses fonctionnalités de {{ fr.WBEX }}. Chaque onglet affiche une vue différente dans la ***Zone de contenu***.

Lors de l'utilisation de {{ fr.WBEX }} avec {{ fr.DHUBP }}, les onglets disponibles sont l'onglet ***Correspondance***, l'onglet ***Favoris***, l'onglet ***Toutes les entrées***, l'onglet ***Générateur de mots de passe*** et l'onglet ***Paramètres***.

Dans tous les onglets sauf l'onglet ***Générateur de mots de passe***, en survolant une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Afficher***. Aller à la section [Fonctionnalités des entrées](#entry-functionalities) pour plus d'informations.

## Onglets du menu latéral

### Onglet Correspondance

L'extension s'ouvre sur l'onglet ***Correspondance***. C'est ici que vous verrez la liste des identifiants disponibles pour le site web particulier sur lequel vous vous trouvez.

{% snippet, "badgeInfo" %}
Pour les méthodes de récupération de vos identifiants, visiter [Récupérer les identifiants de {{ fr.DHUBP }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).
{% endsnippet %}

![Onglet Correspondance](https://cdnweb.devolutions.net/docs/WEBX4128_2024_2.png "Onglet Correspondance")

En haut, utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement ceux applicables au site web. Utiliser également le bouton ***Actualiser*** à côté pour mettre à jour les résultats de la recherche.

Le bouton ***Ajouter un site web*** (+) ouvre un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée de site web dans {% var, "DHUBP" false %} via le {{ fr.WBEX }}.

{% snippet, "badgeInfo" %}Pour une liste complète des entrées et champs disponibles dans la fenêtre ***Ajouter un site web***, visiter [Nouvelle entrée](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/new-entry/). Vous pouvez également consulter notre guide étape par étape sur [comment ajouter une entrée](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/add-entry-hub-personal-workspace-browser-extension/).{% endsnippet %}

### Onglet Favoris

L'onglet ***Favoris*** contient toutes les entrées marquées comme favorites. Pour rechercher une entrée particulière, utiliser l'option de filtre située dans le ***Menu supérieur***.

![Onglet Favoris](https://cdnweb.devolutions.net/docs/WEBX4129_2024_2.png "Onglet Favoris")

### Onglet Toutes les entrées

L'onglet ***Toutes les entrées*** vous permet de parcourir tous vos dossiers et entrées.

![Onglet Toutes les entrées](https://cdnweb.devolutions.net/docs/WEBX4130_2024_2.png "Onglet Toutes les entrées")

En haut, utiliser la barre de ***Filtre*** pour rechercher dans tous vos dossiers et entrées.

Pour accéder à une entrée dans le {{ fr.WBEX }}, naviguer à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DHUBP }}.

### Onglet Générateur de mots de passe

L'onglet ***Générateur de mots de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site web pour votre nouveau compte.

![Onglet Générateur de mots de passe](https://cdnweb.devolutions.net/docs/WEBX4131_2024_2.png "Onglet Générateur de mots de passe")

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est réglée par défaut à 12, peut également être ajustée.

Dans la section déroulante ***Général***, vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doivent être inclus. ![Section Générale](https://cdnweb.devolutions.net/docs/WEBX4102_2024_2.png "Section Générale")

Dans la section déroulante ***Avancé***, vous pouvez personnaliser davantage votre mot de passe en entrant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, vous pouvez également entrer les caractères que vous souhaitez exclure de votre mot de passe. ![Section Avancée](https://cdnweb.devolutions.net/docs/WEBX4103_2024_2.png "Section Avancée")

{% snippet, "badgeInfo" %}Pour apprendre à utiliser le ***Générateur de mots de passe*** lors de la création d'un compte sur un site web, visiter [Créer un compte pour un site web dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/create-account-website-hub-personal/).{% endsnippet %}

### Fonctionnalités des entrées

Peu importe l'onglet dans lequel vous vous trouvez (sauf l'onglet ***Générateur de mots de passe***), en survolant une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Aperçu***.

![Options Copier le nom d'utilisateur, Copier le mot de passe et Afficher](https://cdnweb.devolutions.net/docs/WEBX4132_2024_2.png "Options Copier le nom d'utilisateur, Copier le mot de passe et Afficher")

Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/mot de passe de l'entrée dans votre presse-papiers.

Le bouton ***Aperçu*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :

* ***Modifier***/***Supprimer*** l'entrée avec le bouton à points de suspension en haut à droite.
* Marquer votre entrée comme favorite en cliquant sur l'icône ***Ajouter aux favoris*** à côté du nom de l'entrée. L'entrée apparaîtra alors dans l'onglet ***Favoris*** [tab](#favorites-tab).
* Voir l'emplacement de votre entrée sous la section ***Dossier*** (si elle est située sous un dossier).
* Voir quand l'entrée a été modifiée et créée pour la dernière fois sous les sections ***Dernière modification le*** et ***Créé le*** respectivement.
* Accéder et voir les fichiers attachés à l'entrée en utilisant le bouton ***Pièces jointes***.

D'autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.). ![Aperçu de l'entrée](https://cdnweb.devolutions.net/docs/WEBX4133_2024_2.png "Aperçu de l'entrée")
