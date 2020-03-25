import App from "./App";

export interface IRouteMapping {

  path: string;
  component: any;
  mappings?: IRouteMapping[];

}

export const routes: IRouteMapping[] = [
  {
    path: '/',
    component: App
  }
];
