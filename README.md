# CodeceptJS Framework with BBD

RECOMMENDED SECTIONS TO READ AND FOLLOW:
    - 1. Clone this project from [GitHub]
    - 2. Setup Instructions
    - 3. Install Pre-Requisites
    - 4 .Install all dependency
    - 5. Run the tests locally

## 1. Clone this project from [GitHub](https://github.com/giri3lok/Quipu.git)

## 2. Setup Instructions
Gitignore: Update .gitignore to avoid uploads of test-results and node_modules
Node.js: Ensure you have Node.js installed (version 12.x or higher).
Install Playwright: If you haven’t already, install Playwright by running:

## 3. Install Pre-Requisites
Install Latest Node.js: Version. After installation verify the Version of Node and npm

## 4. Install this project from the ground 

# Install CodeceptJs - Dev dependencies (including Allure)
npm cache clear –force
npm install --save-dev @codeceptjs/allure-legacy @codeceptjs/configure @codeceptjs/examples @codeceptjs/ui allure-commandline codeceptjs playwright
npm install --save codeceptjs-chai
npm audit fix --legacy-peer-deps
npx playwright test --reporter=allure-playwright
npm install allure-commandline --save-dev –force
npm i @codeceptjs/ui --save

# Run a single scenario to check if everything works:
npx codeceptjs run --features --grep '@getSearchTerm' --steps

# To Run all tests at once:
npm run codeceptjs

# To Generate Allure Report
npx allure generate ./output/allure-results --clean -o allure-report

# To check reports
npx allure open allure-report

# To run without headless browser below config need to be changed, currently its running in chromium browser, to run in headless we need to change config setting to show as false, inside helpers

  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.oranum.com/en",
# show: false,
      waitForNavigation: "load",
      restart: false,
      windowSize: "1920x1080",
    },