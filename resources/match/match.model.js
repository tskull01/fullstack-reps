const mongoose = require("mongoose");

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

module.exports = mongoose.model("match", matchSchema);
