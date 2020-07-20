const mongoose = require("mongoose");

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
      require: true,
    },
  ],
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "schedule",
    require: true,
  },
});

module.exports = mongoose.model("league", leagueSchema);
