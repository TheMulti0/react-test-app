import './MenuBar.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IRouteMapping } from "./routeMappings";
import { Home } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const history = require('history').createBrowserHistory();

export default function Navigation(params: { mappings: IRouteMapping[] }) {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar variant="dense">
          { params.mappings.map(MenuItem) }
        </Toolbar>
      </AppBar>
    </div>
  );
}

function MenuItem(mapping: IRouteMapping) {
  return (
    <Link to={mapping.path}>
      <Button>
          { ItemContent(mapping.path) }
      </Button>
    </Link>
  );
}

function ItemContent(path: string) {
  path = path.replace('/', '');
  if (path === '') {
    return <Home />
  }
  return path;
}
