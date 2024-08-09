---
_schema: default
eleventyComputed:
  title: Configure a VMware synchronizer entry  in {{ en.RDM }}
  description:
  status:
  keywords:
---
Every field from the ***VMware synchronizer entry*** is described below.

{% snippet, "badgeInfo" %}Note that the ***Schedule tab*** is only available in a {{ en.DVLS }} data source. It also requires {{ en.DVLS }} ***Scheduler*** to be set up.{% endsnippet %}

## Synchronizer

The entry can be found under ***New Entry*** – ***Synchronizer***:

![New Entry – Synchronizer](https://cdnweb.devolutions.net/docs/RDMW6068_2024_2.png "New Entry – Synchronizer")

* ***Name***: Entry name in {{ en.RDM }}.
* ***Folder***: Which {{ en.RDM }} folder the entry will be in.
* ***Credentials***: Read more on [***Credentials*** options](/rdm/windows/commands/edit/entries/entry-credentials-options/).
* ***Synchronize automatically***: The {{ en.RDM }} entry will synchronize automatically.

### General tab

![General tab](https://cdnweb.devolutions.net/docs/RDMW6067_2024_2.png "General tab")

* ***Host:*** The IP address or hostname of the VMware server.
* ***Username:*** The username required to authenticate and access the VMware server.
* ***Password:*** The password of the provided username for authentication on the VMware server.
* ***Sync mode***
  * ***All datacenters:*** Synchronize ***all datacenters*** available.
  * ***Specific datacenter:*** Synchronize only the ***specified datacenter***.
* ***Datacenter:*** The specific datacenter to synchronize with if ***Specific datacenter*** is selected as the ***Sync Mode***.
* ***Connection type***
  * ***Default:*** Use the default connection type.
  * ***VMware Remote Console:*** Connect using ***VMware's Remote Console***.
  * ***RDP:*** Connect using ***Remote Desktop Protocol***.
* ***Console connection mode***
* * ***VMware PowerCLI:*** Use ***VMware PowerCLI*** for console connections.
  * ***VMware Player:*** Use ***VMware Player*** for console connections.
  * ***VMware VMRC 8.0:*** Use ***VMware VMRC 8.0*** for console connections.
* ***API mode***
* * ***Default:*** Use the ***default API*** mode configured.
  * ***Experimental:*** Use the ***experimental API mode.***
  * ***Legacy:*** Use the ***legacy API mode*** for compatibility with older VMware server versions.

### Fields tab

![Fields tab](https://cdnweb.devolutions.net/docs/RDMW6069_2024_2.png)

Choose which fields will always be synchronized, and which will not. For example, you could choose not to synchronize the description, because you want to edit it yourself.

* ***Field***: Select which fields will always be synchronized, and which will not.
* ***Session name prefix***: A prefix for the entry that will be created through the synchronizer.
* ***Session name suffix***: A suffix for the entry that will be created through the synchronizer.

### Advanced tab

![Advanced tab](https://cdnweb.devolutions.net/docs/RDMW6070_2024_2.png "Advanced tab")

* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals).
* ***Ignore entry type***: Ignore the entry type when performing certain actions.
* ***Duplicate check*** will not import entries with the same type and host.
  * ***Root***: Check for duplicates within the whole data source.
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder.
* ***Action on entry mismatch***
  * ***None***: Do nothing.
  * ***Delete***: Delete that entry.
  * ***Move to***: Move to selected ***destination folder.***
  * ***Make expired***: Mark that entry as expired (expiration message can be set up).

### Schedule tab

![Schedule tab](https://cdnweb.devolutions.net/docs/RDMW6072_2024_2.png "Schedule tab")

* ***Enabled***: Schedule being on/off
  * ***Every (Days)***: Interval between when the synchronizer runs.
  * ***At***: Specific time to synchronize.

&nbsp;