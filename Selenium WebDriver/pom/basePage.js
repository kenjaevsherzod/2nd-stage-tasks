const { Builder } = require("selenium-webdriver");
let driver = new Builder().forBrowser("chrome").build();

module.exports = class BasePage {
  constructor() {
    //Using global variable to use it in child classes
    global.driver = driver;
  }

  //Setting function in order to open given URLs.
  async openURL(url) {
    await driver.get(url);
  }

  //Setting function in order to quit the test and close the window.
  async closeWindow() {
    await driver.quit();
  }
};
