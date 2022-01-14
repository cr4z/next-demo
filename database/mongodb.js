import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://stevencr4z:5HZxhjfCj3PYqbn@thecluster.rvcf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export let clientPromise;

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options);
clientPromise = client.connect();
