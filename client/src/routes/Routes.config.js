import { Home } from "../pages";
import withFullPageContainer from "../utils/HOC/withFullPageContainer";

export default [
  {
    name: "login",
    path: "/login",
    exact: true,
    component: withFullPageContainer(() => "login", "full-height"),
    type: "public",
  },
  {
    name: "home",
    path: "/",
    exact: true,
    component: withFullPageContainer(Home, "full-height"),
    type: "private",
  },
];
