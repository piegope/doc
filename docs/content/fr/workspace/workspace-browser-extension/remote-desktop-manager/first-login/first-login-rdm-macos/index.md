---
_schema: défaut
eleventyComputed:
  title: Première connexion à {{ fr.RDMMAC }} avec le {{ fr.WBEX }}
---
Suivre ces étapes pour connecter {% var, "RDMWIN" false %} au {% var, "WBEX" false %} :

1. Ouvrir {% var, "RDM" false %} et le garder en cours d'exécution, puis cliquer sur l'icône {% var, "WBEX" false %} dans n'importe quel navigateur.
2. Choisir {% var, "RDM" false %} dans la liste.

   ![Liste des applications](https://cdnweb.devolutions.net/docs/WEBX4081_2024_2.png "Liste des applications")

3. Entrer un nom pour cette association dans la zone de texte.

   ![Association avec Remote Desktop Manager](https://cdnweb.devolutions.net/docs/WEBX4005_2024_2.png "Association avec Remote Desktop Manager")

4. Cliquer sur ***Associer avec*** **{% var, "RDM" false %}**.
5. Cliquer sur ***Oui*** dans **{% var, "RDM" false %}** pour accepter la demande d'association.

   ![Demande d'association](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4058.png)

6. Cliquer sur l'icône dans le navigateur web pour valider que le {% var, "WBEX" false %} est maintenant jumelé à **{% var, "RDM" false %}**. ![Remote Desktop Manager associé avec succès](https://cdnweb.devolutions.net/docs/WEBX4007_2024_2.png "Remote Desktop Manager associé avec succès") {% snippet, "badgeInfo" %}
               Noter que, bien que {{ fr.RDM }} puisse gérer plusieurs associations (par exemple, plusieurs navigateurs), le {{ fr.WBEX }} ne peut être jumelé qu'à une seule instance de {{ fr.RDM }} à la fois.
               {% endsnippet %}
