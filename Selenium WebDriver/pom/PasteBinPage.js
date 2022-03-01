const BasePage = require("./basePage");
const { By, until } = require("selenium-webdriver");
var should = require("chai").should();

class PasteBinPage extends BasePage {
  // Paste the given code inside textarea.
  async pasteCode(elem, code) {
    await driver.wait(until.elementLocated(By.id(elem)), 5000);
    await driver.findElement(By.id(elem)).sendKeys(code);
  }

  // Set Syntax Highlighting: "Bash" and Paste Expiration: "10 Minutes"
  async dropdownValues(elem, value) {
    await driver.wait(until.elementLocated(By.id(elem)), 5000);
    await driver.findElement(By.id(elem)).click();
    await driver.wait(
      until.elementLocated(By.xpath(`//li[text()="${value}"]`)),
      5000
    );
    await driver.findElement(By.xpath(`//li[text()="${value}"]`)).click();
  }

  // Paste Name / Title: "how to gain dominance among developers"
  async addTitle(elem, title) {
    await driver.wait(until.elementLocated(By.id(elem)), 5000);
    await driver.findElement(By.id(elem)).sendKeys(title);
  }

  async submitButton(elem) {
    await driver.findElement(By.css(elem)).click();
  }

  //3. Save paste and check the following: * Browser page title matches Paste Name / Title * Syntax is suspended for bash * Check that the code matches the one entered in paragraph 2

  // Browser page title matches Paste Name / Title
  async pageTitleCheck() {
    await driver.wait(
      until.titleIs("how to gain dominance among developers - Pastebin.com")
    );
    let title = await driver.getTitle();
    return title;
  }

  //Syntax is suspended for bash and Check that the code matches the one entered in paragraph 2
  async valCheck(elem) {
    await driver.wait(until.elementLocated(By.css(elem)), 10000);
    let val = await driver.findElement(By.css(elem)).getText();
    return val;
  }
}

module.exports = new PasteBinPage();
