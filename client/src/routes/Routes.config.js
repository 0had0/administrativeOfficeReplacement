import { Home } from "../pages";
import withFullPageContainer from "../utils/HOC/withFullPageContainer";

export default [
  {
    name: "home",
    path: "/",
    exact: true,
    component: withFullPageContainer(Home, "full-height"),
  },
];
