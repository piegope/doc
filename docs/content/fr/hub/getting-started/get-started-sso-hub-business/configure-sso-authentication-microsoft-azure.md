---
eleventyComputed:
  title: Configurer l'authentification SSO avec Microsoft Azure
  description: Voici les étapes pour configurer Azure avec {{ fr.DHUBB }} pour l'authentification SSO et le provisionnement des utilisateurs.
  keywords:
  - Office 365
  - Office365
  - SSO
  - Azure
---
Voici les étapes pour configurer Azure avec {{ fr.DHUBB }} pour l'authentification Single Sign-on (SSO) et le provisionnement des utilisateurs.  

{% snippet, "badgeCaution" %}
Un [compte Azure AD](https://azure.microsoft.com/) avec les droits appropriés est requis.
{% endsnippet %}

## Vérification de domaine

**Dans {{ fr.DHUBB }}**

1. Aller à ***Administration – Authentification – Domaine***, puis cliquer sur ***Ajouter un domaine***.
![Administration – Authentification – Domaine – Ajouter un domaine](https://cdnweb.devolutions.net/docs/HUBB2000_2024_1.png)
1. Remplir votre domaine, puis cliquer sur la coche pour démarrer le processus de vérification.
![Domaine](https://cdnweb.devolutions.net/docs/HUBB2001_2024_1.png)
1. Pour avoir plusieurs domaines, cliquer à nouveau sur ***Ajouter un domaine***, remplir votre autre domaine, puis cliquer sur la coche. Répéter ce processus pour chaque domaine que vous souhaitez ajouter.
![Plusieurs domaines](https://cdnweb.devolutions.net/docs/HUBB2002_2024_1.png)
1. Créer un [enregistrement DNS TXT](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) en utilisant le ***Nom d'hôte*** et la ***Valeur TXT*** fournis. Cela nous permet de vérifier la propriété du ou des domaines fournis.
![Nom d'hôte et Valeur TXT](https://cdnweb.devolutions.net/docs/HUBB2003_2024_1.png)

   Nous recommandons de vérifier que votre configuration est adéquate à l'aide d'outils de requête DNS tels que [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) ou [whatsmydns.net](https://www.whatsmydns.net/). L'exemple ci-dessous utilise l'outil de recherche TXT de MXToolBox. La première partie du nom de domaine doit correspondre au ***Nom d'hôte*** dans {{ fr.DHUB }} et l'enregistrement doit correspondre à la ***Valeur TXT*** dans {{ fr.DHUB }} également.
   {% snippet, "badgeCaution" %}
   Les enregistrements DNS TXT peuvent prendre du temps à se propager.
   {% endsnippet %}

   ![Enregistrement DNS TXT dans MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2236.png)
1. Attendre la vérification du domaine. Une fois la vérification réussie, une coche dans un cercle vert s'affichera à côté du domaine. Vous pouvez procéder à la configuration du Single Sign-On (SSO) pendant le processus de vérification ; cependant, le provisionnement des utilisateurs ne sera accessible qu'après la vérification du domaine.
![Domaine vérifié](https://cdnweb.devolutions.net/docs/HUBB2004_2024_1.png)

   {% snippet, "badgeCaution" %}
   Cette validation dure 48 heures et ne redémarre pas automatiquement après cette période. Si vous ne configurez pas votre enregistrement TXT dans ces 48 heures, votre statut de validation sera ***Expiré***. Si cela se produit, vous pouvez cliquer sur ***Réessayer***.

   Si vous rencontrez des problèmes lors de la tentative de vérification de votre domaine, consultez notre guide de [dépannage de la validation de domaine](/hub/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/).
   {% endsnippet %}

## Configuration du Single Sign-On (SSO)

1. Aller à ***Administration – Authentification – Single Sign-On (SSO)***, puis cliquer sur ***Microsoft Single Sign-On (SSO)***. Vous serez dirigé vers la page de configuration.
![Administration – Authentification – Single Sign-On (SSO) – Microsoft Single Sign-On (SSO)](https://cdnweb.devolutions.net/docs/HUBB2005_2024_1.png)

1. ***Nommer*** votre configuration SSO. Ce nom n'apparaîtra que dans le menu des paramètres SSO de votre {{ fr.DHUB }}. Le nom par défaut est "Microsoft".
![Nom de la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2219.png)

   {% snippet, "badgeCaution" %}
   Ne pas fermer cette page de configuration, car les étapes suivantes vous montreront où trouver les informations à entrer dans ses champs.
   {% endsnippet %}

**Dans le portail Azure**

3. Dans une nouvelle page de navigateur Web, ouvrir votre [portail Microsoft Azure](https://azure.microsoft.com/) et vous connecter à votre compte.
1. Sélectionner ***Microsoft Entra ID*** ([anciennement Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/new-name)) dans la section ***Services Azure***. Si vous ne le voyez pas, cliquer sur ***Plus de services*** pour faire apparaître d'autres services.
![Service Microsoft Entra ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2331.png)
1. Dans ***Vue d'ensemble***, cliquer sur ***Ajouter***, puis sélectionner ***Application d'entreprise***.
![Ajouter une application d'entreprise](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4165.png)
1. Cliquer sur ***Créer votre propre application***.
![Créer votre propre application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2138.png)
1. Entrer le nom de cette nouvelle application, puis cliquer sur ***Créer***.

   {% snippet, "badgeNotice" %}
   Nous recommandons d'inclure soit "Devolutions" soit "Hub" dans le nom.
   {% endsnippet %}

   ![Nom de l'application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2139.png)

1. Dans les ***Propriétés***, définir le paramètre ***Affectation requise ?*** selon vos besoins. Pour en savoir plus sur ce paramètre, survoler l'icône d'information à côté avec votre curseur.
![Propriétés – Affectation requise](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2140.png)
1. Enregistrer vos modifications si applicable en utilisant le bouton ***Enregistrer*** en haut.
1. En restant dans les ***Propriétés***, cliquer sur ***enregistrement de l'application*** dans le texte en haut.
![Propriétés – enregistrement de l'application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2141.png)
1. Sélectionner ***Authentification*** dans le menu de gauche, puis cliquer sur ***Ajouter une plateforme***.
![Authentification – Ajouter une plateforme](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2142.png)
1. Dans ***Configurer les plateformes***, sélectionner ***Web***.
![Configurer les plateformes – Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2143.png)

**Dans {{ fr.DHUBB }}**

13. De retour sur la page ***Configurer le Single Sign-On (SSO)***, copier l'***URL de rappel*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'URL de rappel](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2220.png)

**Dans le portail Azure**

14. De retour dans le portail Azure, coller l'***URL de rappel*** dans le champ ***URI de redirection***, puis cliquer sur ***Configurer*** en bas.
![URI de redirection](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2145.png)
1. Sélectionner ***Configuration des jetons*** dans le menu de gauche, puis cliquer sur ***Ajouter une revendication facultative***.
![Configuration des jetons – Ajouter une revendication facultative](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2147.png)
1. Sous ***Type de jeton***, sélectionner ***ID***. Ensuite, dans la liste, sélectionner les revendications suivantes :
    * ***email***
    * ***family_name***
    * ***given_name***
    * ***upn***
    * ***xms_pl***
    * ***xms_tpl***

![Ajouter une revendication facultative](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2148.png)

1. Cliquer sur ***Ajouter***.
1. Lorsqu'on vous le demande, activer ***Activer l'email Microsoft Graph***, puis cliquer sur ***Ajouter***.
![Activer l'email Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2149.png)
1. Sélectionner ***Vue d'ensemble*** dans le menu de gauche, puis copier l'***ID d'application (client)*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'ID d'application (client)](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2159.png)

**Dans {{ fr.DHUBB }}**

20. De retour sur la page ***Configurer le Single Sign-On (SSO)***, coller l'***ID d'application (client)*** de l'étape précédente dans le champ ***ID client***.
![ID client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2221.png)

**Dans le portail Azure**

21. De retour dans le portail Azure, sélectionner ***Certificats et secrets*** dans le menu de gauche, puis, dans l'onglet ***Secrets client***, cliquer sur ***Nouveau secret client***.
![Certificats et secrets – Secrets client – Nouveau secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2151.png)
1. Dans la fenêtre ***Ajouter un secret client***, entrer une ***Description*** (par exemple, le nom de votre application d'entreprise) et sélectionner une date d'expiration pour ce secret client, selon vos meilleures pratiques de sécurité internes.
   {% snippet, "badgeCaution" %}
   Notez que lorsque le secret client expire, personne ne pourra se connecter au hub associé. Vous devrez alors créer un nouveau secret client. Nous recommandons de vous fixer un rappel de tâche avant la date d'expiration.
   {% endsnippet %}

   ![Ajouter un secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2152.png)

1. Cliquer sur ***Ajouter***.
1. Copier la ***Valeur*** de ce nouveau secret client en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier la valeur du secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2153.png)

**Dans {{ fr.DHUBB }}** 

25. De retour sur la page ***Configurer le Single Sign-On (SSO)***, coller la ***Valeur*** du secret client de l'étape précédente dans le champ ***Clé du secret client***.
![Clé du secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2222.png)

**Dans le portail Azure**

26. De retour dans le portail Azure, sélectionner ***Vue d'ensemble*** dans le menu de gauche, puis cliquer sur l'onglet ***Points de terminaison***.
![Vue d'ensemble – Points de terminaison](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2158.png)
1. Dans la fenêtre ***Points de terminaison***, copier l'URL du ***document de métadonnées OpenID Connect*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'URL du document de métadonnées OpenID Connect](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2160.png)

**Dans {{ fr.DHUBB }}**

28. De retour sur la page ***Configurer le Single Sign-On (SSO)***, coller l'URL de l'étape précédente dans le champ ***URL de découverte***.
![URL de découverte](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2223.png)

1. Cliquer sur ***Tester la configuration*** pour s'assurer qu'elle est correcte. Une fenêtre contextuelle vous demandera d'entrer vos identifiants de connexion.

   {% snippet, "badgeCaution" %}
   Si la page contextuelle ne s'affiche pas, voir [La page de connexion Devolutions ne s'ouvre pas dans le navigateur](/hub/kb/general-knowledge/devolutions-login-page-does-not-open-browser/).
   {% endsnippet %}

   ![Tester la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2224.png)
1. Si la connexion est réussie, votre compte se connectera avec Entra ID (anciennement Azure AD) et vous verrez un résumé de votre configuration.

1. Dans le ***Résumé*** de votre configuration, cliquer sur ***Enregistrer***.
![Enregistrer votre configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2225.png)

## Configuration du provisionnement

La vérification du domaine doit être complétée pour pouvoir configurer le provisionnement.

Pour synchroniser vos utilisateurs et groupes d'utilisateurs de vos fournisseurs vers le hub, ajoutez d'abord vos utilisateurs et groupes à votre application d'entreprise. Vous devez avoir une licence d'entreprise Azure pour pouvoir synchroniser les groupes d'utilisateurs.

{% snippet, "badgeCaution" %}
Les groupes imbriqués ne sont pas pris en charge, ce qui signifie que le provisionnement Azure ne synchronisera pas les utilisateurs membres du groupe imbriqué.
{% endsnippet %}

**Dans le portail Azure**

1. Sélectionner ***Utilisateurs et groupes*** dans le menu de gauche, puis cliquer sur ***Ajouter un utilisateur/groupe***.
![Utilisateurs et groupes – Ajouter un utilisateur/groupe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2167.png)
1. Sous ***Ajouter une affectation***, cliquer sur ***Aucun sélectionné***.
![Ajouter une affectation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2168.png)
1. Rechercher manuellement des utilisateurs et des groupes ou utiliser la barre de ***Recherche***. Cliquer sur ***Sélectionner*** lorsque vous avez terminé votre sélection.
![Sélection des utilisateurs et groupes](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2169.png)
1. Cliquer sur ***Attribuer*** lorsque votre sélection est complète.
![Attribuer des utilisateurs et groupes](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2170.png)

Maintenant que vos utilisateurs et groupes ont été ajoutés, continuez avec la configuration du provisionnement.

5. Dans la gestion de votre application d'entreprise, aller à ***Provisionnement*** et cliquer sur ***Commencer***.
![Provisionnement – Commencer](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2163.png)

**Dans {{ fr.DHUBB }}**

6. Aller à ***Administration – Authentification – Provisionnement*** et activer le ***Provisionnement SCIM***.
![Activer le provisionnement SCIM](https://cdnweb.devolutions.net/docs/HUBB2006_2024_1.png)

1. Dans la ***Configuration de la synchronisation du provisionnement***, copier l'***URL du locataire*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier l'URL du locataire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2227.png)

**Dans le portail Azure**

8. Définir le ***Mode de provisionnement*** sur ***Automatique***, puis coller l'URL de l'étape précédente dans le champ ***URL du locataire***.
![Mode de provisionnement et URL du locataire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2166.png)

**Dans {{ fr.DHUBB }}**

9. Copier le ***Jeton secret*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier le Jeton secret](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2228.png)

**Dans le portail Azure**

10. Coller le jeton de l'étape précédente dans le champ ***Jeton secret***.
![Jeton secret](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2164.png)
1. Tester la connexion pour s'assurer qu'elle fonctionne, puis cliquer sur ***Enregistrer***.
1. Sélectionner ***Provisionnement*** dans le menu de gauche, puis cliquer sur ***Démarrer le provisionnement***.
![Démarrer le provisionnement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2171.png)

**Dans {{ fr.DHUBB }}**

13. Cliquer sur ***Activer la synchronisation***.
![Activer la synchronisation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2229.png)
1. Lorsqu'on vous le demande, cliquer sur ***Démarrer la synchronisation***.
![Démarrer la synchronisation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2230.png)

Vous pouvez maintenant voir un aperçu de votre synchronisation de provisionnement. À côté de l'***URL du locataire***, vous avez les options pour ***Régénérer un jeton SCIM*** ou ***Supprimer le provisionnement SCIM***.
![Aperçu de la synchronisation du provisionnement](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2231.png)

{% snippet, "badgeCaution" %}
Le ***Jeton secret*** expirera 365 jours après sa génération. Lorsqu'il expirera, le provisionnement cessera de fonctionner. Vous devrez alors régénérer un nouveau jeton dans la page ***Aperçu de la synchronisation du provisionnement*** vue ci-dessus. Nous recommandons de vous fixer un rappel de tâche avant la date d'expiration.
{% endsnippet %}

## Synchronisation entre Azure et {{ fr.DHUB }}

La synchronisation démarre automatiquement lorsque la configuration du provisionnement est terminée. La fréquence de provisionnement d'Azure est au maximum de 45 minutes et est déterminée par votre fournisseur d'identité. Les groupes d'utilisateurs, y compris leurs membres, se synchroniseront dans ce délai de provisionnement Azure. Nous recommandons de vérifier les premiers résultats de provisionnement.

Dans ***Administration – Groupes d'utilisateurs***, les groupes d'utilisateurs Azure seront ajoutés. Ils sont reconnaissables par l'icône de groupe ***Est synchronisé*** à côté du nom du groupe.
![Groupes d'utilisateurs synchronisés](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2182.png)

Dans ***Administration – Utilisateurs***, tous les utilisateurs du groupe d'utilisateurs Azure qui font déjà partie de votre {{ fr.DHUB }} seront marqués comme synchronisés avec l'icône ***Est synchronisé*** à côté de leur nom. Tous les nouveaux utilisateurs faisant partie du groupe d'utilisateurs Azure synchronisé qui ne font pas partie du {{ fr.DHUB }} seront proposés comme [nouvelles invitations](/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/) dans ***Invitations requises***.
![Invitations requises et utilisateurs synchronisés](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2175.png)

{% snippet, "badgeNotice" %}
Tous les utilisateurs qui avaient déjà un {{ fr.DA }} verront les deux options de connexion : la méthode {{ fr.DA }} et la méthode Microsoft.
{% endsnippet %}

![Se connecter avec votre {{ fr.DA }} ou avec Microsoft](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4139.png)
