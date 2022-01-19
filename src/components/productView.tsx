import React, { ElementRef, ReactElement, useEffect, useState } from "react";
import { BearingsCard, DeckCard, TrucksCard, WheelsCard } from "./cards";

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
        {
          decks: productArray.map((product: any, index: any) => {
            return (
              <DeckCard
                key={index}
                desc={product.desc}
                title={product.name}
                imgPath={product.imgPath}
                price={product.price}
              />
            );
          }),
          trucks: productArray.map((product: any, index: any) => {
            return (
              <TrucksCard
                key={index}
                desc={product.desc}
                title={product.name}
                imgPath={product.imgPath}
                price={product.price}
              />
            );
          }),
          wheels: productArray.map((product: any, index: any) => {
            return (
              <WheelsCard
                key={index}
                desc={product.desc}
                title={product.name}
                imgPath={product.imgPath}
                price={product.price}
              />
            );
          }),
          bearings: productArray.map((product: any, index: any) => {
            return (
              <BearingsCard
                key={index}
                desc={product.desc}
                title={product.name}
                imgPath={product.imgPath}
                price={product.price}
              />
            );
          }),
        }[selectedProduct]}
    </>
  );
}
