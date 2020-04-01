import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  const { query: { blogHandle, tag } } = req;

  if (!client.isConnected())
    await client.connect();

  const db = client.db(process.env.DB_NAME);

  const blog = await db.collection('blogs').findOne({ handle: blogHandle });
  if (blog == null) {
    res.status(404).json(null);
    return;
  }

  const articles = await db.collection('articles')
    .find({ blog_id: blog.id, tags: new RegExp(tag, 'i') })
    .project({ handle: true, title: true, image: true, tags: true })
    .sort({ created_at: -1}).limit(5).toArray();

  res.status(200).json(articles);
}
