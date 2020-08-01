import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Competitor } from "./competitor.model";

const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(Competitor).getOne)
  .post(crudControllers(Competitor).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Competitor).getOne)
  .put(crudControllers(Competitor).updateOne)
  .delete(crudControllers(Competitor).removeOne);

router.route("/all").get(crudControllers(Competitor).getMany);
export default router;
