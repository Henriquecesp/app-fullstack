import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";
import Create from "./pages/create";
import Edit from "./pages/edit";

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/product/:id' component={Product} />
    <Route path='/create' component={Create} />
    <Route path='/edit/:id' component={Edit} />
  </Switch>
);

export default Routes;
