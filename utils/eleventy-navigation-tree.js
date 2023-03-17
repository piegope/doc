module.exports = (config) => {
  config.addCollection('eleventyNavigationTree', function(collectionApi) {
    let tree = [];

    collectionApi.getAll().filter((item) => 'trees' in item.data).forEach(item => {
      item.data.trees.forEach(t => {
        if (!item.url) {
          return;
        }
        
        let currentLevel = tree;
        const pathTree = `/${item.data.lang}/${t}/`;
        const regexTrees = new RegExp(`\/(?:${item.data.trees.join('|')})\/`, 'g');
        const url = item.url.replace(`/${item.data.tree}/`, `/${t}/`);
        item.filePathStem = item.filePathStem.replace(regexTrees, `/${t}/`);

        if (!item.filePathStem.startsWith(pathTree)) {
          item.filePathStem = item.filePathStem.replace(`/${item.data.lang}/`, pathTree);
        //   url = item.data.lang === 'en' ? `/${t}${item.url}` : item.url.replace(`/${item.data.lang}/`, pathTree);
        }

        item.filePathStem.replace('/', '').replace('/index', '').split('/').forEach((part, i, arr) => {
          const existingPath = findWhere(currentLevel, 'name', part);

          if (existingPath) {
            if (i ===  arr.length - 1 && !Object.hasOwn(existingPath, 'url')) {
              existingPath.filePathStem = item.filePathStem;
              existingPath.url = url;
              existingPath.order = item.data.order;
              existingPath.title = item.data.title;
              existingPath.hasData = !!item.template.frontMatter.content;
            }

            currentLevel = existingPath.children;
          } else {
            let newPart = {
              name: part,
              children: []
            }

            if (i ===  arr.length - 1) {
              newPart.filePathStem = item.filePathStem;
              newPart.url = url;
              newPart.order = item.data.order;
              newPart.title = item.data.title;
              newPart.hasData = !!item.template.frontMatter.content;
            }

            currentLevel.push(newPart);
            currentLevel = newPart.children;
          }
        });
      });
    });

    function findWhere(array, key, value) {
      t = 0;
      while (t < array.length && array[t][key] !== value) { t++; };

      if (t < array.length) {
        return array[t];
      } else {
        return false;
      }
    }

    return tree;
  });
}