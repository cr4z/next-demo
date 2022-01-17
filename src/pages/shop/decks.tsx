import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";
import ShopAPI from "../../utils/shopAPI";

export const getServerSideProps: GetServerSideProps = async () => {
  const url = ShopAPI.GetRequestURL("deck");
  const options = ShopAPI.GetRequestOptions;

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
