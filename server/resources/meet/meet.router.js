import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Meet } from "./meet.model";
const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(Meet).getOne)
  .post(crudControllers(Meet).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Meet).getOne)
  .put(crudControllers(Meet).updateOne)
  .delete(crudControllers(Meet).removeOne);

router.route("/all").get(crudControllers(Meet).getMany);
export default router;
