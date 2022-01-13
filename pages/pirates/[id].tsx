import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React, { ReactElement } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((pirate: any) => {
    return {
      params: { id: pirate.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { pirate: data },
  };
};

export default function Details({ pirate }: any): ReactElement {
  return (
    <div>
      <h1>{pirate.name}</h1>
      <p>{pirate.email}</p>
      <p>{pirate.website}</p>
      <p>{pirate.address.city}</p>
    </div>
  );
}
