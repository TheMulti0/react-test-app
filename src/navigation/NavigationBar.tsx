import './NavigationBar.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Home } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IRouteMapping } from "../models/IRouteMapping";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuItem from "./MenuItem";
import { Observable, Subject } from "rxjs";

interface Props {
  mappings: IRouteMapping[];
  oppositeThemeType: () => "light" | "dark";
  toggleDarkMode: () => void;
}

export default function NavigationBar(params: Props) {

  let subjects: Map<IRouteMapping, Subject<any>> = new Map(
    params.mappings.map(value => [value, new Subject<any>()] as [IRouteMapping, Subject<any>]));

  return (
    <div className="root">
      <AppBar position="static" color="transparent">
        <Toolbar variant="regular">

          {
            params.mappings
              .map(
                mapping => {
                  return (
                    <div onClick={event => {
                      let original = subjects.get(mapping) as Subject<any>;
                      subjects.delete(mapping);
                      subjects.forEach(value => value.next(null));
                      subjects.set(mapping, original)
                    }}>
                      <MenuItem mapping={mapping}
                                otherItemSelected={subjects.get(mapping) as Observable<any>} />
                    </div>

                   );
                })
          }

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
