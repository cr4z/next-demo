import React, { useState, useRef, Children, ReactElement, useEffect } from "react";
import styles from "../styles/Shop.module.css";
const logo = "/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser, faBars, faCog } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProductView from "../components/productView";

export default function Shop() {
  const dropdownRef = useRef<any>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("decks");

  const [mouseIsOnFilterBtn, setMouseIsOnFilterBtn] = useState<Boolean>(false);
  const [mouseIsOnMenuBtn, setMouseIsOnMenuBtn] = useState<Boolean>(false);
  const [mouseIsOnSortBtn, setMouseIsOnSortBtn] = useState<Boolean>(false);

  const [filterOpen, setFilterOpen] = useState<Boolean>(false);
  const [rotateMenuIcon, setRotateMenuIcon] = useState<Boolean>(false);
  const [rotateSortIcon, setRotateSortIcon] = useState<Boolean>(false);

  const [height, setHeight] = useState<string>();

  function onMenuBtnClick() {
    if (dropdownRef.current.style.height === "" && mouseIsOnMenuBtn) {
      setRotateMenuIcon(true);
      dropdownRef.current.style.height = "300px";
    } else {
      setRotateMenuIcon(false);
      dropdownRef.current.style.height = "";
    }
  }

  function onFilterBtnClick() {
    if (mouseIsOnFilterBtn) {
      if (filterOpen) {
        setFilterOpen(false);
        setHeight("0px");
      } else {
        setFilterOpen(true);
        setHeight("3rem");
      }
    }
  }

  function onSortBtnClick() {
    if (mouseIsOnSortBtn) {
      setRotateSortIcon(!rotateSortIcon);
    }
  }

  return (
    <div className={styles.backgroundCity} onMouseDown={() => onMenuBtnClick()}>
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
            <a
              onMouseEnter={() => setMouseIsOnFilterBtn(true)}
              onMouseLeave={() => setMouseIsOnFilterBtn(false)}
              onClick={() => onFilterBtnClick()}
            >
              <span>Filter</span>
              <FontAwesomeIcon
                className="has-transition"
                style={filterOpen ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" }}
                icon={faCog}
                size="sm"
              />
            </a>
          </div>

          <div>
            <div
              className={styles.menuBtn}
              onMouseEnter={() => setMouseIsOnMenuBtn(true)}
              onMouseLeave={() => setMouseIsOnMenuBtn(false)}
            >
              {selectedCategory}
              <FontAwesomeIcon
                className={styles.dropdownArrow + " has-transition"}
                style={
                  rotateMenuIcon ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" }
                }
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
            <a
              onMouseEnter={() => setMouseIsOnSortBtn(true)}
              onMouseLeave={() => setMouseIsOnSortBtn(false)}
              onClick={() => onSortBtnClick()}
            >
              <span>Sort</span>
              <FontAwesomeIcon icon={faBars} size="sm" />
            </a>
          </div>
        </div>

        <div className={styles.filterBx} style={{ height: height }}>
          <span className={styles.color}>
            <p>Select Color:</p>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        {rotateSortIcon && <div>whats good</div>}

        <div className={styles.grid}>
          <ProductView selectedProduct={selectedCategory} />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>Made by Steven F. Cruz</span>
          <p>
            <a href="mailto:stevencr7zz@gmail.com">StevenFCruz@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
