const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges: true,
  reporter: "mochawesome",

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.feature",
    baseUrl: "http://localhost:3000/",
    excludeSpecPattern: ["*.js"],
  },
});
