---
title: Devolutions front matter metadata
---
We use metadata on Devolutions for discoverability of the content via search, and driving aspects of the site experience. Metadata is applied in the article in the front matter.  

If you're making an edit to an existing article, you probably won't have to change any metadata. However, if you're adding a new article, there are certain required metadata values that you'll need to include in the front matter of the file.  

Here's an example of metadata applied in the front matter of a Markdown article:  

```
---
title: The article title to show at the start of the topic and in the navigation pane
order: The article position in the navigation pane. By default all topics are sorted alphabetically
description: 115 - 145 character description to show in search results
keywords:
- Algolia keyword search
---
```

Here's another example of metadata applied in the front matter of a Markdown article with variables:  

```
---
eleventyComputed:
  title:  Enter the title here with a variable.
---
```