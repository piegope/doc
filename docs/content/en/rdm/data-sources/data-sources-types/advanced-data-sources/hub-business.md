---
_schema: default
eleventyComputed:
  title: '{{ en.DHUBB }}'
  description: >-
    {{ en.DHUBB }} is for businesses who need to share passwords and credentials
    within their organization.
---
{% youtube 'wI4Jn3zLC8U' %}

{{ en.DHUBB }} is for businesses who need to share passwords and credentials within their organization.

Please consult our [website](https://devolutions.net/password-hub/) for more information on this service.

{% snippet, "badgeInfo" %}
Start your [free {{ en.DHUBB }} trial](https://devolutions.net/password-hub/business/sign-up) today!
{% endsnippet %}

## Settings

### General

Enter the general information of the [data source](/rdm/concepts/basic-concepts/data-sources/).

![General tab](https://cdnweb.devolutions.net/docs/HUBB6004_2024_2.png)

<table>
    <thead>
      <tr>
        <th>
          <p>OPTION</p>
        </th>
        <th>
          <p>DESCRIPTION</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>Name</p>
        </td>
        <td>
          <p>Name of the data source.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Email</p>
        </td>
        <td>
          <p>Your <a href="https://portal.devolutions.com/">Devolutions account</a> email address.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Host</p>
        </td>
        <td>
          <p>Copy in the <em><strong>Host</strong></em> your Devolutions Hub Business URL (ex: https://windjammer.devolutions.app/) or click on the 3 dots to get a drop-down list to select from.</p>
        </td>
      </tr>
    </tbody>
  </table>

### VPN

Open a VPN to access your data prior to connecting to your {{ en.DHUB }}. ![VPN tab](https://cdnweb.devolutions.net/docs/HUBB6001_2024_2.png)

<table>
    <thead>
      <tr>
        <th>
          <p>OPTION</p>
        </th>
        <th>
          <p>DESCRIPTION</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>Type</p>
        </td>
        <td>
          <p>Select between <em><strong>None</strong></em> or <em><strong>On first connect</strong></em>.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>RDM File</p>
        </td>
        <td>
          <p>Open a <em><strong>VPN entry type</strong></em> from a <em><strong>RDM file</strong></em> before connecting to the datasource.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Override credentials</p>
        </td>
        <td>
          <p>Ovverride credentials such as <em><strong>Username, Domain</strong></em>, and <em><strong>Password</strong></em>. </p>
        </td>
      </tr>
    </tbody>
  </table>

### PowerShell

Enter the application information. [Devolutions.PowerShell module](/powershell/overview/what-is-powershell/)([RDM cmdlets](/rdm/commands/tools/tools/powershell/)) leverages the application information for authentication, enabling seamless login without user intervention (i.e. web page opening).

![PowerShell tab](https://cdnweb.devolutions.net/docs/HUBB6005_2024_2.png)

<table>
    <thead>
      <tr>
        <th>
          <p>OPTION</p>
        </th>
        <th>
          <p>DESCRIPTION</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>Tenant ID</p>
        </td>
        <td>
          <p>Enter the <em><strong>Tenant ID</strong></em>.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Password</p>
        </td>
        <td>
          <p>Enter the <em><strong>Password</strong></em>.</p>
        </td>
      </tr>
    </tbody>
  </table>

### Advanced

These advanced settings allow to configure automatic refresh intervals for data sources, set a prompt to refresh all vaults upon startup, define a maximum file size limit for documents and attachments, and specify the timeout duration for HTTP requests.<br>![Advanced tab](https://cdnweb.devolutions.net/docs/HUBB6006_2024_2.png)

<table>
    <thead>
      <tr>
        <th>
          <p>OPTION</p>
        </th>
        <th>
          <p>DESCRIPTION</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <p>Auto refresh</p>
        </td>
        <td>
          <p>Select the time interval to automatically refresh the date source.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Prompt refresh all vault on startup</p>
        </td>
        <td>
          <p>Prompt refresh all <a href="/rdm/concepts/basic-concepts/vaults/">{% var, "VLT" false %}</a> on startup.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Maximum file size (MB)</p>
        </td>
        <td>
          <p>Choose the <em><strong>maximum file size (MB)</strong></em> to apply to <em><strong>documents</strong></em> and <em><strong>attachments</strong></em>.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Http request timeout </p>
        </td>
        <td>
          <p>Select the time interval to the <em><strong>Http request timeout</strong></em>.</p>
        </td>
      </tr>
    </tbody>
  </table>