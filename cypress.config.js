const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/regression/*.js',
    viewportHeight: 900,
    viewportWidth: 1440,
  },
});
