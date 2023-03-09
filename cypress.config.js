const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges: true,
  experimentalWebKitSupport: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterConfig.json",
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/e2e.feature",
    baseUrl: "https://bstackdemo.com/",
    excludeSpecPattern: ["*.js"],
  },
});
