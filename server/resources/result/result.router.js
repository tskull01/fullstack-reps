import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Result } from "./result.model";
const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(Result).getOne)
  .post(crudControllers(Result).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Result).getOne)
  .put(crudControllers(Result).updateOne)
  .delete(crudControllers(Result).removeOne);

router.route("/results").get(crudControllers(Result).getMany);
export default router;
