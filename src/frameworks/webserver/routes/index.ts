import { Application } from "express";
import postRouter from "./postRouter";

export default function routes(app: Application, express: any) {
  app.use("/api/v1/posts", postRouter(express));
}
