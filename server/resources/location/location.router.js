import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Location } from "./location.model";
const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(Location).getOne)
  .post(crudControllers(Location).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Location).getOne)
  .put(crudControllers(Location).updateOne)
  .delete(crudControllers(Location).removeOne);

export default router;
