import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Nav, Comp1, Comp2, Comp3, Comp4 } from "./TopComps.js";
import { Carousel } from "./carouselComp.js";
import { Deals } from "./AllComps";
const App = () => {
  return (
    <div className="row">
      <Nav />
      <br></br>
      <Comp2 />

      <Carousel />
      <Deals />
    </div>
  );
};
export default App;
