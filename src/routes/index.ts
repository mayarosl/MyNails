import React from "react";
import Login from "../pages/Login";
import Main from "../pages/Main";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
}

export const publicRoutes: IRoute[] = [
  {
    path: '/login', 
    element: Login,
    exact: true, 
  }
]

export const privateRoutes: IRoute[] = [
  {
    path: '/', 
    element: Main,
    exact: true, 
  }
]