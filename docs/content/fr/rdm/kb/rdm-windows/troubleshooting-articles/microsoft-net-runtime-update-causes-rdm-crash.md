---
_schema: default
eleventyComputed:
  title: Microsoft .NET runtime update causes {{ fr.RDM }} to crash
  description: >-
    Le runtime Microsoft .NET peut être mis à jour silencieusement en arrière-plan pendant que {{ fr.RDM }} est en cours d'exécution, ce qui peut provoquer le plantage de l'application.
  status:
  keywords:
---
Le runtime Microsoft .NET peut être mis à jour silencieusement en arrière-plan pendant que {% var, "RDM" false %} est en cours d'exécution, ce qui peut provoquer le plantage de l'application ([DllNotFoundException after .NET 5 in-place update](https://github.com/dotnet/runtime/issues/60144)). Il s'agit d'un problème connu chez Microsoft, mais à ce jour, aucune solution n'a été mise en œuvre. Ce problème survient généralement après une mise à jour de sécurité mineure du runtime .NET, telle qu'une mise à niveau de .NET 8.0.7 à .NET 8.0.8.

La seule solution de contournement est de redémarrer {% var, "RDM" false %} lorsque le plantage se produit.
