const BasePage = require("./basePage");
const { By, Key, until } = require("selenium-webdriver");

class hurtMePlenty extends BasePage {
  //By clicking the search button enter in the search field "Google Cloud Platform Pricing Calculator"
  async searchBox(name, keys) {
    await driver.wait(until.elementLocated(By.name(name)), 10000);
    let searchIt = await driver.findElement(By.name(name));
    await searchIt.sendKeys(keys);
    await driver.sleep(1000);
    await searchIt.sendKeys(Key.ENTER);
  }

  //In the search results, click "Google Cloud Platform Pricing Calculator" and go to the calculator page.
  async clickFirstLink(link) {
    await driver.wait(until.elementLocated(By.linkText(link)), 10000);
    await driver.findElement(By.linkText(link)).click();
  }

  //Switch between frames
  async swithToFrame() {
    await driver.switchTo().frame(0);
    await driver
      .switchTo()
      .frame(driver.findElement(By.xpath("/html/body/div/div/div/iframe")));
  }

  //Set Number of instances: 4
  async setNumOfInstances(css, value) {
    await driver.wait(until.elementLocated(By.css(css)), 5000);
    await driver.findElement(By.css(css)).sendKeys(value);
  }

  //Working with dropdowns: Operating System, VM Class, Instance type, GPUs with Type and Number, Local SSD, Location, Usage Period
  async setDropdowns(css, value) {
    await driver.wait(until.elementLocated(By.css(css)), 5000);
    await driver.sleep(200);
    await driver.findElement(By.css(css)).click();
    await driver.wait(until.elementLocated(By.css(value)), 5000);
    await driver.sleep(200);
    await driver.findElement(By.css(value)).click();
  }

  //Choosing GPU Checkbox
  async checkboxGpu(css) {
    await driver.wait(until.elementLocated(By.css(css)), 5000);
    await driver.findElement(By.css(css)).click();
  }

  //Click Add to Estimate
  async clickEstimate(css) {
    await driver.wait(until.elementLocated(By.css(css)), 5000);
    await driver.findElement(By.css(css)).click();
  }

  //Check the correspondence of the data of the following fields: VM Class, Instance type, Region, local SSD, commitment term
  async getValueCheck(val, index) {
    await driver.wait(until.elementLocated(By.xpath(val)), 5000);
    let value = await driver
      .findElement(By.xpath(val))
      .getText()
      .then(function (txt) {
        return txt;
      });

    return await value.split(" ")[index];
  }
}

module.exports = new hurtMePlenty();
