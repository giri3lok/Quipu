const { I } = inject();

module.exports = {
  webElements: {
    homepage: "#home",
    loginButton: "#page-nav-signup",
    sliderbar: "ul[class*=sidebar-menu]",
    searchButton: "#search",
    searchPlaceholder: 'input[placeholder="Search for Expert or category"]',
    newresult: "ul.toolbar-autosuggest>li",
    showAllResult: "ul.toolbar-autosuggest>li:last-of-type",
    performerNameElements:
      "article[data-type=performer]>a>div:nth-of-type(2)>.thumb-data-item--name-container>div",
    userPageTitle: "h1.listpage-title",
    checkLiveStatus:
      ".thumb--modern[data-status='1'] .status-text--live, .thumb--modern[data-status='2'] .status-text--live, .thumb--modern[data-status='3'] .status-text--live",
    checkbedgeLive: "div[data-testid='badgeLive']",
    getCreditBtn: "div[data-id='buyCreditIcon']",
    getJoinBth: "button[data-testid='joinNowButtonApplet']",
    getAddToFavBth: "div[data-testid='favoriteIconLeft']",
    getSurpriseIcon: "div[data-id='surpriseIcon']",
    getSurpriseOneCredit: "[data-testid='surpriseListBottom']>:nth-of-type(1)",
    getSurpriseFiveCredit: "[data-testid='surpriseListBottom']>:nth-of-type(2)",
    getSurpriseTenCredit: "[data-testid='surpriseListBottom']>:nth-of-type(3)",
    getSurpriseTwentyFiveCredit:
      "[data-testid='surpriseListBottom']>:nth-of-type(4)",
    getStartSessionBtn: "div[data-arma-state='private']",
    surpriseListBottom: "[data-testid='surpriseListBottom']>.mc_surprise_item",
    mainLoginSignUpOverlayApplet:
      "[data-testid='mainLoginSignUpOverlayApplet']",
    closeDialogButton:
      ".mc_js_login_or_signup>div>.mc_dialog__close.js_close_dialog",
    categorySideFilter: ".sidebar-filters",
    performerCategoryList:
      "article[data-type='performer'] .thumb-data-willingness-list",
  },

  // Verification Methods
  async verifyHomePage() {
    I.amOnPage("/");
    await I.grabTextFrom(this.webElements.homepage);
    I.seeElement(this.webElements.sliderbar);
  },

  async verifyHomePageWithGuestUser() {
    I.amOnPage("/");
    await I.grabTextFrom(this.webElements.homepage);
    I.seeElement(this.webElements.loginButton);
  },

  // Search Methods
  typeInSearch(searchTerm) {
    I.seeElement(this.webElements.searchPlaceholder);
    I.fillField(this.webElements.searchPlaceholder, searchTerm);
    I.wait(2);
  },

  async matchName(searchTerm) {
    const elements = await I.grabTextFromAll(this.webElements.newresult);
    const matcher = new RegExp(searchTerm, "i");
    elements.forEach((text) => {
      I.assertMatchRegex(text, matcher);
    });
  },

  async clickOnSearchResult() {
    await I.click(this.webElements.showAllResult);
  },

  async countAndValidatePerformerNameElements(name) {
    I.seeElement(this.webElements.userPageTitle, 5);
    const elements = await I.grabTextFromAll(this.webElements.performerNameElements);
    elements.forEach((text) => {
      I.assertContains(text.toLowerCase(), name.toLowerCase());
    });
    return elements.length;
  },

  // Category Methods
  async chooseCategory(category) {
    await I.click(category, this.webElements.categorySideFilter);
  },

  async validateCategoryFilter(selectedCategory) {
    const categoryList = await I.grabTextFromAll(
      this.webElements.performerCategoryList
    );
    categoryList.forEach((text) => {
      I.assertContains(text, selectedCategory);
      const splitCategories = text.split("\n");
      const uniqueCategories = new Set(splitCategories);
      I.assertEqual(splitCategories.length, uniqueCategories.size);
    });
  },

  // Surprise Modal Methods
  async openSurpriseModal() {
    await I.click(this.webElements.getSurpriseIcon);
  },

  async clickAndCheckSurpriseElements() {
    const numberOfElements = await I.grabNumberOfVisibleElements(
      this.webElements.surpriseListBottom
    );

    for (let i = 1; i <= numberOfElements; i++) {
      const elementSelector = `${this.webElements.surpriseListBottom}:nth-of-type(${i})`;
      await I.click(elementSelector);
      await I.seeElement(this.webElements.mainLoginSignUpOverlayApplet);
      await I.click(this.webElements.closeDialogButton);
      I.wait(1);
    }
  },

  // Live Stream Methods
  async checkLiveStream() {
    await I.click(this.webElements.checkLiveStatus);
    await I.seeElement(this.webElements.checkbedgeLive);
  },

  // Additional Actions
  async clickGetCreditButton() {
    await I.click(this.webElements.getCreditBtn);
  },

  async clickJoinNowButton() {
    await I.waitForVisible(this.webElements.getJoinBth, 10);
    I.waitForText("JOIN NOW");
  },

  async addToFavorites() {
    await I.click(this.webElements.getAddToFavBth);
  },

  async startSession() {
    await I.forceClick(this.webElements.getStartSessionBtn);
  },
};