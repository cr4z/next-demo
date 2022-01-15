import { clientPromise } from "../../database/mongodb";

export default async function handler(req: any, res: any) {
  const client = await clientPromise;
  const db = client.db("nextSkateShopDB");

  const category = req.query.category;

  if (req.method === "GET") {
    const products = await db.collection("products").find({ category }).toArray();

    if (products == null) {
      res.status(400).send("Category was not found in database");
    } else {
      res.json({ status: 200, data: products });
    }
  }
}
