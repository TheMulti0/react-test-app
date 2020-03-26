import './Navigation.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Home } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IRouteMapping } from "../models/IRouteMapping";

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
    <Link className="menuItem" to={mapping.path}>
      <Button>
        <span className="itemContent">
          { GetContent(mapping.path) }
        </span>
      </Button>
    </Link>
  );
}

function GetContent(path: string) {
  path = path.replace('/', '');

  if (path === '') {
    return <Home />
  }
  return path;
}
