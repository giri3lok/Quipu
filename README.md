# CodeceptJS Framework with BBD

RECOMMENDED SECTIONS TO READ AND FOLLOW:
    - 1. Clone this project from [GitHub]
    - 2. Install all dependency
    - 3. Run the tests locally

## 1. Clone this project from [GitHub](https://github.com/masand24/Byborg.git)


## 2. Install this project from the ground 

# Install CodeceptJs - Dev dependencies (including Allure)
npm install -g npm
npm init -y
npm install codeceptjs playwright --save-dev
npm install -g allure-commandline --save-dev
npm i @codeceptjs/ui --save

# Run a single scenario to check if everything works:
npx codeceptjs run --features --grep '@getSearchTerm' --steps


# To Run all tests at once:
npx codeceptjs run --steps

# To check reports
npm run allure-report

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