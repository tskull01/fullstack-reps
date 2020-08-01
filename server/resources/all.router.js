import { Router } from "express";
import { Location } from "./location/location.model";
import { Team } from "./team/team.model";
import { Schedule } from "./schedule/schedule.model";
import { Result } from "./result/result.model";
import { Meet } from "./meet/meet.model";
import { Match } from "./match/match.model";
import { League } from "./league/league.model";
import { Competitor } from "./competitor/competitor.model";
const router = Router();
const getAll = (model) => async (req, res) => {
  try {
    const docs = await model.find({}).lean().exec();
    console.log(docs);
    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
// /api/item
router.route("/location").get(getAll(Location));
router.route("/competitor").get(getAll(Competitor));
router.route("/league").get(getAll(League));
router.route("/match").get(getAll(Match));
router.route("/meet").get(getAll(Meet));
router.route("/result").get(getAll(Result));
router.route("/schedule").get(getAll(Schedule));
router.route("/team").get(getAll(Team));
export default router;
