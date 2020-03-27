import './Navigation.css';
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Home, Brightness2 } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IRouteMapping } from "../models/IRouteMapping";
import { Theme } from "@material-ui/core";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function Navigation(
  params: { mappings: IRouteMapping[], oppositeThemeType: any, toggleDarkMode: any }) {

  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar variant="regular" color="accent">
          { params.mappings.map(MenuItem) }
          <div className="grow" />
          <Button onClick={ event => params.toggleDarkMode() }>
            <span className="itemContent">
              { ThemeIcon(params.oppositeThemeType()) }
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );

}

function ThemeIcon(modeToPresent: "light" | "dark") {
  if (modeToPresent === "light") {
    return <BrightnessHighIcon />
  }
  return <Brightness4Icon />
}

function ToggleTheme(theme: Theme) {
  if (theme.palette.type === "light") {
    theme.palette.type = "dark";
  }
  else {
    theme.palette.type = "light";
  }
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
