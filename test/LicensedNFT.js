const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Licensed NFT", function () {
  async function deployFixture() {
    const LicensedNFT = await ethers.getContractFactory("LicensedNFT");
    const licensedNFT = await LicensedNFT.deploy();
    await licensedNFT.deployed();

    return { licensedNFT };
  }

  describe("Deploys the token correctly", () => {
    it("has the right name", async () => {
      const { licensedNFT } = await loadFixture(deployFixture);

      expect(await licensedNFT.name()).to.be.equal("LicensedNFT");
    });

    it("has the right symbol", async () => {
      const { licensedNFT } = await loadFixture(deployFixture);

      expect(await licensedNFT.symbol()).to.be.equal("LNFT");
    });

    it("has the right license", async () => {
      const { licensedNFT } = await loadFixture(deployFixture);

      expect(await licensedNFT.getLicenseName()).to.be.equal("CBE_CC0");
    });

    it("has the right license uri", async () => {
      const { licensedNFT } = await loadFixture(deployFixture);

      expect(await licensedNFT.getLicenseURI()).to.be.equal(
        "ar://_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/0"
      );
    });
  });
});
