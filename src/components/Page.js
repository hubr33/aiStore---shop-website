import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Bargain from "./Bargain";

const Page = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/bargain" component={Bargain} />
    </Switch>
  );
};

export default Page;
