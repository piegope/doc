---
_schema: default
eleventyComputed:
  title: Fichiers auxiliaires
  description: >-
    {{ fr.RDM }} génère des fichiers auxiliaires sur votre poste de travail. Le tableau ci-dessous
    répertorie un exemple de fichiers auxiliaires et leurs emplacements.
---
{{ fr.RDM }} génère des fichiers auxiliaires sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers auxiliaires et leurs emplacements.

Comme décrit dans [Emplacement du fichier de configuration](/rdm/windows/installation/client/configuration-file-location/), le chemin par défaut de la plupart de ces fichiers est personnalisable. Pour cette raison, nous utilisons le jeton \[CONFIG\] dans cette documentation pour indiquer quand un fichier est stocké dans un dossier de configuration qui peut être déplacé, ou le jeton \[PROFILE\] pour indiquer qu'ils sont stockés dans le profil local. Par défaut, ceux-ci pointent vers le même dossier exact. La seule méthode pour les séparer est d'utiliser une configuration personnalisée.

Puisque vous pouvez également déployer sur un appareil portable, parfois connu sous le nom de modèle de déploiement XCOPY, nous utiliserons le jeton \[INSTALLDIR\] pour indiquer que le fichier se trouve au même endroit que {{ fr.RDM }}.

La colonne Source de remplacement indique si un mécanisme disponible peut déplacer les fichiers de cette catégorie ailleurs.

## Résumé

\| FICHIER(S)                              \| DESCRIPTION      \|  EMPLACEMENT                       \| SOURCE DE REMPLACEMENT                  \| \|--------------------------------------\|------------------\|---------------------------------\|----------------------------------\| \| Fichier(s) de configuration (*.cfg*, .ext) \| Contient les configurations actuelles de {{ fr.RDM }}. \|  \[CONFIG\]                           \| Aucun                             \| \| Fichier(s) de données (*.xml*, *.db*)         \| Contient les sources de données de {{ fr.RDM }}.   \| \[CONFIG\] ou chemin personnalisé.           \| Aucun                             \| \| Paramètres par défaut                     \| Contient les paramètres par défaut de {{ fr.RDM }}. \| \[CONFIG\]                           \| Paramètres de la source de données (Paramètres système) \| \| Chiffrement (*.enc*, *.enb*)          \| **RemoteDesktopManager.enc** contient la clé de chiffrement utilisée pour chiffrer les options sensibles. **RemoteDesktopManager.enb** est une sauvegarde de ce fichier. \| \[CONFIG\]                           \| Aucun                             \| \| Fichiers de mise en page (*.lyt*)                \| Contient les options de mise en page de chaque version de {{ fr.RDM }} qui ont été installées sur la machine. \| \[CONFIG\]                           \| Aucun                             \| \| Fichiers journaux (*.log*, *.debug*)         \| Contient les journaux de {{ fr.RDM }}. \| \[CONFIG\]                           \| Aucun                             \| \| Listes de lecture locales                     \| Contient les listes de lecture locales de {{ fr.RDM }}. \| \[PROFILE\]\\\[Datasource\]\\Playlists \| Utiliser le répertoire de l'application pour la liste de lecture locale utilisera à la place \[INSTALLDIR\] \| \| Modèles locaux                      \| Contient les modèles locaux de {{ fr.RDM }}. \| Ils sont sérialisés directement dans le fichier de configuration de l'application. \| Aucun \| \| Données hors ligne/cache (*offline.db*)    \| Contient les données hors ligne/cache de {{ fr.RDM }}. \| \[PROFILE\]\\\[Datasource\]            \| Utiliser le répertoire de l'application pour le cache en ligne utilisera à la place \[INSTALLDIR\] \| \| Sensible (*.stv*, *.stb*)           \| **RemoteDesktopManager.stv** contient des options sensibles telles que les configurations de sources de données, les jetons d'authentification et les clés AMF. Il est chiffré avec la clé contenue dans **RemoteDesktopManager.enc** et **RemoteDesktopManager.stb** est sa sauvegarde. \| \[CONFIG\]                           \| Aucun                             \| \| Thèmes                               \| Contient les options de thème de {{ fr.RDM }}. \| \[CONFIG\]                           \| Aucun                             \|

### Option de liste de lecture hors ligne et locale

Accéder aux options de liste de lecture hors ligne et locale en naviguant vers ***Fichier – Paramètres – Avancé***. ![File – Settings – Advanced](https://cdnweb.devolutions.net/docs/RDMW6081_2024_2.png "File – Settings – Advanced")
