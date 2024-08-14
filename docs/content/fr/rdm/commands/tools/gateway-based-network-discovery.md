---
_schema: default
eleventyComputed:
  title: ' Analyse réseau'
  description:
  status:
  keywords:
---
***Analyse réseau*** permet d'effectuer une analyse réseau basée sur une plage d'adresses IP prédéfinie pour trouver des sessions à importer. Elle est accessible via le menu ***Fichier – Importer*** ou en cliquant avec le bouton droit dans le Volet de navigation et en sélectionnant ***Importer***.

Spécifier une plage de balayage, puis, une fois le balayage terminé, sélectionner les sessions que vous souhaitez importer (par défaut, toutes les sessions sont sélectionnées) et cliquer sur ***OK*** pour importer les sessions dans votre source de données.

Si vous souhaitez examiner chaque session une par une lors de leur importation, vous pouvez cocher l'option ***Modifier l'entrée importée***. Cependant, cela n'est pas recommandé pour un grand nombre de sessions.

## **Options de balayage**

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Résoudre l'adresse IP</p></td><td><p>Tente de résoudre les adresses IP à partir du nom d'hôte ou du nom de domaine.</p></td></tr><tr><td><p>Balayer en utilisant ZeroConf</p></td><td><p>Envoie un ping à chaque adresse IP avant de balayer, ne montrant que celles qui répondent. Cela devrait augmenter la vitesse de balayage.</p></td></tr><tr><td><p>Ignorer les sessions existantes</p></td><td><p>Masque les sessions déjà présentes sur la source de données.</p></td></tr><tr><td><p>Balayer Devolutions Gateway</p></td><td><p>Recherche des Devolutions Gateways.</p></td></tr><tr><td><p>Modifier l'entrée importée</p></td><td><p>Ouvre la fenêtre <em><strong>Modifier</strong></em> pour chaque entrée sélectionnée avant l'importation.</p></td></tr></tbody></table>

&nbsp;

https://docs.devolutions.net/rdm/kb/rdm-windows/how-to-articles/group-policies/#disable-network-scan

&nbsp;

&nbsp;
