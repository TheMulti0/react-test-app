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
import Third from "../components/Third";

interface State {
  themeOptions: ThemeOptions;
}

export default class App extends React.Component<any, State> {

  defaultRoute: IRouteMapping =
  {
    name: 'Home',
    path: '/',
    component: Home
  };

  routes: IRouteMapping[] =
  [
    {
      name: 'Second',
      path: '/second',
      component: Second
    },
    {
      name: 'Third',
      path: '/third',
      component: Third
    }
  ];

  constructor(props: any) {
    super(props);

    const themeOptions: ThemeOptions = {
      palette: {
        type: "dark",
        primary: {
          main: "#0f9dfc"
        }
      }
    };

    this.state = {
      themeOptions: themeOptions
    };
  }

  render() {
    const theme: Theme = createMuiTheme(this.state.themeOptions);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>

          <NavigationBar mappings={this.routes}
                         oppositeThemeType={this.oppositeThemeType.bind(this)}
                         toggleDarkMode={this.toggleThemeOptions.bind(this)} />

          <Switch>
            <div>
              <Route
                exact
                path={this.defaultRoute.path}
                render={renderProps => <Component mapping={this.defaultRoute} {...renderProps} /> } />

              {
                this.routes.map(mapping => <ComponentRoute mapping={mapping} />)
              }
            </div>
          </Switch>

        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

  oppositeThemeType(): "light" | "dark" {
    return this.state.themeOptions.palette?.type === "light" ? "dark" : "light";
  }

  getToggledThemeOptions(): ThemeOptions {
    const themeOptions: ThemeOptions = Object.create(this.state.themeOptions);

    (themeOptions.palette as PaletteOptions).type = this.oppositeThemeType();

    return themeOptions;
  }

  toggleThemeOptions() {
    this.setState({
      themeOptions: this.getToggledThemeOptions()
    });
  }

}
