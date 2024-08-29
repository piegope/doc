---
_schema: default
eleventyComputed:
  title: '{{ fr.WBEX }} dépannage des journaux de connexion'
  description: >-
    Lorsqu'un problème survient avec le {{ fr.WBEX }}, le personnel de support
    peut vous demander de leur fournir des journaux pour fournir plus
    d'informations à notre département d'ingénierie, veuillez suivre ces étapes
    selon votre navigateur.
---
Lorsqu'un problème survient avec le {{ fr.WBEX }}, le personnel de support peut vous demander de leur fournir des journaux pour fournir plus d'informations à notre département d'ingénierie. Veuillez suivre ces étapes selon votre navigateur.

## Brave

1. Dans votre navigateur, ***faire un clic droit sur l'icône {{ fr.WBEX }}.***
2. Cliquer sur ***Gérer l'extension***.
3. Activer le ***mode développeur***.
4. Dans la même fenêtre, sous ***Inspecter les vues***, cliquer sur le lien ***service worker***. Cela ouvrira la fenêtre ***DevTools*** du navigateur.
5. Ouvrir le menu contextuel du {{ fr.WBEX }}, et cliquer sur le bouton ***Actualiser***. ![Actualiser](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Retourner à la fenêtre ***DevTools***, et cliquer sur ***Réseau***. ![Réseau](https://cdnweb.devolutions.net/docs/WBEX6014_2024_2.png)
7. Dans l'onglet ***Réseau***, l'un des éléments de la liste devrait être en rouge, c'est l'événement où {{ fr.RDM }} n'a pas réussi à récupérer les identifiants. Cliquer dessus.
8. Prendre une capture d'écran du message complet affiché et l'envoyer à [service@devolutions.net](mailto:service@devolutions.net).

## Chrome

1. Dans votre navigateur, ***faire un clic droit sur l'icône {{ fr.WBEX }}.***
2. Cliquer sur ***Gérer l'extension***.
3. Activer le ***mode développeur***. ![Mode développeur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4786.png)
4. Dans la même fenêtre, sous ***Inspecter les vues***, cliquer sur le lien ***service worker***. Cela ouvrira la fenêtre ***DevTools*** du navigateur. ![Service worker](https://cdnweb.devolutions.net/docs/WBEX6015_2024_2.png)
5. Ouvrir le menu contextuel du {{ fr.WBEX }}, et cliquer sur le bouton ***Actualiser***. ![Actualiser](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Retourner à la fenêtre ***DevTools***, et cliquer sur ***Réseau***. ![Réseau](https://cdnweb.devolutions.net/docs/WBEX6002_2024_2.png)
7. Dans l'onglet ***Réseau***, l'un des éléments de la liste devrait être en rouge, c'est l'événement où {{ fr.RDM }} n'a pas réussi à récupérer les identifiants. Cliquer dessus.
8. Prendre une capture d'écran du message complet affiché et l'envoyer à [service@devolutions.net](mailto:service@devolutions.net).

## Edge

1. Dans votre navigateur, ***faire un clic droit sur l'icône {{ fr.WBEX }}.***
2. Cliquer sur ***Gérer l'extension***.
3. Activer le ***mode développeur***. ![Mode développeur](https://cdnweb.devolutions.net/docs/WBEX6010_2024_2.png)
4. Dans la même fenêtre, sous ***Inspecter les vues***, cliquer sur le lien ***service worker***. Cela ouvrira la fenêtre ***DevTools*** du navigateur.
5. Ouvrir le menu contextuel du {{ fr.WBEX }}, cliquer sur le bouton ***Actualiser***. ![Actualiser](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Retourner à la fenêtre ***DevTools***, et cliquer sur ***Réseau***. ![Réseau](https://cdnweb.devolutions.net/docs/WBEX6002_2024_2.png)
7. Dans l'onglet ***Réseau***, l'un des éléments de la liste devrait être en rouge, c'est l'événement où {{ fr.RDM }} n'a pas réussi à récupérer les identifiants. Cliquer dessus.
8. Prendre une capture d'écran du message complet affiché et l'envoyer à [service@devolutions.net](mailto:service@devolutions.net).

## Firefox

1. Entrer ***about:debugging#/runtime/this-firefox*** dans la barre d'URL.
2. À côté du {{ fr.WBEX }}, cliquer sur ***Inspecter***. Cela ouvrira la fenêtre ***DevTools*** du navigateur. ![Inspecter](https://cdnweb.devolutions.net/docs/WBEX6003_2024_2.png)
3. Dans la fenêtre ***DevTools***, cliquer sur ***Réseau***. ![Réseau](https://cdnweb.devolutions.net/docs/WBEX6005_2024_2.png)
4. Dans l'onglet ***Réseau***, l'un des éléments de la liste devrait être en rouge, c'est l'événement où {{ fr.RDM }} n'a pas réussi à récupérer les identifiants. Cliquer dessus.
5. Prendre une capture d'écran du message complet affiché et l'envoyer à [service@devolutions.net](mailto:service@devolutions.net). ![Réseau](https://cdnweb.devolutions.net/docs/WBEX6005_2024_2.png)

## Opera

1. Dans votre navigateur, ***faire un clic droit sur l'icône {{ fr.WBEX }}.***
2. Cliquer sur ***Gérer l'extension***.
3. Activer le ***mode développeur***. ![Mode développeur](https://cdnweb.devolutions.net/docs/WBEX6009_2024_2.png)
4. Dans la même fenêtre, sous ***Inspecter les vues***, cliquer sur le lien ***service worker***. Cela ouvrira la fenêtre ***DevTools*** du navigateur. ![service worker](https://cdnweb.devolutions.net/docs/WBEX6007_2024_2.png)
5. Ouvrir le menu contextuel du {{ fr.WBEX }}, et cliquer sur le bouton ***Actualiser***. ![Actualiser](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Retourner à la fenêtre ***DevTools***, cliquer sur ***Réseau***. ![Réseau](https://cdnweb.devolutions.net/docs/WBEX6008_2024_2.png)
7. Dans l'onglet ***Réseau***, l'un des éléments de la liste devrait être en rouge, c'est l'événement où {{ fr.RDM }} n'a pas réussi à récupérer les identifiants. Cliquer dessus.
8. Prendre une capture d'écran du message complet affiché et l'envoyer à [service@devolutions.net](mailto:service@devolutions.net).
