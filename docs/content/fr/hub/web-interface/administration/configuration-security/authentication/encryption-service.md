---
_schema: default
eleventyComputed:
  title: Service de chiffrement
  description: >-
    Le service de chiffrement simplifie l'accès à votre Hub en éliminant la
    nécessité d'inviter individuellement chaque utilisateur de votre fournisseur
    SSO.
---
Le service de chiffrement de {{ fr.DHUB }} simplifie l'accès à votre Hub en éliminant la nécessité d'inviter individuellement chaque utilisateur de votre fournisseur SSO. Cette fonctionnalité peut être activée dans votre Hub sous ***Administration – Authentification – Service de chiffrement***.

## Exigences

Pour activer et configurer votre service de chiffrement, les prérequis suivants sont nécessaires :

* Une [configuration Single Sign-On (SSO) active](/hub/getting-started/get-started-sso-hub-business/).
* Une [identité d'application](#application-identity-permissions) dans votre Hub.
* Un certificat SSL de confiance.
* Un port réseau accessible au sein du réseau local et, le cas échéant, depuis Internet.
* Un [abonnement aux services Azure](#azure-services-subscription) actif (si vous configurez votre service de chiffrement en utilisant la méthode recommandée [modèle Azure](#encryption-service-setup-using-an-azure-template-recommended)).
* Un serveur auto-hébergé pour installer le {{ fr.DHUBS }} (si vous configurez votre service de chiffrement en utilisant la méthode [{{ fr.DHUBS }}](#encryption-service-setup-with-the-devolutions-hub-services)).

### Permissions de l'identité d'application

[Créer une identité d'application](/hub/web-interface/administration/management/application-users/manage-application-users/#create-an-application-identity) et lui attribuer les [permissions système](/hub/web-interface/administration/configuration-security/system-permissions/) suivantes :

* ***Gérer les utilisateurs et les groupes d'utilisateurs***
* ***Gérer la configuration du système*** (inclut les permissions système, les paramètres système et les listes blanches IP)

{% snippet, "badgeCaution" %}
Si vous utilisez une liste blanche IP, l'IP du service de chiffrement doit être ajoutée comme IP autorisée. Ne pas le faire empêchera le service de communiquer avec le Hub, le rendant non fonctionnel.
{% endsnippet %}

### Abonnement aux services Azure

Si vous configurez votre service de chiffrement en utilisant un modèle Azure, qui est la méthode recommandée (voir les [instructions ci-dessous](#encryption-service-setup-using-an-azure-template-recommended)), vous devez avoir un abonnement aux services Azure. Si vous n'en avez pas, suivez d'abord ces instructions :

1. Se connecter à votre compte [Microsoft Azure Portal](https://azure.microsoft.com).
2. Sélectionner ***Abonnements*** dans les ***services Azure***. Si vous ne le voyez pas, recherchez-le dans la barre de recherche en haut de la page ou cliquez sur ***Plus de services*** pour afficher d'autres services. Ce service se trouve sous la catégorie ***Gestion et gouvernance***. ![Abonnements](https://cdnweb.devolutions.net/docs/INTERFACE2000.png)
3. Cliquer sur ***Ajouter*** puis sélectionner l'offre d'abonnement ***Pay-As-You-Go***. ![Offre Pay-As-You-Go](https://cdnweb.devolutions.net/docs/INTERFACE2001.png)
4. Entrer les informations requises et s'inscrire au service.

## Configuration du service de chiffrement

### Configuration du service de chiffrement en utilisant un modèle Azure (recommandé)

Utiliser un modèle Azure pour configurer le service de chiffrement est la méthode recommandée car elle est plus simple et directe et aide à éviter des complications inutiles. Vérifier que toutes les [exigences](#requirements) sont remplies avant de continuer.

1. Dans {{ fr.DHUBB }}, aller à ***Administration – Authentification – Service de chiffrement*** et cliquer sur ***Générer un modèle Azure***. ![Administration – Authentification – Service de chiffrement – Générer un modèle Azure](https://cdnweb.devolutions.net/docs/HUBB2036_2024_1.png)
2. Copier le modèle généré. ![Copier le modèle](https://cdnweb.devolutions.net/docs/HUBB2037_2024_1.png)
3. Sur la [page d'accueil du Microsoft Azure Portal](https://azure.microsoft.com), sélectionner ***Déployer un modèle personnalisé*** dans les ***services Azure***. Si vous ne le voyez pas, recherchez-le dans la barre de recherche en haut de la page ou cliquez sur ***Plus de services*** pour afficher d'autres services. Ce service se trouve sous la catégorie ***Général***. ![Déployer un modèle personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2002.png)
4. Cliquer sur ***Construire votre propre modèle dans l'éditeur***. ![Construire votre propre modèle dans l'éditeur](https://cdnweb.devolutions.net/docs/INTERFACE2003.png)
5. Coller le modèle Azure généré que vous avez obtenu de {{ fr.DHUB }} dans l'éditeur de modèle Azure, en remplaçant tout contenu préexistant dans l'éditeur. ![Coller le modèle Azure](https://cdnweb.devolutions.net/docs/INTERFACE2004.png)
6. Cliquer sur ***Enregistrer***.
7. Sur la page ***Déploiement personnalisé***, configurer vos informations comme indiqué ci-dessous :
   * ***Abonnement*** : Sélectionner un abonnement si aucun n'est sélectionné.
   * ***Groupe de ressources*** : Sélectionner ou créer un groupe de ressources si aucun n'est sélectionné.
   * ***Nom de l'application*** et ***Nom du plan de service d'application*** : Laisser les noms par défaut ou les modifier selon vos préférences.
   * ***URL du Hub*** : S'assurer qu'elle est définie sur l'URL de votre {{ fr.DHUBB }}.
   * ***Clé d'identité d'application*** et ***Secret d'identité d'application*** : Entrer votre clé et secret d'identité d'application dans les champs correspondants. Votre identité d'application doit avoir les permissions ***Gérer la configuration du système*** et ***Gérer les utilisateurs et les groupes d'utilisateurs***, comme indiqué dans [Permissions de l'identité d'application](#application-identity-permissions). ![Configuration du déploiement personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2005.png)
8. Cliquer sur ***Vérifier + créer***.
9. Cliquer sur ***Créer***. ![Créer le déploiement personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2006.png)
10. À la fin du déploiement, qui peut prendre quelques secondes, cliquer sur ***Aller au groupe de ressources***. ![Aller au groupe de ressources](https://cdnweb.devolutions.net/docs/INTERFACE2007.png)
11. Sélectionner votre nouveau ***Service d'application*** dans la liste. ![Service d'application](https://cdnweb.devolutions.net/docs/INTERFACE2008.png)
12. Copier le ***Domaine par défaut*** (*https://your-app-name.azurewebsites.net*) ou le ***Domaine personnalisé*** (*https://yourdomain.com*) si vous avez décidé d'en créer un. ![Copier le domaine par défaut ou personnalisé](https://cdnweb.devolutions.net/docs/INTERFACE2009.png)
13. Ajouter ce domaine à la liste des URI de redirection dans votre application d'entreprise. Suivre les instructions ci-dessous pour vous guider dans ce processus :
    1. Retourner à la [page d'accueil du Microsoft Azure Portal](https://azure.microsoft.com) et sélectionner ***Applications d'entreprise*** dans les ***services Azure***. Si vous ne le voyez pas, cliquez sur ***Plus de services*** pour afficher d'autres services. ![Applications d'entreprise](https://cdnweb.devolutions.net/docs/INTERFACE2010.png) \{type="a"\}
    2. Sélectionner votre application dans la liste. \{type="a"\}
    3. Dans le menu de gauche, cliquer sur ***Propriétés***. ![Propriétés de l'application](https://cdnweb.devolutions.net/docs/INTERFACE2011.png) \{type="a"\}
    4. Dans le texte en haut de la page, cliquer sur ***enregistrement de l'application***. ![Enregistrement de l'application](https://cdnweb.devolutions.net/docs/INTERFACE2012.png) \{type="a"\}
    5. Dans le menu de gauche, cliquer sur ***Authentification***. \{type="a"\}
    6. Cliquer sur ***Ajouter URI*** et coller le domaine dans le champ URI de redirection. Ajouter **/auth/callback** à la fin de l'URL et s'assurer qu'elle commence par **https://**. Le résultat final devrait ressembler à ceci : `https://your-app-name.azurewebsites.net/auth/callback`. ![Ajouter URI](https://cdnweb.devolutions.net/docs/INTERFACE4050.png "Ajouter URI") \{type="a"\}
    7. Cliquer sur ***Enregistrer***. \{type="a"\}
14. Dans {{ fr.DHUB }}, retourner à ***Administration – Authentification – Service de chiffrement*** et activer le service de chiffrement si ce n'est pas déjà fait.
15. Coller votre domaine par défaut ou personnalisé dans le champ URL du ***Service de chiffrement***, s'assurer qu'il commence par **https://**. Le résultat final devrait ressembler à ceci : *https://your-app-name.azurewebsites.net*. C'est ici que le service de chiffrement écoutera les demandes entrantes. Cette URL ou adresse IP doit seulement être accessible par les clients se connectant en utilisant le service de chiffrement. ![Coller le domaine](https://cdnweb.devolutions.net/docs/HUBB2038_2024_1.png "Coller le domaine")
16. Tester la connexion. Si la connexion échoue, vérifier la validité des informations que vous avez saisies et réessayer. Si vous rencontrez toujours des problèmes de connexion, veuillez contacter nos techniciens du service d'assistance à [service@devolutions.net](mailto:service@devolutions.net).

Tous les utilisateurs de votre fournisseur SSO peuvent désormais se connecter et accéder à votre {{ fr.DHUB }} automatiquement, sans avoir besoin d'invitations. Il n'est pas non plus nécessaire que les utilisateurs aient une clé privée configurée pour utiliser le Hub. Le serveur fonctionne sur une base auto-hébergée ; il joue donc un rôle vital dans l'infrastructure. Si le serveur subit une panne ou ne fonctionne pas, les utilisateurs sans clés privées rencontreront des problèmes pour se connecter au Hub.

### Configuration du service de chiffrement avec le {{ fr.DHUBS }}

Utiliser un [modèle Azure](#encryption-service-setup-using-an-azure-template-recommended) pour configurer le service de chiffrement est la méthode recommandée car elle est plus simple et directe et aide à éviter des complications inutiles. Néanmoins, si vous souhaitez utiliser la méthode suivante {{ fr.DHUBS }}, vérifier que toutes les [exigences](#requirements) sont remplies avant de continuer.

1. [Télécharger le {{ fr.DHUBS }}](https://devolutions.net/password-hub/home/download/) et lancer l'installateur.
2. Cliquer sur ***Suivant*** pour continuer après la page de bienvenue. ![Page de bienvenue de l'assistant d'installation](https://cdnweb.devolutions.net/docs/HUBB2360_2024_1.png)
3. Lire et accepter les termes du Contrat de Licence, puis cliquer sur ***Suivant***. ![Accepter les termes du Contrat de Licence](https://cdnweb.devolutions.net/docs/HUBB2361_2024_1.png)
4. Sous ***Installation personnalisée***, sélectionner ***Chiffrement***, puis cliquer sur ***Suivant***. ![Installer la fonctionnalité de chiffrement](https://cdnweb.devolutions.net/docs/HUBB2362_2024_1.png)
5. Entrer les informations suivantes dans les champs correspondants :
   * l'***Hôte***, qui est l'URL de votre {{ fr.DHUB }}.
   * le ***Secret d'application*** et la ***Clé d'application***, qui vous ont été fournis lors de la création initiale de l'identité d'application.
6. Cliquer sur ***Tester la connexion***. Vous devriez recevoir un message indiquant que la connexion a réussi. Si ce n'est pas le cas, vérifier la validité des informations que vous avez saisies et réessayer. Si vous rencontrez toujours des problèmes de connexion, veuillez contacter nos techniciens du service d'assistance à [service@devolutions.net](mailto:service@devolutions.net). ![Tester la connexion](https://cdnweb.devolutions.net/docs/HUBB2363_2024_1.png)
7. Cliquer sur ***Suivant***.
8. Entrer l'***URL*** (HTTPS est obligatoire) et le numéro de ***Port*** où le service de chiffrement écoutera les demandes entrantes. S'assurer que le port est configuré pour être accessible.
9. Rechercher votre ***Certificat*** et le sélectionner. Si votre certificat est protégé par un mot de passe, entrer ce dernier dans ***Mot de passe du certificat***. ![URL, port et certificat](https://cdnweb.devolutions.net/docs/HUBB2365_2024_1.png)
10. Cliquer sur ***Suivant***.

Le processus d'installation devrait maintenant commencer.

## Résolution de problèmes

* Si les utilisateurs rencontrent des problèmes de connexion alors que le service de chiffrement est activé, il est possible de redémarrer l'application depuis la page du Service d'application pour tenter de résoudre le problème. Si le problème persiste, essayer d'arrêter le Service d'application. Cependant, soyez conscient que les utilisateurs sans mot de passe devront en créer un et auront besoin d'une invitation pour accéder au Hub.
* Pour accéder aux journaux, aller au Centre de déploiement depuis la page du Service d'application en le sélectionnant dans le menu de gauche, puis naviguer vers l'onglet Journaux. Il est recommandé d'envoyer ces journaux lors de l'ouverture d'un ticket de support pour obtenir de l'aide.
