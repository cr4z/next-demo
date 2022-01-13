import { GetStaticProps } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { pirates: data },
  };
};

interface Props {
  pirates: any;
}

const Pirates = ({ pirates }: Props) => {
  return (
    <div>
      <h1>All Pirates</h1>

      {pirates.map((pirate: any) => {
        return (
          <Link href={"/pirates/" + pirate.id} key={pirate.id}>
            <a>
              <h3>{pirate.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Pirates;
