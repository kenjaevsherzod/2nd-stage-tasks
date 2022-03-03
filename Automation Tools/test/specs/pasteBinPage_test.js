const PasteBinPage = require("../pageobjects/pasteBinPage");
var should = require("chai").should();

describe("My Login application", () => {
  it("Open https://pastebin.com/ service.", async () => {
    await PasteBinPage.openURL();
  });

  it("Paste given code into textarea", async () => {
    await PasteBinPage.pasteCode();
  });

  it("Choose from syntax list Bash format", async () => {
    await PasteBinPage.setSyntax();
  });

  it("Choose expiration time period", async () => {
    await PasteBinPage.setExpireTime();
  });

  it("Paste page name, title", async () => {
    await PasteBinPage.setPasteTitle();
  });

  it("Save and click the button", async function () {
    await PasteBinPage.clickCreateButton();
  });

  //"Save paste and check the following"

  it("Browser page title matches Paste Name / Title", async () => {
    await browser.waitUntil(
      async () =>
        (await browser.getTitle()) ===
        "how to gain dominance among developers - Pastebin.com",
      {
        timeout: 5000,
      }
    );
  });

  it("Syntax is suspended for bash", async function () {
    let syntax = await PasteBinPage.syntaxCheck();
    syntax.should.equal("Bash");
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    let code = await PasteBinPage.codeCheck();
    code.should.equal(
      'git config --global user.name "New Sheriff in Town"\n  git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n  git push origin master --force'
    );
  });
});
