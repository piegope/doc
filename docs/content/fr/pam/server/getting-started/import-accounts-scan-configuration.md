---
eleventyComputed:
  title: Importer des comptes à partir d'une configuration de scan
  description: Une fois qu'une liste de comptes a été découverte, l'étape suivante consiste à importer des comptes privilégiés dans un {{ fr.DPAM }} {{ fr.VLT }}.
  order: 30
---
Une fois qu'une liste de comptes a été découverte, l'étape suivante consiste à importer des comptes privilégiés dans un {{ fr.DPAM }} {{ fr.VLT }}. Si un {{ fr.VLT }} a été sélectionné lors de la création du fournisseur, un {{ fr.VLT }} portant le même nom que le fournisseur aura été créé ; sinon, il sera nécessaire d'[en créer un manuellement](/pam/hub/pam-vaults/#pam-vault-setup).

## Importer des comptes
1. Pour importer des comptes dans un {{ fr.VLT }}, sélectionner chaque utilisateur découvert et cliquer sur ***Importer les comptes sélectionnés***.
![Importer les comptes sélectionnés](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_1-5.png)
1. Sélectionner le ***Fournisseur*** et le ***Chemin*** vers le {{ fr.VLT }} où les comptes seront ajoutés.
![Fournisseur et chemin](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_2-5.png)
1. Pour réinitialiser immédiatement les mots de passe de tous les comptes importés, sélectionner l'option ***Réinitialiser le mot de passe à l'importation***. Cela initiera automatiquement une action de pulsation et de rotation de mot de passe sur chaque compte importé.
1. Cliquer sur ***OK*** pour importer les comptes dans le {{ fr.VLT }}.

Une fois importés, les comptes devraient apparaître sous le {{ fr.VLT }} du fournisseur.
![Comptes dans le {{ fr.VLT }} du fournisseur](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_3-5.png)

## Vérification des actions de pulsation et de rotation de mot de passe à l'importation
À ce stade, le fournisseur devrait avoir exécuté les actions de pulsation et de rotation de mot de passe, vérifiant et réinitialisant les mots de passe des comptes si l'option ***Réinitialiser le mot de passe à l'importation*** a été sélectionnée. Il est recommandé de vérifier ce processus.

Pour vérifier, cliquer sur le compte et naviguer vers la catégorie ***Journaux***.

![Journaux de compte](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_4-5.png)

Dans les journaux, trois messages clés devraient être présents :
* ***Entrée ajoutée*** : Indique qu'un nouveau compte a été ajouté au {{ fr.VLT }}.
* ***Réinitialisation du mot de passe PAM - Succès*** : Confirme que le fournisseur a exécuté l'action de rotation de mot de passe et a réussi à changer le mot de passe.
* ***Vérification de la synchronisation - Succès*** : Confirme que l'action de pulsation a comparé le mot de passe actuel stocké par {{ fr.DPAM }} avec le mot de passe attribué au compte, confirmant qu'ils correspondent.

Si tous ces messages sont présents, il peut être confirmé que le fournisseur a exécuté avec succès toutes les actions.

Bien qu'importer un nouveau compte dans un {{ fr.VLT }} initie automatiquement une action de pulsation et de rotation de mot de passe, ces actions peuvent également être testées à tout moment.

En visualisant le compte dans le {{ fr.VLT }}, l'action de pulsation peut être testée en cliquant avec le bouton droit sur le compte et en sélectionnant ***Vérifier l'état de la synchronisation*** (1) ou en cliquant sur le symbole de l'atome (2) comme illustré ci-dessous.

![Vérifier l'état de la synchronisation](https://cdnweb.devolutions.net/docs/ab_getting-started-import-accounts-from-scan-configurations_5-5.png)

Si elle réussit, le message ***Vérification de la synchronisation - Succès*** apparaîtra dans les journaux du compte.
