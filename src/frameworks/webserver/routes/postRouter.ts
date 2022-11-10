import { Router } from "express";

export default function postRouter(express: any) {
  const router: Router = express.Router();

  router.get(
    "/",
    (req, response, next) => {
      console.log("inside middleware");
      next();
    },
    (req, res) => {
      console.log("handler");
      res.send({ message: "Hello" });
    }
  );
  return router;
}
