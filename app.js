const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//app.use for use with middleware passes data through a function
//example middleware

app.use(express.static(path.join(__dirname, "fs-react/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "fs-react/build", "index.html"));
});
//routes can be regex or exact matching + parameter matching
app.post("/", (req, res) => {
  res.send({ message: "working" });
});
app.put("/", (req, res) => {
  res.send({ dirname: __dirname });
});

mongoose
  .connect("mongodb://fullstack.cyou:27017/bjj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connect) => {
    app.listen(port, () => {
      console.log(
        `App listening on port ${port}` + `database connection ${connect}`
      );
    });
  })
  .catch((e) => console.log(`Invalid connection ${e}`));
