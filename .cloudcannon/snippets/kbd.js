module.exports = {
  anchor_id: {
    snippet: "<kbd>[[kbd]]</kbd>",
    inline: true,
    preview: {
      text: "kbd",
      subtext: [
        { template: "{kbd}" },
        { template: "Add a kbd element" }
      ],
      icon: "keyboard"
    },
    params: {
      kbd: {
        parser: "content",
        options: {
          editor_key: "kbd",
        }
      }
    }
  }
}