---
_schema: default
eleventyComputed:
  title: Identity provider endpoint
  description: >-
    An identity provider endpoint is the interface through which a provider connects to an identity provider.
---
An ***identity provider endpoint*** is the interface through which a provider connects to an identity provider. For managed providers, these identity provider endpoints are integrated into {{ en.DPAM }}. However, when building action scripts for {{ en.ANYID }} providers, they must be defined explicitly.

Identity provider endpoints are the points of connection that a provider uses to authenticate with an identity provider. An identity provider endpoint can take various forms, such as a DNS hostname for an Active Directory domain controller, an IP address for a Linux operating system, or an HTTP URL for a REST API endpoint.
