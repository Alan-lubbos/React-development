import Base from "../Components/Base/base";
import { ReactNode } from "react";
import Home from "../Components/Home/home";

interface RouteConfig {
  path: string;
  name: string;
  element: ReactNode;
}

export const routesConfig: RouteConfig[] = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/base", name: "Base", element: <Base/> },
];
