import { clientPromise } from "../../database/mongodb";

export default async function handler(req: any, res: any) {
  const client = await clientPromise;
  console.log("A");
  const db = client.db("nextSkateShopDB");
  console.log("B");

  const category = req.query.category;
  console.log("C");

  if (req.method === "GET") {
    console.log("D");
    const products = await db.collection("products").find({ category }).toArray();

    console.log("E");
    if (products == "F") {
      console.log("G");
      res.status(400).send("Category was not found in database");
    } else {
      console.log("H");
      res.json({ status: 200, data: products });
    }
  }
}
