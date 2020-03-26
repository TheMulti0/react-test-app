import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./Navigation";
import { defaultRoute, routeMappings } from "./routeMappings";
import ComponentRoute from "./ComponentRoute";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function Routes() {
  return (
    <div>
      <Router>
        <Navigation mappings={ routeMappings } />
        <Switch>

          { routeMappings.map(ComponentRoute) }

          <Route
            path={defaultRoute.path}
            render={ props =>
              <defaultRoute.component
                className="container"
                {...props}
                mappings={defaultRoute.mappings} /> } />

        </Switch>
      </Router>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
