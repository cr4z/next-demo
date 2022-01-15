import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";
import { URLSearchParams } from "url";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const url = context.req.headers.host + "/api/products/?category=trucks";
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
    let trucks = await res.json();
    return {
      props: { trucks },
    };
  }
};

export default function Trucks({ trucks }: any): ReactElement {
  return (
    <Shop>
      {trucks &&
        trucks.data.map((product: any, index: any) => {
          return <Card key={index} title={product.name} imgPath={product.imgPath} />;
        })}
    </Shop>
  );
}
