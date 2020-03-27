import React, { useState } from 'react';
import Home from "../components/Home";
import Second from "../components/Second";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";
import Component from "./Component";
import { IRouteMapping } from "../models/IRouteMapping";
import { createMuiTheme, CssBaseline, MuiThemeProvider, ThemeOptions } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const defaultRoute: IRouteMapping =
{
  path: '/',
  component: Home
};

const routes: IRouteMapping[] =
[
  defaultRoute,
  {
    path: '/second',
    component: Second
  }
];



const defaultTheme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#0f9dfc"
    }
  }
};

export default function App() {
  const [theme, setTheme]: [ThemeOptions, React.Dispatch<React.SetStateAction<ThemeOptions>>] = useState(defaultTheme);

  function oppositeThemeType(): "light" | "dark" {
    return theme.palette?.type === "light" ? "dark" : "light";
  }

  function toggleDarkTheme() {
    setTheme(prevState => {

      let theme = Object.create(defaultTheme);
      (theme.palette as PaletteOptions).type = oppositeThemeType();

      return theme;
    })
  }

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>

          <Navigation mappings={routes} oppositeThemeType={oppositeThemeType} toggleDarkMode={toggleDarkTheme} />

          <Switch>

            { routes.map(ComponentRoute) }

            { /*Default route if none is found*/}
            <Route render={ props => Component(defaultRoute, props) } />

          </Switch>

      </BrowserRouter>
    </MuiThemeProvider>
  );
}
