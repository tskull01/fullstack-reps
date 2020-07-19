const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
//app.use for use with middleware passes data through a function
app.get("/", (req, res) => res.send(req.body));
app.put("/", (req, res) => {
  res.sendDate;
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
