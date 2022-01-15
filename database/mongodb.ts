import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add .env.local with MONGODB_URI");
}

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// In production mode, it's best to not use a global variable.
const client = new MongoClient(uri, options);
export const clientPromise = client.connect();
