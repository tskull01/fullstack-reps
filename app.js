const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");

app.use(cors());
//app.use for use with middleware passes data through a function
//example middleware
app.use((req, res, next) => {
  console.log("Can do whatever");
  console.log("have to call next");
  next();
});
app.use(express.static(path.join(__dirname, "./fs-react/build")));
app.put("/spotToPut", (req, res) => {
  console.log("putting");
});
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, +"./fs-react/build/index.html"))
);
//routes can be regex or exact matching + parameter matching
app.post("/", (req, res) => {});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
