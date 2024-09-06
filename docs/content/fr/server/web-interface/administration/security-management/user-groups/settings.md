---
_schema: défaut
eleventyComputed:
  title: Paramètres
---
Permettre au groupe d'utilisateurs d'activer le [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/) sur la source de données {% var, "DVLS" false %} dans {% var, "RDM" false %}. La source de données doit également être configurée pour permettre le mode hors ligne. Plusieurs modes sont disponibles. ![Groupes d'utilisateurs - Paramètres](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8012.png)

## Paramètres

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p><em><strong>Désactivé</strong></em></p></td><td><p>Aucun cache hors ligne autorisé pour le groupe d'utilisateurs.</p></td></tr><tr><td><p><em><strong>Lecture seule</strong></em></p></td><td><p>Un cache en lecture seule. Le groupe d'utilisateurs ne pourra pas modifier les données dans la source de données. Ce mode est autorisé uniquement pour les <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Sources de Données Avancées</a>.</p></td></tr><tr><td><p><em><strong>Lecture/Écriture</strong></em></p></td><td><p>Un cache avancé, avec synchronisation des modifications. Ce mode est autorisé uniquement pour les <a href="https://docs.devolutions.net/rdm/windows/data-sources/data-sources-types/advanced-data-sources/">Sources de Données Avancées</a>.</p></td></tr></tbody></table>
