const PasteBinPage = require("../pom/PasteBinPage");
var should = require("chai").should();

describe("WebDriver-[Bring It On]", function () {
  it("Open https://pastebin.com/ service.", async function () {
    await PasteBinPage.openURL("https://pastebin.com/");
  });

  it("Paste given code into textarea", async function () {
    await PasteBinPage.pasteCode(
      "postform-text",
      'git config --global user.name "New Sheriff in Town"\n\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\ngit push origin master --force'
    );
  });

  it("Choose from syntax list Bash format", async function () {
    await PasteBinPage.dropdownValues(
      "select2-postform-format-container",
      "Bash"
    );
  });

  it("Choose expiration time period", async function () {
    await PasteBinPage.dropdownValues(
      "select2-postform-expiration-container",
      "10 Minutes"
    );
  });

  it("Paste page name, title", async function () {
    await PasteBinPage.addTitle(
      "postform-name",
      "how to gain dominance among developers"
    );
  });

  it("Save and click the button", async function () {
    await PasteBinPage.submitButton('button[type="submit"]');
  });

  //"Save paste and check the following"

  it("Browser page title matches Paste Name / Title", async function () {
    let pageTitle = await PasteBinPage.pageTitleCheck();
    pageTitle.should.equal(
      "how to gain dominance among developers - Pastebin.com"
    );
  });

  it("Syntax is suspended for bash", async function () {
    let syntax = await PasteBinPage.valCheck("div.left > a");
    syntax.should.equal("Bash");
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    let code = await PasteBinPage.valCheck("div.source");
    code.should.equal(
      'git config --global user.name "New Sheriff in Town"\n\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\ngit push origin master --force'
    );
    await PasteBinPage.closeWindow();
  });
});
