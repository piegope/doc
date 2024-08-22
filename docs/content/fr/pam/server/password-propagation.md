---
---
_schema: default
eleventyComputed:
  title: Propagation de mot de passe
---
---

***Propagation de mot de passe*** permet de propager la réinitialisation des mots de passe des comptes privilégiés aux services des serveurs distants. Ce sujet couvre la [Propagation par script](#propagation-par-script) et la [Propagation spécifique à Active Directory](#active-directory-specific-propagation).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation par script

Les sections suivantes décrivent les propriétés de la ***Propagation*** par script au sein de la solution de gestion des accès privilégiés. La section [Étapes](#steps-with-template) explique comment configurer cette fonctionnalité en utilisant un modèle Devolutions, mais il est également possible de [Créer un modèle](#create-a-powershell-template).

{% snippet, "badgeInfo" %}
Cette méthode couvre tous les fournisseurs de comptes PAM.
{% endsnippet %}

### Étapes (avec modèle)

1. Télécharger notre [fichier modèle](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts) depuis GitHub.
2. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
3. Aller à ***Administration*** – ***Modules*** – ***Accès Privilégié*** – ***Propagation (Aperçu)***. ![Propagation (Aperçu)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
4. Cliquer sur ***Modèles de script***. ![Modèles de script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
5. Cliquer sur ***Importer***. ![Importer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0098.png)
6. Sélectionner le fichier .json du modèle précédemment téléchargé et cliquer sur ***Importer***. ![Bouton Importer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png)
7. Cliquer sur ***Enregistrer***. ![Bouton Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png)
8. Retourner à la page ***Propagation (Aperçu)***.
9. Cliquer sur ***Ajouter***. ![Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0101.png)
10. Sélectionner le modèle souhaité et cliquer sur ***Sélectionner***. ![Bouton Sélectionner](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0102.png)
11. Dans l'onglet ***Général***, nommer cette configuration.
12. Dans l'onglet ***Propriétés de propagation***, entrer les informations pour la machine distante.
13. Dans l'onglet ***Mappage des propriétés***, cliquer sur ***Configurer une entrée PAM*** pour sélectionner un type de compte privilégié. ![Configurer une entrée PAM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png)
14. Cliquer sur ***Continuer***.
15. Sélectionner les champs du compte (ou fournisseur) à associer aux variables et cliquer sur ***Enregistrer***.
16. Cliquer sur ***Enregistrer*** pour enregistrer cette nouvelle configuration et fermer la fenêtre. ![Bouton Enregistrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png)
17. Aller à l'onglet ***Accès Privilégié*** et sélectionner un type de compte précédemment configuré avec ***Propagation***.
18. Cliquer sur ***Modifier***.
19. Aller à l'onglet Propagation et cliquer sur le bouton "***\+***". ![Bouton +](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png)
20. Sélectionner la configuration à lier à ce compte, et cliquer sur ***Confirmer***. ![Bouton Confirmer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png) {% snippet, "badgeInfo" %}
       Il est possible de sélectionner plusieurs configurations.
       {% endsnippet %}
21. Cliquer sur ***OK*** pour enregistrer les modifications et fermer la fenêtre. ![Bouton OK](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png) {% snippet, "badgeInfo" %}
       Pour tester si le lien est réussi, cliquer sur ***Plus*** puis sur ***Réinitialiser le mot de passe***. Si cela fonctionne correctement, le fichier nouvellement créé apparaîtra sur la machine distante. Sinon, il est recommandé de vérifier les journaux du compte.
       {% endsnippet %}

### Créer un modèle PowerShell

1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
2. Aller à ***Administration*** – ***Modules*** – ***Accès Privilégié*** – ***Propagation (Aperçu)***. ![Propagation (Aperçu)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
3. Cliquer sur ***Modèles de script***. ![Modèles de script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
4. Cliquer sur ***Ajouter***. ![Ajouter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0112.png)
5. Dans l'onglet Général, ajouter un ***Nom*** pour ce modèle. {% snippet, "badgeInfo" %}
      Il est possible d'ajouter une ***Description***. L'icône peut également être modifiée en cliquant dessus.
      {% endsnippet %}
6. Dans l'onglet ***Propriétés de propagation***, ajouter les variables pour le script en cliquant sur ***\+ Ajouter une propriété***. Les variables ajoutées dans cet onglet doivent représenter l'URL de la machine distante (c'est-à-dire, ComputerIP, Username, Password et RootFolder). ![Propriétés de propagation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
7. Dans l'onglet ***Mappage des propriétés***, ajouter les variables pour le script en cliquant sur ***\+ Ajouter une propriété***. Les variables ajoutées dans cet onglet doivent représenter le ***Mappage des champs*** de la machine distante (c'est-à-dire, FileName et FilePath). ![Mappage des propriétés](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
8. Dans l'onglet ***Script***, les variables précédentes apparaissent ainsi que la variable ***NewPassword***. Cette nouvelle variable contiendra le nouveau mot de passe pour le compte lors de l'exécution du script.
9. Cliquer sur ***Générer le script de base***. ![Générer le script de base](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png) {% snippet, "badgeInfo" %}
      Cliquer sur ***Modifier*** pour modifier ou ajouter au script.
      {% endsnippet %}
10. Cliquer sur ***Enregistrer*** pour enregistrer cette configuration et fermer la fenêtre. {% snippet, "badgeInfo" %}
       Pour en savoir plus sur les scripts personnalisés pour cette fonctionnalité, visitez notre [GitHub public](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
       {% endsnippet %}

## Propagation spécifique à Active Directory

{% snippet, "badgeNotice" %}
Le WinRM doit être correctement configuré comme décrit dans l'article [WinRM et liste des hôtes de confiance](/server/kb/how-to-articles/winrm-trustedhostslist/).
{% endsnippet %} {% snippet, "badgeCaution" %}
Cette fonctionnalité de ***Propagation de mot de passe*** n'est disponible que pour les comptes de domaine.
{% endsnippet %}

La section suivante décrit les propriétés de la fonctionnalité de ***Propagation de mot de passe*** Active Directory au sein de la solution de gestion des accès privilégiés. ![Propagation de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png)

### Propriétés

\| Option                         \| Description                                                              \| \|--------------------------------\|--------------------------------------------------------------------------\| \| ***Ordinateurs***                \| ***Hérité***: Hérite de la liste des ordinateurs du dossier parent.<br>***Personnalisé***: Définir une liste personnalisée d'ordinateurs.<br>***Personnalisé + Hérité***: Hérite de la liste des ordinateurs du dossier parent et définir une liste personnalisée d'ordinateurs. \| \| ***Nom de l'ordinateur***            \| Nom de chaque ordinateur sur lequel la propagation du mot de passe aura lieu. \| \| ***Parcourir les conteneurs de domaine*** \| Parcourir le domaine pour sélectionner les ordinateurs.                               \|
