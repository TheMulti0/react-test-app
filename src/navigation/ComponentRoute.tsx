import React from "react";
import { Route } from 'react-router-dom';
import Component from "./Component";
import { IRouteMapping } from "../models/IRouteMapping";

export default function ComponentRoute(mapping: IRouteMapping) {
  return (
    <Route
      exact
      path={ mapping.path }
      render={ renderProps => <Component mapping={mapping} {...renderProps} /> } />
  );
}

