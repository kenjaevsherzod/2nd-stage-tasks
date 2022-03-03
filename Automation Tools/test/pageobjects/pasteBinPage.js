const BasePage = require("./basePage");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PasteBinPage extends BasePage {
  /**
   * define selectors using getter methods
   */

  get textareaToPasteCode() {
    return $("#postform-text");
  }

  get syntax() {
    return $("#select2-postform-format-container");
  }

  get syntaxVal() {
    return $('//li[text()="Bash"]');
  }

  get expireTime() {
    return $("#select2-postform-expiration-container");
  }

  get expireVal() {
    return $('//li[text()="10 Minutes"]');
  }

  get pasteTitle() {
    return $("#postform-name");
  }

  get pasteButton() {
    return $('button[type="submit"]');
  }

  get checkSyntax() {
    return $("div.left > a");
  }

  get checkCode() {
    return $("div.source");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  // Paste the given code inside textarea.
  async pasteCode() {
    await this.textareaToPasteCode.waitForExist();
    await this.textareaToPasteCode.setValue(
      'git config --global user.name "New Sheriff in Town"\n\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\ngit push origin master --force'
    );
  }

  // Set Syntax Highlighting: "Bash"
  async setSyntax() {
    await this.syntax.waitForExist();
    await this.syntax.click();
    await this.syntaxVal.waitForExist();
    await this.syntaxVal.click();
  }

  // Set Paste Expiration: "10 Minutes"
  async setExpireTime() {
    await this.expireTime.waitForExist();
    await this.expireTime.click();
    await this.expireVal.waitForExist();
    await this.expireVal.click();
  }

  // Paste Name / Title: "how to gain dominance among developers"
  async setPasteTitle() {
    await this.pasteTitle.waitForExist();
    await this.pasteTitle.setValue("how to gain dominance among developers");
  }

  async clickCreateButton() {
    await this.pasteButton.waitForExist();
    await this.pasteButton.click();
  }

  //Syntax is suspended for bash
  async syntaxCheck() {
    await this.checkSyntax.waitForExist();
    return await this.checkSyntax.getText();
  }

  // Check that the code matches the one entered in paragraph 2
  async codeCheck() {
    await this.checkCode.waitForExist();
    return await this.checkCode.getText();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  openURL() {
    return super.openURL("https://pastebin.com/");
  }
}

module.exports = new PasteBinPage();
