import React, { ReactElement } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Shop from "../../components/shop";
import Card from "../../components/card";
import ShopAPI from "../../utils/shopAPI";

export const getServerSideProps: GetServerSideProps = async () => {
  const url = ShopAPI.GetRequestURL("wheels");
  const options = ShopAPI.GetRequestOptions;

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
