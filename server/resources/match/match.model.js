import mongoose from "mongoose";
const matchSchema = new mongoose.Schema({
  homeCompetitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "competitor",
  },
  awayCompetitor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "competitor",
  },
  official: String,
  homeScore: Number,
  awayScore: Number,
});

export const Match = mongoose.model("match", matchSchema);
