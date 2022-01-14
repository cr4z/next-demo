import React, { useState, useRef } from "react";
import styles from "../styles/Shop.module.css";
const logo = "/images/logo.png";
const city = "/images/LA.jpg";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faInfo, faUser, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

function Shop() {
  const [mouseIsOnDiv, setMouseIsOnDiv] = useState<Boolean>(false);
  const dropdownRef = useRef<any>(null);
  const conditionalStyle = 4;
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  function OnMouseDown() {
    if (dropdownRef.current.style.height === "" && mouseIsOnDiv) {
      setIsOpen(true);
      conditionalStyle;
      dropdownRef.current.style.height = "300px";
    } else {
      setIsOpen(false);
      dropdownRef.current.style.height = "";
    }
  }

  function OnMouseEnter() {
    setMouseIsOnDiv(true);
  }
  function OnMouseExit() {
    setMouseIsOnDiv(false);
  }

  return (
    <div className={styles.backgroundCity} onMouseDown={() => OnMouseDown()}>
      <header className={styles.header}>
        <div></div>

        <div className={styles.logoContainer}>
          <Link href="/" passHref={true}>
            <Image src={logo} layout="fill" alt="logo" priority />
          </Link>
        </div>

        <div>
          <a href="/user" className={styles.icons}>
            <FontAwesomeIcon size="lg" icon={faUser} />
          </a>
        </div>
      </header>

      <section className={styles.shopContent}>
        <div className={styles.shopControls}>
          <div>
            <a href="#">
              <span>Filter</span>
              <FontAwesomeIcon icon={faCog} size="sm" />
            </a>
          </div>

          <div>
            <div
              className={styles.menuBtn}
              onMouseEnter={() => OnMouseEnter()}
              onMouseLeave={() => OnMouseExit()}
            >
              Trucks
              <FontAwesomeIcon
                className={styles.dropdownArrow}
                style={isOpen ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" }}
                size="sm"
                icon={faChevronRight}
              />
              <ul className={styles.dropdown} ref={dropdownRef}>
                <li>
                  <Link href={"/decks"}>decks</Link>
                </li>
                <li>
                  <Link href={"/trucks"}>trucks</Link>
                </li>
                <li>
                  <Link href={"/wheels"}>wheels</Link>
                </li>
                <li>
                  <Link href={"/bearings"}>bearings</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a href="#">
              <span>Sort</span>
              <FontAwesomeIcon icon={faBars} size="sm" />
            </a>
          </div>
        </div>

        <hr />

        {/* TODO: Add routing */}
      </section>

      <footer className={styles.footer}>
        <span>Made by Steven F. Cruz</span>
        <p>
          <a href="mailto:stevencr7zz@gmail.com">StevenFCruz@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Shop;

function Decks() {
  return (
    <>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  );
}

function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imgBx}>
        <Image src="/images/trucks.png" layout="fill" alt="trucks" />
        <h2>Grinding Trucks</h2>
      </div>
      <div className={styles.contentBx}>
        <div className={styles.size}>
          <h3>Size:</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>

        <div className={styles.color}>
          <h3>Color:</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="#">Buy Now</a>
      </div>
    </div>
  );
}
