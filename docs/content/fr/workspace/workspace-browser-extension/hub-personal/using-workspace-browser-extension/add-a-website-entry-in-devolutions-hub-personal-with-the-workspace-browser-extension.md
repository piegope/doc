---
_schema: default
eleventyComputed:
  title: Ajouter une entrée dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}
---
Les entrées de site Web, de carte de crédit, de contact et de note sécurisée peuvent être créées avec le {{ fr.WBEX }} dans {{ fr.DHUBP }}. Pour ajouter une entrée de site Web, continuer à la section suivante. Pour tous les autres types d'entrées, aller à [Ajouter un autre type d'entrée](#add-another-type-of-entry) à la place.

## Ajouter une entrée de site Web

{% snippet, "badgeInfo" %}
Cette section explique comment créer une entrée avec vos identifiants de site Web existants. Si vous n'avez pas encore créé de compte pour le site Web, suivre les instructions dans [Créer un compte pour un site Web dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/create-account-website-hub-personal/) à la place.
{% endsnippet %}

L'entrée de site Web est utile pour enregistrer vos identifiants de connexion afin que vous n'ayez pas à vous en souvenir. Ces entrées sont également utilisées par le {{ fr.WBEX }} pour reconnaître un site Web et [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).

La principale façon d'y parvenir est de se connecter avec succès au site Web. Le {{ fr.WBEX }} proposera automatiquement d'enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. Il est également possible de créer manuellement l'entrée de site Web.

Apprendre à ajouter une entrée de site Web en suivant les instructions de ces sections :

* [Ajouter automatiquement une entrée de site Web](#automatically-add-a-website-entry)
* [Ajouter manuellement une entrée de site Web](#manually-add-a-website-entry)

### Ajouter automatiquement une entrée de site Web

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web Atlassian comme exemple. ![Page de connexion](https://cdnweb.devolutions.net/docs/WEBX4031_2024_2.png "Page de connexion")
2. Les sites Web demandent généralement des informations telles qu'une adresse courriel/nom d'utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu'à ce que vous vous connectiez à votre compte.
3. Une fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaîtra dans le coin de votre navigateur Web. ![Ajouter un site Web](https://cdnweb.devolutions.net/docs/WEBX4134_2024_2.png "Ajouter un site Web")
4. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le modifier, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
5. Le ***Nom d'utilisateur*** et le ***Mot de passe*** sont automatiquement remplis avec les informations que vous avez précédemment saisies. Vérifier qu'ils sont corrects.
6. Sélectionner un ***Dossier*** dans lequel enregistrer votre entrée de site Web.
7. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés en toute sécurité dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).

### Ajouter manuellement une entrée de site Web

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web Atlassian comme exemple. ![Page de connexion](https://cdnweb.devolutions.net/docs/WEBX4031_2024_2.png "Page de connexion")
2. Cliquer sur l'icône {{ fr.WBEX }} dans la barre d'outils de votre navigateur et, dans l'onglet ***Correspondance***, cliquer sur le bouton ***Ajouter un site Web***. ![Bouton Ajouter un site Web](https://cdnweb.devolutions.net/docs/WEBX4135_2024_2.png "Bouton Ajouter un site Web")
3. L'onglet ***Nouvelle entrée – Ajouter un site Web*** du {{ fr.WBEX }} s'ouvrira dans votre navigateur. ![Nouvelle entrée - Site Web (onglet Général)](https://cdnweb.devolutions.net/docs/WEBX4106_2024_2.png "Nouvelle entrée - Site Web &#40;onglet Général&#41;")
4. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le modifier, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
5. Sélectionner un ***Dossier*** dans lequel enregistrer vos identifiants.
6. La liste déroulante ***Hôte*** est définie sur ***Personnalisé*** par défaut. Cela permet au {{ fr.WBEX }} de spécifier automatiquement l'***URL*** dans le champ suivant avec l'URL de la page de connexion de l'étape 1.
7. La liste déroulante ***Identifiants*** est définie sur ***Personnalisé*** par défaut. Cela vous permet de saisir manuellement votre ***Nom d'utilisateur***, ***Domaine*** et ***Mot de passe*** à l'étape suivante.
8. Fournir le ***Nom d'utilisateur***, ***Domaine*** et ***Mot de passe*** que vous utilisez pour vous connecter au site Web. Vous n'avez peut-être pas de nom de domaine à spécifier ; dans ce cas, laisser le champ vide. De plus, selon le site Web, votre nom d'utilisateur peut être votre adresse courriel.
9. Le ***Type de comparaison*** doit être à ***Défaut*** et le ***{{ fr.WBEX }}*** doit être ***Activé***.
10. Cliquer sur ***Ajouter***.

Vos identifiants sont maintenant stockés en toute sécurité dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).
