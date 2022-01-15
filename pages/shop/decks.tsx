import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";
import { URLSearchParams } from "url";

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "/api/products/?category=deck";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(url, options);

  if (res.status == 400) {
    console.log("Category was not found in database");

    return {
      props: {},
    };
  } else {
    let decks = await res.json();
    return {
      props: { decks },
    };
  }
};

export default function decks({ decks }: any): ReactElement {
  return (
    <Shop>
      {decks &&
        decks.data.map((product: any, index: any) => {
          return <Card key={index} title={product.name} imgPath={product.imgPath} />;
        })}
    </Shop>
  );
}
