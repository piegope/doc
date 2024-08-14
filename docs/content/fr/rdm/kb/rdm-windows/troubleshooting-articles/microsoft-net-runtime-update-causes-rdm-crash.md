---
---
_schema: default
eleventyComputed:
  title: La mise à jour du runtime Microsoft .NET provoque le crash de {{ fr.RDM }}
  description: >-
    Le runtime Microsoft .NET peut être mis à jour silencieusement en arrière-plan
    pendant que {{ fr.RDM }} est en cours d'exécution, ce qui peut provoquer le crash de l'application.
  status:
  keywords:
---
Le runtime Microsoft .NET peut être mis à jour silencieusement en arrière-plan pendant que {% var, "RDM" false %} est en cours d'exécution, ce qui peut provoquer le crash de l'application. Il s'agit d'un problème connu chez Microsoft, mais à ce jour, aucune solution n'a été mise en œuvre. Ce problème survient généralement après une mise à jour de sécurité mineure du runtime .NET, telle qu'une mise à niveau de .NET 8.0.7 à .NET 8.0.8.

La seule solution de contournement est de redémarrer {% var, "RDM" false %} lorsque le crash se produit.
---
