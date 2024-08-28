---
_schema: default
eleventyComputed:
  title: Point de terminaison du fournisseur d'identité
  description: >-
    Un point de terminaison du fournisseur d'identité est l'interface par laquelle un fournisseur se connecte à un fournisseur d'identité.
---
Un ***point de terminaison du fournisseur d'identité*** est l'interface par laquelle un fournisseur se connecte à un fournisseur d'identité. Pour les fournisseurs gérés, ces points de terminaison du fournisseur d'identité sont intégrés dans {{ fr.DPAM }}. Cependant, lors de la création de scripts d'action pour les fournisseurs {{ fr.ANYID }}, ils doivent être définis explicitement.

Les points de terminaison du fournisseur d'identité sont les points de connexion qu'un fournisseur utilise pour s'authentifier auprès d'un fournisseur d'identité. Un point de terminaison du fournisseur d'identité peut prendre diverses formes, telles qu'un nom d'hôte DNS pour un contrôleur de domaine Active Directory, une adresse IP pour un système d'exploitation Linux, ou une URL HTTP pour un point de terminaison d'API REST.
