---
eleventyComputed:
  title: Appliquer les politiques
  description: Les modèles d'administration facilitent la gestion des paramètres de politique basés sur le registre, qui peuvent être appliqués à la configuration de l'ordinateur et/ou de l'utilisateur. La stratégie de groupe (GPO) est un outil qui permet à votre organisation d'appliquer des paramètres globaux sur tous les ordinateurs, tout en renforçant la sécurité de {{ fr.RDM }}.
  keywords:
  - silent
  - unattended
  - gpo
  - administrative template
  - policy
---
Les modèles d'administration facilitent la gestion des paramètres de politique basés sur le registre, qui peuvent être appliqués à la configuration de l'ordinateur et/ou de l'utilisateur. La stratégie de groupe (GPO) est un outil qui permet à votre organisation d'appliquer des paramètres globaux sur tous les ordinateurs, tout en renforçant la sécurité de {{ fr.RDM }}.

{% snippet, "badgeInfo" %}
Les modèles d'administration sont des paramètres de registre appliqués par les domaines. Ils contiennent des clés de registre qui peuvent également être définies sur des ordinateurs qui ne sont pas joints à des domaines. Dans ce cas, cependant, des listes de contrôle d'accès appropriées (ACL) doivent être mises en place pour empêcher les utilisateurs de modifier les paramètres du registre. Reportez-vous aux tableaux ci-dessous pour trouver la clé de registre pour chaque paramètre de politique.
{% endsnippet %}

Pour en savoir plus sur la façon de déployer les modèles d'administration {{ fr.RDM }} sur votre domaine, veuillez vous référer à la documentation Microsoft.

## Lister les GPOs {{ fr.RDM }} dans l'Éditeur de stratégie de groupe locale
{% snippet, "badgeInfo" %}
Pour l'instant, le support supplémentaire est exclusivement pour les politiques nécessitant une entrée numérique supérieure à 0-1 (ex : ForceLockOnIdle).
{% endsnippet %}

{{ fr.RDM }} inclut un fichier de modèle d'administration (.admx), qui décrit les politiques proposées. Vous le trouverez dans le sous-dossier des politiques. Avant de pouvoir gérer les GPOs dans {{ fr.RDM }}, vous devez d'abord les lister dans l'Éditeur de stratégie de groupe locale. Voici les étapes :

1. Aller dans votre sous-dossier de politiques. Par défaut, le chemin est **C:\Program Files (x86)\Devolutions\Remote Desktop Manager\Policies**.
1. Copier le fichier Devolutions.admx.
1. Aller dans **C:\Windows\PolicyDefinitions**.
1. Coller le fichier Devolutions.admx à la racine de **C:\Windows\PolicyDefinitions**.
1. Aller dans **C:\Program Files\Devolutions\Remote Desktop Manager\Policies\en-US**.
1. Copier le fichier Devolutions.adml.
1. Coller le fichier Devolutions.adml dans **C:\Windows\PolicyDefinitions\en-US**.
1. Ouvrir votre Éditeur de stratégie de groupe et aller dans ***Configuration de l'ordinateur*** – ***Modèles d'administration*** – ***Devolutions*** – ***{{ fr.RDM }}*** – ***Sessions***.
1. Dans le dossier ***Sessions***, localiser la politique spécifique que vous souhaitez modifier.
1. Clic droit sur la politique spécifique, la modifier en conséquence, et enregistrer.

Si {{ fr.RDM }} est ouvert lorsque vous effectuez ce changement, vous devrez le redémarrer pour que la nouvelle politique prenne effet.

## Politiques

### Général

#### Désactiver les menus d'exportation {{ fr.VLT }} dans les menus d'exportation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExportVaultMenus`

---

#### Désactiver les fonctionnalités nécessitant une connexion Internet
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\NoInternetConnection`

---

#### Désactiver l'intégration
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnboarding`

---

#### Désactiver la vérification automatique des mises à jour de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoUpdate`

---

#### Désactiver les menus de mise à jour de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUpdate`

---

