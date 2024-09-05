---
eleventyComputed:
  title: Configurer l'authentification SSO avec Okta
  description: Utiliser Okta avec {{ fr.DHUBB }} pour l'authentification unique (SSO) en suivant les étapes de cette page.
  keywords:
  - SSO
  - Okta
---
Utiliser Okta avec {{ fr.DHUBB }} pour l'authentification unique (SSO) en suivant les étapes de cette page. Voir d'abord les exigences et les fonctionnalités prises en charge ci-dessous.

## Exigences

Pour utiliser le SSO ou le provisionnement automatique (SCIM) avec Okta, un [compte Okta](https://www.okta.com/) avec les droits appropriés est requis. La [procédure de validation de domaine](#domain-verification) doit également être complétée pour vérifier la propriété du ou des domaines configurés. Seuls les utilisateurs avec des courriels dont les domaines ont été vérifiés sont autorisés à se connecter via SSO ou à être provisionnés via SCIM.

## Fonctionnalités prises en charge

* Se connecter au Hub via Okta SSO
* Provisionnement juste-à-temps (JAT) des utilisateurs connectés via Okta SSO
* Synchroniser votre Okta avec {{ fr.DHUB }}
   * Créer/mettre à jour des utilisateurs d'Okta vers {{ fr.DHUB }} (créer des utilisateurs, mettre à jour les attributs des utilisateurs et désactiver des utilisateurs)
   * Créer/mettre à jour des groupes d'Okta vers {{ fr.DHUB }} (push de groupe)

{% snippet, "badgeCaution" %}
Les utilisateurs provisionnés JAT par SSO ou créés par synchronisation SCIM doivent être invités au Hub dans ***Administration – Utilisateurs***, comme décrit dans les étapes ci-dessous.
{% endsnippet %}

## Étapes de configuration

Voici les étapes pour [valider le domaine](#domain-verification), [configurer l'authentification unique](#single-sign-on-sso-configuration), et [effectuer le provisionnement des utilisateurs](#provisioning-configuration).

### Vérification de domaine

**Dans {{ fr.DHUBB }}**  

1. Aller à ***Administration – Authentification – Domaine***, puis cliquer sur ***Ajouter un domaine***.
![Administration – Authentification – Domaine – Ajouter un domaine](https://cdnweb.devolutions.net/docs/HUBB2000_2024_1.png)

1. Remplir le domaine, puis cliquer sur la coche pour démarrer le processus de vérification.
![Domaine](https://cdnweb.devolutions.net/docs/HUBB2001_2024_1.png) 

   {% snippet, "badgeInfo" %} 
   Pour des raisons de sécurité, seuls les courriels se terminant par votre nom de domaine sont autorisés à se connecter à {{ fr.DHUB }} en utilisant l'authentification Okta. Par exemple, si les courriels des employés sont au format "bob@windjammer.co", le domaine est "windjammer.co".
   {% endsnippet %}

1. Pour avoir plusieurs domaines, cliquer sur ***Ajouter un domaine*** à nouveau, remplir votre autre domaine, puis cliquer sur la coche. Répéter ce processus pour chaque domaine que vous souhaitez ajouter.
![Domaines multiples](https://cdnweb.devolutions.net/docs/HUBB2002_2024_1.png)
1. Créer un [enregistrement DNS TXT](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) en utilisant le ***Nom d'hôte*** et la ***Valeur TXT*** fournis. Cela nous permet de vérifier la propriété du ou des domaines fournis.  
![Nom d'hôte et Valeur TXT](https://cdnweb.devolutions.net/docs/HUBB2003_2024_1.png)  

   Il est recommandé de vérifier que la configuration est adéquate en utilisant des outils de requête DNS tels que [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) ou [whatsmydns.net](https://www.whatsmydns.net/). L'exemple ci-dessous utilise l'outil de recherche TXT de MXToolBox. La première partie du nom de domaine doit correspondre au ***Nom d'hôte*** dans {{ fr.DHUB }} et l'enregistrement doit correspondre à la ***Valeur TXT*** dans {{ fr.DHUB }} également.  
   {% snippet, "badgeCaution" %} 
   Les enregistrements DNS TXT peuvent prendre du temps à se propager.
   {% endsnippet %}

   ![Enregistrement DNS TXT dans MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2236.png)  

1. Attendre la vérification du domaine. Une fois la vérification réussie, une coche dans un cercle vert s'affichera à côté du domaine. Procéder à la configuration de l'authentification unique (SSO) pendant le processus de vérification ; cependant, le provisionnement des utilisateurs devient accessible uniquement après que le domaine a été vérifié.
![Domaine vérifié](https://cdnweb.devolutions.net/docs/HUBB2004_2024_1.png)

   {% snippet, "badgeCaution" %} 
   Cette validation dure 48 heures et ne redémarre pas automatiquement après cette période. Si l'enregistrement TXT n'est pas configuré dans ces 48 heures, le statut de validation sera ***Expiré***. Si cela se produit, cliquer sur ***Réessayer***.  

   Si des problèmes surviennent lors de la tentative de vérification du domaine, consulter notre guide de [dépannage de la validation de domaine](/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/).
   {% endsnippet %}  

### Configuration de l'authentification unique (SSO)

1. Aller à ***Administration – Authentification – Authentification unique (SSO)***, puis cliquer sur ***Okta authentification unique (SSO)*** pour être redirigé vers la page de configuration.  
![Administration – Authentification – Authentification unique (SSO) – Okta authentification unique (SSO)](https://cdnweb.devolutions.net/docs/HUBB2007_2024_1.png)  

1. ***Nommer*** la configuration SSO. Ce nom n'apparaîtra que dans le menu des paramètres SSO de {{ fr.DHUB }}. Le nom par défaut est "Okta".  
![Nom de la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2334.png)

   {% snippet, "badgeCaution" %} 
   Ne pas fermer cette page de configuration, car les étapes suivantes montrent où trouver les informations à entrer dans ses champs. 
   {% endsnippet %}

**Dans Okta**  

3. Se connecter au compte Okta.
1. Dans ***Applications***, cliquer sur ***Parcourir le catalogue d'applications***.  
![Applications – Parcourir le catalogue d'applications](https://cdnweb.devolutions.net/docs/INTERFACE2055.png)

1. Rechercher ***{{ fr.DHUB }}***, puis cliquer sur l'application dans les résultats de recherche.  
![Rechercher {{ fr.DHUB }}](https://cdnweb.devolutions.net/docs/INTERFACE2056.png)  
1. Cliquer sur ***Ajouter une intégration*** en haut.  
1. Dans l'onglet ***Connexion***, copier l'***ID client***.  
![Copier l'ID client](https://cdnweb.devolutions.net/docs/INTERFACE2057.png)  

**Dans {{ fr.DHUBB }}**  

8. Retourner à la page ***Configurer l'authentification unique (SSO)***, coller l'***ID client*** de l'étape précédente dans le champ du même nom.  
![Coller l'ID client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2337.png)  

**Dans Okta**  

9. Retourner à l'onglet ***Connexion***, copier le ***secret client***.  
![Copier le secret client](https://cdnweb.devolutions.net/docs/INTERFACE2058.png)  

**Dans {{ fr.DHUBB }}**  

10. Retourner à la page ***Configurer l'authentification unique (SSO)***, coller le ***secret client*** de l'étape précédente dans le champ ***Clé secrète client***.  
![Coller le secret client](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2338.png)  
1. Dans ***URL de découverte***, entrer l'URL utilisée pour accéder à Okta, sans la partie "-admin".  

   {% snippet, "badgeCaution" %} 
   Ne pas tester la connexion pour l'instant, car les utilisateurs doivent d'abord être assignés à l'application.
   {% endsnippet %}  

   ![URL de découverte](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2339.png)  

**Dans Okta**  

12. Dans l'onglet ***Affectations***, s'assurer que chaque utilisateur utilisé pour tester la configuration est assigné à l'application. Pour plus de détails, voir la documentation propre à Okta sur la gestion des utilisateurs et l'affectation des applications.
![Affectations](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2262.png)  

**Dans {{ fr.DHUBB }}**  

13. Tester la configuration dans {{ fr.DHUB }}. Une nouvelle fenêtre s'ouvre pour vous connecter à {{ fr.DHUB }} via Okta. Une fois connecté, un message de succès apparaît.  

   {% snippet, "badgeCaution" %}
   Si la fenêtre contextuelle n'apparaît pas, le navigateur ou une extension de navigateur peut la bloquer. Modifier les paramètres du navigateur et/ou de l'extension. Si cela ne fonctionne toujours pas, désactiver/retirer l'extension ou changer de navigateur peut également résoudre le problème.
   {% endsnippet %}

14. Cliquer sur ***Enregistrer*** dans le ***Résumé*** de la configuration Okta SSO.
![Enregistrer la configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2340.png)  

La configuration SSO est maintenant complète. Une icône de coche verte devrait maintenant être visible à côté de la configuration, signifiant que la configuration SSO via Okta est maintenant activée sur le Hub.  
![Configuration SSO active](https://cdnweb.devolutions.net/docs/HUBB2008_2024_1.png)

#### Connexion SSO Okta
Lors de la connexion au Hub, cliquer sur ***Se connecter avec Okta***.
![Se connecter avec Okta](https://cdnweb.devolutions.net/docs/CLOUD2006_2024_3.png)

Une page de connexion Okta s'ouvrira. Entrer les identifiants Okta et cliquer sur ***Se connecter***. Le Hub sera alors accessible.
![Connexion Okta](https://cdnweb.devolutions.net/docs/INTERFACE2059.png)

### Configuration du provisionnement SCIM

Synchroniser les utilisateurs et les groupes d'utilisateurs des fournisseurs vers le Hub en suivant les étapes de cette section. Voir d'abord la liste des fonctionnalités prises en charge ci-dessous.

{% snippet, "badgeCaution" %}
Notez que nous ne prenons en charge la synchronisation que dans une seule direction, d'Okta vers {{ fr.DHUB }}, spécifiquement pour les utilisateurs et les groupes. La synchronisation de {{ fr.DHUB }} vers Okta n'est **pas** prise en charge.
{% endsnippet %}

#### Fonctionnalités prises en charge
* Créer des utilisateurs
* Mettre à jour les attributs des utilisateurs
* Désactiver des utilisateurs
* Push de groupe

#### Étapes de configuration du provisionnement

**Dans Okta**

1. Aller à l'application {{ fr.DHUBB }}.
1. Dans l'onglet ***Provisionnement***, cliquer sur ***Configurer l'intégration API***.
![Provisionnement – Configurer l'intégration API](https://cdnweb.devolutions.net/docs/INTERFACE2060.png)
1. Cocher la case ***Activer l'intégration API***.
![Activer l'intégration API](https://cdnweb.devolutions.net/docs/INTERFACE2061.png)

**Dans {{ fr.DHUBB }}**

4. Aller à ***Administration – Authentification – Provisionnement*** et activer le provisionnement SCIM.
![Activer le provisionnement SCIM](https://cdnweb.devolutions.net/docs/HUBB2379_2024_2.png)
1. Copier le ***jeton secret*** en cliquant sur l'icône ***Copier dans le presse-papiers*** à côté.
![Copier le jeton secret](https://cdnweb.devolutions.net/docs/HUBB2380_2024_2.png)

**Dans Okta**

6. Retourner à l'onglet ***Provisionnement*** dans Okta, coller le ***jeton secret*** de l'étape précédente dans le champ ***Jeton API***.
![Coller le jeton secret](https://cdnweb.devolutions.net/docs/INTERFACE2062.png)
1. Cliquer sur ***Tester les identifiants API***. Un message de succès devrait apparaître.
![Tester les identifiants API](https://cdnweb.devolutions.net/docs/INTERFACE2063.png)

**Dans {{ fr.DHUBB }}**

8. Retourner à la configuration du ***Provisionnement*** dans {{ fr.DHUB }}, cliquer sur ***Activer la synchronisation***.
![Activer la synchronisation](https://cdnweb.devolutions.net/docs/HUBB2381_2024_2.png)

**Dans Okta**

9. ***Enregistrer*** la configuration de provisionnement Okta.
1. Toujours dans l'onglet ***Provisionnement***, aller aux paramètres ***Vers l'application***, puis cliquer sur ***Modifier***.
![Modifier les paramètres "Vers l'application"](https://cdnweb.devolutions.net/docs/INTERFACE2064.png)
1. Activer/désactiver les paramètres suivants :
    * Activer :
        * ***Créer des utilisateurs***
        * ***Mettre à jour les attributs***
        * ***Désactiver des utilisateurs***
    * Désactiver :
        * ***Définir le mot de passe lors de la création de nouveaux utilisateurs*** (sous le paramètre ***Créer des utilisateurs***)

   ![Activer/désactiver les paramètres](https://cdnweb.devolutions.net/docs/INTERFACE2065.png)
1. ***Enregistrer*** les modifications.

La synchronisation d'Okta vers {{ fr.DHUBB }} est maintenant configurée.

{% snippet, "badgeHelp" %}
Il est possible d'assigner des utilisateurs et des groupes à synchroniser. Pour plus de détails, voir la documentation propre à Okta sur [l'affectation d'applications aux utilisateurs](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-assign-apps.htm) et [l'affectation d'une intégration d'application à un groupe](https://help.okta.com/en-us/content/topics/provisioning/lcm/lcm-assign-app-groups.htm).
{% endsnippet %}
