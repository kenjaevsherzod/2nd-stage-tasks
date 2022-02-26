const bringItOn = require("../pom/Bring_It_On");

describe("WebDriver-[Bring It On]", function () {
  it("Open https://pastebin.com/ service.", async function () {
    await bringItOn.urlLink("https://pastebin.com/");
  });

  it("Paste given code into textare", async function () {
    await bringItOn.pasteCode(
      "postform-text",
      'git config --global user.name "New Sheriff in Town"\n\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\ngit push origin master --force'
    );
  });

  it("Choose from syntax list Bash format", async function () {
    await bringItOn.dropdownValues("select2-postform-format-container", "Bash");
  });

  it("Choose expiration time period", async function () {
    await bringItOn.dropdownValues(
      "select2-postform-expiration-container",
      "10 Minutes"
    );
  });

  it("Paste page name, title", async function () {
    await bringItOn.addTitle(
      "postform-name",
      "how to gain dominance among developers"
    );
  });

  it("Save and click the button", async function () {
    await bringItOn.submitButton('//*[@id="w0"]/div[5]/div[1]/div[8]/button');
  });
});

describe("Save paste and check the following", function () {
  it("Browser page title matches Paste Name / Title", async function () {
    await bringItOn.pageTitleCheck(
      "how to gain dominance among developers - Pastebin.com"
    );
  });

  it("Syntax is suspended for bash", async function () {
    await bringItOn.valCheck(
      "body > div.wrap > div.container > div.content > div.post-view > div.highlighted-code > div.top-buttons > div.left > a",
      "Bash"
    );
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    await bringItOn.valCheck(
      "body > div.wrap > div.container > div.content > div.post-view > textarea",
      'git config --global user.name "New Sheriff in Town"\n\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\ngit push origin master --force'
    );
    await bringItOn.qiut();
  });
});
