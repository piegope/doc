---
eleventyComputed:
  title: Vérification des mots de passe compromis (pwned)
  description: Dans le monde de la sécurité de l'information, un mot de passe compromis est un mot de passe qui a été exposé lors de violations de données (c'est-à-dire qu'il est possédé/pwned par des pirates). Utiliser un mot de passe compromis augmente considérablement les chances d'être victime d'une violation de données.
---
{% youtube 'D2PnLXJY100' %}

Dans le monde de la sécurité de l'information, un mot de passe compromis est un mot de passe qui a été exposé lors de violations de données (c'est-à-dire qu'il est possédé/pwned par des pirates).

Utiliser un mot de passe compromis augmente considérablement les chances d'être victime d'une violation de données. Pwned Check utilise l'API Pwned Passwords de Troy Hunt et vérifie automatiquement si un mot de passe que vous utilisez (ou envisagez d'utiliser) a été compromis par des pirates. Si c'est le cas, vous serez averti et pourrez être proactif et choisir autre chose pour rester à l'abri. Il y a plus d'un demi-milliard de mots de passe dans la base de données Pwned Passwords.

## Configurer la vérification des mots de passe compromis
Dans les bases de données existantes, la vérification des mots de passe compromis n'est pas activée automatiquement.

1. Aller à ***Administration – Paramètres du système – Validation des mots de passe***.
1. Dans l'option ***Vérification des mots de passe compromis***, choisir ***Activé*** dans la liste et cliquer sur ***OK***.
![Activer l'option de vérification des mots de passe compromis](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2324.png)

{{ fr.RDM }} analyse un mot de passe lorsque vous enregistrez une entrée. Un message s'affiche lorsqu'un mot de passe est trouvé dans la base de données Pwned Passwords. Si vous voyez cette fenêtre, vous devez changer votre mot de passe immédiatement. N'oubliez pas de le changer dans {{ fr.RDM }} et dans le compte réel.
![Changer votre mot de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2325.png)

### La dorsale
Soyez assuré que {{ fr.RDM }} n'envoie PAS vos mots de passe à Pwned Passwords.

Voici comment cela fonctionne :

1. La vérification des mots de passe compromis utilise la k-Anonymity.
1. {{ fr.RDM }} n'envoie que les cinq premiers caractères du hachage SHA-1 du mot de passe à l'API.
1. L'API renvoie une liste de tous les hachages de mots de passe qui correspondent aux cinq premiers caractères du hachage. L'API ne renvoie que la deuxième partie du hachage.
1. {{ fr.RDM }} compare les hachages de la liste au hachage du mot de passe que vous souhaitez utiliser.
1. S'il y a une correspondance, vous recevez un avertissement.

### Choisir des mots de passe plus forts
{{ fr.RDM }} facilite la création de mots de passe forts. Le [Générateur de mots de passe](/rdm/commands/tools/generators/password/) intégré crée des mots de passe sécurisés, suivant vos spécifications de longueur et de complexité du mot de passe. Le générateur de mots de passe est disponible sur chaque entrée à côté des champs de mot de passe.
![Icône du générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2326.png)
![Générateur de mots de passe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2327.png)

{% snippet, "badgeHelp" %}
{{ fr.RDM }} dispose également d'un [Analyseur de sécurité des entrées](/rdm/commands/reports/entry-security-analyzer/) qui fournit des commentaires sur tous vos mots de passe. Une évaluation est incluse sur l'entrée. Il utilise Zxcvbn pour évaluer les mots de passe. Vous pouvez également créer un rapport de tous vos mots de passe en utilisant l'***Analyseur de sécurité des entrées*** dans l'onglet ***Outils***.
{% endsnippet %}
