import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Match } from "./match.model";
const router = Router();

// /api/list
router
  .route("/")
  .get(crudControllers(Match).getOne)
  .post(crudControllers(Match).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Match).getOne)
  .put(crudControllers(Match).updateOne)
  .delete(crudControllers(Match).removeOne);

router.route("/matches").get(crudControllers(Match).getMany);
export default router;
