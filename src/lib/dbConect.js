import { MongoClient, ServerApiVersion } from "mongodb";

export default async function dbConect(collectionName) {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please define MONGODB_URI in your .env.local file");
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  // Connect once
  await client.connect();

  // 'exclusive' 
  return client.db("exclusive").collection(collectionName);
}
