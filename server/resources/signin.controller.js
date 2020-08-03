import { Competitor } from "./competitor/competitor.model";

export const signinController = async (req, res) => {
  try {
    const doc = await Competitor.findOne({ email: req.body.email })
      .lean()
      .exec();
    if (!doc) {
      console.log(doc);
      return res.status(400).end();
    }
    if (doc.password === req.body.password) {
      console.log(doc);
      res.status(200).json({ data: doc });
    } else {
      res.status(204);
    }
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};
