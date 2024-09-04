---
eleventyComputed:
  title: '{{ fr.WBEX }} interface utilisateur avec {{ fr.DVLS }}'
_schema: default
---
L'interface utilisateur de {{ fr.WBEX }} est légèrement différente selon le produit Devolutions utilisé en conjonction avec l'extension. Ce sujet présentera l'interface utilisateur de {{ fr.WBEX }} lorsqu'elle est utilisée avec {{ fr.DVLS }}.

La vue principale, qui est celle affichée lors de la première ouverture de {{ fr.WBEX }} dans un navigateur, peut être divisée en trois sections principales :

1. 1. Le ***Menu supérieur***, qui contient quelques fonctionnalités et paramètres utiles de {% var, "WBEX" false %}.
   2. Le ***Menu latéral***, qui modifie ce que la ***Zone de contenu*** affiche.
   3. La ***Zone de contenu***, où les informations sont affichées et où l'interaction avec les nombreuses fonctionnalités de {% var, "WBEX" false %} est possible.

      &nbsp;


   ![Sections de l'interface utilisateur](https://cdnweb.devolutions.net/docs/WEBX4125_2024_2.png "Sections de l'interface utilisateur")

### Menu Supérieur

Le ***Menu supérieur*** de {% var, "WBEX" false %} contient (de gauche à droite) une ***Barre de recherche*** –avec un bouton de recherche avancée–, un bouton ***Actualiser***, un bouton ***Ajouter un site web*** et le bouton ***Compte*** de l'extension. Ceux-ci peuvent être utilisés respectivement pour filtrer les identifiants et les {% var, "VLT" false %}, actualiser l'affichage de l'extension, ajouter manuellement une entrée à {% var, "DVLS" false %}, et accéder aux paramètres actuels de {% var, "DA" false %}.

![Sections de l'interface utilisateur](https://cdnweb.devolutions.net/docs/WEBX4126_2024_2.png "Sections de l'interface utilisateur")

La section du bouton ***Compte*** offre quelques liens et informations intéressants, à savoir :

* un bouton ***Gérer le compte*** pour voir/modifier le {{ fr.DA }} via le {{ fr.DPORTAL }}.
* une liste des autres comptes qui ont été utilisés pour se connecter à {% var, "DVLS" false %} sur l'ordinateur.
* un bouton ***Ajouter un autre compte*** pour se connecter à {% var, "DVLS" false %} avec un compte qui n'est pas listé ci-dessus.
* un bouton ***Déconnexion*** pour se déconnecter du {{ fr.DA }}.
* un lien vers {% var, "DVLS" false %}.
* un lien vers notre [Forum {{ fr.DVLS }}](https://forum.devolutions.net/product/server).
* un lien vers notre [documentation {{ fr.DVLS }} (Aide en ligne)](https://docs.devolutions.net/server/overview/what-is-server/).
* la version actuelle de {{ fr.WBEX }}.

### Menu latéral et Zone de contenu

Le ***Menu latéral*** de {% var, "WBEX" false %} contient de nombreuses fonctionnalités, parmi lesquelles : la possibilité de changer la vue affichée dans la ***Zone de contenu*** en cliquant sur différents onglets.

![Onglets du menu latéral](https://cdnweb.devolutions.net/docs/WEBX4127_2024_2.png "Onglets du menu latéral")

Voici tous les onglets et options disponibles dans le ***Menu latéral*** :

<table><thead><tr><th><p>ONGLET/OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Sélecteur d'espace</strong></p></td><td><p>Menu déroulant permettant de basculer entre les produits Devolutions.</p></td></tr><tr><td><p><strong>Correspondance</strong></p></td><td><p>Affichage de la zone de contenu qui contient les identifiants du site web actuel (si disponibles).</p></td></tr><tr><td><p><strong>{% var, "VLT_MAJ" false %}s</strong></p></td><td><p>Affichage de la zone de contenu qui contient toutes les entrées précédemment stockées dans les {% var, "VLT" false %}s de {% var, "DVLS" false %}.</p></td></tr><tr><td><p><strong>Favoris</strong></p></td><td><p>Affichage de la zone de contenu qui contient toutes les entrées mises en favoris.</p></td></tr><tr><td><p><strong>Récent</strong></p></td><td><p>Affichage de la zone de contenu qui contient une liste des entrées récemment utilisées.</p></td></tr><tr><td><p><strong>Générateur de mots de passe</strong></p></td><td><p>Affichage de la zone de contenu qui contient un générateur de mots de passe personnalisable pour les nouveaux comptes.</p></td></tr><tr><td><p><strong>Paramètres</strong></p></td><td><p>Contient les paramètres et configurations de {% var, "WBEX" false %}. Voir la <a href="/workspace/workspace-browser-extension/settings/">liste complète des paramètres</a> pour plus de détails.</p></td></tr></tbody></table>

Voir [Menu latéral](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/) pour plus d'informations sur chacun des onglets.
