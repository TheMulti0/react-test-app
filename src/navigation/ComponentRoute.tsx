import React from "react";
import { IRouteMapping } from "./routes";
import { Route } from 'react-router-dom';
import Component from "./Component";

export default function ComponentRoute(mapping: IRouteMapping) {
  return (
    <Route
      exact
      path={ mapping.path }
      render={ props => Component(mapping, props) } />
  );
}

