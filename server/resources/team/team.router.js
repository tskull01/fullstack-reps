import { Router } from "express";
import { crudControllers } from "../utils/crud";
import { Team } from "./team.model";
const router = Router();
// /api/item
router
  .route("/")
  .get(crudControllers(Team).getOne)
  .post(crudControllers(Team).createOne);

// /api/list/:id
router
  .route("/:id")
  .get(crudControllers(Team).getOne)
  .put(crudControllers(Team).updateOne)
  .delete(crudControllers(Team).removeOne);

router.route("/all").get(crudControllers(Team).getMany);
export default router;
