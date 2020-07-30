import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  gymName: {
    type: String,
    required: true,
  },
});

export const Location = mongoose.model("location", locationSchema);
