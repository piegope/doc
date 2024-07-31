---
_schema: default
eleventyComputed:
  title: ' Capturing network traffic using WireShark'
  description: 'How to  capture network traffic using WireShark. '
  status:
  keywords:
---
**Wireshark** is a widely used open source network analyzer that captures and displays real-time network traffic details. It is particularly useful for troubleshooting, protocol analysis, and network security.

1. Download [WireShark disk images](https://www.wireshark.org/download.html).

   {% snippet, "badgeInfo" %}There is no need to install WireShark into the Applications folder; you should be able to run it, directly from the disk images.{% endsnippet %}

2. Run the **disk images**.
3. Install the capture driver as requested. To do this, click the Install **CHModBPF** link and run the package installer.
4. Relaunch **WireShark** and double-click the network interface that is being used (e.g. ethernet, wifi).
5. &nbsp;This will launch the packet capture for that interface. You can confirm that packets are being captured as they appear in the window.
6. Reproduce the connection failure using {{ variables.RDM.en }}.
7. End the capture using the red square in the top-left of the **WireShark** window.
8. Choose **File - Save As**… and save the **.pcapng file**.
9. To clean up, uninstall the capture driver by choosing **File - About WireShark**.
10. In **Folders**, double-click the link under **macOS Extras**. This will open a folder with various .pkg files
11. Run the **Uninstall ChmodBPG.pkg** to remove the capture driver, and then close WireShark.