---
_schema: default
eleventyComputed:
  title: Créer un compte pour un site Web dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}
---
Le {{ fr.WBEX }} vous aide à créer un nouveau compte lorsque vous vous inscrivez sur un site Web. Il vous permet de créer un mot de passe sécurisé et de sauvegarder vos nouveaux identifiants.

{% snippet, "badgeInfo" %}Si vous avez déjà un compte pour le site Web, visitez [Ajouter une entrée de site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).{% endsnippet %}

Suivre les étapes ci-dessous pour apprendre à créer un compte de site Web avec le {{ fr.WBEX }} et sauvegarder vos identifiants dans {{ fr.DHUBB }}.

1. Sur le site Web pour lequel vous souhaitez créer votre compte, aller à la page d'inscription/création de compte. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web Atlassian comme exemple. ![Page d'inscription](https://cdnweb.devolutions.net/docs/WEBX4020_2024_2.png "Page d'inscription")
2. Suivre le processus d'inscription du site Web jusqu'à arriver au champ du mot de passe.
3. Cliquer sur l'icône {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis sélectionner le ***Générateur de mot de passe*** dans le ***Menu latéral*** de l'extension. ![Onglet Générateur de mot de passe](https://cdnweb.devolutions.net/docs/WEBX4108_2024_2.png "Onglet Générateur de mot de passe")
4. Personnaliser les paramètres de génération de mot de passe, mais cela est facultatif puisque les paramètres par défaut génèrent déjà des mots de passe très forts. Cela dit, il peut être nécessaire d'ajuster les paramètres pour répondre aux exigences spécifiques de certains sites Web. Si vous ne souhaitez pas personnaliser les paramètres de génération, passer à l'étape 5.
   1. Sélectionner une ***Longueur de mot de passe***. La valeur par défaut est fixée à 12. ![Longueur de mot de passe](https://cdnweb.devolutions.net/docs/WEBX4109_2024_2.png "Longueur de mot de passe")
   2. Dans les paramètres ***Généraux***, sélectionner les types de caractères que votre mot de passe doit contenir. Par défaut, il est configuré pour inclure des lettres majuscules, des lettres minuscules et des chiffres, mais il y a aussi l'option d'inclure des caractères spéciaux dans votre mot de passe. ![Paramètres généraux](https://cdnweb.devolutions.net/docs/WEBX4110_2024_2.png "Paramètres généraux")
   3. Dans la même section à côté des types de caractères, sélectionner le nombre minimum de caractères de chaque type qui doivent être inclus dans votre mot de passe. Les valeurs par défaut sont fixées à 0.
   4. Dans les paramètres ***Avancés***, personnaliser encore plus votre mot de passe si désiré. Dans le premier champ, entrer les caractères que vous souhaitez inclure dans votre mot de passe, suivis dans le champ à droite par le nombre minimum de fois qu'ils doivent apparaître. Dans le second champ, entrer les caractères que vous souhaitez exclure de votre mot de passe. ![Paramètres avancés](https://cdnweb.devolutions.net/docs/WEBX4111_2024_2.png "Paramètres avancés")

Vos paramètres de mot de passe sont maintenant configurés.

5. Si désiré, pour changer le mot de passe actuel, cliquer sur le bouton ***Générer un mot de passe*** jusqu'à ce que vous soyez satisfait du résultat. ![Générer un mot de passe](https://cdnweb.devolutions.net/docs/WEBX4112_2024_2.png "Générer un mot de passe")
6. Cliquer sur le bouton ***Copier dans le presse-papiers*** pour copier le mot de passe. ![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/WEBX4113_2024_2.png "Copier dans le presse-papiers")
7. Coller votre mot de passe dans le champ correspondant du site Web. ![Coller le mot de passe](https://cdnweb.devolutions.net/docs/WEBX4039_2024_2.png "Coller le mot de passe")
8. Suivre le reste des étapes d'inscription du site Web jusqu'à ce que la fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaisse dans le coin de votre navigateur Web. ![Ajouter un site Web](https://cdnweb.devolutions.net/docs/WEBX4106_2024_2.png "Ajouter un site Web")
9. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
10. Sélectionner le ***{{ fr.VLT }}*** et le ***dossier*** dans lequel sauvegarder votre entrée de site Web.
11. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés en toute sécurité dans une nouvelle entrée de site Web dans {{ fr.DHUBB }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).
