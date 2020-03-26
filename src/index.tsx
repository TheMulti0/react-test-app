import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import { defaultRoute, routes } from "./navigation/routes";
import ComponentRoute from "./navigation/ComponentRoute";
import Component from "./navigation/Component";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function Routes() {
  return (
    <BrowserRouter>

      <Navigation mappings={ routes } />

      <Switch>

        { routes.map(ComponentRoute) }

        { /*Default route if none is found*/ }
        <Route render={ props => Component(defaultRoute, props) } />

      </Switch>

    </BrowserRouter>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
