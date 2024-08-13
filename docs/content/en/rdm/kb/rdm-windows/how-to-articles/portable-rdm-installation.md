---
_schema: default
eleventyComputed:
  title: Portable {{ en.RDM }} version
  description: >-
    The Devolutions support staff might request you to try a portable {{ en.RDM
    }} version to isolate the application from a potential issue tied to a local
    file, configuration, or specific setting corruption.
  status: Topic available in German language
---
The Devolutions support staff might request you to try a portable {{ en.RDM }} version to isolate the application from a potential issue tied to a local file, configuration, or specific setting corruption.

To do so, you will need to perform the following steps:

1. Download the [Free](https://devolutions.net/remote-desktop-manager/home/downloadfree) or [Team](https://devolutions.net/remote-desktop-manager/home/downloadenterprise) {{ en.RDM }} ZIP file.
2. Create a new folder on your Desktop.
3. Extract the content of the ZIP file into the folder created at step 2.
4. Go in this folder once the ZIP file has been extracted and run **RemoteDesktopManager.exe**.

If the issue is resolved, you can use the portable {{ en.RDM }} application has is.

To do so, you will need to do the following:

## Relocate the {{ en.RDM }} portable version

{% snippet, "badgeInfo" %}
The following steps are built around the fact that you are using the default SQLite data source created by {{ en.RDM }}. If this is not your case, jump to step 4.
{% endsnippet %}

1. Go under your **%localappdata%\\Devolutions\\RemoteDesktopManager** folder.
2. Locate the **Connections.db** file tied to your SQLite data source.
3. Copy it inside your portable version of {{ en.RDM }}.
4. Move the content of your **RemoteDesktopManager** folder in a backup folder you will create. In doing so, you will have access to a backup of your local configuration of {{ en.RDM }} if needed later on.
5. Copy the content of your portable version of {{ en.RDM }} into the **RemoteDesktopManager** folder located under your **%localappdata%\\Devolutions\\RemoteDesktopManager**.
6. Create a new shortcut of {{ en.RDM }} using the **RemoteDesktopManager.exe** contained in this folder.
7. Launch {{ en.RDM }}.
8. Access your data.
   * If you are using the default SQLite data source and you moved your **Connections.db** file as per the above steps 1 to 3, the application should automatically connect and you should have access to your data.
   * If you are using a different type of data source than SQLite, you will need to create and map it in {{ en.RDM }} as shown in [Create a data source](/rdm/windows/data-sources/create-new-data-source/).