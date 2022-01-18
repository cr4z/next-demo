import React, { ReactElement, useEffect, useState } from "react";
import DeckCard from "./card";

interface IProps {
  selectedProduct: string;
}
export default function ProductView({ selectedProduct }: IProps): ReactElement {
  useEffect(() => {
    async function getProducts() {
      const url = `/api/products/?category=${selectedProduct}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await fetch(url, options);

      if (res.status == 400) {
        console.log("Category was not found in database");
      } else {
        const json = await res.json();

        setProductArray(json.data);
      }
    }
    getProducts();
  }, [selectedProduct]);

  const [productArray, setProductArray] = useState<any>(null);

  return (
    <>
      {productArray &&
        productArray.map((product: any, index: any) => {
          return (
            <DeckCard
              key={index}
              desc={product.desc}
              title={product.name}
              imgPath={product.imgPath}
            />
          );
        })}
    </>
  );
}
