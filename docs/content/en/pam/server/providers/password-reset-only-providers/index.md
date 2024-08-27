---
eleventyComputed:
  title: Unmanaged (password reset only) providers
  description: 
---
Within {{ en.DPAM }}, a provider typically performs the entire password management lifecycle, including discovery, heartbeat, and password rotation. However, it is not always appropriate, necessary, or feasible to maintain the entire lifecycle for an identity provider. In such cases, unmanaged providers, also known as ***Password reset only*** providers, are utilized.

Unmanaged providers execute only a single phase of the password management lifecycle: the password rotation phase. Unlike other providers, they are solely capable of resetting a password for an account on an identity provider.

![Unmanaged (password reset only) providers](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2108.png)