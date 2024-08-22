---
_schema: default
eleventyComputed:
  title: '{{ fr.DGW_STANDALONE }} configuration'
  description:
---
{{ fr.DGW_STANDALONE }} est un serveur relais open-source gratuit offrant un accès RDP, SSH, Telnet, VNC et ARD via une interface web autonome. Il est possible de le protéger avec une simple combinaison nom d'utilisateur/mot de passe ou de rendre la passerelle disponible via une intégration de tunnel ngrok.

{% youtube '0NsNgxPt9qU' %}

## Configuration

1. Télécharger l'[installateur](https://devolutions.net/gateway/).
2. Exécuter l'installateur et cliquer sur ***Suivant***.<br> ![Next](https://cdnweb.devolutions.net/docs/HUBB0010_2024_1.png)
3. Une fois le chemin d'installation souhaité sélectionné, cliquer sur ***Suivant***.<br> ![Destination Folder](https://cdnweb.devolutions.net/docs/HUBB0011_2024_1.png)
4. Activer l'***interface web de la passerelle***.<br> ![Gateway web interface](https://cdnweb.devolutions.net/docs/DGW0007_2024_1.png) {% snippet, "badgeInfo" %}
         Lire plus sur l'[option ngrok](#ngrok).
         {% endsnippet %}
5. Cliquer sur ***Suivant***.
6. Changer les ***Ports*** à la valeur souhaitée et cliquer sur ***Suivant***.<br> ![Listeners](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png) {% snippet, "badgeInfo" %}
         Les ports par défaut HTTP(S) et TCP sont respectivement 7171 et 8181, mais peuvent être modifiés.
         {% endsnippet %}
7. Saisir l'***URL externe*** et cliquer sur ***Suivant***.<br> ![Access URI](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)

* Si un certificat auto-signé ou l'option ngrok n'ont **pas** été choisis, l'écran pour importer le certificat SSL sera présenté. La ***Source du certificat*** peut être ***Externe*** (deux fichiers) ou ***Système*** (le [magasin de certificats Windows](/dgw/kb/use-windows-certificate-store/)).
  * ***Externe*** : Les formats requis sont affichés dans la fenêtre de dialogue.
  * ***Système*** : L'emplacement et la méthode (c'est-à-dire ***Recherche par empreinte***) doivent être choisis. ![External Certificate](https://cdnweb.devolutions.net/docs/HUBB0015_2024_1.png) ![System Certificate](https://cdnweb.devolutions.net/docs/DGW0010_2024_1.png) {% snippet, "shieldCaution" %}
           Si un ***Utilisateur par défaut*** n'est pas créé, la page web de {{ fr.DGW_STANDALONE }} sera accessible anonymement.
           {% endsnippet %}

8. Saisir les identifiants pour l'***Utilisateur par défaut*** et cliquer sur ***Suivant***.<br> ![Default User](https://cdnweb.devolutions.net/docs/DGW0008_2024_1.png)
9. Cet écran montre un résumé des chemins/configurations actuels. Il est possible de revenir en arrière et de les modifier. Si les paramètres sont corrects, cliquer sur ***Suivant***.<br> ![Gateway setup summary](https://cdnweb.devolutions.net/docs/HUBB0017_2024_1.png)
10. Cliquer sur ***Installer***.<br> ![Install button](https://cdnweb.devolutions.net/docs/HUBB0018_2024_1.png)
11. Cliquer sur ***Terminer*** lorsque l'installation est terminée.<br> ![Finish button](https://cdnweb.devolutions.net/docs/HUBB0019_2024_1.png) {% snippet, "badgeInfo" %}
           Une fois installé, la page web de {{ fr.DGW_STANDALONE }} s'ouvrira automatiquement (domaine statique ngrok ou FQDN). Lire plus à ce sujet dans la section [page web](#devolutions-gateway-standalone-web-page).
           {% endsnippet %}

### Page web de {{ fr.DGW_STANDALONE }}

Ici, vous trouverez une liste de vos sessions sur le côté gauche, et au milieu, une boîte de connexion pour ouvrir une nouvelle connexion.<br> ![web page](https://cdnweb.devolutions.net/docs/DGW0009_2024_1.png)

1. Se connecter à la page web (si un ***Utilisateur par défaut*** a été créé à l'étape 8 de la [Configuration](#configuration)).
2. Sélectionner le protocole.
3. Entrer le nom d'hôte et les identifiants. {% snippet, "badgeInfo" %}
         Pour les connexions RDP, cliquer sur ***Plus de paramètres +*** pour éventuellement définir la ***Taille de l'écran***, l'***URL du serveur KDC***, ou un ***Blob de pré-connexion***.
         {% endsnippet %}
4. Cliquer sur ***Connecter la session***.

### ngrok

{% snippet, "badgeInfo" %}
Activer à la fois ngrok et l'interface web désactivera l'option de générer un certificat HTTPS auto-signé car il utilisera le certificat SSL fourni par ngrok. De plus, l'installateur ne montrera pas les options pour configurer les ports.
{% endsnippet %}

* Utiliser ngrok et l'accès client natif nécessite un abonnement ngrok. Utiliser la version gratuite donne toujours accès à l'interface web et à RDP, SSH ou Telnet vers des points d'accès distants.
* La capacité de tunnel ngrok est incluse dans {{ fr.DGW }}, télécharger et lancer manuellement un tunnel avec *ngrok.exe* n'autorisera pas {{ fr.DGW }} à démarrer.
* Lire plus sur [ngrok](https://ngrok.com/docs/).
