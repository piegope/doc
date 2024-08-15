---
_schema: default
eleventyComputed:
  title: 'Scan de réseau'
  description: >-
    Le Scan de réseau vous permet d'effectuer un scan de réseau basé sur une plage d'adresses IP prédéfinie pour trouver des sessions.
  status:
  keywords:
---
***Scan de réseau*** vous permet d'effectuer un scan de réseau basé sur une plage d'adresses IP prédéfinie pour trouver des sessions. Il peut être accédé via le menu ***Outil-Scan de réseau***.

Spécifier une plage de scan, puis, une fois le scan terminé, sélectionner les sessions que vous souhaitez Connecter, [Importer](/rdm/commands/file/import/network-scan/), ou [Sélectionner dans le volet de navigation](/rdm/user-interface/navigation-pane/).

![Network scan](https://cdnweb.devolutions.net/docs/RDMW6078_2024_2.png "Network scan")

## **Options de scan**

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Résoudre l'adresse IP</p></td><td><p>Tente de résoudre les adresses IP à partir du nom d'hôte ou du nom de domaine.</p></td></tr><tr><td><p>Scanner en utilisant ZeroConf</p></td><td><p>Envoie un ping à chaque adresse IP avant de scanner, ne montrant que celles qui répondent. Cela devrait augmenter la vitesse de scan.</p></td></tr><tr><td><p>Ignorer les sessions existantes</p></td><td><p>Masque les sessions déjà présentes sur la source de données.</p></td></tr><tr><td><p>Scanner Devolutions Gateway</p></td><td><p>Utilise <a href="/dgw/overview/what-is-dgw/">Devolutions Gateway</a> dans une {% var, "DVLS" false %} <a href="rdm/concepts/basic-concepts/data-sources/">source de données</a> pour scanner les réseaux distants sans VPN. </p></td></tr></tbody></table>

### Désactiver le Scan de réseau

Le scan de réseau peut être désactivé via les [GPOs](/rdm/kb/rdm-windows/how-to-articles/group-policies/#disable-network-scan).

&nbsp;

&nbsp;
