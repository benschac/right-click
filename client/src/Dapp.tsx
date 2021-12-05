import { useEthers } from "@usedapp/core";
import React from "react";

export const Dapp: React.FC = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  return (
    <div>
      {!account ? (
        <button onClick={() => activateBrowserWallet()}>Connect Wallet</button>
      ) : (
        <button onClick={deactivate}>Deactivate</button>
      )}

      {account && <p>Account: {account}</p>}
    </div>
  );
};
