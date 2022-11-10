import { Application } from "express";

export default function serverConfig(
  app: Application,
  config: Record<any, any>
) {
  function startServer() {
    app.listen(config.port, () => {
      console.log(`Express server listening on ${config.port}`);
    });
  }

  return {
    startServer,
  };
}
