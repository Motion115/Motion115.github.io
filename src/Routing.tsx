import React from "react";
import { Route, Routes } from "react-router-dom";
import MiscInDom from "./pages/misc";
import CVInDom from "./pages/cv";
import HomepageInDom from "./pages/home";
import PublicationInDom from "./pages/publication";

export default function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={HomepageInDom} />
      <Route path={"/cv"} element={CVInDom} />
      <Route path={"/publication"} element={PublicationInDom} />
      <Route path={"/misc"} element={MiscInDom} />
    </Routes>
  );
}
