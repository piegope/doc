---
eleventyComputed:
  title: Slowdowns or connection timeout message when connecting to a {{ en.DVLS }} data source
  description: Connecting to a {{ en.DVLS }} data source with {{ en.RDM }} can sometimes be slow. There are multiple ways to resolve this issue quickly.
---
Connecting to a {{ en.DVLS }} data source with {{ en.RDM }} can sometimes be slow. There are multiple ways to resolve this issue. The error message related to this problem should look like this:
```
System.TimeoutException: The request timed out.
at Devolutions.Server.ApiWrapper.RDMSWebClient.RunSynchronous[T](Task`1 task)
at Devolutions.Server.ApiWrapper.RDMSWebClient.GetPublicWebInstanceInformation()
```

## Disabling Internet connection
When in an environment where internet access is not allowed, enable ***No Internet connection*** in ***File*** – ***Settings*** – ***Advanced***. Doing so prevents {{ en.RDM }} from making calls to the internet that could cause timeouts or slowdowns.
![No Internet connection](https://cdnweb.devolutions.net/docs/RDMW0011_2024_2.png)

{% snippet, "shieldInfo" %}
By enabling the ***No Internet connection*** some security services will also stop working (e.g. [Compromised (Pwned) password check](/rdm/kb/rdm-windows/how-to-articles/pwned-password-check/) or the ***Show compromised password (pwned)*** option in the [Entry security analyzer](/rdm/commands/reports/entry-security-analyzer/)).
{% endsnippet %}

## Disabling certificate revocation checks
Disable ***Enforce certificate revocation check*** found under ***File*** – ***Settings*** – ***Security***. This prevents Windows from trying to reach the revocation servers configured in the certificate. In most cases, revocation servers should be allowed through the firewall unless they are also managed locally.
![Enforce certificate revocation check](https://cdnweb.devolutions.net/docs/RDMW0012_2024_2.png)
In specific situations this can resolve the error message ***Unable to Connect to your Data source*** or ***DVLS server did not respond in time***.
![Unable to Connect to your Data Source](https://cdnweb.devolutions.net/docs/.png)

{% snippet, "shieldInfo" %}
The Windows online certificate revocation check will not use configured proxies on the host for security reasons.
{% endsnippet %}

Alternatively, enabling ***Enhanced certificate validation*** can prevent disconnects in some cases. Activating this feature causes {{ en.RDM }} to validate certificates using a different method, potentially circumventing the source of the slowdowns.
![Enhanced certificate validation](https://cdnweb.devolutions.net/docs/RDMW0013_2024_2.png)

## Using the built-in Performance profiling to troubleshoot connections
Use the {{ en.RDM }} ***Profiler*** to diagnose certificate validation length. 
1. Click on the ***Help*** tab and select the ***Profiler***.
![Profiler](https://cdnweb.devolutions.net/docs/RDMW0014_2024_2.png)
1. Set the ***Debug level*** to 4.
1. Go to the ***Debug only*** tab and click the ellipsis button (***...***).
1. Check the ***Stop watch*** option.
1. Lauch a remote connection and look for the `Certificate Validation – Chain.Build` line.
![Performance profiling](https://cdnweb.devolutions.net/docs/RDMW0015_2024_2.png)
This will provide the time it took to connect in milliseconds (***ms***).
