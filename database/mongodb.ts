import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://stevencr4z:5HZxhjfCj3PYqbn@thecluster.rvcf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
export let clientPromise: any;

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options);
clientPromise = client.connect();
