import './Component.css';
import React from "react";
import { IRouteMapping } from "../models/IRouteMapping";

export default function Component(mapping: IRouteMapping, props: any) {
  return (
    <mapping.component
      {...props}
      mappings={mapping.mappings}
      className="container" />
  );
}
