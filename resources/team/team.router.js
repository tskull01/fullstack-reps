const express = require("express");
const controllers = require("./team.controllers");
const router = express.Router();
// /api/list
router.route("/").get(controllers.getOne).post(controllers.createOne);

// /api/list/:id
router
  .route("/:id")
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);
router.route("/team").get(controllers.getAll);
exports.Router = router;
