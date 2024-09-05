---
_schema: défaut
eleventyComputed:
  title: Paramètres
  status: Sujet disponible en langue allemande
---
Les paramètres de {{ fr.WBEX }} peuvent être accessibles via le bouton ***Paramètres*** dans la fenêtre de l'extension de navigateur, quel que soit l'application Devolutions utilisée avec le {{ fr.WBEX }}.

![Bouton Paramètres](https://cdnweb.devolutions.net/docs/WEBX4000_2024_2.png "Bouton Paramètres")

Les ***Paramètres*** sont séparés en deux catégories : [***Configuration***](#configuration) et [***Espaces***](#spaces).

![Paramètres](https://cdnweb.devolutions.net/docs/WEBX4001_2024_2.png "Paramètres")

### Configuration

#### Général

Les paramètres ***Général*** concernent l'interface utilisateur et l'interaction.

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Afficher l'icône dans les champs</strong></p></td><td><p>Afficher l'icône de {{ fr.WBEX }}, ainsi que le nombre d'identifiants</p></td></tr><tr><td><p><strong>Afficher la boîte de dialogue de sauvegarde des identifiants</strong></p></td><td><p>Afficher l'invite pour sauvegarder les identifiants lors de la sauvegarde des identifiants sur une nouvelle connexion.</p></td></tr><tr><td><p><strong>Afficher l'invite Passkey</strong></p></td><td><p>Afficher l'invite pour entrer le Passkey.</p></td></tr><tr><td><p><strong>Afficher l'option du menu contextuel</strong></p></td><td><p>Afficher les options du menu contextuel.</p></td></tr><tr><td><p><strong>Colorer les champs remplis</strong></p></td><td><p>Appliquer une couleur personnalisée aux champs d'identifiants remplis.</p></td></tr><tr><td><p><strong>Thème</strong></p></td><td><p>Choisir un thème {{ fr.WBEX }} entre : </p><ul><li><p>Défaut</p></li><li><p>Clair</p></li><li><p>Sombre</p></li></ul></td></tr></tbody></table>

#### Liste des exclusions

La ***Liste des exclusions*** affiche la liste des sites web ajoutés localement pour lesquels l'utilisateur ne sera jamais invité à sauvegarder ses identifiants.

* Les types sont ***Ne jamais ajouter de site***, ***Ne jamais remplir automatiquement***, ***Ne jamais rien faire***, et ***Ne jamais afficher d'icônes dans les champs***.
* Les options de correspondance sont ***Domaine de base***, ***Hôte***, ***Commence par***, ***RegEx***, et ***Exact***.

#### Paramètres d'importation/exportation

Les ***Paramètres d'importation/exportation*** permettent de sauvegarder et de transférer les paramètres préférés actuellement définis.

* Importer les paramètres d'autres navigateurs ou utilisateurs.
* Choisir d'exporter les ***Paramètres, Modèles de générateur de mots de passe*** de {{ fr.WBEX }}, et la ***Liste des exclusions***.

### Espaces

Les paramètres ***Espaces*** sont utilisés pour personnaliser les interactions de {{ fr.WBEX }} avec [{{ fr.RDM }}](#remote-desktop-manager), [{{ fr.DVLS }}](#devolutions-server), et [{{ fr.DHUBB }} ou {{ fr.DHUBP }}](#devolutions-hub-business-or-devolutions-hub-personal).

### {{ fr.RDM }}

<table><thead><tr><th><p>ONGLET GÉNÉRAL</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Activer l'application {{ fr.RDM }}</strong></p></td><td><p>Récupérer les entrées de {{ fr.RDM }} lorsque l'application est ouverte.</p></td></tr><tr><td><p><strong>Utiliser le port par défaut (19443)</strong></p></td><td><p>Communiquer avec le port par défaut 19443 entre l'application.</p></td></tr><tr><td><p><strong>Ajouter une entrée dans {{ fr.UVLT }} par défaut</strong></p></td><td><p>Sauvegarder les nouvelles entrées dans le {{ fr.UVLT }}.</p></td></tr><tr><td><p><strong>Dossier de destination</strong></p></td><td><p>Choisir le dossier où les identifiants sont stockés dans le {{ fr.VLT }}.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ONGLET ACTIONS</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Récupérer automatiquement les identifiants au chargement de la page</strong></p></td><td><p>Le {{ fr.WBEX }} recherche automatiquement les identifiants dans la source de données lors de la connexion à un site web. Si désactivé, cliquer sur l'icône {{ fr.WBEX }} pour récupérer manuellement les identifiants.</p></td></tr><tr><td><p><strong>Remplir automatiquement les identifiants au chargement</strong></p></td><td><p>Remplir automatiquement les identifiants lors du chargement d'une page web.</p></td></tr><tr><td><p><strong>Soumettre automatiquement le formulaire après remplissage</strong></p></td><td><p>Soumettre automatiquement les identifiants lorsque les champs sont remplis.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ONGLET AVANCÉ</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Clé d'application</strong></p></td><td><p>Sécuriser la communication avec une clé d'application en utilisant le même code dans {{ fr.RDM }} et le {{ fr.WBEX }}.<br />Naviguer vers <em><strong>Fichier</strong></em> – <em><strong>Paramètres</strong></em> – <em><strong>Extensions de navigateur</strong></em> dans {{ fr.RDM }} pour définir la clé d'application.</p></td></tr><tr><td><p><strong>Activer la messagerie native</strong></p></td><td><p>Échanger des messages avec une application native installée sur l'ordinateur de l'utilisateur.</p></td></tr><tr><td><p><strong>Utiliser l'API héritée</strong></p></td><td><p>Utiliser l'ancienne API d'extension de navigateur pour la compatibilité avec les anciennes versions de {{ fr.RDM }}.</p></td></tr></tbody></table>

### {{ fr.DVLS }}

<table><thead><tr><th><p>ONGLET GÉNÉRAL</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Activer {{ fr.DVLS }}</strong></p></td><td><p>Récupérer les entrées de {{ fr.DVLS }}.</p></td></tr><tr><td><p><strong>Destination {% var, "VLT" false %}</strong></p></td><td><p>Choisir le {% var, "VLT" false %} où les identifiants sont stockés.</p></td></tr><tr><td><p><strong>Dossier de destination</strong></p></td><td><p>Choisir le dossier où les identifiants sont stockés dans le {{ fr.VLT }}.</p></td></tr><tr><td><p><strong>URL du serveur</strong></p></td><td><p>Entrer l'URL de l'instance {{ fr.DVLS }} à laquelle se connecter.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ONGLET ACTIONS</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Récupérer automatiquement les identifiants au chargement de la page</strong></p></td><td><p>Le {{ fr.WBEX }} recherche automatiquement les identifiants dans la source de données lors de la connexion à un site web. <br /> <br /> Si désactivé, cliquer sur l'icône {{ fr.WBEX }} pour récupérer manuellement les identifiants.</p></td></tr><tr><td><p><strong>Remplir automatiquement les identifiants au chargement</strong></p></td><td><p>Remplir automatiquement les identifiants lors du chargement d'une page web.</p></td></tr><tr><td><p><strong>Soumettre automatiquement le formulaire après remplissage</strong></p></td><td><p>Soumettre automatiquement les identifiants lorsque les champs sont remplis.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ONGLET AVANCÉ</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Type de comparaison par défaut</strong></p></td><td><p>Définir un type d'option de comparaison par défaut entre <em><strong>Domaine de base</strong></em>, <em><strong>Hôte</strong></em>, <em><strong>Commence par</strong></em>, <em><strong>RegEx</strong></em>, <em><strong>Exact</strong></em>, et <em><strong>Jamais</strong></em>.</p></td></tr><tr><td><p><strong>Synchroniser tous les {{ fr.VLT }} disponibles</strong></p></td><td><p>Activer pour synchroniser tous les {{ fr.VLT }} disponibles de {{ fr.DVLS }}.</p></td></tr></tbody></table>

### {{ fr.DHUBB }} et {{ fr.DHUBP }}

<table><thead><tr><th><p>ONGLET GÉNÉRAL</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Activer {{ fr.DHUBB }}/Personnel</strong></p></td><td><p>Récupérer les entrées de {{ fr.DHUB }}.</p></td></tr><tr><td><p><strong>URL du serveur (disponible uniquement avec {{ fr.DHUBB }})</strong></p></td><td><p>Entrer l'URL de l'instance {{ fr.DHUBB }} à laquelle se connecter.</p></td></tr><tr><td><p><strong>Nom d'utilisateur</strong></p></td><td><p>Entrer un nom d'utilisateur pour se connecter à {{ fr.DHUB }}.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ONGLET ACTIONS</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Remplir automatiquement les identifiants au chargement</strong></p></td><td><p>Remplir automatiquement les identifiants lors du chargement d'une page web.</p></td></tr><tr><td><p><strong>Soumettre automatiquement le formulaire après remplissage</strong></p></td><td><p>Soumettre automatiquement les identifiants lorsque les champs sont remplis.</p></td></tr></tbody></table>

<table><thead><tr><th><p>ONGLET AVANCÉ</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p><strong>Connexion {{ fr.DA }}</strong></p></td><td><p>Définir l'URL de connexion de {{ fr.DA }}.</p></td></tr><tr><td><p><strong>Afficher la Favicon</strong></p></td><td><p>Afficher la favicône de {{ fr.WBEX }}.</p></td></tr><tr><td><p><strong>{{ fr.WBEX }}</strong></p></td><td><p>Activer ou désactiver le {{ fr.WBEX }} avec {{ fr.DHUB }}.</p></td></tr><tr><td><p><strong>Type de comparaison par défaut</strong></p></td><td><p>Définir un type d'option de comparaison par défaut entre <em><strong>Domaine de base</strong></em>, <em><strong>Hôte</strong></em>, <em><strong>Commence par</strong></em>, <em><strong>RegEx</strong></em>, <em><strong>Exact</strong></em>, et <em><strong>Jamais</strong></em>.</p></td></tr><tr><td><p><strong>Synchroniser tous les {{ fr.VLT }} disponibles (disponible uniquement avec {{ fr.DHUBB }})</strong></p></td><td><p>Activer pour synchroniser tous les {{ fr.VLT }} disponibles de {{ fr.DHUBB }}.</p></td></tr></tbody></table>
