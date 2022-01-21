import React, { ElementRef, ReactElement, useEffect, useState } from "react";
import { SortRule } from "../types/sortRule";
import { BearingsCard, DeckCard, TrucksCard, WheelsCard } from "./cards";

interface IProps {
  selectedProduct: string;
  filterParams: string[];
  sortRule: SortRule;
}
export default function ProductView({
  selectedProduct,
  filterParams,
  sortRule,
}: IProps): ReactElement {
  // on render, populate productArray
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
        //* success *//

        const json = await res.json();
        const unsortedArray: [] = json.data;
        let sortedArray: [] | null = null;

        // sort accordingly
        switch (sortRule) {
          case SortRule.none:
            sortedArray = unsortedArray;
            break;
          case SortRule.priceLowToHigh:
            sortedArray = unsortedArray.sort((a: any, b: any) => (a.price > b.price ? 1 : -1));
            break;
          case SortRule.priceHighToLow:
            sortedArray = unsortedArray.sort((a: any, b: any) => (a.price < b.price ? 1 : -1));
            break;
        }

        if (sortedArray == null)
          throw new Error("in productView.tsx: Sort setting was not implemented!");
        setProductArray(sortedArray);
      }
    }
    getProducts();
    console.log("i rly done rerendered")
  }, [selectedProduct, sortRule]);

  const [productArray, setProductArray] = useState<any>(null);

  return (
    <>
      {productArray &&
        {
          decks: productArray.map((product: any, index: any) => {
            if (!filterParams.includes(product.color)) {
              if (filterParams.length != 0) return;
            }
            console.log("GETTING NEW CARDS!", index);
            return (
              <DeckCard
                key={index}
                desc={product.desc}
                title={product.name}
                imgPath={product.imgPath}
                price={product.price}
                i={index}
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
                i={index}
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
                i={index}
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
                i={index}
              />
            );
          }),
        }[selectedProduct]}
    </>
  );
}
