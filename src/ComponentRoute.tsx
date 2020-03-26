import './ComponentRoute.css';
import React from "react";
import { IRouteMapping } from "./routeMappings";
import { Route } from 'react-router-dom';

export default function ComponentRoute(mapping: IRouteMapping) {
  return (
    <Route
      exact
      path={mapping.path}
      render={props => (
        <mapping.component
          className="container"
          {...props}
          mappings={mapping.mappings} />
    )} />
  );
}

