const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.get("/", (req, res) => res.send(req.body));
app.put("/", (req, res) => req.body)
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
