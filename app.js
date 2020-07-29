const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const teamRouter = require("./resources/team/team.router");
const scheduleRouter = require("./resources/schedule/schedule.router");
const meetRouter = require("./resources/meet/meet.router");
const matchRouter = require("./resources/match/match.router");
const locationRouter = require("./resources/location/location.router");
const competitorRouter = require("./resources/competitor/competitor.router ");

dotenv.config();
//app.use for use with middleware passes data through a function
//example middleware

//app.use(express.static(path.join(__dirname, "fs-react/build")));
/* 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "fs-react/build", "index.html"));
});
*/
app.use(express.static(path.join(__dirname, "bjj-front/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "bjj-front/dist", "index.html"));
});
//routes can be regex or exact matching + parameter matching

//api/league
//api/schedule
//
app.use("/api/team", teamRouter);
app.use("/api/schedule", scheduleRouter);
app.use("/api/meet", meetRouter);
app.use("/api/match", matchRouter);
app.use("/api/location", locationRouter);
app.use("/api/competitor", competitorRouter);

mongoose
  .connect("mongodb://tskulley:password@fullstack.cyou:27017/bjj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
    const db = connection.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("were connected");
    });
  });
