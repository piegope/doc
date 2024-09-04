---
eleventyComputed:
  title: Ajouter un fournisseur PAM
  description: Ajouter un fournisseur PAM dans Administration – Accès privilégié – Fournisseurs.
  order: 10
---
Ajouter un fournisseur PAM dans ***Administration – Accès privilégié – Fournisseurs***. Les types disponibles sont :

* Fournisseurs ***gérés*** : ***Utilisateur de domaine*** (AD), ***Utilisateur local*** (SSH), ***SQL Server***, ***Utilisateur Windows***, ***Utilisateur Azure AD***
![Managed PAM providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2107.png)
* Fournisseurs ***réinitialisation de mot de passe uniquement*** (non gérés) : ***Utilisateur MySQL***, ***Utilisateur Cisco***, ***Utilisateur Oracle***
![Password reset only PAM providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)
* Fournisseurs ***AnyIdentity*** : ***Comptes Windows***, ***Comptes locaux Windows***
![AnyIdentity PAM providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2109.png)

Lors de l'ajout du fournisseur, veiller à activer les options ***Ajouter PAM {{ fr.VLT }}*** et ***Ajouter configuration de scan*** sous ***Actions***.
![PAM provider configuration](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2110.png)

{% snippet, "badgeHelp" %}
Pour plus d'informations, veuillez vous référer à [Fournisseurs](/pam/server/providers/).
{% endsnippet %}

Lorsque ***Enregistrer*** est cliqué, la [Configuration de scan](pam/server/getting-started/create-run-scan-configuration) apparaît.
