---
_schema: default
eleventyComputed:
  title: Configure a VMware synchronizer entry  in {{ en.RDM }}
  description:
  status:
  keywords:
---
Every field from the ***VMware synchronizer entry***  is described below.

{% snippet, "badgeInfo" %}
Please note that the [***Schedule*** tab](#schedule) is only available in a {{ en.DVLS }} data source. Also needs the {{ en.DVLS }} ***Scheduler*** to be set up.
{% endsnippet %}

## Synchronizer

The entry can be found under ***New Entry*** – ***Synchronizer***:

![New Entry – Synchronizer](https://cdnweb.devolutions.net/docs/RDMW6068_2024_2.png "New Entry – Synchronizer")

* ***Name***: Entry name in {{ en.RDM }}
* ***Folder***: Which {{ en.RDM }} folder the entry will be in
* ***Credentials***: Read more on [***Credentials*** options](/rdm/windows/commands/edit/entries/entry-credentials-options/)
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically with Active Directory

### General tab

![General tab](https://cdnweb.devolutions.net/docs/RDMW6067_2024_2.png "General tab")

* ***Host:***  The IP address or hostname of the VMware server.
* ***Username:*** The username required to authenticate and access the VMware server.
* ***Password:*** The password of the provided username for authentication on the VMware server.
* ***Sync mode: All datacenters, Specific datacenter***
* ***Datacenter:*** The specific datacenter to synchronize with if ***Specific datacenter*** is selected as the ***Sync Mode***.
* ***Connection type: Defaut, VMware Remote Console, RDP***
* ***Console connection mode: VMware PowerCLI, VMware VMRC 8.0***
* ***API mode: Default, Experimental, Legacy***

### Fields tab

![Fields tab](https://cdnweb.devolutions.net/docs/RDMW6069_2024_2.png) Choose which fields will always be synchronized, and which will not. For example, you could choose not to synchronize the description, because you want to edit it yourself.

* ***Field***: Select which fields will always be synchronized, and which will not
* ***Session name***: Choose between ***Common name***, ***DNS host name (FQDN)***, and ***Host and description***.
* ***Session name prefix***: A prefix for the entry that will be created through the synchronizer
* ***Session name suffix***: A suffix for the entry that will be created through the synchronizer

### Advanced tab

![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW6070_2024_2.png "Advanced tab")

* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals)
* ***Duplicate check*** will not import entries with the same type and host
  * ***Root***: Check for duplicates within the whole data source
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder
* ***Action on entry mismatch***
  * ***None***: Do nothing
  * ***Delete***: Delete that entry
  * ***Move to***: Move to selected ***destination folder***
  * ***Make expired***: Mark that entry as expired (expiration message can be set up)

### Schedule tab

![Schedule tab](https://cdnweb.devolutions.net/docs/RDMW6072_2024_2.png "Schedule tab")

* ***Enabled***: Schedule being on/off
  * ***Every (Days)***: Interval between when the synchronizer runs
  * ***At***: Specific time to synchronize

&nbsp;