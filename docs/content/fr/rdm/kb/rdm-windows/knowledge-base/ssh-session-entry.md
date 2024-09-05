---
eleventyComputed:
  title: Options d'entrée du terminal SSH
  description: Ce sujet décrit toutes les options disponibles spécifiques à cette entrée.
---
Ce sujet décrit toutes les options disponibles spécifiques à cette entrée. Chaque chapitre représente un onglet dans le menu des options.

{% snippet, "badgeInfo" %}
Les propriétés suivantes peuvent être configurées lors de la création ou de la modification de l'entrée.
{% endsnippet %}

| PARAMÈTRES        | DESCRIPTION            |
|-------------------|------------------------|
| ***Nom***         | Le nom de l'entrée. |
| ***Dossier***     | Le dossier où l'entrée est située. Un dossier peut être sélectionné en cliquant sur la flèche ou les trois points pour ouvrir la fenêtre ***Dossier***. Pour créer un nouveau dossier, cliquer sur l'icône plus (***+***).|
| ***Affichage***   | Comment la session est affichée. ***Intégré (à onglets)*** signifie que la connexion à distance est ouverte dans la même fenêtre que les autres onglets ou entrées. Chaque connexion a son propre onglet, ce qui facilite le passage de l'une à l'autre. Un affichage ***détaché*** fait référence à la fenêtre de session étant séparée de l'application principale. Cela vous permet de déplacer et redimensionner librement la fenêtre de session à distance sur votre bureau. |
| ***Hôte***        | ***Hôte configuré*** vous permet de sélectionner l'hôte. ***Lié (coffre)*** indique que l'hôte pour l'entrée est lié à une entrée d'hôte. ***Hérité*** est utilisé lorsque l'hôte est hérité d'une entrée de niveau supérieur ou parent. |
| ***Identifiants*** | <ul> <li>***Nom d'utilisateur et mot de passe*** : Vous définirez le nom d'utilisateur et le mot de passe dans l'onglet ***Général***.</li> <li>***Lié (coffre)*** : Lien vers des identifiants disponibles dans le coffre partagé actuel.</li> <li>***Hérité*** : L'héritage signifie que les identifiants seront automatiquement transmis d'une entrée de niveau supérieur aux entrées de niveau inférieur qui en héritent.</li> <li>***Mes identifiants personnels*** : Ces identifiants ne sont pas spécifiques à l'entrée mais sont plutôt pris dans l'option sous ***Fichier*** – ***Paramètres de mon compte*** – ***Identifiants locaux*** – ***Mes identifiants personnels***.</li> <li>***Aucun*** : {{ fr.RDM }} n'enverra pas d'identifiants à l'entrée.</li> <li>***Trouver par nom (coffre utilisateur)*** : Recherche le nom d'une entrée dans le coffre utilisateur.</li> <li>***Mon compte privilégié*** : Ces identifiants ne sont pas spécifiques à l'entrée mais sont plutôt pris dans l'option sous ***Fichier*** – ***Paramètres de mon compte*** – ***Identifiants locaux*** – ***Mon compte privilégié***.</li> </ul> |

