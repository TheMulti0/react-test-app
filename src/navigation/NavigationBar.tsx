import './NavigationBar.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Home } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IRouteMapping } from "../models/IRouteMapping";
import { Box, Theme } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function NavigationBar(
  params: { mappings: IRouteMapping[], oppositeThemeType: any, toggleDarkMode: any }) {

  return (
    <div className="root">
      <AppBar position="static" color="transparent">
        <Toolbar variant="regular">
          { params.mappings.map(MenuItem) }
          <div className="grow" />
          <Button onClick={ event => params.toggleDarkMode() }>
            {
              params.oppositeThemeType() === "light"
                ? <BrightnessHighIcon />
                : <Brightness4Icon />
            }
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}

function MenuItem(mapping: IRouteMapping) {
  const path = mapping.path;
  const name = path.replace('/', '');

  return (
    <Link className="menuItem" to={path}>
      <Button>
        {
          name === ''
            ? <Home />
            : name
        }
      </Button>
    </Link>
  );
}
