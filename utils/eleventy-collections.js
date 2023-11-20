module.exports = (config) => {
  config.addCollection('doc', function(collectionApi) {
    return collectionApi.getFilteredByGlob('**/content/**/*.md');
  });
}