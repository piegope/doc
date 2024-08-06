---
_schema: default
eleventyComputed:
  title: Password generator
---
The ***Password Generator*** allows to create random passwords that are difficult to interpret or predict, due to a mix of uppercase and lowercase letters, numbers and punctuation symbols.

{% snippet, "badgeHelp" %}
You can create and force a [***Password Templates***](/server/web-interface/administration/templates/password-templates/) to follow your organization secure policies.
{% endsnippet %}

![Password generator in entry properties](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4086.png)

### Generate passwords with the password generator

1. Go to the ***General*** section in the ***Properties*** of an entry.
2. Next to the ***Password*** field, click the three-dots menu to access the ***Password generator*** tool.
3. Customize all the criteria you want your password to have, then click ***Generate***.
4. In the proposed list, choose and click on a password. {% snippet, "badgeInfo" %}
   At the bottom of the list, you can review the strength and phonetics of the selected password.
   {% endsnippet %}
5. Click on ***Select*** to close and autofill the ***Password*** entry field. {% snippet, "badgeNotice" %}
   You can also create a ***Password template*** from your ***Password Generator*** settings. Just customize the settings and click on ***Add template*** next to the ***Template*** drop-down list.
   {% endsnippet %}

![Password generator](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4085.png)

<table><thead><tr><th><p>Option</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Template</p></td><td><p>Create or choose a <a href="/server/web-interface/administration/templates/password-templates/"><em><strong>Password Templates</strong></em></a>.</p></td></tr><tr><td><p>Mode</p></td><td><p>Choose a <em><strong>Mode</strong></em> setting for the passwords.</p><ul><li><p><em><strong>Default</strong></em>: Customize the length and the minimum number of characters per type you want the passwords to have.</p></li><li><p><em><strong>Advanced settings</strong></em>: Select the length, type, and number of characters to include in the passwords. Include and exclude specific characters.</p></li><li><p><em><strong>Readable password</strong></em>: Generate passwords that are readable but are not actual words.</p></li><li><p><a href="/server/web-interface/administration/templates/password-templates/use-a-pattern-password/"><em><strong>Use a pattern</strong></em></a>: Select any pattern you need to create the passwords. You can also exclude certain characters if desired. A list of the most recent used patterns is also created.</p></li><li><p><em><strong>Pronounceable password</strong></em>: Generate passwords that are pronounceable, but are not actual words.</p></li><li><p><em><strong>Strong password</strong></em>: </p></li><li><p><em><strong>Passphrase</strong></em>: Generate a customized <em><strong>Passphrase. </strong></em>Select the length, word separator, capitalize first letter, append number and dictionary to include in the <em><strong>Passphrase</strong></em>.</p></li></ul></td></tr><tr><td><p>Upper-case (A, B...)</p></td><td><p>Include uppercase letters in passwords. generation.</p></td></tr><tr><td><p>Underline ( _ )</p></td><td><p>Include the underline ( _ ) character in passwords. generation.</p></td></tr><tr><td><p>High ANSI characters</p></td><td><p>Include characters from '-' to U255 (excluding U255) in passwords. generation.</p></td></tr><tr><td><p>Minus ( - )</p></td><td><p>Include the minus ( - ) character in passwords. generation.</p></td></tr><tr><td><p>Brackets ([], (), &lt;&gt;)</p></td><td><p>Include bracket characters in passwords. generation.</p></td></tr><tr><td><p>Digits (0, 1, 2...)</p></td><td><p>Include digits in passwords. generation.</p></td></tr><tr><td><p>Special (!, $, %, &amp;...)</p></td><td><p>Include special characters in passwords. generation.</p></td></tr><tr><td><p>Lower-case (a, b, c...)</p></td><td><p>Include lowercase letters in passwords. generation.</p></td></tr><tr><td><p>Space ( )</p></td><td><p>Include the space character in passwords. generation.</p></td></tr><tr><td><p>XML Compliant</p></td><td><p>Generate XML compliant passwords. passwords.</p></td></tr><tr><td><p>Password count</p></td><td><p>Maximum number of passwords generated.</p></td></tr><tr><td><p>Include the following characters</p></td><td><p>Forcefully include characters inside the password.</p></td></tr><tr><td><p>Exclude the following characters</p></td><td><p>Forcefully exclude characters from the password.</p></td></tr></tbody></table>