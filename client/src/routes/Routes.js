import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoutes from "./PublicRoutes/PublicRoutes";
import RoutesConfig from "./Routes.config";

export default () =>
  RoutesConfig.map((route) => {
    const { name, type } = route;
    const RouteComponent = type === "private" ? PrivateRoutes : PublicRoutes;
    return <RouteComponent key={name} name={name} {...route} />;
  });
