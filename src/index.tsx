import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App";
import { IRouteMapping, routes } from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function Routes() {
  return (
    <Router>
      <Switch>
        {
          routes.map((mapping, i) => (
            <mapping.component routes={mapping.mappings} />
          ))
        }
      </Switch>
    </Router>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
