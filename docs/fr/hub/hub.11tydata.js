module.exports = function() {
  return {
    layout: 'layouts/markdown.njk',
    trees: ['hub'],
    tree: 'hub',
    searchTags: [
      { 'label': 'Devolutions Hub', 'facet': 'doc' }
    ]
  }
}