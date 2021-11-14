import { createServer } from "miragejs";

import models from "./models";
import routes from "./routes";

export default () =>
  createServer({
    models,
    routes,
  });
