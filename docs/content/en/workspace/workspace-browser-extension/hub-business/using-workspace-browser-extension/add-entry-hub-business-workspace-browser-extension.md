---
_schema: default
eleventyComputed:
  title: Add a website entry in {{ en.DHUBB }} with the {{ en.WBEX }}
---
{% snippet, "badgeInfo" %}
This topic explains how to create an entry with your existing website credentials. If you have not yet created an account for the website, follow the instructions in [Create an account for a website in {{ en.DHUBB }} with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/create-account-website-hub-business/) instead.
{% endsnippet %}

Website entries can be created with the {{ en.WBEX }} in {{ en.DHUBB }}. This type of entry is useful for saving your login credentials so that you do not have to remember them. These entries are also used by the {{ en.WBEX }} to recognize a website and [retrieve your credentials](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).

The main way to achieve this is by successfully logging into the website. The {{ en.WBEX }} will automatically offer to save your credentials in a new website entry in {{ en.DHUBB }}. It is also possible to manually create the website entry.

Learn how to add a website entry by following the instructions from these sections:

* [Automatically Add a Website Entry](#automatically-add-a-website-entry)
* [Manually Add a Website Entry](#manually-add-a-website-entry)

### Automatically add a website entry

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example. ![Login page](https://cdnweb.devolutions.net/docs/WEBX4031_2024_2.png "Login page")
2. Websites usually ask for information such as an email address/username and a password. Follow the website’s login process until you log in to your account.
3. A {{ en.WBEX }} ***Add website*** window will pop up in the corner of your web browser. ![Add website](https://cdnweb.devolutions.net/docs/WEBX4028_2024_2.png "Add website")
4. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
5. Select the ***{{ en.VLT }}*** and ***folder*** in which to save your website entry.
6. Click ***Save***.

Your credentials are now securely stored in a new website entry in {{ en.DHUBB }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).

### Manually add a website entry

1. Go to the login page of the website. This page will be different for each website; this topic will use the Atlassian website as an example. ![Login page](https://cdnweb.devolutions.net/docs/WEBX4031_2024_2.png "Login page")
2. Click on the {{ en.WBEX }} icon in your browser toolbar and, in the ***Matching*** tab, click on the ***Add website*** button. ![Add website button](https://cdnweb.devolutions.net/docs/WEBX4107_2024_2.png "Add website button")
3. The {{ en.WBEX }} ***New entry - Website*** tab will open in your browser. ![New entry - Website (General tab)](https://cdnweb.devolutions.net/docs/WEBX4106_2024_2.png "New entry - Website &#40;General tab&#41;")
4. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
5. Select the ***{{ en.VLT }}*** and ***folder*** in which to save your credentials.
6. The ***Host*** drop-down list is set to ***Custom*** by default. This allows the {{ en.WBEX }} to automatically specify the ***URL*** in the next field with the login page URL from step 1.
7. The ***Credentials*** drop-down list is set to ***Custom*** by default. This allows you to manually enter your ***Username***, ***Domain***, and ***Password*** in the next step.
8. Provide the ***Username***, ***Domain***, and ***Password*** you use to log in to the website. You may not have a domain name to specify; in that case, leave the field blank. Also, depending on the website, your username may be your email address.
9. The ***Compare type*** should be at ***Default*** and the ***{{ en.WBEX }}*** should be ***Enabled***.
10. Click ***Add***.

Your credentials are now securely stored in a new website entry in {{ en.DHUBB }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).