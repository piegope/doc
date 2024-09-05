---
eleventyComputed:
  title: Configure SSO authentication with Okta
  description: Use Okta with {{ en.DHUBB }} for single sign-on (SSO) authentication by following the steps in this page.
  keywords:
  - SSO
  - Okta
---
Use Okta with {{ en.DHUBB }} for single sign-on (SSO) authentication by following the steps in this page. First see the requirements and supported features below.

## Requirements

To use SSO or automatic provisioning (SCIM) with Okta, an [Okta account](https://www.okta.com/) with the appropriate rights is required. The [Domain validation procedure](#domain-verification) must also be completed to verify ownership of the configured domain(s). Only users with emails whose domains have been verified are allowed to log in via SSO or be provisioned via SCIM.

## Supported features

* Connect to the Hub via Okta SSO
* Just-in-time (JIT) provisioning of connected users via Okta SSO
* Synchronize your Okta to {{ en.DHUB }}
   * Create/update users from Okta to {{ en.DHUB }} (create users, update user attributes, and deactivate users)
   * Create/update groups from Okta to {{ en.DHUB }} (group push)

{% snippet, "badgeCaution" %}
Users provisioned JIT by SSO or created by SCIM synchronization must be invited to the Hub in ***Administration – Users***, as described in the steps below.
{% endsnippet %}

## Configuration steps

Here are the steps to [validate the domain](#domain-verification), [configure single sign-on](#single-sign-on-sso-configuration), and [perform user provisioning](#provisioning-configuration).

### Domain verification

**In {{ en.DHUBB }}**  

1. Go to ***Administration – Authentication – Domain***, then click on ***Add Domain***.
![Administration – Authentication – Domain – Add domain](https://cdnweb.devolutions.net/docs/HUBB2000_2024_1.png)

1. Fill in the domain, then click on the checkmark to start the verification process.
![Domain](https://cdnweb.devolutions.net/docs/HUBB2001_2024_1.png) 

   {% snippet, "badgeInfo" %} 
   For security purposes, only emails that end with your domain name are allowed to log in to {{ en.DHUB }} using Okta authentication. For example, if employees' emails are in the format "bob@windjammer.co", the domain is "windjammer.co".
   {% endsnippet %}

1. To have multiple domains, click ***Add domain*** once again, fill in your other domain, then click on the checkmark. Repeat this process for every domain you wish to add.
![Multiple domains](https://cdnweb.devolutions.net/docs/HUBB2002_2024_1.png)
1. Create a [DNS TXT Record](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) using the provided ***Host name*** and ***TXT value***. This allows us to verify the ownership of the domain(s) supplied.  
![Host name and TXT value](https://cdnweb.devolutions.net/docs/HUBB2003_2024_1.png)  

   It is recommended to verify that the configuration is adequate using DNS querying tools such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) or [whatsmydns.net](https://www.whatsmydns.net/). The example below uses MXToolBox's TXT Lookup tool. The first part of the Domain Name must match the ***Host name*** in {{ en.DHUB }} and the Record must match the ***TXT value*** in {{ en.DHUB }} as well.  
   {% snippet, "badgeCaution" %} 
   DNS TXT Records can take a while to propagate.
   {% endsnippet %}

   ![DNS TXT Record in MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2236.png)  

1. Await domain verification. Upon successful verification, a checkmark within a green circle will display next to the domain. Proceed to configure single sign-on (SSO) during the verification process; however, user provisioning becomes accessible only after the domain has been verified.
![Verified domain](https://cdnweb.devolutions.net/docs/HUBB2004_2024_1.png)

   {% snippet, "badgeCaution" %} 
   This validation lasts for 48 hours and does not restart automatically after that period. If the TXT record is not configured within those 48 hours, the validation status will be ***Expired***. If that happens, click on ***Retry***.  

   If issues occur while trying to verify the domain, visit our [Domain validation troubleshooting](/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/) guide.
   {% endsnippet %}  

### Single sign-on (SSO) configuration

1. Go to ***Administration – Authentication – Single sign-on (SSO)***, then click on ***Okta single sign-on (SSO)*** to be redirected to the configuration page.  
![Administration – Authentication – Single sign-on (SSO) – Okta single sign-on (SSO)](https://cdnweb.devolutions.net/docs/HUBB2007_2024_1.png)  

1. ***Name*** the SSO configuration. This name will only appear in the {{ en.DHUB }} SSO settings menu. The default name is "Okta".  
![Configuration name](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2334.png)

   {% snippet, "badgeCaution" %} 
   Do not close this setup page, as the following steps show where to find the information to enter in its fields. 
   {% endsnippet %}

**In Okta**  

3. Log in to the Okta account.
1. In ***Applications***, click ***Browse App Catalog***.  
![Applications – Browse App Catalog](https://cdnweb.devolutions.net/docs/INTERFACE2055.png)

1. Search for ***{{ en.DHUB }}***, then click on the application in the search results.  
![Search for {{ en.DHUB }}](https://cdnweb.devolutions.net/docs/INTERFACE2056.png)  
1. Click on ***Add Integration*** at the top.  
1. In the ***Sign On*** tab, copy the ***Client ID***.  
![Copy the client ID](https://cdnweb.devolutions.net/docs/INTERFACE2057.png)  

**In {{ en.DHUBB }}**  

8. Back to the ***Configure Single Sign-On (SSO)*** page, paste the ***Client ID*** from the last step in the field of the same name.  
![Paste the client ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2337.png)  

**In Okta**  

9. Back to the ***Sign On*** tab, copy the ***Client secret***.  
![Copy the client secret](https://cdnweb.devolutions.net/docs/INTERFACE2058.png)  

**In {{ en.DHUBB }}**  

10. Back to the ***Configure Single Sign-On (SSO)*** page, paste the ***Client secret*** from the last step in the ***Client secret Key*** field.  
![Paste the client secret](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2338.png)  
1. In ***Discovery URL***, enter the URL used to access Okta, without the "-admin" part.  

   {% snippet, "badgeCaution" %} 
   Do not test the connection just yet, as users need to be assigned to the application first.
   {% endsnippet %}  

   ![Discovery URL](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2339.png)  

**In Okta**  

12. In the ***Assignments*** tab, ensure each user used to test the configuration is assigned to the application. For more details, see Okta's own documentation on user management and application assignment.
![Assignments](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2262.png)  

**In {{ en.DHUBB }}**  

13. Test the configuration in {{ en.DHUB }}. A new window opens to connect you to {{ en.DHUB }} through Okta. When connected, a success message appears.  

   {% snippet, "badgeCaution" %}
   If the popup does not appear, the browser or a browser extension may be blocking it. Change the browser and/or extension settings. If it still does not work, deactivating/removing the extension or changing browser may also solve the problem.
   {% endsnippet %}

14. Click ***Save*** in the ***Summary*** of the Okta SSO configuration.
![Save the configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2340.png)  

The SSO configuration is now complete. A green checkmark icon should now be visible next to the configuration, meaning that the SSO configuration through Okta is now enabled on the Hub.  
![Active SSO configuration](https://cdnweb.devolutions.net/docs/HUBB2008_2024_1.png)

#### Okta SSO login
When logging in to the Hub, click on ***Sign in with Okta***.
![Sign in with Okta](https://cdnweb.devolutions.net/docs/CLOUD2006_2024_3.png)

An Okta login page will open. Enter the Okta credentials and click ***Sign in***. The Hub will then be accessible.
![Okta login](https://cdnweb.devolutions.net/docs/INTERFACE2059.png)

### SCIM provisioning configuration

Synchronize users and user groups from providers to the Hub by following the steps in this section. First see the list of supported features below.

{% snippet, "badgeCaution" %}
Note that we only support synchronization in one direction, from Okta to {{ en.DHUB }}, specifically for users and groups. Synchronization from {{ en.DHUB }} to Okta is **not** supported.
{% endsnippet %}

#### Supported features
* Create users
* Update user attributes
* Deactivate users
* Group push

#### Provisioning configuration steps

**In Okta**

1. Go to the {{ en.DHUBB }} application.
1. In the ***Provisioning*** tab, click ***Configure API Integration***.
![Provisioning – Configure API Integration](https://cdnweb.devolutions.net/docs/INTERFACE2060.png)
1. Check the ***Enable API Integration*** box.
![Enable API Integration](https://cdnweb.devolutions.net/docs/INTERFACE2061.png)

**In {{ en.DHUBB }}**

4. Go to ***Administration – Authentication – Provisioning*** and enable SCIM provisioning.
![Enable SCIM provisioning](https://cdnweb.devolutions.net/docs/HUBB2379_2024_2.png)
1. Copy the ***Secret token*** by clicking on the ***Copy to clipboard*** icon next to it.
![Copy the secret token](https://cdnweb.devolutions.net/docs/HUBB2380_2024_2.png)

**In Okta**

6. Back to the ***Provisioning*** tab in Okta, paste the ***Secret token*** from the last step in the ***API Token*** field.
![Paste the secret token](https://cdnweb.devolutions.net/docs/INTERFACE2062.png)
1. Click on ***Test API Credentials***. A success message should appear.
![Test API Credentials](https://cdnweb.devolutions.net/docs/INTERFACE2063.png)

**In {{ en.DHUBB }}**

8. Back to the ***Provisioning*** configuration in {{ en.DHUB }}, click on ***Activate synchronization***.
![Activate synchronization](https://cdnweb.devolutions.net/docs/HUBB2381_2024_2.png)

**In Okta**

9. ***Save*** the Okta provisioning configuration.
1. Still in the ***Provisioning*** tab, go to the ***To App*** settings, then click on ***Edit***.
![Edit "To App" settings](https://cdnweb.devolutions.net/docs/INTERFACE2064.png)
1. Enable/disable the following settings:
    * Enable:
        * ***Create Users***
        * ***Update Attributes***
        * ***Deactivate Users***
    * Disable:
        * ***Set password when creating new users*** (under the ***Create Users*** setting)

   ![Enable/disable settings](https://cdnweb.devolutions.net/docs/INTERFACE2065.png)
1. ***Save*** the changes.

Synchronization from Okta to {{ en.DHUBB }} is now configured.

{% snippet, "badgeHelp" %}
It is possible to assign users and groups to be synchronized. For more details, see Okta's own documentation on [assigning applications to users](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-assign-apps.htm) and [assigning an app integration to a group](https://help.okta.com/en-us/content/topics/provisioning/lcm/lcm-assign-app-groups.htm).
{% endsnippet %}