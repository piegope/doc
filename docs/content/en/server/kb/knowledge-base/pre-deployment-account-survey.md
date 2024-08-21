---
_schema: default
eleventyComputed:
  title: Pre-deployment account survey
  description: >-
    Prior to deployment of a {{ en.DVLS }} instance, some accounts are needed to
    operate the various services involved in a secure deployment of {{ en.DVLS
    }}.
  status: Topic available in German language
---
Prior to deployment of a {{ en.DVLS }} instance, some accounts are needed to operate the various services involved in a secure deployment of {{ en.DVLS }}. The first decision is to use either domain accounts for operating the platform, or to use local SQL accounts paired with local service accounts. Since this decision is a matter of personal preference, we support both models.

{% snippet, "badgeInfo" %}
Before proceeding, please take the following into account:
* The names used in this guide are to ease comprehension of the role fulfilled by the account. Our documentation uses these names as well, but there is no requirement that you use them.
* The following accounts interacting with the SQL database will be granted the least privileges permissions from scripts that will run during the creation and the upgrade of the {{ en.DVLS }} instance.
{% endsnippet %}

## Domain-based operation (integrated security option)

The ***Administration credentials*** needs full read permissions on the AD structure, but does NOT perform any changes to your directory. Sadly, because of a side effect of how the net Directory Services are built, there is an issue when that account tries to read properties of AD groups that may reside in a protected area of your directory. The easiest fix was to grant full admin permissions, but we are looking into implementing a better fallback strategy to handle the case where access is denied. It may require higher privileges than being part of the Domain Users built-in Active Directory group. In most cases, it should be sufficient.

&nbsp;

<table><thead><tr><th><p><strong>#</strong></p></th><th><p>Name</p></th><th><p>ORIGIN</p></th><th><p>DESCRIPTION</p></th><th><p>SET IN...</p></th></tr></thead><tbody><tr><td><p>1</p></td><td><p>VaultDBOwner</p></td><td><p>AD</p></td><td><ul><li><p>Account with full privileges on the DB.</p></li></ul><ul><li><p>Account used to log in the Windows server (as a local admin) and to install/upgrade             {% var, "DVLS" false %}.</p></li><li><p>It needs the DB Creator right and the Alter any login securable in SQL.</p></li></ul></td><td><p>Interactive Windows session used to run the installation/upgrade of a {% var, "DVLS" false %} instance. This account must be a local administrator of the {% var, "DVLS" false %}host machine.</p></td></tr><tr><td><p>2</p></td><td><p>VaultDBRunner</p></td><td><p>AD</p></td><td><ul><li><p>Least-privileged account to run the web application. Used to connect to the Database and to read from the file system.</p></li><li><p>Account used by the IIS application pool.</p></li><li><p> No need for specific permission since the installation script of {% var, "DVLS" false %} will give the account the permission needed on the SQL DB.</p></li></ul></td><td><p>IIS Application pools that are running a {% var, "DVLS" false %} Instance.</p></td></tr><tr><td><p>3</p></td><td><p>VaultADReader</p></td><td><p>AD</p></td><td><ul><li><p>Least-privileged account to query the AD.</p></li><li><p>(Optionnal) Account configured in the {% var, "DVLS" false %} to use domain authentication.</p></li></ul></td><td><p><em><strong>{% var, "DVLS" false %} Instance Settings - Administration credentials.</strong></em></p></td></tr><tr><td><p>4</p></td><td><p>VaultDBSchedulerService<br /></p></td><td><p>AD</p></td><td><ul><li><p>Least-privileged account to operate the scheduler service. Used to connect to the DB and to read/write from the file system.</p></li><li><p>Account used by the Windows service. <a href="/server/kb/knowledge-base/scheduler-service-general-information/">Click here</a> for more information. </p></li><li><p>No need for specific permission since the installation script of {% var, "DVLS" false %} will give the account the permission needed on the SQL DB.</p></li></ul></td><td><p>Windows Service Control Manager.</p></td></tr></tbody></table>

## Non-domain based operation or Azure SQL environment

On a non-domain-based deployment, a single connection string is used for three different aspects of the system. This will be improved in a future release to respect the least-privilege principle.

For Azure SQL hosted database, domain-based operation (integrated security option) is not supported.

&nbsp;

<table><thead><tr><th><p><strong>#</strong></p></th><th><p><strong>NAME</strong></p></th><th><p><strong>ORIGIN</strong></p></th><th><p><strong>DESCRIPTION</strong></p></th><th><p><strong>SET IN...</strong></p></th></tr></thead><tbody><tr><td><p>1</p></td><td><p>VaultDBOwner</p></td><td><p>SQL</p></td><td><ul><li><p>Account with full privileges on the DB. </p></li><li><p>It needs the DB Creator right and the Alter any login securable in SQL.</p></li></ul></td><td><p>The {% var, "DVLS" false %} Console only for installation/upgrade sessions.</p></td></tr><tr><td><p>2</p></td><td><p>VaultDBRunner</p></td><td><p>SQL</p></td><td><ul><li><p>Least-privileged account to run the web application.</p></li><li><p> No need for specific permission since the installation script of {% var, "DVLS" false %} will give the account the permission needed on the SQL DB.</p></li></ul></td><td><p>The {% var, "DVLS" false %} Console for operations of the instance.</p></td></tr><tr><td><p>3</p></td><td><p>VaultADReader</p></td><td><p>AD</p></td><td><ul><li><p>Least-privileged account to query the AD through LDAP. </p></li><li><p>(Optionnal) Account configured in the {% var, "DVLS" false %} to use domain authentication.</p></li></ul></td><td><p><em><strong>{% var, "DVLS" false %} Instance Settings - Administration credentials.</strong></em></p></td></tr><tr><td><p>4</p></td><td><p>VaultDBSchedulerService</p></td><td><p>SQL</p></td><td><ul><li><p>Least-privileged account to operate the scheduler service. Used to read/write from the file system. </p></li><li><p>No need for specific permission since the installation script of {% var, "DVLS" false %}will give the account the permission needed on the SQL DB.</p></li></ul></td><td><p><em><strong>{% var, "DVLS" false %} Console – Scheduler service.</strong></em> The database access will be performed by the single ConnectionString that is the subject of the informational note above.</p></td></tr></tbody></table>