#### Désactiver le lancement des entrées au démarrage
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLaunchAtStartup`

---

#### Désactiver le message d'expiration de la licence dans l'Aperçu
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLicenseExpirationMessage`

---

#### Désactiver la collecte de données de télémétrie
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAnalytics`

---

#### Désactiver les Contacts système, Macros et VPNs dans le {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableGlobalVaultInUserVault`

---

#### Activer l'accrochage de l'API de la console distante PowerShell
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnablePowerShellRemoteConsoleHooking`

---

#### Forcer la fermeture de l'application en cas d'inactivité
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCloseOnIdle`

---

#### Forcer les paramètres de proxy au Système
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSystemProxy`

---

#### Forcer l'actualisation avant de modifier une entrée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeEditEntry`

---

#### Forcer le chargement du fichier de configuration actuel
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceCurrentConfigurationLoading`

---

#### Forcer le chargement du fichier default.cfg
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDefaultConfigurationLoading`

---

#### Forcer la mise à jour de toutes les mises à jour majeures
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingMajorUpdate`

---

#### Forcer la mise à jour de toutes les mises à jour
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdate`

---

#### Forcer la mise à jour de toutes les mises à jour et bêta
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingAllUpdateAndBeta`

---

#### Forcer la mise à jour une fois par mois
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUpdatingOnceAMonth`

---

### Sécurité

#### Appliquer le modèle de mot de passe forcé dans l'outil Générateur de mots de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ApplyForcedPasswordTemplateInPasswordGeneratorTool`

---

#### Vérifier la révocation du certificat serveur
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\CheckForServerCertificateRevocation`

---

#### Désactiver l'exécution de scripts via le terminal
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableExecuteScriptsViaTerminal`

---

#### Désactiver l'exportation du {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableUserVaultExport`

---

#### Désactiver le partage de lecteur local des entrées RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableLocalDriveSharing`

---

#### Désactiver le masquage du mot de passe dans Voir le mot de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMaskPasswordInViewPassword`

---

#### Désactiver les Paramètres de Mon Compte
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyAccountSettings`

---

#### Désactiver Ma Clé Privée Personnelle
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalPrivateKey`

---

#### Désactiver Mon Compte Privilégié
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPrivilegedAccount`

---

#### Désactiver la lecture/écriture en Mode Hors Ligne
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableReadWriteOffline`

---

#### Désactiver le mode de mise en cache
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCaching`

---

#### Désactiver le Mode Hors Ligne
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOffline`

---

#### Désactiver le remplacement des paramètres spécifiques du disque dur pour les entrées RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRDPHardDrivesSpecificSettings`

---

#### Désactiver le Générateur de mots de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisablePasswordGenerator`

---

#### Désactiver l'option Révéler le mot de passe dans les Paramètres de Mon Compte pour tous les utilisateurs, y compris les administrateurs
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPasswordInMyAccountSettings`

---

#### Activer la cryptographie DPAPI sur les fichiers locaux
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableDPAPICryptographyOnLocalFiles`

---

#### Forcer un mode d'authentification à deux facteurs de l'application (vérifier contre toutes les méthodes configurées ou demander une sélection à l'utilisation)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\Application2faMode`

---

#### Forcer le verrouillage de l'application en veille
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnStandby`

---

#### Forcer le verrouillage de l'application en cas d'inactivité
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnIdle`

---

#### Forcer le verrouillage de l'application lors de la minimisation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnMinimize`

---

#### Forcer le verrouillage de l'application lorsque Windows se verrouille
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLockOnWindowsLock`

---

#### Forcer le mot de passe de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalApplicationPassword`

---

#### Forcer la suppression du cache à la fermeture (Chrome)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceClearCacheOnCloseChrome`

---

#### Forcer la suppression du cache à la fermeture (MSEdge)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceClearCacheOnCloseMSEdge`

---

#### Forcer l'authentification multifacteur à la connexion de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA`

---

#### Forcer l'utilisation du bureau sécurisé
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceSecureDesktop`

---

#### Forcer l'enregistrement local des Paramètres de Mon Compte
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLocalMyAccountSettings`

---

