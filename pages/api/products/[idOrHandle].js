import { MongoClient } from 'mongodb';
import {productsCollection} from "../../../shared/constants";

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  const { query: { idOrHandle } } = req;

  if (!client.isConnected())
    await client.connect();

  const db = client.db(process.env.DB_NAME);
  const product = await db.collection(productsCollection).findOne({ $or: [{ handle: idOrHandle }, { id: parseInt(idOrHandle) }]});

  if (product == null) {
    res.status(404).json(null);
    return;
  }

  res.status(200).json(product);
}
