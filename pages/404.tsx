import Link from "next/link";
import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";

interface Props {}

export default function Error404({}: Props): ReactElement {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Oops....</h1>
      <h2>This page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}
