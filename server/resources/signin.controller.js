import { Competitor } from "./competitor/competitor.model";
import stringy from "../stringy";
export const signinController = async (req, res) => {
  console.log(stringy.stringify(req.body));
  try {
    const doc = await Competitor.findOne({ email: req.body.email })
      .lean()
      .exec();
    if (!doc) {
      console.log("doc not found");
      return res.status(201).json({ data: null }).end();
    }
    if (doc.password === req.body.password) {
      console.log(doc);
      res.status(200).json({ data: doc });
    } else {
      console.log("incorrect password");
      res.status(204).end();
    }
  } catch (e) {
    console.error(e);
    res.status(400).json({ data: null }).end();
  }
};
