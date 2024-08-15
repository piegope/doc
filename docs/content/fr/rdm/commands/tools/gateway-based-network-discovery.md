---
_schema: default
eleventyComputed:
  title: 'Scan de réseau'
  description:
  status:
  keywords:
---
***Scan de réseau*** permet d'effectuer un scan de réseau basé sur une plage d'adresses IP prédéfinie pour trouver des sessions. Il peut être accédé via le menu ***Outil-Scan de réseau***.

Spécifier une plage de scan, puis, une fois le scan terminé, sélectionner les sessions que vous souhaitez importer (par défaut, toutes les sessions sont sélectionnées) et cliquer sur ***OK*** pour importer les sessions dans votre source de données.

Si vous souhaitez examiner chaque session une par une au fur et à mesure de leur importation, vous pouvez cocher l'option ***Modifier l'entrée importée***. Cependant, cela n'est pas recommandé pour un grand nombre de sessions.

## **Options de scan**

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Résoudre l'adresse IP</p></td><td><p>Tente de résoudre les adresses IP à partir du nom d'hôte ou du nom de domaine.</p></td></tr><tr><td><p>Scanner en utilisant ZeroConf</p></td><td><p>Envoie un ping à chaque adresse IP avant de scanner, ne montrant que celles qui répondent. Cela devrait augmenter la vitesse de scan.</p></td></tr><tr><td><p>Ignorer les sessions existantes</p></td><td><p>Masque les sessions déjà présentes sur la source de données.</p></td></tr><tr><td><p>Scanner Devolutions Gateway</p></td><td><p>Scanne pour les Devolutions Gateways.</p></td></tr></tbody></table>

### Désactiver le scan de réseau

Le scan de réseau peut être désactivé en utilisant des [GPOs](/rdm/kb/rdm-windows/how-to-articles/group-policies/#disable-network-scan).

&nbsp;

&nbsp;
