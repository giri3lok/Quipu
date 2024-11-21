const { I, homePage } = inject();

// Utility Functions for Reuse
const searchActions = {
  async searchAndVerifyResults(searchTerm) {
    await homePage.typeInSearch(searchTerm);
    await homePage.matchName();
  },
  
  async validateSearchResultsContain(name) {
    await homePage.countAndValidatePerformerNameElements(name);
  },
  
  async showAllResults() {
    await homePage.clickOnSearchResult();
  }
};

const categoryActions = {
  async chooseAndValidateCategory(category) {
    await homePage.chooseCategory(category);
    await homePage.validateCategoryFilter();
  }
};

// Step Definitions
Given("I navigate to Oranum web application home page", async () => {
  await homePage.verifyHomePage();
});

When("I type {string} in the search", async (searchTerm) => {
  await searchActions.searchAndVerifyResults(searchTerm);
});

Then("only matching names are displayed in search dropdown", async () => {
  await homePage.matchName();
});

Then("user clicks on show all results with name", async () => {
  await searchActions.showAllResults();
});

Then("all results contain {string} in the search list displayed", async (name) => {
  await searchActions.validateSearchResultsContain(name);
});

When("I choose a {string}", async (category) => {
  await categoryActions.chooseAndValidateCategory(category);
});

Then("the profile matches the current category", async () => {
  await homePage.validateCategoryFilter();
});