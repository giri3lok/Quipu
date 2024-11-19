const { I, homePage, And } = inject();
Given("I navigate to Oranum application as a guest user", async () => {
  await homePage.verifyHomePagewithasGuestUser();
});

When("I click on the psychic with live button", async () => {
  await homePage.checkLiveStream();
});

Then("I should navigate to chat url with psychic as LIVE badge", async () => {
  await homePage.navigateToExpectedUrlAndCheckLiveStatus();
});
When("I click on Get Credits button",async ()=>{
  homePage.clickGetCreditBtn()
});

Then("a sign up modal is showed", async ()=>{
  homePage.signInBtn();
});

When("I press add to favorites",async ()=>{
  homePage.addToFav()
});

Then("I clicks to get a surprise buttons and show signup modals", async ()=>{
await homePage.clickAndCheckSurpriseElements();
});

When("I press to start private session", async()=>{
  homePage.getStartedSessionBtn();
});

