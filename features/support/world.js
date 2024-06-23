const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const { puppeteer } = require("puppeteer");

class CustomWorld {
  async launchBrowser() {
    this.browser = await puppeteer.launch({ headless: true });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }

  async visit() {
    await this.page.goto("https://practicesoftwaretesting.com/#/auth/login");
  }

  async enterUsername() {
    await this.page.waitForSelector(`#email`);
    await this.page.type(`#email`, `admin@practicesoftwaretesting.com`);
  }

  async enterPassword() {
    await this.page.waitForSelector(`#password`);
    await this.page.type(`#password`, `welcome01`);
  }

  async submitLogin() {
    await this.page.click(`input[value='Login']`);

    const urlPage = await page.url();

    expect(urlPage).to.be.a(
      "string",
      "https://practicesoftwaretesting.com/#/account"
    );
  }

  async VerifySuccessLogin() {}
}

setWorldConstructor(CustomWorld);
