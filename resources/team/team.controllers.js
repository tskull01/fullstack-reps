const crudControllers = require("../utils/crud");
const Team = require("./team.model");

exports.crudControllers = crudControllers(Team);
