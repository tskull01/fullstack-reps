const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "match",
    unique: true,
  },
  homeScore: {
    type: Number,
    required: true,
  },
  awayScore: {
    type: Number,
    required: true,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team",
  },
});

module.exports = mongoose.model("result", resultSchema);
