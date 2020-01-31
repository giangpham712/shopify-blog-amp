import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  if (!client.isConnected())
    await client.connect();

  const db = client.db(process.env.DB_NAME);

  const navigations = await db.collection('navigations').find({}).toArray();
  res.status(200).json(navigations);
};
