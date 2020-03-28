import "./MenuItem.css";
import { IRouteMapping } from "../models/IRouteMapping";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Home } from "@material-ui/icons";
import React from "react";

export default function MenuItem(mapping: IRouteMapping) {
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
