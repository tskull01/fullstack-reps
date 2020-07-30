const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teamMembers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "competitor",
    },
  ],
  gym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
    required: true,
  },
  coach: String,
  wins: Number,
  losses: Number,
});

exports.Team = mongoose.model("team", teamSchema);
