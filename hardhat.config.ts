import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/SOW8HheZUdSal1ZIu7A3gqLAU4ijoPva`,
        blockNumber: 14792479,
      },
    },
  },
};

export default config;
