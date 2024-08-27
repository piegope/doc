---
_schema: default
eleventyComputed:
  title: Accéder à l'entrée {{ fr.RDM }} via Google Chrome sans intégration Google Drive
  description: >-
    Comment accéder à votre entrée {{ fr.RDM }} dans Google Chrome si
    l'intégration Google Drive ne fonctionne pas.
  status:
  keywords:
---
Si vous rencontrez des difficultés avec l'intégration de {% var, "RDM" false %} dans ***Google Chrome*** via ***Google Drive***, nous recommandons la procédure suivante pour accéder et gérer votre ***fichier source de données XML*** manuellement.

## Solution

### Localiser le ***fichier source de données XML*** dans Google Drive

1. Localiser le ***fichier source de données XML*** dans Google Drive.
2. Ouvrir ***{% var, "RDM" false %}***.
3. Cliquer sur ***Fichier - Sources de données***.
4. Sélectionner votre ***source de données Google Drive***.
5. Noter le ***nom du fichier***.

### Exporter le ***fichier source de données XML*** de Google Drive

1. Se connecter à votre Google Drive et télécharger le ***fichier source de données***.
2. Renommer le fichier téléchargé en ***connection.xml***.
3. Dans {% var, "RDM" false %}, aller à ***Fichier - Source de données***.
4. Créer une ***nouvelle source de données*** et sélectionner ***XML***.
5. Cliquer sur les trois points à côté du champ de nom de fichier et sélectionner le **fichier connection.xml** que vous avez téléchargé.
6. Cliquer sur ***Ajouter*** pour terminer.

### Passer à une source de données fiable

Étant donné que ***XML*** est limité, envisager de passer à une source de données plus fiable comme [{% var, "DHUB" false %}](/hub/getting-started/create-hub/), qui est une solution basée sur le nuage.

### Exporter les données de XML vers une nouvelle source de données

1. Dans {% var, "RDM" false %}, avec la ***source de données XML*** sélectionnée, cliquer sur ***Fichier - Exporter - {% var, "VLT_MAJ" false %}***.
2. Dans la fenêtre contextuelle, cliquer sur ***inclure les identifiants*** et enregistrer le ***fichier .rdm*** dans un dossier sécurisé.
3. Aller à ***Fichier - Sources de données***.
4. Cliquer sur le ***\+*** pour ajouter une nouvelle source de données, et sélectionner ***SQLite*** ou {% var, "DHUB" false %}.
5. Dans la nouvelle source de données, aller à ***Fichier - Importer (.rdm)***.
6. Sélectionner votre ***fichier .rdm*** et cliquer sur ***Suivant*** jusqu'à ce que vos entrées apparaissent.

Les données devraient être dans la ***nouvelle source de données***.<br>

&nbsp;
