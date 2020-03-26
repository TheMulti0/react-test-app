import './Component.css';
import React from "react";
import { IRouteMapping } from "../models/IRouteMapping";

export default function Component(mapping: IRouteMapping, props: any) {
  return (
    <div className="container">

      <mapping.component
        {...props}
        mappings={mapping.mappings} />

    </div>
  );
}
