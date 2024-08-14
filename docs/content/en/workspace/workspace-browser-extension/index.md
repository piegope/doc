---
_schema: default
eleventyComputed:
  title: '{{ en.WBEX }}'
---
![!! logo](https://cdnweb.devolutions.net/images/projects/workspace/logos/workspace-color-shadow.svg)

The {{ en.WBEX }} is a web browser password plugin used in conjunction with {{ en.RDM }}, {{ en.DVLS }}, and {{ en.DHUB }}, which allows users to securely inject passwords into websites using credentials stored in their {{ en.VLT }}s.

It gives system administrators full control over the management of passwords, without affecting the user's productivity.

{% youtube, "vQ6qNSCWcd0?si=mKYG91rpFQZKXPSM" %}

<table>
    <thead>
      <tr>
        <th>
          <p><img src="https://cdnweb.devolutions.net/images/projects/remote-desktop-manager/logos/remote-desktop-manager-color-shadow.svg" alt="!! logo" /><br /><br />Centralize, manage, and secure remote connections {width=358px}</p>
        </th>
        <th>
          <p><img src="https://cdnweb.devolutions.net/images/projects/server/logos/server-color-shadow.svg" alt="!! logo" /><br /><br />Secure, manage, and monitor access to privileged accounts {width=358px}</p>
        </th>
        <th>
          <p><img src="https://cdnweb.devolutions.net/images/projects/devolutions-hub/devolutions-hub-color-shadow.svg" alt="!! logo" /><br /><br />Store and manage business-user passwords {width=358px}</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>{{ en.RDM }} centralizes all remote connections on a single platform that is securely shared between users and across the entire team.</p>
        </td>
        <td>
          <p>{{ en.DVLS }} allows you to control access to privileged accounts and manage remote sessions through a secure self-hosted solution, either locally or on your private cloud (Azure, for example).</p>
        </td>
        <td>
          <p>{{ en.DHUB }} is a secure and cloud-based password manager for teams.</p>
        </td>
      </tr>
    </tbody>
  </table>

{% snippet, "shieldWarning" %}
Advanced users, other browser extensions, or even JavaScript injection can all result in the password being read from the password edit control, even if it displays dots instead of the password. Any use of an external browser must be carefully weighed against your security requirements.
{% endsnippet %}