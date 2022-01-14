import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";
import { URLSearchParams } from "url";

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "http://localhost:3000/api/products/?category=wheels";
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
    let wheels = await res.json();
    return {
      props: { wheels },
    };
  }
};

export default function wheels({ wheels }: any): ReactElement {
  return (
    <Shop>
      {wheels &&
        wheels.data.map((product: any, index: any) => {
          return <Card key={index} title={product.name} imgPath={product.imgPath} />;
        })}
    </Shop>
  );
}
