import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Root } from "./Root";

// eslint-disable-next-line
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
