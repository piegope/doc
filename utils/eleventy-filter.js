const { toc } = require('../docs/_filters/toc');

module.exports = (config) => {
  config.addFilter('localized', function (value) {
    value = value.startsWith('/en/') ? value.replace('/en/', '/') : value;
    value = value.endsWith('/index') ? value.replace('/index', '/') : value;

    return value;
  });

  config.addFilter('toc', toc);

  config.addFilter('sortTree', function (array) {
    return array.sort((a, b) => {
      const aHas = typeof a.order !== 'undefined';
      const bHas = typeof b.order !== 'undefined';
      const aTitleHas = typeof a.title !== 'undefined'
      return bHas - aHas || (aHas === true && a.order - b.order) || (aTitleHas === true && a.title.localeCompare(b.title)) || a.name.localeCompare(b.name)
    })
  });
}