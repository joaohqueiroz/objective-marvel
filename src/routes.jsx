import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./views/Details";
import Home from "./views/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/details/:id" exact component={Details}/>
    </BrowserRouter>
  );
}

export default Routes;
