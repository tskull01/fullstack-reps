import mongoose from "mongoose";
export const connect = () => {
  return mongoose.connect("mongodb://fullstack.cyou:27017/bjj", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 30000,
  });
};
