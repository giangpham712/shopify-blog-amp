import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    const { blogHandle, articleHandle } = req.body;
    if (!client.isConnected())
      await client.connect();

    const db = client.db(process.env.DB_NAME);

    const blog = await db.collection('blogs').findOne({ handle: blogHandle });
    if (blog == null) {
      res.status(404).json(null);
      return;
    }

    const article = await db.collection('articles').findOne({ blog_id: blog.id, handle: articleHandle });
    if (article == null) {
      res.status(404).json(null);
      return;
    }

    // Update
    await db.collection('articles').findOneAndUpdate({ blog_id: blog.id, handle: articleHandle }, { $set: {  }}, { upsert: false });

    res.status(200).json(null);
    return;
  }
  res.status(405).json(null);
}
