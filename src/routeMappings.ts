import Home from "./Home";
import Second from "./Second";

export interface IRouteMapping {

  path: string;
  component: any;
  mappings?: IRouteMapping[];

}

export const defaultRoute: IRouteMapping =
{
  path: '/',
  component: Home
};

export const routeMappings: IRouteMapping[] = [
  defaultRoute,
  {
    path: '/second',
    component: Second
  }
];
