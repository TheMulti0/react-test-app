import React from 'react';
import Home from "../pages/Home";
import Second from "../pages/Second";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";
import Component from "./Component";
import { IRouteMapping } from "../models/IRouteMapping";

export class Routes extends React.Component {

  private defaultRoute: IRouteMapping =
  {
    path: '/',
    component: Home
  };

  private routes: IRouteMapping[] =
  [
    this.defaultRoute,
    {
      path: '/second',
      component: Second
    }
  ];

  render() {

    return (
      <BrowserRouter>

        <Navigation mappings={this.routes}/>

        <Switch>

          { this.routes.map(ComponentRoute) }

          { /*Default route if none is found*/}
          <Route render={ props => Component(this.defaultRoute, props) } />

        </Switch>

      </BrowserRouter>
    );

  }

}
