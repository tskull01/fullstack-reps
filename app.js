const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
//app.use for use with middleware passes data through a function
//example middleware
app.use((req, res, next) => {
  console.log("Can do whatever");
  console.log("have to call next");
  next();
});
app.get("/", (req, res) => res.send("req.body"));
//routes can be regex or exact matching + parameter matching
app.post("/", (req, res) => {
  res.sendDate = true;
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
