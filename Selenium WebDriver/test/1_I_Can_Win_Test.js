const iCanWin = require("../pom/I_Can_Win");

describe("WebDriver-[I Can Win]", function () {
  it("Open https://pastebin.com/ service.", async function () {
    await iCanWin.urlLink("https://pastebin.com/");
  });

  it("Paste given code into textare", async function () {
    await iCanWin.pasteCode("postform-text", "Hello from WebDriver");
  });

  it("Choose expiration time period", async function () {
    await iCanWin.expirePeriod(
      "select2-postform-expiration-container",
      "10 Minutes"
    );
  });

  it("Paste page name, title", async function () {
    await iCanWin.addTitle("postform-name", "helloweb");
    await iCanWin.qiut();
  });
});
