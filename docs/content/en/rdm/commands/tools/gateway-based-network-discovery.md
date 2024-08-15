---
_schema: default
eleventyComputed:
  title: ' Network scan'
  description: >-
    Network Scan allows you to perform a network scan based on a predefined
    range of IP addresses to find sessions. 
  status:
  keywords:
---
***Network Scan*** allows you to perform a network scan based on a predefined range of IP addresses to find sessions. It can be accessed via the ***Tool-Network Scan*** menu.

Specify a scan range, then, once the scan is completed, select the sessions you wish to Connect, [Import](/rdm/commands/file/import/network-scan/), or [Select in navigation pane](/rdm/user-interface/navigation-pane/).

## **Scanning options**

<table><thead><tr><th><p><strong>OPTION</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th></tr></thead><tbody><tr><td><p>Resolve IP address</p></td><td><p>Attempts to resolve IP addresses from hostname or domain name.</p></td></tr><tr><td><p>Scan using ZeroConf</p></td><td><p>Sends a ping to every IP address before scanning, showing only those that respond. This should increase scanning speed.</p></td></tr><tr><td><p>Ignore existing sessions</p></td><td><p>Hides the sessions already present on the data source.</p></td></tr><tr><td><p>Scan Devolutions Gateway</p></td><td><p>Uses <a href="/dgw/overview/what-is-dgw/">Devolutions Gateway</a> to scan remote networks without a VPN. </p></td></tr></tbody></table>

### Disable Network scan

Network scan can be disabled by using [GPOs](/rdm/kb/rdm-windows/how-to-articles/group-policies/#disable-network-scan).

&nbsp;

&nbsp;