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
    getSurpriceIcon: "div[data-id='surpriseIcon']",
    getSurpriceOneCredit: "[data-testid='surpriseListBottom']>:nth-of-type(1)",
    getSurpricefiveCredit: "[data-testid='surpriseListBottom']>:nth-of-type(2)",
    getSurpriceTenCredit: "[data-testid='surpriseListBottom']>:nth-of-type(3)",
    getSurpriceTwentyFiveCredit:
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

  async verifyHomePage() {
    I.amOnPage("/");
    await I.grabTextFrom(this.webElements.homepage);
    I.seeElement(this.webElements.sliderbar);
  },

  typeInSearch(searchTerm) {
    this.searchTerm = searchTerm;
    I.seeElement(this.webElements.searchPlaceholder);
    I.fillField(this.webElements.searchPlaceholder, searchTerm);
    I.wait(2);
  },

  async matchName() {
    const ele = await I.grabTextFromAll(this.webElements.newresult);
    const matcher = new RegExp(this.searchTerm, "i");
    ele.forEach((text) => {
      I.assertMatchRegex(text, matcher);
    });
  },

  async clickOnSearchResult() {
    await I.click(this.webElements.showAllResult);
  },

  async countAndValidatePerformerNameElements(name) {
    I.seeElement(this.webElements.userPageTitle, 5);
    const elements = await I.grabTextFromAll(
      this.webElements.performerNameElements
    );
    const count = elements.length;
    for (const text of elements) {
      I.assertContains(text.toLowerCase(), name);
    }
    I.assertEquals(elements.length, count);
    return count;
  },

  async checkLiveStream() {
    await I.click(this.webElements.checkLiveStatus);
  },
  async verifyHomePagewithasGuestUser() {
    I.amOnPage("/");
    await I.grabTextFrom(this.webElements.homepage);
    I.seeElement(this.webElements.loginButton);
  },

  async navigateToExpectedUrlAndCheckLiveStatus() {
    const elementCount = I.seeElement(this.webElements.checkLiveStatus);
    await I.click(this.webElements.checkLiveStatus);
    await I.seeElement(this.webElements.checkbedgeLive);
  },

  async clickGetCreditBtn() {
    await I.click(this.webElements.getCreditBtn);
  },

  async signInBtn() {
    await I.waitForVisible, (this.webElements.getJoinBth, timeout._10s);
    I.waitForText("JOIN NOW");
  },

  async addToFav() {
    await I.click(this.webElements.getAddToFavBth);
  },
  async getStartedSessionBtn() {
    await I.forceClick(this.webElements.getStartSessionBtn);
  },

  async getSurpriceModel() {
    await I.click(this.webElements.getSurpriceIcon);
  },

  async clickAndCheckSurpriseElements() {
    const numberOfElements = await I.grabNumberOfVisibleElements(
      this.webElements.surpriseListBottom
    );

    for (let i = 1; i <= numberOfElements; i++) {
      const elementSelector = `${this.webElements.surpriseListBottom}:nth-of-type(${i})`;
      // Click on the nth element
      await I.click(elementSelector);
      // Check if mainLoginSignUpOverlayApplet is present
      await I.seeElement(this.webElements.mainLoginSignUpOverlayApplet);
      // Perform click to close the dialog
      await I.click(this.webElements.closeDialogButton);
      await I.wait(1)
    }
  },

  async chooseCategory(category) {
    await I.click(category, this.webElements.categorySideFilter);
    this.selectedCategory = category;
  },
  async validateCategoryFilter() {
    const categorylist = await I.grabTextFromAll(
      this.webElements.performerCategoryList
    );
    categorylist.forEach((element) => {
      I.assertContain(element, this.selectedCategory);
      //unique contegory
      const cateList = element.split("\n");
      const uniquecateList = new Set(cateList);
      I.assertEqual(cateList.length, uniquecateList.size);
    });
  },
};
