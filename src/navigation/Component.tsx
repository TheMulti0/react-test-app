import './Component.css';
import React from "react";
import { IRouteMapping } from "./routes";

export default function Component(mapping: IRouteMapping, props: any) {
  return (
    <mapping.component
      className="container"
      {...props}
      mappings={mapping.mappings} />
  );
}
