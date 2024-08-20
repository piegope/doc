---
_schema: default
eleventyComputed:
  title: Microsoft .NET runtime update causes {{ fr.RDM }} to crash
  description: >-
    Le runtime Microsoft .NET peut être mis à jour silencieusement en arrière-plan pendant que {{ fr.RDM }} est en cours d'exécution, ce qui peut provoquer des plantages aléatoires de l'application.
  status:
  keywords:
---
Le runtime Microsoft .NET peut être mis à jour silencieusement en arrière-plan par le service Windows Update pendant que {% var, "RDM" false %} est en cours d'exécution, ce qui peut provoquer des plantages aléatoires de l'application. Il s'agit d'un <a href="https://github.com/dotnet/runtime/issues/60144" target="_blank" rel="noopener">problème connu de Microsoft</a>, mais à ce jour, aucune solution n'a été mise en œuvre. Ce problème survient généralement après une mise à jour de sécurité mineure du runtime .NET, telle qu'une mise à niveau de .NET 8.0.7 à .NET 8.0.8.

La seule solution de contournement est de redémarrer {% var, "RDM" false %} lorsque le plantage se produit.

### Analyse détaillée

Les applications telles que {% var, "RDM" false %} peuvent rencontrer des plantages lors des mises à jour du runtime .NET poussées via Windows Update. Cela se produit parce que le processus de mise à jour supprime la version précédente du runtime que l'application utilise actuellement. Lorsque l'application essaie de charger une nouvelle assembly après que le runtime a été mis à jour en arrière-plan, elle échoue car les fichiers requis ont été supprimés.

Lors de la mise à jour manuelle du runtime .NET à l'aide de l'installateur, l'ancienne version du runtime n'est généralement pas supprimée immédiatement. Cela évite le problème des assemblies manquantes car l'application peut toujours accéder aux fichiers nécessaires de la version précédente. Cependant, lorsque la mise à jour est effectuée via Windows Update, l'ancienne version du runtime est supprimée, ce qui peut entraîner des plantages.

{% snippet, "badgeHelp" %}Pour une analyse détaillée complète de ce problème, voir <a href="https://github.com/dotnet/runtime/issues/60144#issuecomment-2289137821" target="_blank" rel="noopener">ce commentaire</a> sur le problème GitHub associé.{% endsnippet %}
