import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const url = "http://" + context.req.headers.host + "/api/products";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("heyooooo", url);

  let res = await fetch(url, options);

  console.log(res);

  return {
    props: { res },
  };

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
