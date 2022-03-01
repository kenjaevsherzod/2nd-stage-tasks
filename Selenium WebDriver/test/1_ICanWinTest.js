const PasteBinPage = require("../pom/PasteBinPage");

describe("WebDriver-[I Can Win]", function () {
  it("Open https://pastebin.com/ service.", async function () {
    await PasteBinPage.openURL("https://pastebin.com/");
  });

  it("Paste given code into textarea", async function () {
    await PasteBinPage.pasteCode("postform-text", "Hello from WebDriver");
  });

  it("Choose expiration time period", async function () {
    await PasteBinPage.dropdownValues(
      "select2-postform-expiration-container",
      "10 Minutes"
    );
  });

  it("Paste page name, title", async function () {
    await PasteBinPage.addTitle("postform-name", "helloweb");
    await PasteBinPage.closeWindow();
  });
});
