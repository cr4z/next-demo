import { clientPromise } from "../../database/mongodb";

export default function handler(req: any, res: any) {
  clientPromise.then((client: any) => {
    const db = client.db("nextSkateShopDB");

    const category = req.query.category;

    if (req.method === "GET") {
      db.collection("products")
        .find({ category })
        .toArray()
        .then((products: any) => {
          if (products == "") {
            res.status(400).send("Category was not found in database");
          } else {
            res.json({ status: 200, data: products });
          }
        });
    }
  });
}
