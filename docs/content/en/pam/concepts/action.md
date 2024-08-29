---
_schema: default
eleventyComputed:
  title: Actions
  description: >-
    These actions are performed through three different types: discovery, heartbeat, and password rotation.
---
To rotate a password, {{ en.DPAM }} must:
* Discover accounts on an identity provider and store those accounts securely.
* Compare known passwords with the current account passwords.
* Change account passwords and securely store the new passwords.

These ***actions*** are performed through three different types: discovery, heartbeat, and password rotation.

{% snippet, "badgeInfo" %}
While managed providers perform similar steps for password rotation, direct management of these actions is only possible when building {{ en.ANYID }} provider templates.
{% endsnippet %}
