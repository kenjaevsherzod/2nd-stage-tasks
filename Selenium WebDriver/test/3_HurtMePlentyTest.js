const HurtMePlenty = require("../pom/HurtMePlenty");
var should = require("chai").should();

describe("WebDriver-[Hurt Me Plenty]", function () {
  it("Open https://cloud.google.com/", async function () {
    await HurtMePlenty.openURL("https://cloud.google.com/");
  });

  it("CLick search buttton and enter 'Google Cloud Platform Pricing Calculator' then click search", async function () {
    await HurtMePlenty.searchBox(
      "q",
      "Google Cloud Platform Pricing Calculator"
    );
  });

  it("Click on the first value of search result 'Google Cloud Platform Pricing Calculator'", async function () {
    await HurtMePlenty.clickFirstLink(
      "Google Cloud Platform Pricing Calculator"
    );
  });

  it("Switch to iFrames", async function () {
    await HurtMePlenty.switchToFrame();
  });

  it("Set Number of instances: 4", async function () {
    await HurtMePlenty.setNumOfInstances(
      'input[ng-model="listingCtrl.computeServer.quantity"]',
      "4"
    );
  });

  it("Set Series", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.series"]',
      'md-option[value="n1"]'
    );
  });

  it("Set Machine value", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.instance"]',
      'md-option[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]'
    );
  });

  it("Select ADD GPU checkbox", async function () {
    await HurtMePlenty.checkboxGpu(
      'md-checkbox[ng-model="listingCtrl.computeServer.addGPUs"]'
    );
  });

  it("Select GPU type: NVIDIA Tesla V100", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.gpuType"]',
      'md-option[value="NVIDIA_TESLA_V100"]'
    );
  });

  it("Select Number of GPUs: 1", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.gpuCount"]',
      "#select_option_465"
    );
  });

  it("Select Local SSD: 2x375 Gb", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.ssd"]',
      "#select_option_442"
    );
  });

  it("Select Datacenter location: Frankfurt (europe-west3)", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.location"]',
      "#select_option_239"
    );
  });

  it("Select  Commited usage: 1 Year", async function () {
    await HurtMePlenty.setDropdown(
      'md-select[ng-model="listingCtrl.computeServer.cud"]',
      "#select_option_116"
    );
  });

  it("Click Add to Estimate", async function () {
    await HurtMePlenty.clickEstimate(
      'form[name="ComputeEngineForm"] > div > button'
    );
  });

  it('VM class should be equal to "Regular"', async function () {
    let vm = await HurtMePlenty.getValueCheck(
      'md-list-item[ng-if="item.items.editHook && item.items.editHook.initialInputs.class"]',
      2
    );
    vm.should.equal("regular");
  });

  it('Instance type should be equal to "n1-standard-8"', async function () {
    let instance = await HurtMePlenty.getValueCheck(
      'md-list-item > div[class="md-list-item-text ng-binding cpc-cart-multiline flex"]',
      2
    );
    instance.should.equal("n1-standard-8\nCommitted");
  });

  it('Region should be equal to "Frankfurt"', async function () {
    let region = await HurtMePlenty.getValueCheck(
      "#compute > md-list > md-list-item",
      1
    );
    region.should.equal("Frankfurt");
  });

  it('Commitment term should be equal to "1 Year"', async function () {
    let commit = await HurtMePlenty.getValueCheck(
      'md-list-item[ng-if="item.items.termText && item.items.termText.length != 0"]',
      2
    );
    commit.should.equal("1");
    await HurtMePlenty.closeWindow();
  });
});
