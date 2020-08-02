import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  gymName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
  },
});

export const Location = mongoose.model("location", locationSchema);
