import mongoose from "mongoose";
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "competitor",
      required: true,
    },
  ],
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
    required: true,
  },
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "league",
    required: true,
  },
  coach: String,
  wins: Number,
  losses: Number,
});

export const Team = mongoose.model("team", teamSchema);
