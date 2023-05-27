import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import News from './news/News';
import Info from './info/Info';
import Form from  './form/Form';
import List from './RegisterList/List'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/news">
        <News />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path='/list'>
        <List/>
      </Route>
    </Switch>
  );
};

export default Routes;
