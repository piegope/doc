---
_schema: default
eleventyComputed:
  title: "{{ en.ANYID }} template"
  description: >-
    An {{ en.ANYID }} template is an {{ en.ANYID }}-specific set of instructions that {{ en.DPAM }} uses to build an {{ en.ANYID }} provider or propagation.
---
An ***{{ en.ANYID }} template*** is an {{ en.ANYID }}-specific set of instructions that {{ en.DPAM }} uses to build an {{ en.ANYID }} provider or propagation. These templates serve as manifests of instructions, containing details such as actions, action properties, and embedded action scripts that {{ en.DPAM }} uses to construct {{ en.ANYID }} providers or propagations.

Templates are created within {{ en.DVLS }} according to the specific configurations of the identity provider. This process includes setting up placeholders for identity provider endpoints, defining specific ports for connecting to the identity provider, and configuring other relevant action properties.