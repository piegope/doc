---
_schema: default
eleventyComputed:
  title: ' Analyse réseau'
  description:
  status:
  keywords:
---
***Analyse réseau*** permet d'effectuer une analyse réseau basée sur une plage d'adresses IP prédéfinie pour trouver des sessions. Il est accessible via le menu ***Outil-Analyse réseau***.

Spécifier une plage d'analyse, puis, une fois l'analyse terminée, sélectionner les sessions que vous souhaitez Connecter, [Importer](/rdm/commands/file/import/network-scan/), ou [Sélectionner dans le volet de navigation](/rdm/user-interface/navigation-pane/).

## **Options d'analyse**

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Résoudre l'adresse IP</p></td><td><p>Tente de résoudre les adresses IP à partir du nom d'hôte ou du nom de domaine.</p></td></tr><tr><td><p>Analyser en utilisant ZeroConf</p></td><td><p>Envoie un ping à chaque adresse IP avant de scanner, ne montrant que celles qui répondent. Cela devrait augmenter la vitesse de l'analyse.</p></td></tr><tr><td><p>Ignorer les sessions existantes</p></td><td><p>Masque les sessions déjà présentes sur la source de données.</p></td></tr><tr><td><p>Analyser Devolutions Gateway</p></td><td><p>Analyse en utilisant Devolutions Gateways, éliminant le besoin de VPN pour le réseau distant. </p></td></tr></tbody></table>

### Désactiver l'analyse réseau

Désactiver l'analyse réseau en utilisant des [GPOs](/rdm/kb/rdm-windows/how-to-articles/group-policies/#disable-network-scan).

&nbsp;

&nbsp;
