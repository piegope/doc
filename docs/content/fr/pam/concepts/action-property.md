---
_schema: défaut
eleventyComputed:
  title: Propriété d'action
  description: >-
    Une propriété d'action, parfois appelée paramètre d'action, est une propriété attribuée à une action qui permet de transmettre des informations aux actions.
---
Une ***propriété d'action***, parfois appelée paramètre d'action, est une propriété attribuée à une action qui permet de transmettre des informations aux actions. Chaque action possède un ensemble de propriétés d'action, qui peuvent être obligatoires ou facultatives, et celles-ci sont généralement classées en deux types : propriétés de compte et propriétés de fournisseur. Essentiellement, les propriétés d'action fonctionnent comme des paramètres.

Par exemple, un fournisseur {{ fr.DPAM }} doit se connecter et s'authentifier à un fournisseur d'identité. Pour y parvenir, il nécessite généralement un nom d'utilisateur et un mot de passe. Lors de l'action de rotation de mot de passe, {{ fr.DPAM }} utiliserait un nom d'utilisateur et un mot de passe comme propriétés d'action de fournisseur pour fournir cette information. De plus, le fournisseur d'identité peut avoir des comptes d'utilisateur que {{ fr.DPAM }} doit gérer. Pour changer les mots de passe des comptes pour chaque compte utilisateur sur ce fournisseur, {{ fr.DPAM }} utiliserait une propriété d'action de compte.

Les propriétés de fournisseur sont des propriétés d'action requises pour se connecter au fournisseur d'identité une fois par session de rotation de mot de passe, généralement en utilisant un compte administratif avec des permissions pour énumérer les comptes.

Les propriétés de compte sont des propriétés d'action associées à des comptes individuels sur un fournisseur d'identité, telles que le nom d'utilisateur, le mot de passe et l'emplacement.
