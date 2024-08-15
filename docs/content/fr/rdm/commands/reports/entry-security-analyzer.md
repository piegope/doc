---
eleventyComputed:
  title: Analyseur de sécurité des entrées
  description: L'analyseur de sécurité des entrées suit un ensemble de règles pour déterminer la force du mot de passe avec un score de 0 à 100. Il existe deux catégories de règles.
---
L'***analyseur de sécurité des entrées*** évalue la force des mots de passe stockés dans la source de données. Un contrôle de force du mot de passe est également affiché sous la plupart des champs de mot de passe des entrées.
![Password strength](https://cdnweb.devolutions.net/docs/RDMW0026_2024_2.png)
L'***analyseur de sécurité des entrées*** suit un ensemble de règles pour déterminer la force du mot de passe avec un score de 0 à 100. Il existe deux catégories de règles.

### Renforcer
Ce sont les règles qui rendent les mots de passe plus forts :

* La longueur du mot de passe
* Le nombre de lettres majuscules (A-Z)
* Le nombre de lettres minuscules (a-z)
* Le nombre de chiffres (0-9)
* Le nombre de symboles (!, @, #, $, etc.)
* Le nombre de chiffres ou de symboles au milieu du mot de passe
* Trois ou plus des règles ci-dessus sont respectées

Les exigences minimales pour un mot de passe fort sont :

* Le mot de passe contient au moins 5 caractères
* Le mot de passe contient des caractères majuscules et minuscules
* Le mot de passe contient des chiffres

### Affaiblir
Ce sont les règles qui rendent les mots de passe plus faibles :

* Le mot de passe contient uniquement des lettres
* Le mot de passe contient uniquement des chiffres
* Le mot de passe a des caractères répétés
* Le mot de passe a des lettres majuscules consécutives (deux ou plus)
* Le mot de passe a des lettres minuscules consécutives (deux ou plus)
* Le mot de passe a des chiffres consécutifs (deux ou plus)
* Le mot de passe a des lettres séquentielles (ABCD, DCBA)
* Le mot de passe a des chiffres séquentiels (1234, 4321)

## Paramètres
![Entry security analyzer](https://cdnweb.devolutions.net/docs/RDMW0025_2024_2.png)

| OPTION                            | DESCRIPTION                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Afficher toutes les entrées       | Affiche toutes les entrées de votre session, y compris celles sans mot de passe. |
| Afficher l'analyse VPN            | Ajouter la colonne Hôte VPN.                                                 |
| Afficher mot de passe compromis (pwned) | Affiche si le mot de passe a été compromis. Un [mot de passe compromis](/rdm/kb/rdm-windows/how-to-articles/pwned-password-check/) est un mot de passe qui a été exposé lors de violations de données (c'est-à-dire qu'ils sont possédés/pwned par des pirates). |
| Modifier                          | Ouvrir l'entrée actuelle pour la modifier.                                   |
| Mots de passe interdits           | Créer une liste de mots de passe interdits.                                  |
| Exporter les paramètres           | Exporter les paramètres de l'analyseur de mots de passe.                     |