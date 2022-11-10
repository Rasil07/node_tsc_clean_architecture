import express, { Application, Express } from "express";

import config from "./src/config/config";
import expressConfig from "./src//frameworks/webserver/express";
import serverConfig from "./src/frameworks/webserver/server";
import routes from "./src/frameworks/webserver/routes";

const app: Application = express();

expressConfig(app);
serverConfig(app, config).startServer();

routes(app, express);

export default app;
