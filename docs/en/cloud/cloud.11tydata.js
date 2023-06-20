module.exports = function() {
  return {
    layout: 'layouts/markdown.njk',
    trees: ['cloud'],
    tree: 'cloud',
    searchTags: [
      { 'label': 'Cloud Services', 'facet': 'doc' }
    ]
  }
}