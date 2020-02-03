import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Create from "./pages/create";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/product/:id' component={Product} />
    <Route path='/create' component={Create} />
  </Switch>
);

export default Routes;
