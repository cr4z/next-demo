import { MongoClient } from "mongodb";

console.log("A");

const uri = process.env.MONGODB_URI;

console.log("B");

if (!uri) {
  throw new Error("Please add .env.local with MONGODB_URI");
  console.log("C");
}

console.log("D");

const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

console.log("E");

let client;

console.log("F");

export let clientPromise: any;

console.log("G");

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options);

console.log("H");

clientPromise = client.connect();
