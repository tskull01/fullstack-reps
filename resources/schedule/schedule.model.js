const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  league: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "league",
    required: true,
    unique: true,
  },
  meets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meet",
      required: true,
    },
  ],
});

module.exports = mongoose.model("schedule", scheduleSchema);
