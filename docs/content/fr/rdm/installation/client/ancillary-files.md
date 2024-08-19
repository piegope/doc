---
_schema: default
eleventyComputed:
  title: Fichiers auxiliaires
  description: >-
    {{ fr.RDM }} génère des fichiers auxiliaires sur votre poste de travail. Le tableau ci-dessous
    répertorie un exemple de fichiers auxiliaires et leurs emplacements.
---
{{ fr.RDM }} génère des fichiers auxiliaires sur votre poste de travail. Le tableau ci-dessous répertorie un exemple de fichiers auxiliaires et leurs emplacements.

Comme décrit dans [Emplacement du fichier de configuration](/rdm/windows/installation/client/configuration-file-location/), le chemin par défaut de la plupart de ces fichiers est personnalisable. Pour cette raison, nous utilisons le jeton \[CONFIG\] dans cette documentation pour indiquer qu'un fichier est stocké dans un dossier de configuration qui peut être déplacé, ou le jeton \[PROFILE\] pour indiquer qu'ils sont stockés dans le profil local. Par défaut, ceux-ci pointent vers le même dossier exact. La seule méthode pour les séparer est d'utiliser une configuration personnalisée.

Puisque vous pouvez également déployer sur un appareil portable, parfois connu sous le nom de modèle de déploiement XCOPY, nous utiliserons le jeton \[INSTALLDIR\] pour indiquer que le fichier se trouve au même endroit que {{ fr.RDM }}.

La colonne Source de remplacement indique si un mécanisme disponible peut déplacer les fichiers de cette catégorie ailleurs.

## Résumé

<table><thead><tr><th><p><strong>FICHIER(S)</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th><th><p><strong>EMPLACEMENT</strong></p></th><th><p><strong>SOURCE DE REMPLACEMENT</strong></p></th></tr></thead><tbody><tr><td><p>Fichier(s) de configuration (<em>.cfg</em>, .ext)</p></td><td><p>Contient les configurations actuelles de {% var, "RDM" false %}.</p></td><td><p>[CONFIG]</p></td><td><p>Aucune</p></td></tr><tr><td><p>Fichier(s) de données (<em>.xml</em>, <em>.db</em>)</p></td><td><p>Contient les sources de données de {% var, "RDM" false %}.</p></td><td><p>[CONFIG] ou chemin personnalisé.</p></td><td><p>Aucune</p></td></tr><tr><td><p>Paramètres par défaut</p></td><td><p>Contient les paramètres par défaut de {% var, "RDM" false %}.</p></td><td><p>[CONFIG]</p></td><td><p>Paramètres de la source de données (Paramètres système)</p></td></tr><tr><td><p>Chiffrement (<em>.enc</em>, <em>.enb</em>)</p></td><td><p><strong>RemoteDesktopManager.enc</strong> contient la clé de chiffrement utilisée pour chiffrer les options sensibles. <strong>RemoteDesktopManager.enb</strong> est une sauvegarde de ce fichier.</p></td><td><p>[CONFIG]</p></td><td><p>Aucune</p></td></tr><tr><td><p>Fichiers de mise en page (<em>.lyt</em>)</p></td><td><p>Contient les options de mise en page de chaque version de {% var, "RDM" false %} qui ont été installées sur la machine.</p></td><td><p>[CONFIG]</p></td><td><p>Aucune</p></td></tr><tr><td><p>Fichiers journaux (<em>.log</em>, <em>.debug</em>)</p></td><td><p>Contient les journaux de {% var, "RDM" false %}.</p></td><td><p>[CONFIG]</p></td><td><p>Aucune</p></td></tr><tr><td><p>Listes de lecture locales</p></td><td><p>Contient les listes de lecture locales de {% var, "RDM" false %}.</p></td><td><p>[PROFILE]\[Datasource]\Playlists</p></td><td><p>Utiliser le répertoire de l'application pour la liste de lecture locale utilisera à la place [INSTALLDIR]</p></td></tr><tr><td><p>Modèles locaux</p></td><td><p>Contient les modèles locaux de {% var, "RDM" false %}.</p></td><td><p>Ils sont sérialisés directement dans le fichier de configuration de l'application.</p></td><td><p>Aucune</p></td></tr><tr><td><p>Données hors ligne/cache (<em>offline.db</em>)</p></td><td><p>Contient les données hors ligne/cache de {% var, "RDM" false %}.</p></td><td><p>[PROFILE]\[Datasource]</p></td><td><p>Utiliser le répertoire de l'application pour le cache en ligne utilisera à la place [INSTALLDIR]</p></td></tr><tr><td><p>Sensible (<em>.stv</em>, <em>.stb</em>)</p></td><td><p><strong>RemoteDesktopManager.stv</strong> contient des options sensibles telles que les configurations de sources de données, les jetons d'authentification et les clés AMF. Il est chiffré avec la clé contenue dans <strong>RemoteDesktopManager.enc</strong> et <strong>RemoteDesktopManager.stb</strong> est sa sauvegarde.</p></td><td><p>[CONFIG]</p></td><td><p>Aucune</p></td></tr><tr><td><p>Thèmes</p></td><td><p>Contient les options de thème de {% var, "RDM" false %}.</p></td><td><p>[CONFIG]</p></td><td><p>Aucune</p></td></tr></tbody></table>

&nbsp;

### Option de liste de lecture hors ligne et locale

Accéder aux options de liste de lecture hors ligne et locale en naviguant vers ***Fichier – Paramètres – Avancé***. ![File – Settings – Advanced](https://cdnweb.devolutions.net/docs/RDMW6081_2024_2.png "File – Settings – Advanced")
