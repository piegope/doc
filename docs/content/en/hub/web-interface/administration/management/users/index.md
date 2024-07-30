---
_schema: default
eleventyComputed:
  title: Users
  description: In the Users section, you can manage users and user settings.
---
In the ***Users*** section, you can manage users and user settings.

{% snippet, "badgeHelp" %}
Learn how to [add users](/hub/web-interface/administration/management/users/create-invite-users/) or [add an administrator](/hub/web-interface/administration/management/users/administrator-invite/).
{% endsnippet %}

![User settings](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2270.png)

## Set a user as owner

![Set as owner](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2273.png)

If you click on the ***Set as owner*** icon, you will be asked if you really want to change ownership from the current owner to this user. Click ***Yes*** to confirm.

![Set as owner confirmation message](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2271.png)

The owner has a crown icon next to their name and cannot be deleted.

![Owner icon](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2272.png)

{% snippet, "shieldInfo" %}
For security reasons, only current administrators can be set as owners.
{% endsnippet %}

## Edit a user

![Edit](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2274.png)

When editing a user, you can add a short description of the user, their roles and responsibilities, etc. You can also change some of what they are able to do within the hub.

In the ***User groups*** tab, you can assign them to one or more user groups with defined permissions and access.

![Edit settings](https://cdnweb.devolutions.net/docs/HUBB6010_2023_3.png)

<table><thead><tr><th><p>OPTION</p></th><th><p>DESCRIPTION</p></th></tr></thead><tbody><tr><td><p>Enable <a href="/workspace/workspace-browser-extension/">{{ en.WBEX }}</a></p></td><td><p>Allows the user to use the hub with {{ en.WBEX }}.</p></td></tr><tr><td><p>Enable the <a href="/workspace/workspace-apps/">{{ en.WAPPS }}</a></p></td><td><p>Allows the user to use the hub with {{ en.WAPPS }} {{ en.CTOOL }}.</p></td></tr><tr><td><p>Allow offline</p></td><td><p>Allows the user to use the hub as a data source in offline mode in {{ en.RDM }}.</p></td></tr><tr><td><p>Is administrator</p></td><td><p>Sets the user as an administrator of the hub. This option cannot be changed if the user is the owner of the hub (as seen in the image above).</p></td></tr><tr><td><p>Is enabled</p></td><td><p>Enables the user in the hub.</p></td></tr><tr><td><p><a href="/hub/web-interface/secure-messages/">Allow send messages</a></p></td><td><p>Select if the user is allowed to send messages with attachments, without attachments, or is not allowed to send messages.</p></td></tr><tr><td><p>User interface profile</p></td><td><p>Select the user interface profile between <em><strong>IT professional</strong></em>, <em><strong>Business user</strong></em>, or <em><strong>Default</strong></em>. This cannot only be changed when editing the user, not when creating them.</p></td></tr><tr><td><p>Tags</p></td><td><p><em><strong>External</strong></em> and <em><strong>Privileged Tags</strong></em> can be added when creating or editing users. They are useful for <em><strong>temporary users</strong></em>, such as <em><strong>contractors</strong></em>. An <em><strong>expiration date</strong></em> must be set.  <em><strong>Tags</strong></em> appear in the Account menu under User information and are displayed in {{ en.DHUB }} data sources in {{ en.RDM }}.</p></td></tr><tr><td><p>Expiration date</p></td><td><p>Set an <a href="/hub/web-interface/administration/management/users/#set-an-expiration-date-for-a-user">expiration date</a> for the user.</p></td></tr><tr><td><p><a href="/hub/kb/hub-business/how-to-articles/link-account/">Linked account </a></p></td><td><p>Link another account under the same user. </p></td></tr></tbody></table>

## Delete a user

![Delete](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2275.png)

If you click on the ***Delete*** icon, you will be asked if you really want to delete this user from this hub. Click ***Delete*** to confirm.

![Delete confirmation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2278.png)

{% snippet, "shieldInfo" %}
For security reasons, it is not possible to delete yourself nor the owner of the hub.
{% endsnippet %}

## Re-invite a user

![Re-invite user](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2276.png)

As soon as you click on this icon, the user is sent a new invitation email. They then have to open the hub via this invitation.

## Set an expiration date for a user

You can determine in advance when a user account should no longer be used. This is particularly useful for ***external*** and ***privileged*** users such as ***contractors***.

1. Select the ***user***.
2. Choose an ***expiration date***.

{% snippet, "badgeInfo" %}
A warning message is displayed to the user if the account expires in less than 24 hours.
{% endsnippet %}

3. Click ***Update*** to save.

![Expiration date](https://cdnweb.devolutions.net/docs/HUBB6001_2024_1.png)