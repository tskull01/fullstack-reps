import mongoose from "mongoose";
const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "team",
      required: true,
    },
  ],
  teamLimit: {
    type: Number,
    required: true,
  },
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schedule",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
});

export const League = mongoose.model("league", leagueSchema);
