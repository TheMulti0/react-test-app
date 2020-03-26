import Home from "../pages/Home";
import Second from "../pages/Second";

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

export const routes: IRouteMapping[] = [
  defaultRoute,
  {
    path: '/second',
    component: Second
  }
];
