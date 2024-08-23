---
eleventyComputed:
  title: Qu'est-ce que SHA-256 ?
  description: La famille des algorithmes de hachage sécurisé (SHA) comprend plusieurs fonctions de hachage cryptographique, dont SHA-256 est une variante largement utilisée.
---
La famille des algorithmes de hachage sécurisé (SHA) comprend plusieurs fonctions de hachage cryptographique, dont SHA-256 est une variante largement utilisée. Les hachages cryptographiques agissent comme des signatures numériques pour les données, permettant de comparer de grands ensembles de données par leurs valeurs de hachage plutôt que par leur contenu complet. Cette méthode est similaire à l'utilisation des empreintes digitales pour l'identification : chaque ensemble de données a un hachage unique, et même une légère modification des données change la valeur du hachage.

SHA-256 génère un hachage distinctif de taille fixe de 256 bits (32 octets), fonctionnant comme un processus unidirectionnel qui le rend excellent pour les vérifications d'intégrité des données, les défis d'authentification, les mesures anti-sabotage, les signatures numériques et les applications de blockchain.

Par exemple, lors du téléchargement d'applications comme celles de Devolutions, SHA-256 aide à vérifier que les données reçues correspondent à l'original, garantissant qu'elles n'ont pas été altérées en raison d'erreurs réseau ou d'attaques de logiciels malveillants. Pour vérifier le hachage d'un fichier, cliquer simplement sur l'icône SHA-256 sur la page de téléchargement du site Web de Devolutions.

Pour des conseils supplémentaires sur la manière d'obtenir le hachage SHA-256 d'un fichier, se référer à la documentation de Microsoft sur la commande [Get-FileHash](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.2). Voici comment l'utiliser :

```powershell
Get-FileHash C:\Users\user1\Downloads\Setup.RemoteDesktopManager.exe -Algorithm SHA256 | Format-List.
```

Cette commande fournit une sortie structurée de la valeur de hachage, facilitant la vérification de l'intégrité de votre fichier.
