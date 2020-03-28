import "./MenuItem.css";
import { IRouteMapping } from "../models/IRouteMapping";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Home } from "@material-ui/icons";
import React from "react";

export default function MenuItem(props: {mapping: IRouteMapping}) {
  const path = props.mapping.path;
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
