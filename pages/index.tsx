import Image from "next/image";
import Link from "next/link";
import React from "react";
const video = "/videos/PexelsVideos2282013.mp4";
const logo = "/images/logo.png";
import styles from "../styles/Splash.module.css";

export default function Splash() {
  return (
    <section className={styles.splash}>
      <video src={video} autoPlay muted loop />

      <div className={styles.overlay}>
        <div className={styles.imgContainer}>
          <Image width={650} height={550} className={styles.img} src={logo} alt="logo" priority />
        </div>

        <div className={styles.btnContainer}>
          <Link href="/shop/decks">
            <a className={styles.btn}>View Shop</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
