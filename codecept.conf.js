exports.config = {
  output: './output',  
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.oranum.com/en",
      show: false,
      waitForNavigation: "load",
      restart: false,
      windowSize: "1920x1080",
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
  },
  include: {
    I: "./steps_file.js",
    homePage: "./pages/homePage.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: "./step_definitions/*.js",
  },
  allure: {
    output: './output/allure-results'
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: "./output/allure-results",
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {
      enabled: false
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: false,
      screenshotsForAllureReport: true,
      output: "./output",
      deleteSuccessful: false
    },
  },
  stepTimeout: 0,
  stepTimeoutOverrides: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./features/*",
  name: "Oranum",
  
};
