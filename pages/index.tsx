import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor debitis natus
          architecto dolores delectus ullam nam cum quam ipsam? Commodi mollitia eligendi
          necessitatibus magnam maxime ipsum, nobis voluptate iste?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor debitis natus
          architecto dolores delectus ullam nam cum quam ipsam? Commodi mollitia eligendi
          necessitatibus magnam maxime ipsum, nobis voluptate iste?
        </p>

        <Link href="/ninjas">
          <a>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
