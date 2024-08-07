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

* ***Host:***
* ***Username:***
* ***Password:***
* ***Sync mode:***
* ***Datacenter:***
* ***Connection type:***
* ***Console connection mode:***
* ***API mode:***

### Fields tab

![Fields tab](https://cdnweb.devolutions.net/docs/RDMW6069_2024_2.png) Choose which fields will always be synchronized, and which will not. For example, you could choose not to synchronize the description, because you want to edit it yourself.

* ***Field***: Select which fields will always be synchronized, and which will not
* ***Session name***: Choose between ***Common name***, ***DNS host name (FQDN)***, and ***Host and description***.
* ***Session name prefix***: A prefix for the entry that will be created through the synchronizer
* ***Session name suffix***: A suffix for the entry that will be created through the synchronizer

### Filters tab

&nbsp;

* ***Type***: LDAP syntax filters can be used in many situations in Active Directory
  * ***All***: Default filter
  * ***Server***: Adds a filter to only include Windows Server
* ***Other filter***: Read more about this option by clicking the ***Help*** button
* ***Preview***: Preview of the applied filters

### Advanced tab

&nbsp;

* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals)
* ***Verify folder on mismatch***: During synchronization, if enabled, verifies each connection and compares to already existing ones; ***Verify on folder mismatch*** will also check the path
* ***Create virtual folders***: Allow the creation of virtual folders.
* ***Search scope***
  * ***Subtree***: Searches the root
  * ***One-Level***: Searches on the folder level only
* ***Duplicate check*** will not import entries with the same type and host
  * ***Root***: Check for duplicates within the whole data source
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder
* ***Action on entry mismatch***
  * ***None***: Do nothing
  * ***Delete***: Delete that entry
  * ***Move to***: Move to selected ***destination folder***
  * ***Make expired***: Mark that entry as expired (expiration message can be set up)

### Schedule tab

&nbsp;

* ***Enabled***: Schedule being on/off
  * ***Every (Days)***: Interval between when the synchronizer runs
  * ***At***: Specific time to synchronize