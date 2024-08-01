---
_schema: default
eleventyComputed:
  title: ' Capturing network traffic using WireShark in {{ en.RDM}}'
  description: How to  capture network traffic using WireShark in {{ en.RDM}}.
  status:
  keywords:
---
**Wireshark** is a widely used open source network analyzer that captures and displays real-time network traffic details. It is particularly useful for troubleshooting, protocol analysis, and network security.

1. Download [WireShark](https://www.wireshark.org/download.html).
2. Install the capture driver as requested. To do this, click the Install **CHModBPF** link and run the package installer.
3. Relaunch **WireShark** and double-click the network interface that is being used (e.g. ethernet, wifi).
4. &nbsp;This will launch the packet capture for that interface. You can confirm that packets are being captured as they appear in the window.
5. Reproduce the connection failure using {{ variables.RDM.en }}.
6. End the capture by closing the **WireShark** window.
7. Choose **File - Save As**… and save the **.pcapng file**. If you need help troubleshooting, send it to [service@devolutions.net](service@devolutions.net).
8. To clean up, uninstall the capture driver by choosing **File - About WireShark**.
9. In **Folders**, double-click the link under **Windows Extras**. This will open a folder with various .pkg files
10. Run the **Uninstall ChmodBPG.pkg** to remove the capture driver, and then close WireShark.