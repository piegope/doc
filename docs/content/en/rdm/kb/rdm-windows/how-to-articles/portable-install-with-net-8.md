---
_schema: default
eleventyComputed:
  title:
  description:
  status:
  keywords:
---
{% var, "RDM" false %} can be installed as a portable app by deploying the .NET runtimes manually and using a small wrapper script.

{% snippet, "badgeCaution" %}This feature is not well-tested and its stability cannot be guaranteed since it relies on an undocumented feature (environment variable to set the path to the .NET runtime).{% endsnippet %}

Here are the steps to install a portable version of {% var, "RDM" false %}:

1. &nbsp;