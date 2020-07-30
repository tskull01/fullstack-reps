import mongoose from "mongoose";
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
    ref: "competitor",
  },
});

export const Result = mongoose.model("result", resultSchema);
