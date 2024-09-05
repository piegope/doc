---
_schema: défaut
eleventyComputed:
  title: Créer un compte pour un site Web dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}
---
Le {{ fr.WBEX }} vous aide à créer un nouveau compte lorsque vous vous inscrivez sur un site Web. Il vous permet de créer un mot de passe sécurisé et de sauvegarder vos nouveaux identifiants.

{% snippet, "badgeInfo" %}Si vous avez déjà un compte pour le site Web, visitez [Ajouter un site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/add-website-hub-personal-workspace-browser-extension/).{% endsnippet %}

Suivez les étapes ci-dessous pour apprendre à créer un compte de site Web avec le {{ fr.WBEX }} et sauvegarder vos identifiants dans {{ fr.DHUBP }}.

1. Sur le site Web pour lequel vous souhaitez créer votre compte, aller à la page d'inscription/création de compte. Cette page sera différente pour chaque site Web ; ce sujet utilisera le site Web Atlassian comme exemple. ![Page d'inscription](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2060.png)
2. Suivre le processus d'inscription du site Web jusqu'à arriver au champ du mot de passe.
3. Cliquer sur l'icône {{ fr.WBEX }} dans la barre d'outils de votre navigateur, puis sélectionner le ***Générateur de mots de passe*** dans le menu de l'onglet. ![Onglet Générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2061.png)
4. Personnaliser les paramètres de génération de mot de passe, mais cela est facultatif car les paramètres par défaut génèrent déjà des mots de passe très forts. Cela dit, il peut être nécessaire d'ajuster les paramètres pour répondre aux exigences spécifiques de certains sites Web. Si vous ne souhaitez pas personnaliser les paramètres de génération, passer à l'étape 5.
   1. Sélectionner une ***Longueur de mot de passe***. La valeur par défaut est fixée à 12. ![Longueur de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2062.png) \{type="a"\}
   2. Dans les paramètres ***Généraux***, sélectionner les types de caractères que votre mot de passe doit contenir. Par défaut, il est configuré pour inclure des lettres majuscules, des lettres minuscules et des chiffres, mais il y a aussi l'option d'inclure des caractères spéciaux dans votre mot de passe. ![Paramètres Généraux](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2063.png)
   3. Dans la même section à côté des types de caractères, sélectionner le nombre minimum de caractères de chaque type qui doivent être inclus dans votre mot de passe. Les valeurs par défaut sont fixées à 0.
   4. Dans les paramètres ***Avancés***, personnaliser encore plus votre mot de passe si désiré. Cocher la case ***Personnalisé*** et, dans le premier champ, entrer les caractères que vous souhaitez inclure dans votre mot de passe, suivis dans le champ de droite par le nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, entrer les caractères que vous souhaitez exclure de votre mot de passe. ![Paramètres Avancés](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2064.png)

Vos paramètres de mot de passe sont maintenant configurés.

5. Si désiré, pour changer le mot de passe actuel, cliquer sur le bouton ***Générer le mot de passe*** jusqu'à être satisfait du résultat. ![Générer le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2065.png)
6. Cliquer sur le bouton ***Copier dans le presse-papiers*** pour copier le mot de passe. ![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2066.png)
7. Coller votre mot de passe dans le champ correspondant du site Web. ![Coller le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2053.png)
8. Suivre le reste des étapes d'inscription du site Web jusqu'à ce que la fenêtre ***Ajouter un site Web*** du {{ fr.WBEX }} apparaisse dans le coin de votre navigateur Web. ![Ajouter un site Web](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2183.png)
9. Fournir un ***Nom*** pour l'entrée. Vous pouvez conserver le nom par défaut ou le changer, mais nous recommandons qu'il reflète le contenu de l'entrée afin qu'il soit plus facile à trouver lorsque nécessaire.
10. Les champs ***Nom d'utilisateur*** et ***Mot de passe*** sont automatiquement remplis avec les informations que vous avez précédemment saisies. Vérifier qu'elles sont correctes.
11. Sélectionner un ***Dossier*** dans lequel sauvegarder votre entrée de site Web.
12. Cliquer sur ***Enregistrer***.

Vos identifiants sont maintenant stockés en toute sécurité dans une nouvelle entrée de site Web dans {{ fr.DHUBP }}. La prochaine fois que vous vous connecterez au même compte, le {{ fr.WBEX }} le détectera et vous pourrez récupérer vos identifiants. Suivre nos instructions étape par étape pour [récupérer vos identifiants](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).
