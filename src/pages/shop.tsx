import React, { useState, useRef, Children, ReactElement, useEffect } from "react";
import styles from "../styles/Shop.module.css";
const logo = "/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProductView from "../components/ProductView";

export default function Shop({ children }: any) {
  const [mouseIsOnDiv, setMouseIsOnDiv] = useState<Boolean>(false);
  const dropdownRef = useRef<any>(null);
  const conditionalStyle = 4;
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("decks");

  function onCategoryMenuBtnClick() {
    if (dropdownRef.current.style.height === "" && mouseIsOnDiv) {
      setIsOpen(true);
      conditionalStyle;
      dropdownRef.current.style.height = "300px";
    } else {
      setIsOpen(false);
      dropdownRef.current.style.height = "";
    }
  }

  function onMouseEnter() {
    setMouseIsOnDiv(true);
  }
  function onMouseExit() {
    setMouseIsOnDiv(false);
  }

  return (
    <div className={styles.backgroundCity} onMouseDown={() => onCategoryMenuBtnClick()}>
      <header className={styles.header}>
        <div></div>

        <div className={styles.logoContainer + " fadeIn"}>
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
              onMouseEnter={() => onMouseEnter()}
              onMouseLeave={() => onMouseExit()}
            >
              {selectedCategory}
              <FontAwesomeIcon
                className={styles.dropdownArrow}
                style={isOpen ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" }}
                size="sm"
                icon={faChevronRight}
              />
              <ul className={styles.dropdown} ref={dropdownRef}>
                <li onClick={() => setSelectedCategory("decks")}>
                  <a>decks</a>
                </li>
                <li onClick={() => setSelectedCategory("trucks")}>
                  <a>trucks</a>
                </li>
                <li onClick={() => setSelectedCategory("wheels")}>
                  <a>wheels</a>
                </li>
                <li onClick={() => setSelectedCategory("bearings")}>
                  <a>bearings</a>
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

        <div className={styles.grid}>
          <ProductView selectedProduct={selectedCategory} />
        </div>
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
