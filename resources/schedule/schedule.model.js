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
  startDate: Date,
});

export const Schedule = mongoose.model("schedule", scheduleSchema);