![Onglet Général](https://cdnweb.devolutions.net/docs/RDMW0027_2024_2.png)

## Onglet Général
| PARAMÈTRES                     | DESCRIPTION                                                                       |
|------------------------------|-----------------------------------------------------------------------------------|
| ***Hôte***                   | Le champ contient le nom de l'hôte. Cliquer sur le bouton à points de suspension ouvre le menu ***Liste des ordinateurs***. Cliquer sur ***Par défaut*** ouvre le menu ***Port***. Le bouton ***Générateur de port...*** peut générer des ports selon une liste de paramètres. |
| ***Nom d'utilisateur***      | Les identifiants de connexion de cette entrée.                                                   |
| ***Mot de passe***           | Les identifiants de connexion de cette entrée.                                                   |
| ***Chaîne d'invite de mot de passe*** | Une chaîne utilisée si un serveur a un processus de connexion différent (ce champ est facultatif). |
| ***Chaîne d'invite OTP***    | Une chaîne utilisée pour savoir quand envoyer l'OTP (ce champ est facultatif).              |
| ***Utiliser la carte à puce*** | Utilise la carte à puce.                                                               |
| ***Méthode de certificat***  | La méthode utilisée pour récupérer les identifiants de la carte à puce.                               |
| ***NIP***                    | Le NIP de la carte à puce.                                                                |

![Clé SSH – Sous-onglet Général](https://cdnweb.devolutions.net/docs/RDMW0028_2024_2.png)

## Onglet Clé SSH
### Général
| PARAMÈTRES          | DESCRIPTION                                                                                                         |
|-------------------|---------------------------------------------------------------------------------------------------------------------|
| ***Type d'entrée***  | La source de la clé SSH.                                                                                          |
| ***Coffre***       | La liste déroulante peut être utilisée pour sélectionner une clé SSH. Le bouton à points de suspension ouvre une fenêtre pour parcourir le coffre actuel à la recherche de clés SSH (ce champ n'est disponible que si le ***Type d'entrée*** est ***Lié (coffre)***). |
| ***Phrase secrète***  | La phrase secrète utilisée pour déchiffrer la clé.                                                                             |
| ***Fichier***        | Ce champ pointe vers le fichier de clé SSH (ce champ n'est disponible que si le ***Type d'entrée*** est ***Fichier (local)***). |
| ***Clé privée*** | Sélectionner ou générer un fichier de clé privée (ce champ est uniquement pour ***Données intégrées*** et la clé est enregistrée dans {{ fr.RDM }}). |

![Clé SSH – Sous-onglet Certificat](https://cdnweb.devolutions.net/docs/RDMW0029_2024_2.png)

### Certificat
| PARAMÈTRES               | DESCRIPTION                                                                |
|------------------------|----------------------------------------------------------------------------|
| ***Fichier de certificat*** | La source du certificat.                                             |
| ***Fichier***             | Ce champ pointe vers le fichier de certificat (ce champ n'est disponible que si le ***Type d'entrée*** est ***Fichier (local)***). |
| ***Certificat***      | Sélectionner ou un fichier de certificat (ce champ est uniquement pour ***Données intégrées***). |

![Onglet Proxy](https://cdnweb.devolutions.net/docs/RDMW0030_2024_2.png)

## Onglet Proxy
| PARAMÈTRES         | DESCRIPTION |
|------------------|-------------|
| ***Mode Proxy*** | Le mode ***Lien*** pointe vers une entrée ***Tunnel Proxy***. Le mode ***Personnalisé*** configure un proxy personnalisé avec les mêmes paramètres qu'un tunnel proxy. |

![Onglet Passerelle SSH](https://cdnweb.devolutions.net/docs/RDMW0031_2024_2.png)

## Onglet Passerelle SSH
| PARAMÈTRES           | DESCRIPTION |
|--------------------|-------------|
| ***Mode Passerelle*** | Le mode ***Personnalisé*** vous permet de configurer une passerelle SSH. Le mode ***Lié*** choisit parmi une passerelle SSH déjà existante. |

![Onglet Post connexion](https://cdnweb.devolutions.net/docs/RDMW0032_2024_2.png)

## Onglet Post connexion
| PARAMÈTRES                              | DESCRIPTION                                                    |
|---------------------------------------|----------------------------------------------------------------|
| ***Délai***                           | Un délai défini entre chaque commande exécutée.                    |
| ***{ENTER} automatique après commande*** | Un saut de ligne automatique sera ajouté entre chaque commande. |
| ***Commandes***                        | Contient une liste de configurations de commande. Cliquer sur le bouton ***Nouveau*** ou ***Modifier*** ouvrira la fenêtre ***Édition de macro*** avec : <ul><li>Le champ ***Commande*** (prend en charge les variables)</li> <li>L'***Invite attendue*** (lorsque RDM voit cette valeur, il enverra cette commande)</li> <li>Le ***Délai d'attente*** pour l'option ***Invite attendue***</li></ul> |

![Onglet Avant fermeture](https://cdnweb.devolutions.net/docs/RDMW0033_2024_2.png)

## Onglet Avant fermeture
| PARAMÈTRES                              | DESCRIPTION                                                                            |
|---------------------------------------|----------------------------------------------------------------------------------------|
| ***Délai***                           | Un délai défini entre chaque commande exécutée.                                            |
| ***{ENTER} automatique après commande*** | Un saut de ligne automatique sera ajouté entre chaque commande.                         |
| ***Commandes***                        | 5 lignes de commande, suivies du champ ***Plus de commandes*** pour ajouter des commandes supplémentaires. |

![Terminal – Sous-onglet Configuration](https://cdnweb.devolutions.net/docs/RDMW0034_2024_2.png)

## Onglet Terminal
### Configuration
| PARAMÈTRES                                   | DESCRIPTION                                                                                  |
|--------------------------------------------|----------------------------------------------------------------------------------------------|
| ***Remplacer le type de terminal***               | Le terminal sera traité différemment si la chaîne dans ce champ est détectée.            |
| ***Encodage***                             | Change l'encodage des caractères.                                                                  |
| ***Retour automatique à la ligne***        | Activer ou désactiver le retour automatique à la ligne.                                                                 |
| ***Écho local***                           | Activer ou désactiver l'écho local. L'option ***Auto*** laisse le serveur décider.                  |
| ***Mode initial du pavé numérique***       | Comment le terminal se comporte avec le pavé numérique.                                                    |
| ***Désactiver le mode pavé numérique de l'application*** | Désactive le pavé numérique de l'application.                                                                     |
| ***Type de curseur***                      | Change le type de curseur de l'interface utilisateur.                                                                  |
| ***Clignotement du curseur***              | Active ou désactive le clignotement du curseur.                                                            |
| ***Taux de clignotement du curseur***      | Délai entre chaque clignotement du curseur.                                                            |
| ***Réinitialiser le défilement à l'affichage*** | Activer ou désactiver la réinitialisation du défilement.                                                              |
| ***Forcer le retour arrière non destructif***      | Activer ou désactiver le retour arrière non destructif.                                                 |
| ***Retour chariot implicite dans le saut de ligne*** | Ajoute un retour chariot à chaque saut de ligne.                                                  |
| ***Saut de ligne implicite dans le retour chariot*** | Ajoute un saut de ligne à chaque retour chariot.                                                  |
| ***Lignes de défilement maximum***         | Le nombre maximum de lignes affichées.                                                       |
| ***Délimiteurs de double-clic***           | Délimite ce qui est sélectionné dans le terminal avec un caractère ou une chaîne lors d'un double-clic. |

![Terminal – Sous-onglet Affichage](https://cdnweb.devolutions.net/docs/RDMW0035_2024_2.png)

### Affichage
| PARAMÈTRES                                            | DESCRIPTION                                                          |
|-----------------------------------------------------|----------------------------------------------------------------------|
| ***Autoriser le changement de titre de fenêtre contrôlé à distance*** | Change le nom de l'onglet d'entrée en fonction de ce que le serveur envoie.       |
| ***Couleurs***                                        | Permet de remplacer les couleurs.                                             |
| ***Police***                                          | Permet de remplacer la police.                                              |
| ***Taille du terminal***                              | Le mode ***Taille fixe*** vous permet de définir un nombre de colonnes et de lignes. |
| ***Mode Gras***                                       | Cette option gère comment le gras est affiché.                       |
| ***Mode de surlignage syntaxique***                   | Cette option peut définir un ou plusieurs surlignages syntaxiques personnalisés.            |

![Terminal – Sous-onglet Avancé](https://cdnweb.devolutions.net/docs/RDMW0036_2024_2.png)

### Avancé
| PARAMÈTRES                                   | DESCRIPTION                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
| ***Réponse***                           |  |
| ***Activer la surveillance à distance***             | Si activé, une barre d'état avec les % de CPU, RAM et Swap apparaît en bas.   |
| ***Intervalle***                             | L'intervalle auquel un ping sera envoyé pour mettre à jour les informations sur la surveillance à distance. |
| ***Commande à distance***                       |  |
| ***Comportement de la cloche***                        | Comment {{ fr.RDM }} réagira à l'envoi du caractère de cloche par le terminal SSH.    |
| ***Activer la compression***                   | Permet d'envoyer ou non des données compressées.                                         |
| ***Ouvrir automatiquement l'onglet de transfert de fichiers*** | Ouvre automatiquement l'onglet de transfert de fichiers lorsque le terminal est ouvert.         |
| ***Démarrer minimisé***                      | Minimise l'onglet de transfert de fichiers lorsque la session terminal est ouverte.           |
| ***Afficher les fichiers en arborescence***              | Affiche les fichiers dans l'onglet de transfert de fichiers.                                          |
| ***Afficher les fichiers cachés***                    | Affiche les fichiers cachés dans l'onglet de transfert de fichiers.                                   |
| ***Journaliser dans un fichier***                          | Définir un chemin et un fichier pour conserver les journaux.                                              |
| ***Verbeux***                              | Comment les journaux détaillés sont écrits.                                                  |
| ***Répertoire de base***                       | Le répertoire à la racine de l'onglet de transfert de fichiers.                            |
| ***Emplacement de départ***                    | Définit le dossier sélectionné lors du démarrage de l'onglet de transfert de fichiers.                  |
| ***Répertoire de téléchargement Zmodem***            | Où les fichiers Zmodem seront téléchargés.                                     |

![Clavier – Sous-onglet Général](https://cdnweb.devolutions.net/docs/RDMW0037_2024_2.png)

## Onglet Clavier
### Général
| PARAMÈTRES                  | DESCRIPTION                                                                                  |
|---------------------------|----------------------------------------------------------------------------------------------|
| ***Mode des touches de curseur***     | Change le mode des touches de curseur entre ***Normal*** et ***Application***.                      |
| ***Mode de la touche de retour arrière***  | Change le mode de la touche de retour arrière entre ***Control-H*** et ***Control-? (code ASCII 127)***. |
| ***Mode des touches Accueil / Fin*** | Change le mode des touches Accueil / Fin entre ***Standard*** et ***RXVT***.                       |
| ***Mode des touches de fonction***  | Change la façon dont les touches de fonction sont gérées.                                                   |

![Clavier – Sous-onglet Mappage des touches](https://cdnweb.devolutions.net/docs/RDMW0038_2024_2.png)

### Mappage des touches
| PARAMÈTRES          | DESCRIPTION                                                                      |
|-------------------|----------------------------------------------------------------------------------|
| ***Touche***         | Cliquer sur le bouton ***Nouveau*** pour mapper une séquence déclenchée par une touche plus un modificateur. |

![Onglet Transfert X11](https://cdnweb.devolutions.net/docs/RDMW0039_2024_2.png)

## Onglet Transfert X11
| PARAMÈTRES                    | DESCRIPTION                            |
|-----------------------------|----------------------------------------|
| ***Activer le transfert X11*** | Active ou désactive le transfert X11 |

![Onglet Journaux](https://cdnweb.devolutions.net/docs/RDMW0040_2024_2.png)

## Onglet Journaux
| PARAMÈTRES                 | DESCRIPTION                                                                    |
|--------------------------|--------------------------------------------------------------------------------|
| ***Activer la journalisation***     | Le mode ***Personnalisé*** nécessite le chemin et le nom du fichier. Le mode ***Global*** nécessite le nom du fichier puis de configurer le chemin global dans ***Fichier*** – ***Paramètres***. |
| ***Chemin du journal***           | Inclut le chemin et le fichier pour le journal.                                    |
| ***Mode de journalisation***           | Le mode ***Événement*** ne journalise que les événements principaux. Le mode ***Sortie imprimable*** journalise tout ce qui se passe visiblement dans le terminal. |
| ***Mode de remplacement du journal*** | Cette option n'est disponible qu'avec le ***Mode de journalisation Sortie imprimable*** : <ul><li> ***Invite*** : demande ***Ajouter*** ou ***Remplacer***.</li> <li>***Ajouter*** : Écrit à la fin du fichier.</li> <li>***Remplacer*** : Remplace le fichier par des journaux spécifiques à la session actuelle.</li></ul> |
| ***Verbeux***            | Cela définira la profondeur des journaux (disponible uniquement pour le mode ***Événement***). |
| ***Journaliser dans le terminal***    | Basculer pour afficher les journaux dans le terminal.                                    |

![Onglet Macro](https://cdnweb.devolutions.net/docs/RDMW0041_2024_2.png)

## Onglet Macro
| PARAMÈTRES                  | DESCRIPTION                                                                                             |
|---------------------------|---------------------------------------------------------------------------------------------------------|
| ***Activer la macro***        | L'option ***Oui*** active la barre de macro, qui apparaît en haut lorsque le terminal SSH est lancé. |
| ***Masquer les macros prédéfinies*** | Basculer pour masquer les macros prédéfinies.                                                                     |
| ***Source de la liste des macros***   | L'option ***Coffre entier*** ne liste que les macros du coffre actuel. L'option ***Personnalisé*** sélectionne uniquement des macros spécifiques. |

![Onglet Avancé](https://cdnweb.devolutions.net/docs/RDMW0042_2024_2.png)

## Onglet Avancé
| PARAMÈTRES                                        | DESCRIPTION                                                      |
|-------------------------------------------------|------------------------------------------------------------------|
| ***Protocole Internet***                         | Choisir entre IPv4 ou IPv6.                                     |
| ***Authentification interactive dans le terminal***    | Cette option gère le comportement lorsque le terminal vous demande une authentification interactive. L'option ***Non*** fait que {{ fr.RDM }} la gère, tandis que ***Oui*** fait que le terminal la gère. |
| ***Action de déconnexion***                         | Ce qui se passe lorsque le terminal SSH se déconnecte.                  |
| ***Afficher les messages d'erreur***                    | Choisir d'afficher ou non les messages d'erreur.                            |
| ***Toujours accepter l'empreinte digitale***                 | Toujours accepter les empreintes digitales ou non.                               |
| ***Mode de clic de souris***                          | Change le comportement du clic droit : <ul><li>***Windows*** : affiche un menu contextuel.</li> <li>***Compromis*** : colle.</li> <li>***XTerm*** : Sélectionne le texte.</li></ul> |
| ***Support de l'algorithme***                         | En mode ***Personnalisé***, cliquer sur le bouton à points de suspension pour sélectionner un ou plusieurs algorithmes ***Chiffrement***, ***Clé d'hôte***, ***Kex*** et/ou ***MAC***. |
| ***Taille minimale de la clé Diffie-Hellman***           | Taille minimale de la clé en bits.                                        |
| ***Ignorer le caractère de substitution***               | Ignorer ou non les caractères de substitution.                            |
| ***Activer les keepalives TCP***                     | Activer les keepalives TCP.                                          |
| ***Activer l'authentification API GSS***             | Activer l'authentification API GSS.                                  |
| ***Ignorer la configuration des variables d'environnement***           | Ignorer la configuration des variables d'environnement.                                |
| ***Activer la délégation des identifiants API GSS***      | Activer la délégation des identifiants API GSS.                            |
| ***Autoriser le transfert de l'agent d'authentification SSH*** | Autoriser le transfert de l'agent d'authentification SSH.                       |
| ***Désactiver l'algorithme de Nagle***                 | Désactiver l'algorithme de Nagle.                                       |
| ***Utiliser l'agent d'authentification SSH***              | Utiliser l'agent d'authentification SSH actuellement ouvert sur votre machine (y compris l'agent de clé SSH {{ fr.RDM }}). |
| ***Intervalle de ping***                             | Une commande est envoyée toutes les X secondes pour maintenir la connexion active.   |
| ***Chaîne de ping***                               | La chaîne qui est envoyée avec l'option ***Intervalle de ping***.    |
| ***Délai de collage***                               | Délai ajouté pour coller du texte.                                    |
| ***Variables d'environnement***                     | Définit les variables d'environnement à utiliser par le terminal.           |
