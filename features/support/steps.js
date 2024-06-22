const { Given, When, Then, Before, After } = require("cucumber");

Before(async function () {
  return await this.launchBrowser();
});

After(async function () {
  return await this.closeBrowser();
});

Given("User open login page", async function () {
  return await this.visit();
});

When("User enter username", async function () {
  return await this.enterUsername();
});

When("User enter password", async function () {
  return await this.enterPassword();
});

And("User click on Login button", async function () {
  return await this.submitLogin();
});

Then("User able to see application content", async function () {
  return await this.VerifySuccessLogin();
});
