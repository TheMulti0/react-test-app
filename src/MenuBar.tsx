import './MenuBar.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IRouteMapping } from "./routeMappings";
import { Button } from "@material-ui/core";
import { Home } from "@material-ui/icons";

export default function MenuBar(params: { mappings: IRouteMapping[] }) {
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
    <Button className="menuItem" color="inherit">
      { ItemContent(mapping) }
    </Button>
  );
}

function ItemContent(mapping: IRouteMapping) {
  const name: string = mapping.path;
  if (name === '') {
    return <Home />
  }
  return name;
}
