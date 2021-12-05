import { ChainId, Config } from "@usedapp/core";

export const config: Config = {
  // TODO - add local and test chains
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};