#### Forcer l'utilisateur à toujours être invité à fournir ses identifiants lors du lancement de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceLogin`

---

#### Forcer l'utilisateur à toujours être invité à fournir sa phrase secrète lors de la connexion à une source de données protégée par un fournisseur de sécurité à phrase secrète partagée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\AlwaysPromptForPassphrase`

---

#### Forcer l'authentification Windows Hello à la connexion de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsHello`

---

#### Ignorer les erreurs de certification de l'application
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\IgnoreApplicationCertificateErrors`

---

#### Mode d'authentification à deux facteurs LastPass 1 = Ne pas faire confiance à cet appareil 2 = Faire confiance à cet appareil 3 = Faire confiance à cet appareil à la fermeture
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LastPass2FAMode`

---

#### Supprimer la possibilité de voir les mots de passe entièrement
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceHidePasswordForAdministrators`

---

#### Utiliser les identifiants Windows comme mot de passe de l'application et forcer le nom d'utilisateur et le domaine actuellement connectés (sauf si un mot de passe d'application est déjà défini)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceWindowsCredentialsAndCurrentlyLoggedOnUsernameAndDomain`

---

### Sessions

#### Permettre à l'utilisateur de se connecter même après l'expiration de l'entrée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableConnectionAfterExpiration`

---

#### Confirmer l'ouverture de plusieurs sessions si le nombre d'ouvertures est supérieur à
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ConfirmSessionsOpenOnCountGreaterThan`

---

#### Désactiver tous les événements de session
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceDisableAllSessionEvents`

---

#### Désactiver l'importation dans {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportInPrivateVault`

---

#### Désactiver Révéler le mot de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableRevealPassword`

---

#### Désactiver la création d'Add-on et le Gestionnaire d'Add-on. Obsolète, utiliser DisableAddOnEntries et DisableAddOnManager à la place
`Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOn`

---

#### Désactiver la création d'entrées Add-on
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnEntries`

---

#### Désactiver le Gestionnaire d'Add-on
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAddOnManager`

---

#### Désactiver l'édition d'image personnalisée dans la configuration de session
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableCustomImage`

---

#### Désactiver l'option de secousse de la souris
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMouseJiggler`

---

#### Désactiver la fonctionnalité d'enregistrement de session
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSessionRecording`

---

#### Désactiver le scan réseau
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableNetworkScan`

---

#### Désactiver le remplissage automatique des informations d'identification de session Web et Web (héritage) après une minute
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableWebsiteCredentialAutofillAfterDelay`

---

#### Activer l'accrochage de l'API RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\EnableRDPHooking`

---

#### Forcer l'actualisation avant de copier le mot de passe/nom d'utilisateur/domaine
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeCopyFromEntry`

---

#### Forcer l'actualisation avant d'exécuter une entrée
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeExecuteEntry`

---

#### Forcer l'actualisation avant de voir le mot de passe
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceRefreshBeforeViewPassword`

---

#### Forcer la migration des Paramètres Spécifiques à l'Utilisateur
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceUserSpecificSettingsMigration`

---

#### Masquer le port personnalisé dans les sessions RDP
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HidePortInRDP`

---

#### Autoriser uniquement la création d'identifiants à l'intérieur du {{ fr.UVLT }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\OnlyAllowCredentialsInPrivateVault`

---

#### Sélectionner la version PowerShell par défaut
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultPowershellVersion`

---

### Interface utilisateur

#### Tableau de bord Mise au point automatique de l'élément lors de la sélection de l'onglet
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusItemOnTabSelect`

---

#### Tableau de bord Mise au point automatique de l'onglet lors de la sélection de l'élément
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardAutoFocusTabOnItemSelect`

---

#### Désactiver tous les outils d'application locaux comme le Visualiseur d'événements ou IIS
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableApplicationTools`

---

#### Tableau de bord Masquer tous les panneaux d'enregistrement
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllRecordingsPanels`

---

#### Désactiver le glisser-déposer dans la liste des connexions
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableDragAndDrop`

---

#### Désactiver les options d'importation et d'exportation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableImportExportOptions`

---

