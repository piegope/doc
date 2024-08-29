---
_schema: default
eleventyComputed:
  title: Create an account for a website in {{ en.DHUBB }} with the {{ en.WBEX }}
---
The {{ en.WBEX }} assists you in creating a new account when you register on a website. It gives you the ability to create a secure password and save your new credentials.

{% snippet, "badgeInfo" %}If you already have an account for the website, visit [Add a website entry with the {{ en.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).{% endsnippet %}

Follow the steps below to learn how to create a website account with the {{ en.WBEX }} and save your credentials in {{ en.DHUBB }}.

1. On the website for which you want to create your account, go to the registration/account creation page. This page will be different for each website; this topic will use the Atlassian website as an example. ![Registration page](https://cdnweb.devolutions.net/docs/WEBX4020_2024_2.png "Registration page")
2. Follow the website’s registration process until you get to the password field.
3. Click on the {{ en.WBEX }} icon in your browser toolbar, then select the ***Password generator*** in the ***Side menu*** of the extension. ![Password generator tab](https://cdnweb.devolutions.net/docs/WEBX4108_2024_2.png "Password generator tab")
4. You can now customize the password generation settings, but this is optional since the default settings already generate very strong passwords. That being said, it may be necessary to adjust the settings to meet the specific requirements of some websites. If you do not wish to customize the generation settings, you can skip to step 5.
   1. Select a ***Password length***. The default value is set to 12. ![Password length](https://cdnweb.devolutions.net/docs/WEBX4109_2024_2.png "Password length")
   2. In the ***General*** settings, select the types of characters that your password must contain. The default is set to include uppercase letters, lowercase letters, and numbers, but there is also the option to include special characters in your password. ![General settings](https://cdnweb.devolutions.net/docs/WEBX4110_2024_2.png "General settings")
   3. In the same section next to the character types, select the minimum number of characters of each type that must be included in your password. The default values are set to 0.
   4. In the ***Advanced*** settings, you can even further customize your password if desired. In the first field, enter characters you want included in your password, followed in the field to the right by the minimum number of times they must appear. In the second field, enter characters you want excluded from your password. ![Advanced settings](https://cdnweb.devolutions.net/docs/WEBX4111_2024_2.png "Advanced settings")

Your password settings are now configured.

5. If desired, to change the current password, click on the ***Generate password*** button until you are satisfied with the result. ![Generate password](https://cdnweb.devolutions.net/docs/WEBX4112_2024_2.png "Generate password")
6. Click on the ***Copy to clipboard*** button to copy the password. ![Copy to clipboard](https://cdnweb.devolutions.net/docs/WEBX4113_2024_2.png "Copy to clipboard")
7. Paste your password in the website’s corresponding field. ![Paste password](https://cdnweb.devolutions.net/docs/WEBX4039_2024_2.png "Paste password")
8. Follow the rest of the website’s registration steps until the {{ en.WBEX }} ***Add Website*** window pops up in the corner of your web browser. ![Add website](https://cdnweb.devolutions.net/docs/WEBX4106_2024_2.png "Add website")
9. Provide a ***Name*** for the entry. You can keep the default name or change it, but we recommend that it reflects the content of the entry so that it is easier to find when needed.
10. Select the ***{{ en.VLT }}*** and ***folder*** in which to save your website entry.
11. Click ***Save***.

Your credentials are now securely stored in a new website entry in {{ en.DHUBB }}. The next time you log in to the same account, the {{ en.WBEX }} will detect it and you will be able to retrieve your credentials. Follow our step-by-step instructions for [retrieving your credentials](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).