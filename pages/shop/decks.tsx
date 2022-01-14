import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";

export const getServerSideProps: GetServerSideProps = async () => {
  let res = await fetch("http://localhost:3000/api/decks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let decks = await res.json();
  return {
    props: { decks },
  };
};

export default function Decks({ decks }: any): ReactElement {
  return (
    <Shop>
      {decks.data.map((product: any, index: any) => {
        return <Card key={index} title={product.name} imgPath={product.imgPath} />;
      })}
    </Shop>
  );
}
