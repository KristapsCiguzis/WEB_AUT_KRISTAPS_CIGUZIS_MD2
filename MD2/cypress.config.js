const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://katalon-demo-cura.herokuapp.com/"
  },
});