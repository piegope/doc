---
_schema: défaut
eleventyComputed:
  title: Récupérer les identifiants depuis {{ fr.DHUBB }} avec le {{ fr.WBEX }}
---
{% snippet, "badgeInfo" %}
Avoir besoin d'entrées de site Web dans {{ fr.DHUBB }} pour pouvoir récupérer leurs identifiants. Si ce n'est pas le cas, commencer par [ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).
{% endsnippet %}

Le {{ fr.WBEX }} facilite l'accès à vos identifiants en associant automatiquement les sites Web aux identifiants enregistrés dans les entrées de site Web de {{ fr.DHUBB }}. Il est également possible de filtrer vos entrées via le {{ fr.WBEX }} pour trouver manuellement vos identifiants.

Après l'[installation](/workspace/workspace-browser-extension/installation/) du {{ fr.WBEX }} et son [jumelage](/workspace/workspace-browser-extension/hub-business/first-login/) avec {{ fr.DHUBB }}, pouvoir immédiatement utiliser l'extension pour récupérer vos identifiants. Cependant, vouloir modifier certains paramètres pour personnaliser votre expérience. Recommander de suivre les étapes de la section [Paramètres](#settings) en premier : elles vous guideront dans la configuration du {{ fr.WBEX }} en suggérant des meilleures pratiques pour récupérer les identifiants. Pouvoir également sauter la configuration et aller directement à [Récupérer les identifiants](#retrieving-credentials).

## Paramètres

1. Cliquer sur le bouton {{ fr.WBEX }} dans votre navigateur, puis cliquer sur l'icône ***Paramètres***. ![Icône Paramètres](https://cdnweb.devolutions.net/docs/WEBX4114_2024_2.png "Icône Paramètres")
2. Dans l'onglet ***Général***, le paramètre ***Afficher l'icône dans les champs*** devrait être activé par défaut. Si ce n'est pas le cas, cocher la case à côté de l'option pour l'activer. {% snippet, "badgeNotice" %}
                     Avec cette option activée, une icône {{ fr.WBEX }} est affichée dans chaque champ d'identifiants sur les sites Web que vous visitez. Cela facilite la sélection de l'entrée correcte à partir de laquelle récupérer vos identifiants, surtout lorsqu'il y en a plus d'une disponible.
                     {% endsnippet %}

   ![Général – Afficher l'icône dans les champs](https://cdnweb.devolutions.net/docs/WEBX4035_2024_2.png "Général – Afficher l'icône dans les champs")

3. Cliquer sur ***Enregistrer***.
4. Cliquer sur ***{{ fr.DHUBB }}*** dans la section ***Espaces***.
5. Dans l'onglet ***Actions***, activer l'option ***Remplir automatiquement les identifiants au chargement*** en cochant la case à côté. Avec ce paramètre activé, les identifiants seront automatiquement remplis lors du chargement d'une page Web. Cela ne fonctionne que si vous n'avez qu'un seul ensemble d'identifiants pour un site Web donné. ![Actions – Récupérer et remplir automatiquement les identifiants au chargement](https://cdnweb.devolutions.net/docs/WEBX4038_2024_2.png "Actions – Récupérer et remplir automatiquement les identifiants au chargement") {% snippet, "badgeInfo" %}
                     Si le paramètre ***Soumettre automatiquement le formulaire après remplissage*** est activé, les identifiants sont automatiquement soumis lorsque les champs sont remplis. L'activer est facultatif car ce n'est pas une meilleure pratique.
                     {% endsnippet %}
6. Cliquer sur ***Enregistrer***.

Pouvoir maintenant continuer à la section suivante pour apprendre comment récupérer les identifiants de votre entrée de site Web.

## Récupérer les identifiants

{% snippet, "badgeInfo" %}
Cette section est basée sur les étapes de configuration du {{ fr.WBEX }} de la [section précédente](#settings). Recommander fortement de les suivre avant de continuer, car certaines fonctionnalités peuvent différer entre votre expérience et ce qui est montré ci-dessous.
{% endsnippet %}

Les identifiants peuvent être récupérés depuis {{ fr.DHUBB }} automatiquement ou manuellement via le {{ fr.WBEX }}. Suivre les étapes de la section qui convient le mieux à vos besoins :

* [Récupérer automatiquement les identifiants](#automatically-retrieving-credentials)
* [Récupérer manuellement les identifiants](#manually-retrieving-credentials)

### Récupérer automatiquement les identifiants

1. Aller à la page de connexion du site Web que vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web Atlassian comme exemple. Deux scénarios peuvent se produire :
   1. Si vous n'avez qu'un seul ensemble d'identifiants pour ce site Web, les champs de connexion devraient déjà être remplis avec vos identifiants. Si c'est le cas, suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. Ne pas avoir à suivre l'étape suivante. ![Champs d'identifiants remplis automatiquement](https://cdnweb.devolutions.net/docs/WEBX4039_2024_2.png "Champs d'identifiants remplis automatiquement").
   2. Si vous avez plus d'un ensemble d'identifiants ou si vos identifiants ne sont pas remplis, cliquer sur l'icône {{ fr.WBEX }} dans le champ d'identifiants et sélectionner l'entrée qui contient vos identifiants pour ce site Web. Si plusieurs entrées sont disponibles, pouvoir rechercher celle que vous voulez en utilisant la barre ***Filtrer***. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. ![Filtre et sélection d'entrée](https://cdnweb.devolutions.net/docs/WEBX4115_2024_2.png "Filtre et sélection d'entrée")

### Récupérer manuellement les identifiants

Selon les options que vous avez activées/désactivées, vous pourriez avoir besoin de récupérer vos identifiants manuellement :

1. Aller à la page de connexion du site Web que vous souhaitez accéder. Cette page sera différente pour chaque site Web ; cette section utilisera le site Web Atlassian comme exemple.
2. Cliquer sur le {{ fr.WBEX }} dans votre navigateur. Les entrées de site Web liées à ce site Web apparaîtront.
3. Cliquer sur l'entrée de site Web qui contient les identifiants pour ce site Web. Si plusieurs entrées sont disponibles, pouvoir utiliser la barre ***Filtrer*** pour trouver celle dont vous avez besoin. ![Sélection d'entrée](https://cdnweb.devolutions.net/docs/WEBX4116_2024_2.png "Sélection d'entrée")

   {% snippet, "badgeInfo" %}
                     Si nécessaire, pouvoir également utiliser les icônes qui apparaissent en survolant l'entrée pour copier votre nom d'utilisateur, copier votre mot de passe ou obtenir un aperçu de l'entrée.
                     {% endsnippet %}

4. Vos identifiants seront transférés dans les champs d'identifiants du site Web. Suivre le reste du processus de connexion du site Web jusqu'à ce que vous vous connectiez avec succès à votre compte. ![Transfert des identifiants dans les champs correspondants](https://cdnweb.devolutions.net/docs/WEBX4043_2024_2.png "Transfert des identifiants dans les champs correspondants")
