const BasePage = require("./basePage");
const { By, until } = require("selenium-webdriver");
var should = require("chai").should();

class BringItOn extends BasePage {
  // Paste the given code inside textarea.
  async pasteCode(id, code) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.findElement(By.id(id)).sendKeys(code);
  }

  // Set Syntax Highlighting: "Bash" and Paste Expiration: "10 Minutes"
  async dropdownValues(id, value) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.findElement(By.id(id)).click();
    await driver.wait(
      until.elementLocated(By.xpath(`//li[text()="${value}"]`)),
      5000
    );
    await driver.sleep(300);
    await driver.findElement(By.xpath(`//li[text()="${value}"]`)).click();
  }

  // Paste Name / Title: "how to gain dominance among developers"
  async addTitle(id, title) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.findElement(By.id(id)).sendKeys(title);
  }

  async submitButton(xpath) {
    await driver.findElement(By.xpath(xpath)).click();
  }

  //3. Save paste and check the following: * Browser page title matches Paste Name / Title * Syntax is suspended for bash * Check that the code matches the one entered in paragraph 2

  // Browser page title matches Paste Name / Title
  async pageTitleCheck(title) {
    await driver.sleep(3000);
    let titlePage = await driver.getTitle().then(function (txt) {
      return txt;
    });

    titlePage.should.equal(title);
  }

  //Syntax is suspended for bash and Check that the code matches the one entered in paragraph 2
  async valCheck(css, val) {
    await driver.wait(until.elementLocated(By.css(css)), 10000);
    let isVal = await driver
      .findElement(By.css(css))
      .getText()
      .then(function (txt) {
        return txt;
      });

    isVal.should.equal(val);
  }
}

module.exports = new BringItOn();
