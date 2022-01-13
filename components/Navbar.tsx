import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar(): ReactElement {
  return (
    <nav>
      <Image src="/logo.png" width={128} height={128} alt="logo" />

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/pirates">
        <a>Pirates Listing</a>
      </Link>
    </nav>
  );
}
