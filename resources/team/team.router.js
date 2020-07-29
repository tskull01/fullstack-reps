import { Router } from "express";
import controllers from "./team.controllers";

const router = Router();

// /api/list
router.route("/").get(controllers.getOne).post(controllers.createOne);

// /api/list/:id
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);
router.route("/team").get(controllers.getAll);
export default router;
