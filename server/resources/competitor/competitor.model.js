import mongoose from "mongoose";
import { stringify } from "../../stringy";
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
  password: {
    type: String,
    required: true,
  },
  homeGym: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "location",
    required: true,
  },
  weight: { type: Number, required: true },
  experienceLevel: String,
  age: Number,
  pastResults: [{ type: mongoose.Schema.Types.ObjectId, ref: "result" }],
  currentTeams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "team",
    },
  ],
});

/*competitorSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

competitorSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};
*/
export const Competitor = mongoose.model("competitor", competitorSchema);
