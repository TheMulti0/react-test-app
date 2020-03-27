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
            { ThemeIcon(params.oppositeThemeType()) }
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
        { GetContent(mapping.path) }
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
