import React from 'react';
import Home from "../components/Home";
import Second from "../components/Second";
import NavigationBar from "./NavigationBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComponentRoute from "./ComponentRoute";
import Component from "./Component";
import { IRouteMapping } from "../models/IRouteMapping";
import { createMuiTheme, CssBaseline, MuiThemeProvider, Theme, ThemeOptions } from "@material-ui/core";
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



const defaultThemeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#0f9dfc"
    }
  }
};

interface State {
  themeOptions: ThemeOptions;
}

export default class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      themeOptions: defaultThemeOptions
    };
  }

  render() {


    const theme: Theme = createMuiTheme(this.state.themeOptions);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>

          <NavigationBar mappings={routes}
                         oppositeThemeType={this.oppositeThemeType.bind(this)}
                         toggleDarkMode={this.toggleThemeOptions.bind(this)} />

          <Switch>

            {routes.map(ComponentRoute)}

            { /*Default route if none is found*/}
            <Route render={props => Component(defaultRoute, props)}/>

          </Switch>

        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

  oppositeThemeType(): "light" | "dark" {
    return this.state.themeOptions.palette?.type === "light" ? "dark" : "light";
  }

  getToggledThemeOptions(): ThemeOptions {
    const themeOptions: ThemeOptions = Object.create(defaultThemeOptions);

    (themeOptions.palette as PaletteOptions).type = this.oppositeThemeType();

    return themeOptions;
  }

  toggleThemeOptions() {
    this.setState({
      themeOptions: this.getToggledThemeOptions()
    });
  }

}
