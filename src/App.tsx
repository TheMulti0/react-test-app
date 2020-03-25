import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IRouteMapping, routes } from "./routes";
import { Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";

export default function App() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar variant="dense">
          { routes.map(MenuItem) }
        </Toolbar>
      </AppBar>
    </div>
  );

}

function MenuItem(mapping: IRouteMapping) {
  return (
    <Button className="menuItem" color="inherit">
      { ItemContent(mapping) }
    </Button>
  );
}

function ItemContent(mapping: IRouteMapping) {
  const name: string = mapping.path.substring(1);
  if (name === '') {
    return <Home />
  }
  return name;
}
