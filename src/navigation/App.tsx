import React from 'react';
import Home from "../components/Home";
import Second from "../components/Second";
import NavigationBar from "./NavigationBar";
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

interface State {
  theme: ThemeOptions;
}

export default class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      theme: defaultTheme
    };
  }

  oppositeThemeType(): "light" | "dark" {
    return this.state.theme.palette?.type === "light" ? "dark" : "light";
  }

  getToggledTheme(): ThemeOptions {
    const theme: ThemeOptions = Object.create(defaultTheme);

    (theme.palette as PaletteOptions).type = this.oppositeThemeType();

    return theme;
  }

  toggleTheme() {
    this.setState({
      theme: this.getToggledTheme()
    });
  }

  render() {


    const muiTheme = createMuiTheme(this.state.theme);

    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <BrowserRouter>

          <NavigationBar mappings={routes} oppositeThemeType={this.oppositeThemeType.bind(this)} toggleDarkMode={this.toggleTheme.bind(this)} />

          <Switch>

            {routes.map(ComponentRoute)}

            { /*Default route if none is found*/}
            <Route render={props => Component(defaultRoute, props)}/>

          </Switch>

        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

}
