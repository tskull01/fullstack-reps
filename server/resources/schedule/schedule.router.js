import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Schedule } from "./schedule.model";
const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(Schedule).getOne)
  .post(crudControllers(Schedule).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Schedule).getOne)
  .put(crudControllers(Schedule).updateOne)
  .delete(crudControllers(Schedule).removeOne);

router.route("/all").get(crudControllers(Schedule).getMany);
export default router;
