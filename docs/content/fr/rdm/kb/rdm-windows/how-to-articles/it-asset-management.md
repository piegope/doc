---
_schema: default
eleventyComputed:
  title: Gestion des actifs informatiques dans {{ fr.RDM }}
  description: Comment utiliser la gestion des actifs dans {{ fr.RDM }}.
---
Gérer votre inventaire informatique avec précision en centralisant les informations techniques, logicielles, matérielles et de localisation.

La fonctionnalité de gestion des actifs informatiques peut être utilisée pour lier un gestionnaire d'actifs (par exemple, BlueTally, [Lansweeper](/rdm/kb/rdm-windows/how-to-articles/lansweeper/)) via les propriétés d'une entrée. {% snippet, "badgeInfo" %}Seuls les types d'entrée ***Session***, ***Remote Management***, ***Miscellaneous***, ***VPN***, ***Synchronizer*** et ***Template*** prennent en charge cette fonctionnalité pour le moment. Les [***entrées de gestion des actifs informatiques***](https://docs.devolutions.net/rdm/kb/rdm-windows/knowledge-base/it-asset-entry/) fonctionnent différemment de la fonctionnalité.{% endsnippet %}

## Étapes

1. Faire un clic droit sur une entrée et sélectionner ***Properties***.
2. Aller à ***View*** – ***IT Asset Management***.
3. Sélectionner un ***Service type*** dans la liste déroulante.
4. Saisir l'URL d'un actif spécifique. ![IT Asset Management](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0058.png)
5. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre.
6. Dans le ***Dashboard***, sélectionner l'onglet ***IT Asset Management***. {% snippet, "badgeInfo" %}
   L'onglet sera nommé selon ce qui a été écrit dans le ***champ de titre de gestion des actifs informatiques***. Si le champ est laissé vide, ***BlueTally*** apparaîtra (si ce service a été choisi), ou apparaîtra comme ***IT Asset Management***.
   {% endsnippet %}

![IT Asset Management tab](https://cdnweb.devolutions.net/docs/RDMW6080_2024_2.png "IT Asset Management tab")

7\. Se connecter à ce service.
