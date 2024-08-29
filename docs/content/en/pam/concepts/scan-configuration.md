---
_schema: default
eleventyComputed:
  title: Scan configuration
  description: >-
    A scan configuration is a task within {{ en.DPAM }} that discovers new and updated accounts for a provider by carrying out an account discovery action.
---
A ***scan configuration*** is a task within {{ en.DPAM }} that discovers new and updated accounts for a provider by carrying out an account discovery action. Scan configurations are responsible for executing account discovery action scripts (for {{ en.ANYID }} providers) or internal account discovery actions for built-in providers.

These configurations return a set of accounts that can then be imported into {{ en.DPAM }} for full management.
