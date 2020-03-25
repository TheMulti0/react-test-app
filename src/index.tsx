import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuBar from "./MenuBar";
import { IRouteMapping, routeMappings } from "./routeMappings";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function Routes() {
  return (
    <div>
      <MenuBar mappings={ routeMappings } />
      <Router>
        <Switch>
          { routeMappings.map(RouteMapping) }
        </Switch>
      </Router>
    </div>
  );
}

function RouteMapping(mapping: IRouteMapping) {
  return <mapping.component routes={mapping.mappings} />
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
