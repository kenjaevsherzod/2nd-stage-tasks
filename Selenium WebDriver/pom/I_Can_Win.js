const BasePage = require("./basePage");
const { By, until } = require("selenium-webdriver");

class ICanWin extends BasePage {
  // Code: "Hello from WebDriver"
  async pasteCode(id, code) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.findElement(By.id(id)).sendKeys(code);
  }

  // Paste Expiration: "10 Minutes"
  async expirePeriod(id, value) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.findElement(By.id(id)).click();
    await driver.wait(
      until.elementLocated(By.xpath(`//li[text()="${value}"]`)),
      5000
    );
    await driver.sleep(200);
    await driver.findElement(By.xpath(`//li[text()="${value}"]`)).click();
  }

  // Paste Name / Title: "helloweb"
  async addTitle(id, title) {
    await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.findElement(By.id(id)).sendKeys(title);
  }
}

module.exports = new ICanWin();