#### Désactiver Mes Identifiants Personnels
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableMyPersonalCredentials`

---

#### Désactiver la connexion rapide
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableQuickConnect`

---

#### Désactiver la fonctionnalité d'envoi de message dans le tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSendMessageInDashboard`

#### Désactiver le menu À propos
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAbout`

---

#### Désactiver le Gestionnaire d'Add-on dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsAddOnManager`

---

#### Désactiver la mise au point automatique du Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableAutoFocusDashboard`

---

#### Désactiver la Console Chocolatey dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsChocolateyConsole`

---

#### Désactiver l'utilisation de {{ fr.DA }}
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOnlineAccount`

---

#### Désactiver l'invite de rapport d'erreur
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableSendErrorReportDialog`

---

#### Désactiver le Gestionnaire d'Extensions dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsExtensionManager`

---

#### Désactiver le menu Aide
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableHelp`

---

#### Désactiver le Gestionnaire RDP/RemoteApp local dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsLocalRDPRemoteAppManager`

---

#### Désactiver le menu Fichier – Sources de données
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableFileDataSources`

---

#### Désactiver le menu Fichier – Paramètres
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableFileOptions`

---

#### Désactiver l'option Ouvrir un nouveau Bureau à distance dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsOpenNewRemoteDesktop`

---

#### Désactiver l'option d'ouverture avec paramètres
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableOpenWithParameters`

---

#### Désactiver l'applet de commande PowerShell {{ fr.RDM }} dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsPowershellRDMCmdlet`

---

#### Désactiver le {{ fr.RDMA }} dans le menu Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsRDMAgent`

---

#### Désactiver l'onglet et le menu Ruban Outils
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableToolsMenu`

---

#### Désactiver le Volet supérieur (Ruban/Barre de menu)
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DisableTopPane`

---

#### Forcer le chargement de l'arborescence principale avec tous les nœuds réduits au lancement
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceTreeViewCollapseAtLaunch`

---

#### Masquer le panneau Actif situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllAssetPanels`

---

#### Masquer le panneau Pièces jointes situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllAttachmentsPanels`

---

#### Masquer le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideDashboard`

---

#### Masquer le panneau Documentation situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllDocumentationPanels`

---

#### Masquer le panneau Entrées situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllEntriesPanels`

---

#### Masquer le panneau Journaux situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllLogsPanels`

---

#### Masquer le panneau Outils de MacroScript situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllMacroScriptToolsPanels`

---

#### Masquer le panneau Outils de gestion situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllManagementToolsPanels`

---

#### Masquer le Volet de navigation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideNavigationPane`

---

#### Masquer le panneau Aperçu situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllOverviewPanels`

---

#### Masquer le panneau Liste des mots de passe situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllPasswordListPanels`

---

#### Masquer le panneau Permissions situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllPermissionsPanels`

---

#### Masquer le panneau Référencé par situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllReferencedByPanels`

---

#### Masquer le panneau Sous-entrées situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllSubConnectionsPanels`

---

#### Masquer le panneau Résumé situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllSummaryPanels`

---

#### Masquer le panneau Tâche situé dans le Tableau de bord
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DashboardHideAllTaskPanels`

---

#### Masquer la Page des nouveautés
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\HideWhatsNewPage`

---

#### Verrouiller le Volet de navigation
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\LockNavigationPane`

---

#### Sélectionner l'onglet par défaut pour le {{ fr.NPANE }} au lancement
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\DefaultNavigationPaneTab`

---

#### Emplacement par défaut de SQLite
`%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\SQLiteDefaultLocation`

### Notes
Note 1 : Pour chaque clé de registre correspondant à un GPO, le **%Root%** peut être soit **HKEY_LOCAL_MACHINE** soit **HKEY_CURRENT_USER**, selon la manière dont vous souhaitez appliquer la politique. Veuillez vous référer à [la documentation en ligne de Microsoft](https://learn.microsoft.com/en-us/troubleshoot/windows-server/performance/windows-registry-advanced-users) pour faire le meilleur choix en fonction des besoins de votre organisation.
