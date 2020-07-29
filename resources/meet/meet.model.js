const mongoose = require("mongoose");

const meetSchema = new mongoose.Schema({
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
    required: true,
  },
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "match",
      required: true,
    },
  ],
  completed: Boolean,
  homeScore: Number,
  awayScore: Number,
});

export const Meet = mongoose.model("meet", meetSchema);
