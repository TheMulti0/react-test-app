import Home from "./Home";

export interface IRouteMapping {

  path: string;
  component: any;
  mappings?: IRouteMapping[];

}

export const routeMappings: IRouteMapping[] = [
  {
    path: '',
    component: Home
  }
];
