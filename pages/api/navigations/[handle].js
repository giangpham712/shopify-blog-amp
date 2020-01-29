import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  const {
    query: { handle },
  } = req;

  if (!client.isConnected())
    await client.connect();

  const db = client.db(process.env.DB_NAME);

  const navigation = await db.collection('navigations').findOne({ handle: handle });
  if (navigation == null) {
    res.status(404).json(null);
    return;
  }

  res.status(200).json(navigation);
};
