const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges: true,
  experimentalWebKitSupport: true,
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/test-results-[hash].xml",
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/e2e.feature",
    baseUrl: "https://bstackdemo.com/signin",
    excludeSpecPattern: ["*.js"],
  },
});
