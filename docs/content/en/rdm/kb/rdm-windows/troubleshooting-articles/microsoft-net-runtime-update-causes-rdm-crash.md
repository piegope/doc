---
_schema: default
eleventyComputed:
  title: Microsoft .NET runtime update causes {{ en.RDM }} to crash
  description: >-
    The Microsoft .NET runtime can be silently updated in the background while
    {{ en.RDM }}  is running, which may cause the application to crash.
  status:
  keywords:
---
The Microsoft .NET runtime can be silently updated in the background while {% var, "RDM" false %} is running, which may cause the application to crash. This is a known issue with Microsoft, but as of this writing, no fix has been implemented. This issue typically arises after a minor security update to the .NET runtime, such as an upgrade from .NET 8.0.7 to .NET 8.0.8.

The only workaround is to restart {% var, "RDM" false %} when the crash occurs.