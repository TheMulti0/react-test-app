import './Component.css';
import React from "react";
import { IRouteMapping } from "./routeMappings";

export default function Component(mapping: IRouteMapping) {
  return (
    <div className="container">
      { <mapping.component mappings={mapping.mappings} /> }
    </div>
  );
}
