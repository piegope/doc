---
_schema: default
eleventyComputed:
  title: '{{ en.WBEX }} troubleshooting connection logs'
  description: >-
    When an issue occurs with the {{ en.WBEX }}, the support personnel may ask
    you to provide them logs to provide more information to our engineering
    department, please follow these steps according to your browser.
---
When an issue occurs with the {{ en.WBEX }}, the support personnel may ask you to provide them logs to provide more information to our engineering department. Please follow these steps according to your browser.

## Brave

1. In your browser, ***right-click on the {{ en.WBEX }} icon.***
2. Click on ***Manage Extension***.
3. Toggle on the ***Developer mode***.
4. In the same window, under ***Inspect views***, click on the ***service worker*** link. This will open the browser ***DevTools*** window.
5. Open the {{ en.WBEX }} pop-up menu, and click on the ***Refresh*** button. ![Refresh](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Go back to the ***DevTools*** window, and click on ***Network***. ![Network](https://cdnweb.devolutions.net/docs/WBEX6014_2024_2.png)
7. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
8. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net).

## Chrome

1. In your browser, ***right-click on the {{ en.WBEX }} icon.***
2. Click on ***Manage Extension***.
3. Toggle on the ***Developer mode***. ![Developer mode](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4786.png)
4. In the same window, under ***Inspect views***, click on the ***service worker*** link. This will open the browser ***DevTools*** window.
5. Open the {{ en.WBEX }} pop-up menu, and click on the ***Refresh*** button. ![Refresh](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Go back to the ***DevTools*** window, and click on ***Network***. ![Network](https://cdnweb.devolutions.net/docs/WBEX6002_2024_2.png)
7. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
8. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net).

## Edge

1. In your browser, ***right-click on the {{ en.WBEX }} icon.***
2. Click on ***Manage Extension***.
3. Toggle on the ***Developer mode***. ![Developer mode](https://cdnweb.devolutions.net/docs/WBEX6010_2024_2.png)
4. In the same window, under ***Inspect views***, click on the ***service worker*** link. This will open the browser ***DevTools*** window.
5. Open the {{ en.WBEX }} pop-up menu, click on the ***Refresh*** button. ![Refresh](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Go back to the ***DevTools*** window, and click on ***Network***. ![Network](https://cdnweb.devolutions.net/docs/WBEX6002_2024_2.png)
7. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
8. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net).

## Firefox

1. Enter ***about:debugging#/runtime/this-firefox*** in the URL bar.
2. Next to the {{ en.WBEX }}, click ***Inspect***. This will open the browser ***DevTools*** window. ![Inspect](https://cdnweb.devolutions.net/docs/WBEX6003_2024_2.png)
3. In the ***DevTools*** window click on ***Network***. ![Network](https://cdnweb.devolutions.net/docs/WBEX6005_2024_2.png)
4. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
5. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net). ![Network](https://cdnweb.devolutions.net/docs/WBEX6005_2024_2.png)

## Opera

1. In your browser, ***right-click on the {{ en.WBEX }} icon.***
2. Click on ***Manage Extension***.
3. Toggle on the ***Developer mode***. ![Developer mode](https://cdnweb.devolutions.net/docs/WBEX6009_2024_2.png)
4. In the same window, under ***Inspect views***, click on the ***service worker*** link. This will open the browser ***DevTools*** window. ![service worker](https://cdnweb.devolutions.net/docs/WBEX6007_2024_2.png)
5. Open the {{ en.WBEX }} pop-up menu, and click on the ***Refresh*** button. ![Refresh](https://cdnweb.devolutions.net/docs/WBEX6001_2024_2.png)
6. Go back to the ***DevTools*** window click on ***Network***. ![Network](https://cdnweb.devolutions.net/docs/WBEX6008_2024_2.png)
7. In the ***Network*** tab, one of the items in the list should be in red, this is the event where {{ en.RDM }} failed to retrieve the credentials. Click on it.
8. Take a screenshot of the full message displayed and send it to [service@devolutions.net](mailto:service@devolutions.net).