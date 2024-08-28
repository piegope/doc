---
_schema: default
eleventyComputed:
  title: Action property
  description: >-
    An action property, sometimes referred to as an action parameter, is a property assigned to an action that allows information to be passed to the actions.
---
An ***action property***, sometimes referred to as an action parameter, is a property assigned to an action that allows information to be passed to the actions. Each action has a set of action properties, which can be either mandatory or optional, and these are generally categorized into two types: account properties and provider properties. Essentially, action properties function as parameters.

For example, a {{ en.DPAM }} provider must connect and authenticate to an identity provider. To achieve this, it typically requires a username and password. During the password rotation action, {{ en.DPAM }} would use a username and password as provider action properties to supply this information. Additionally, the identity provider may have user accounts that {{ en.DPAM }} needs to manage. To change account passwords for each user account on that provider, {{ en.DPAM }} would use an account action property.

Provider properties are action properties required to connect to the identity provider once per password rotation session, typically using an administrative account with permissions to enumerate accounts.

Account properties are action properties associated with individual accounts on an identity provider, such as username, password, and location.