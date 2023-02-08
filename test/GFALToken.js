const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const {expect} = require("chai");
const {ethers} = require("hardhat");

const totalSupply = ethers.utils.formatEther('10000000000000000000000000000') // inWei to Ether

describe("GFALToken", () => {
  async function deployContracts() {
    const accounts = await ethers.getSigners();
    const owner = accounts[0]
    const user = accounts[1]
    
    const GFALToken = await ethers.getContractFactory("GFALToken");
    const contract = await GFALToken.deploy();

    return {contract, owner, user};
  }

  it("Unit OK: Initial Supply is correct and sender hold it", async function () {
    const {contract, owner} = await loadFixture(deployContracts);

    expect(ethers.utils.formatEther(await contract.totalSupply())).to.equal(totalSupply, 'Initial totalSupply exceeds the pre-minting one.');
    expect(ethers.utils.formatEther(await contract.balanceOf(owner.address))).to.equal(totalSupply, 'Deployer account doesn\'t hold the pre-minting totalSupply.');
  });

  it("Unit OK: Transfer $GFAL from Deployer to an User address", async function () {
    const {contract, owner, user} = await loadFixture(deployContracts);
    const transferAmount = ethers.utils.parseEther('100')

    // Initial balances
    const deployerInitialBalance = ethers.utils.formatEther(await contract.balanceOf(owner.address))
    const userInitialBalance = ethers.utils.formatEther(await contract.balanceOf(user.address))
    // Expect that deployer hold the totalSupply and User nothing
    expect(deployerInitialBalance).to.equal(totalSupply, 'Deployer account doesn\'t hold the pre-minting totalSupply.');
    expect(userInitialBalance).to.equal('0.0', 'User account shouldn\'t hold nothing.');
    // Deployer transfers 100 $GFAL to User
    await contract.transfer(user.address, transferAmount, {
      from: owner.address
    })
    // After balances
    const deployerAfterBalance = ethers.utils.formatEther(await contract.balanceOf(owner.address))
    const userAfterBalance = ethers.utils.formatEther(await contract.balanceOf(user.address))
    // Expect that deployer hold the totalSupply less transferAmount and User transferAmount
    expect(deployerAfterBalance).to.equal('9999999900.0', 'Deployer account should hold the pre-minting totalSupply less the transferAmount.'); // deployerInitialBalance - transferAmount
    expect(userAfterBalance).to.equal('100.0', 'User account should hold the transferAmount.'); // userInitialBalance + transferAmount
  });
});