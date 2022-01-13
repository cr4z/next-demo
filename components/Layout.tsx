import React, { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: any): ReactElement {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
