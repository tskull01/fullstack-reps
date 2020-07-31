import express from "express";
const app = express();
const port = 3000;
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { json, urlencoded } from "body-parser";
//import teamRouter from "./resources/team/team.router";
//import scheduleRouter from "./resources/schedule/schedule.router";
//import meetRouter from "./resources/meet/meet.router";
//import matchRouter from "./resources/match/match.router";
//import locationRouter from "./resources/location/location.router";
//import competitorRouter from "./resources/competitor/competitor.router";
import { Location } from "./resources/location/location.model";
app.use(cors());
app.use(json());
dotenv.config();
//app.use for use with middleware passes data through a function
//example middleware

//app.use(express.static(path.join(__dirname, "fs-react/build")));

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "fs-react/build", "index.html"));
//});

app.use(express.static(path.join(__dirname, "../bjj-front/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../bjj-front/dist", "index.html"));
});
//routes can be regex or exact matching + parameter matching

//api/league
//api/schedule
//
//app.use("/api/teams", teamRouter);
//app.use("/api/schedules", scheduleRouter);
//app.use("/api/meets", meetRouter);
//app.use("/api/matchs", matchRouter);
//app.use("/api/locations", locationRouter);
//app.use("/api/competitors", competitorRouter);
app.post("api/locations", (req, res) => {
  Location.create({ ...req.body })
    .then((value) => {
      console.log(value);
      res.send("Location created");
    })
    .catch((e) => {
      res.send(`creation failed ${e}`);
    });
});
mongoose
  .connect("mongodb://fullstack.cyou:27017/bjj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 30000,
  })
  .then((connection) => {
    app.listen(port, () => {
      console.log(
        `App listening on port ${port} ${
          connection.connection
        } ${JSON.stringify(connection.models)}`
      );
    });
    const db = connection.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.on("open", function () {
      console.log("were connected");
    });
    console.log(db.port + "DB PORT");
    console.log(db.models + " DB MODELS ");
  })
  .catch((error) => {
    console.log(error + "ERROR ON CONNECTION");
  });
