import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

alert(process.env.MONGODB_URI);

if (!uri) {
  throw new Error("Please add .env.local with MONGODB_URI");
}

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
export let clientPromise: any;

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options);
clientPromise = client.connect();
