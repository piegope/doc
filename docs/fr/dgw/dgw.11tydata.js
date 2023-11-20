module.exports = () => ({
  layout: 'layouts/markdown.njk',
  pagination: {
    data: 'trees',
    size: 1,
    alias: 'tree'
  },
  templateEngineOverride: "njk,md",
  permalink: '{{ (page.filePathStem.replace("dgw/", tree + "/dgw/") if tree !== "dgw" else page.filePathStem) | localized }}/',
  trees: [
    'hub',
    'server',
  ]
});