import { GetStaticPaths, GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async () => {};

export default function Details(): ReactElement {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
}
