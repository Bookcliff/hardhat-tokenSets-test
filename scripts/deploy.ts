import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-toolbox";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const setTokenCreatorAddress = "0xeF72D3278dC3Eba6Dc2614965308d1435FFd748a";
  const Set = await ethers.getContractFactory("SetTokenCreator");
  console.log("Deploying contract");
  const set = await Set.deploy();
  console.log("Contract deployed to:", set.getAddress());
  // const setContract = await Set.attach(setTokenCreatorAddress);

  // console.log(setContract);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
