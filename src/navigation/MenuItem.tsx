import "./MenuItem.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Home } from "@material-ui/icons";
import React from "react";
import { IRouteMappingProps } from "../models/IRouteMappingProps";

export default function MenuItem(props: IRouteMappingProps) {
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
