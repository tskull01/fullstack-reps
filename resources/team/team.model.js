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
  gym: String,
  coach: String,
  wins: Number,
  losses: Number,
});

module.exports = mongoose.model("team", teamSchema);
