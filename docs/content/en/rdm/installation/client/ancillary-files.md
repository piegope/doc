---
_schema: default
eleventyComputed:
  title: Ancillary files
  description: >-
    {{ en.RDM }} generates ancillary files on your workstation. The table below
    lists out an example of ancillary files and their locations.
---
{{ en.RDM }} generates ancillary files on your workstation. The table below lists out an example of ancillary files and their locations.

As described in [Configuration file location](/rdm/windows/installation/client/configuration-file-location/), the default path for most of these files are customizable. For this reason, we use the \[CONFIG\] token in this documentation to denote when a file is stored in a configuration folder that can be relocated, or the \[PROFILE\] token to indicate that they are stored in the local profile. By default, these point to the same exact folder. The only method to separate them is by using a customized configuration.

Since you can also deploy on a portable device, sometimes known as using the XCOPY deployment model, we will use the \[INSTALLDIR\] token to indicate that the file is in the same location as {{ en.RDM }}.

The Override Source column indicates if an available mechanism can relocate the files of that category elsewhere.

## Summary

<table><thead><tr><th><p><strong>FILE(S)</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th><th><p><strong>LOCATION</strong></p></th><th><p><strong>OVERRIDE SOURCE</strong></p></th></tr></thead><tbody><tr><td><p>Configuration File(s) (<em>.cfg</em>, .ext)</p></td><td><p>Contain(s) {% var, "RDM" false %}current configurations.</p></td><td><p>[CONFIG]</p></td><td><p>None</p></td></tr><tr><td><p>Data File(s) (<em>.xml</em>, <em>.db</em>)</p></td><td><p>Contain(s) {% var, "RDM" false %}data sources.</p></td><td><p>[CONFIG] or custom path.</p></td><td><p>None</p></td></tr><tr><td><p>Default Settings</p></td><td><p>Contain {% var, "RDM" false %} default settings.</p></td><td><p>[CONFIG]</p></td><td><p>Data source settings (System Settings)</p></td></tr><tr><td><p>Encryption (<em>.enc</em>, <em>.enb</em>)</p></td><td><p><strong>RemoteDesktopManager.enc</strong> contains the encryption key used to encrypt sensitive options. <strong>RemoteDesktopManager.enb</strong> is a backup of that file.</p></td><td><p>[CONFIG]</p></td><td><p>None</p></td></tr><tr><td><p>Layout Files (<em>.lyt</em>)</p></td><td><p>Contain the layout options of every version of {% var, "RDM" false %} that have been installed on the machine.</p></td><td><p>[CONFIG]</p></td><td><p>None</p></td></tr><tr><td><p>Log Files (<em>.log</em>, <em>.debug</em>)</p></td><td><p>Contain {% var, "RDM" false %} logs.</p></td><td><p>[CONFIG]</p></td><td><p>None</p></td></tr><tr><td><p>Local Playlists</p></td><td><p>Contains {% var, "RDM" false %}local playlists.</p></td><td><p>[PROFILE]\[Datasource]\Playlists</p></td><td><p>Use application directory for local playlist will use instead [INSTALLDIR]</p></td></tr><tr><td><p>Local Templates</p></td><td><p>Contains {% var, "RDM" false %}local templates.</p></td><td><p>They are serialized directly in the configuration file of the application.</p></td><td><p>None</p></td></tr><tr><td><p>Offline/Cache data (<em>offline.db</em>)</p></td><td><p>Contains {% var, "RDM" false %} offline/cache data.</p></td><td><p>[PROFILE]\[Datasource]</p></td><td><p>Use application directory for online cache will use instead [INSTALLDIR]</p></td></tr><tr><td><p>Sensitive (<em>.stv</em>, <em>.stb</em>)</p></td><td><p><strong>RemoteDesktopManager.stv</strong> contains sensitive options such as data source configurations, authentication tokens, and MFA keys. It is encrypted with the key contained in <strong>RemoteDesktopManager.enc</strong> and <strong>RemoteDesktopManager.stb</strong> is its backup.</p></td><td><p>[CONFIG]</p></td><td><p>None</p></td></tr><tr><td><p>Themes</p></td><td><p>Contains {% var, "RDM" false %}    theme options.</p></td><td><p>[CONFIG]</p></td><td><p>None</p></td></tr></tbody></table>

&nbsp;

### Offline and Local Play list option

Offline and local play list options can be accessed by navigating to ***File – Settings – Advanced***. ![File – Settings – Advanced](https://cdnweb.devolutions.net/docs/RDMW6081_2024_2.png "File – Settings – Advanced")