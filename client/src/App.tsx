import React from "react";

import { DAppProvider } from "@usedapp/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Root } from "./Root";
import { Dapp } from "./Dapp";
import { config } from "./config";

// eslint-disable-next-line
const App = () => {
  return (
    <DAppProvider {...{ config }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="about" element={<About />} />
          <Route path="app" element={<Dapp />} />
        </Routes>
      </BrowserRouter>
    </DAppProvider>
  );
};

export default App;
