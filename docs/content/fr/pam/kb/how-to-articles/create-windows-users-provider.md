---
eleventyComputed:
  title: Créer un fournisseur d'utilisateur Windows
  description: Ce guide fournit les étapes pour créer un fournisseur d'utilisateur Windows pour gérer les comptes locaux Windows dans le module PAM de {{ fr.DVLS }}.
---
Ce guide fournit les étapes pour créer un fournisseur d'utilisateur ***Windows*** pour gérer les comptes locaux Windows dans le module PAM de {{ fr.DVLS }}.

{% snippet, "badgeInfo" %}
* Le [service Planificateur](/server/kb/knowledge-base/scheduler-service-general-information/) doit être installé et en cours d'exécution pour utiliser cette fonctionnalité.
* Si vous utilisez un administrateur différent de celui intégré par défaut, vous devez activer la politique "Contrôle de compte d'utilisateur : Mode d'approbation de l'administrateur pour le compte Administrateur intégré". Voir l'article de Microsoft pour plus d'informations : [Description du contrôle de compte d'utilisateur et des restrictions à distance dans Windows Vista](https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/user-account-control-and-remote-restriction).
{% endsnippet %}

1. S'assurer que WinRM est correctement configuré et que toutes les machines distantes sont ajoutées dans la liste des hôtes de confiance comme indiqué dans [WinRM et liste des hôtes de confiance](/server/kb/how-to-articles/winrm-trustedhostslist/).
1. Créer un compte local sur l'hôte distant qui sera géré par le module PAM en tant que compte privilégié. Les comptes locaux doivent avoir l'option ***L'utilisateur ne peut pas changer le mot de passe*** activée pour éviter des problèmes avec la synchronisation du mot de passe dans le module d'accès privilégié. Si ce compte doit avoir des droits administratifs, alors l'ajouter au groupe Administrateurs locaux.
![Propriétés du compte local](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8086.png)
1. Aller dans ***Accès privilégié – Fournisseurs*** sur l'interface web de {{ fr.DVLS }} pour ajouter un fournisseur d'utilisateurs Windows.
![Fournisseur d'utilisateur Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8085.png)
1. Définir le Nom du fournisseur ; Définir le nom de l'ordinateur et les informations de domaine de l'hôte distant dans la section Hôte ; Définir les valeurs de Nom d'utilisateur et de Mot de passe pour le compte fournisseur dans la section Identifiants. Ce compte doit avoir les droits administratifs appropriés sur l'hôte pour gérer les comptes d'utilisateurs locaux. Dans cet exemple, david<zone>@windjammer.loc est un compte de domaine qui est membre du groupe Administrateurs locaux de l'hôte distant.
![Paramètres du fournisseur d'utilisateur Windows](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8087.png)
1. Avec l'option ***Ajouter une configuration de scan*** activée, créer la configuration de scan pour rechercher les comptes locaux. Le compte Administrateur intégré ne peut pas être géré par le module d'accès privilégié en raison de l'option mentionnée à l'étape 3 ci-dessus qui ne peut pas être activée.
![!!KB8088](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8088.png)
1. Une fois le scan terminé, une liste de comptes est disponible. Cliquer sur le bouton Œil pour voir les comptes découverts.
![!!KB8089](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8089.png)
1. Sélectionner le compte qui sera géré et cliquer sur le bouton ***Importer les comptes sélectionnés***.
![!!KB8090](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8090.png)
1. Sélectionner le dossier où le compte sera situé dans ***Accès privilégié – Page des comptes***.
![!!KB8091](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8091.png)
1. En cas de succès, cette boîte de dialogue devrait s'afficher dans le coin supérieur droit.
![!!KB8092](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8092.png)
1. Le compte est maintenant disponible dans le dossier.
![!!KB8093](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8093.png)
