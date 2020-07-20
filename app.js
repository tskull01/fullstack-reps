const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

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
const listenFunction = async () => {
  let connection = await mongoose.connect(
    "mongodb://fullstack.cyou:27017/bjj",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log(connection);
  console.log(`Example app listening at http://localhost:${port}`);
};
app.listen(port, listenFunction);
