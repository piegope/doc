---
eleventyComputed:
  title: Commencer
  description: Pour commencer avec les fonctionnalités de gestion des accès privilégiés (PAM) de {{fr.DVLS}}, connectez-vous d'abord en tant qu'administrateur dans votre {{fr.DVLS}}.
  order: 10
---
Pour commencer avec les fonctionnalités de ***gestion des accès privilégiés*** (PAM) dans {{ fr.DVLS }}, se connecter d'abord en tant qu'administrateur dans votre {{ fr.DVLS }}. Ensuite, suivre les étapes de configuration ci-dessous.

## Configurer les paramètres PAM

1. Dans {{ fr.DVLS }}, aller à ***Administration – Licences***.
1. Ajouter votre licence PAM en utilisant le bouton ***Ajouter*** (+). Une fois terminé, la licence apparaît dans la liste des licences et le menu ***Accès privilégié*** apparaît dans le panneau latéral de votre {{ fr.DVLS }}.
![PAM license](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2104.png)
1. Dans ***Administration – Accès privilégié – Paramètres par défaut***, configurer les paramètres pour la [visibilité {{ fr.VLT }}](/server/web-interface/vault-access/), [système de réservation](/pam/server/checkout-process/request-checkout/), [injection des identifiants](/pam/server/view-sensitive-data-account-brokering/), [accès à l'information sensible](/pam/server/view-sensitive-data-account-brokering/), temps de réservation par défaut, et synchronisations.
![Administration – Accès privilégié – Paramètres par défaut](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2105.png)
1. Ensuite, aller à ***Administration – Permissions système – Modules***.
1. Configurer l'accès au système PAM pour les utilisateurs/administrateurs et gérer les droits des comptes privilégiés sur qui peut modifier les entrées privilégiées. Ensuite, cliquer sur ***Enregistrer***.
![Administration – Permissions système – Modules – Accès privilégié](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2106.png)

### Prochaines étapes

1. [Ajouter un fournisseur PAM](pam/server/getting-started/add-pam-provider)
1. [Créer et exécuter une configuration de scan](pam/server/getting-started/create-run-scan-configuration)
1. [Importer des comptes à partir d'une configuration de scan](pam/server/getting-started/import-accounts-scan-configuration)
1. [Réinitialiser les mots de passe des comptes PAM](pam/server/getting-started/reset-pam-account-passwords)

Pour {{ fr.ANYID }}, voir aussi [Importer un fournisseur PAM {{ fr.ANYID }}](pam/server/getting-started/anyidentity/import-anyidentity-pam-provider).
