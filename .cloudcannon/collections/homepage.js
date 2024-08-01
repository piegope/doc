function homepageConfig(name, code) {
  if (!name || !code) {
    throw new Error("Both name and code are required to generate a topic configuration.");
  }

  return {
    name: name,
    path: `content/${code}`,
    schemas: {
      default: {
        path: ".cloudcannon/schemas/homepage.md"
      }
    },
    _enabled_editors: [
      "content",
      "visual"
    ],
    output: true
  }
}

module.exports = {
  homepageEn: homepageConfig("English", "en"),
  homepageFr: homepageConfig("French", "fr"),
  homepageDe: homepageConfig("Deutsch", "de")
}