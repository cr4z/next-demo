import { clientPromise } from "../../database/mongodb";

export default async function handler(req: any, res: any) {
  const client = await clientPromise;
  const db = client.db("nextSkateShopDB");

  if (req.method === "GET") {
    const decks = await db.collection("products").find({ category: "deck" }).toArray();
    res.json({ status: 200, data: decks });
  }
}
