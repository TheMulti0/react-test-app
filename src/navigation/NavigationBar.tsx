import './NavigationBar.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, NavLink } from "react-router-dom";
import { IRouteMapping } from "../models/IRouteMapping";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuItem from "./MenuItem";
import { Observable, Subject } from "rxjs";
import { Button, IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";

interface Props {
  mappings: IRouteMapping[];
  oppositeThemeType: () => "light" | "dark";
  toggleDarkMode: () => void;
}

export default function NavigationBar(props: Props) {

  const { mappings, oppositeThemeType, toggleDarkMode } = props;

  let subjects: Map<IRouteMapping, Subject<any>> = new Map(
    mappings.map(value => [value, new Subject<any>()] as [IRouteMapping, Subject<any>]));

  function onClick(mapping: IRouteMapping) {
    let original = subjects.get(mapping) as Subject<any>;
    subjects.delete(mapping);
    subjects.forEach(value => value.next(null));
    subjects.set(mapping, original)
  }

  return (
    <div className="root">
      <AppBar position="static" color="transparent">
        <Toolbar variant="regular">

          <Link to='/' onClick={event => onClick(mappings[0])}>
            <Home />
          </Link>

          <div className="grow" />

          {
            mappings
              .map(
                mapping => {
                  return (
                    <div onClick={event => onClick(mapping)}>
                      <MenuItem mapping={mapping}
                                otherItemSelected={subjects.get(mapping) as Observable<any>} />
                    </div>

                   );


                })
          }

          <div className="grow" />

          <IconButton onClick={ event => toggleDarkMode() }>
            {
              oppositeThemeType() === "light"
                ? <BrightnessHighIcon />
                : <Brightness4Icon />
            }
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );

}
