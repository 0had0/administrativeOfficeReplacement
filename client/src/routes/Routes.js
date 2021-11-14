import { BrowserRouter, Route } from "react-router-dom";
import RoutesConfig from "./Routes.config";

export default () =>
  RoutesConfig.map((route) => {
    const { name, component } = route;
    let Component = component ?? Route;
    return <Component key={name} {...route} />;
  });
