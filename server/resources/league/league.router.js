import { Router } from "express";
import controllers from "./league.controllers";

const router = Router();

// /api/list
router.route("/").get(controllers.getOne).post(controllers.createOne);

// /api/list/:id
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);
router.route("/league").get(controllers.getAll);
export default router;