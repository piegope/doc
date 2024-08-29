---
_schema: default
eleventyComputed:
  title: Récupérer les identifiants avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Vous avez besoin d'entrées de site Web dans {{ fr.DVLS }} pour pouvoir récupérer leurs identifiants. Si ce n'est pas le cas, commencez par [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en associant automatiquement les sites Web aux identifiants enregistrés dans les entrées de site Web de {{ fr.DVLS }}. Il est également possible de filtrer vos entrées via le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/workspace/workspace-browser-extension/installation/) du {{ fr.WBEX }} et son [jumelage](/workspace/workspace-browser-extension/devolutions-server/first-login/) avec {{ fr.DVLS }}, vous pouvez immédiatement utiliser l'extension pour récupérer vos identifiants. Cependant, vous pouvez vouloir modifier certains paramètres pour personnaliser votre expérience. Nous vous recommandons de suivre les étapes de la section [Paramètres](#settings) en premier : elles vous guideront dans la configuration du {{ fr.WBEX }} en suggérant des meilleures pratiques pour récupérer les identifiants. Vous pouvez également passer la configuration et aller directement à [Récupérer les identifiants](#retrieving-credentials).

## Paramètres

1. Cliquer sur l'icône {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis cliquer sur l'icône ***Paramètres***. ![Icône Paramètres](https://cdnweb.devolutions.net/docs/WEBX4078_2024_2.png "Icône Paramètres")
2. Dans l'onglet ***Général***, le paramètre ***Afficher l'icône dans les champs*** devrait être activé par défaut. Si ce n'est pas le cas, cocher la case à côté de l'option pour l'activer. {% snippet, "badgeNotice" %}
         Avec cette option activée, une icône {{ fr.WBEX }} est affichée dans chaque champ d'identifiants sur les sites Web que vous visitez. Cela facilite la sélection de l'entrée correcte à partir de laquelle récupérer vos identifiants, surtout lorsque plusieurs sont disponibles.
         {% endsnippet %}

   ![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/WEBX4035_2024_2.png "Général – Afficher l'icône dans les champs")

3. Cliquer sur ***Enregistrer***.
4. Cliquer sur ***{{ fr.DVLS }}*** dans la section ***Espaces***.
5. Dans l'onglet ***Actions***, activer les options ***Récupérer automatiquement les identifiants au chargement de la page*** et ***Remplir automatiquement les identifiants au chargement*** en cochant les cases à côté d'elles. Voici une description de chaque paramètre :
   * ***Récupérer automatiquement les identifiants au chargement de la page*** (activé par défaut) : Permet au {{ fr.WBEX }} de rechercher automatiquement les identifiants disponibles lors du chargement d'une page Web.
   * ***Remplir automatiquement les identifiants au chargement*** (désactivé par défaut) : Les champs d'identifiants sont automatiquement remplis lors du chargement d'une page Web. Cela ne fonctionne que si vous n'avez qu'un seul ensemble d'identifiants pour un site Web donné. ![Actions – Récupérer et remplir automatiquement les identifiants au chargement](https://cdnweb.devolutions.net/docs/WEBX4038_2024_2.png "Actions – Récupérer et remplir automatiquement les identifiants au chargement") {% snippet, "badgeInfo" %}
             Si le paramètre ***Soumettre automatiquement le formulaire après remplissage*** est activé, les identifiants sont automatiquement soumis lorsque les champs sont remplis. L'activer est optionnel car ce n'est pas une meilleure pratique.
             {% endsnippet %}
6. Cliquer sur ***Enregistrer***.

Vous pouvez maintenant passer à la section suivante pour apprendre comment récupérer vos identifiants d'entrée de site Web.

## Récupérer les Identifiants

{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} de la [section précédente](#settings). Nous vous recommandons fortement de les suivre avant de continuer, car certaines fonctionnalités peuvent différer entre votre expérience et ce qui est montré ci-dessous.
{% endsnippet %}

Les identifiants peuvent être récupérés depuis {{ fr.DVLS }} automatiquement ou manuellement via le {{ fr.WBEX }}. Suivez les étapes de la section qui correspond le mieux à vos besoins :

* [Récupérer automatiquement les identifiants](#automatically-retrieving-credentials)
* [Récupérer manuellement les identifiants](#manually-retrieving-credentials)

### Récupérer Automatiquement les Identifiants

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web Atlassian comme exemple. Deux scénarios peuvent se produire :
   * Si vous n'avez qu'un seul ensemble d'identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec vos identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. Vous n'avez pas besoin de suivre l'étape suivante. ![Champs d'identifiants remplis automatiquement](https://cdnweb.devolutions.net/docs/WEBX4039_2024_2.png "Champs d'identifiants remplis automatiquement")
   * Si vous avez plus d'un ensemble d'identifiants ou si vos identifiants ne sont pas remplis, cliquer sur l'icône {{ fr.WBEX }} dans le champ d'identifiants et sélectionner l'entrée qui contient vos identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez rechercher celle que vous voulez en utilisant la barre ***Filtrer***. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. ![Filtre et sélection d'entrée](https://cdnweb.devolutions.net/docs/WEBX4079_2024_2.png "Filtre et sélection d'entrée")

### Récupérer Manuellement les Identifiants

Selon les options que vous avez activées/désactivées, vous pourriez avoir besoin de récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web que vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web Atlassian comme exemple.
2. Cliquer sur le {{ fr.WBEX }} dans votre navigateur. Les entrées de site Web liées à ce site Web apparaîtront.
3. Cliquer sur l'entrée de site Web qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, vous pouvez utiliser la barre ***Filtrer*** pour trouver celle dont vous avez besoin. {% snippet, "badgeInfo" %}
         Si nécessaire, vous pouvez également utiliser les icônes qui apparaissent en survolant l'entrée pour copier votre nom d'utilisateur, copier votre mot de passe ou obtenir un aperçu de l'entrée.
         {% endsnippet %}

   ![Sélection d'entrée](https://cdnweb.devolutions.net/docs/WEBX4080_2024_2.png "Sélection d'entrée")

4. Vos identifiants seront transférés dans les champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. ![Transfert des identifiants dans les champs correspondants](https://cdnweb.devolutions.net/docs/WEBX4043_2024_2.png "Transfert des identifiants dans les champs correspondants")
