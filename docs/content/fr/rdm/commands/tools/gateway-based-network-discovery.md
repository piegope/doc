---
_schema: default
eleventyComputed:
  title: ' Network scan'
  description: >-
    Network Scan allows you to perform a network scan based on a predefined
    range of IP addresses to find sessions. 
  status:
  keywords:
---
***Network Scan*** permet d'effectuer une analyse réseau basée sur une plage d'adresses IP prédéfinie pour trouver des sessions. Il est accessible via le menu ***Tool-Network Scan***.

Spécifier une plage de scan, puis, une fois le scan terminé, sélectionner les sessions que vous souhaitez Connecter, [Importer](/rdm/commands/file/import/network-scan/), ou [Sélectionner dans le volet de navigation](/rdm/user-interface/navigation-pane/).

## **Options de scan**

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Résoudre l'adresse IP</p></td><td><p>Tente de résoudre les adresses IP à partir du nom d'hôte ou du nom de domaine.</p></td></tr><tr><td><p>Scanner en utilisant ZeroConf</p></td><td><p>Envoie un ping à chaque adresse IP avant de scanner, ne montrant que celles qui répondent. Cela devrait augmenter la vitesse de scan.</p></td></tr><tr><td><p>Ignorer les sessions existantes</p></td><td><p>Masque les sessions déjà présentes sur la source de données.</p></td></tr><tr><td><p>Scanner Devolutions Gateway</p></td><td><p>Scanne en utilisant Devolutions Gateways, éliminant le besoin de VPN pour le réseau distant. </p></td></tr></tbody></table>

### Désactiver le scan réseau

Le scan réseau peut être désactivé en utilisant des [GPOs](/rdm/kb/rdm-windows/how-to-articles/group-policies/#disable-network-scan).

&nbsp;

&nbsp;
