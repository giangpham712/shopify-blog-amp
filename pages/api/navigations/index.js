import { MongoClient } from 'mongodb';
import {navigationCollection} from "../../../shared/constants";

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  if (!client.isConnected())
    await client.connect();

  const db = client.db(process.env.DB_NAME);

  const navigations = await db.collection(navigationCollection).find({}).toArray();
  res.status(200).json(navigations);
};
