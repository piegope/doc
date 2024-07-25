---
eleventyComputed:
  title: Just-in-time elevation
  description: JIT elevation in Devolutions PAM has two variations, namely elevating a normal account or a zero standing privileges (ZSP) account.
---
***Just-in-time (JIT) elevation*** in Devolutions PAM has two variations: elevating a standard account or a zero standing privileges (ZSP) account.

* **Standard account**: This account has existing memberships. JIT adds additional groups or roles upon check-out that are subsequentially removed upon check-in.
* **ZSP account**: This account has no permissions or memberships at rest. Memberships are added at check-out and removed upon check-in, similar to standard accounts. The operational security team can monitor these accounts to ensure they remain empty of memberships at rest.

### Aliases
* CyberArk: On-demand

### Related topics
* [Just-in-time (JIT) elevation in {{ en.DVLS }}](/pam/server/just-in-time/)

### See also
* [Glossary of Common Privileged Access Management (PAM) Terms](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Need Cybersecurity Insurance? Then You Probably Need PAM, Too](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)
