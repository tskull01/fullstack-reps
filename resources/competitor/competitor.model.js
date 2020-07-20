const mongoose = require("mongoose");

const competitorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  experienceLevel: {
    type: String,
    required: true,
  },
  birthYear: Number,
  weight: { type: Number, required: true },
  homeGym: String,
  pastResults: [{ type: mongoose.Schema.Types.ObjectId, ref: "result" }],
  currentTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team",
  },
});

module.exports = mongoose.model("competitor", competitorSchema);
