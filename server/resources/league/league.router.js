import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { League } from "./league.model";
const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(League).getOne)
  .post(crudControllers(League).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(League).getOne)
  .put(crudControllers(League).updateOne)
  .delete(crudControllers(League).removeOne);

router.route("/all").get(crudControllers(League).getMany);
export default router;
