import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  const {
    query: { blogHandle },
  } = req;

  if (!client.isConnected())
    await client.connect();

  const db = client.db(process.env.DB_NAME);

  const blog = await db.collection('blogs').findOne({ handle: blogHandle });
  if (blog == null) {
    res.status(404).json(null);
    return;
  }

  const tagMappings = await db.collection('tagMappings').find({ blog_id: blog.id }).toArray();
  res.status(200).json(tagMappings);
};
