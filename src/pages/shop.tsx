import React, { useState, useRef, Children, ReactElement, useEffect, useMemo } from "react";
import styles from "../styles/Shop.module.css";
import gridStyle from "../styles/Grid.module.css";
const logo = "/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUser,
  faBars,
  faCog,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProductView from "../components/productView";
import "../utils/helpers";
import { getNewArrayWithout } from "../utils/helpers";
import { SortRule } from "../types/sortRule";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("decks");

  const [mouseIsOnFilterBtn, setMouseIsOnFilterBtn] = useState<Boolean>(false);
  const [mouseIsOnMenuBtn, setMouseIsOnMenuBtn] = useState<Boolean>(false);
  const [mouseIsOnSortBtn, setMouseIsOnSortBtn] = useState<Boolean>(false);

  const [filterOpen, setFilterOpen] = useState<Boolean>(false);
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const [sortOpen, setSortOpen] = useState<Boolean>(false);

  const [filterHeight, setFilterHeight] = useState<string>();
  const [menuHeight, setMenuHeight] = useState<string>();
  const [sortHeight, setSortHeight] = useState<string>();

  const [filterParams, setFilterParams] = useState<string[]>([]);
  const [sortRule, setSortRule] = useState<SortRule>(SortRule.none);

  const memoizedProductView = useMemo(() => {
    return (
      <ProductView
        selectedProduct={selectedCategory}
        filterParams={filterParams}
        sortRule={sortRule}
      />
    );
  }, [filterParams, selectedCategory, sortRule]);

  function onAllClicks() {
    if (menuOpen) {
      setMenuOpen(false);
      setMenuHeight("0px");
    }
    if (!menuOpen && mouseIsOnMenuBtn) {
      setSortOpen(false);
      setSortHeight("0px");
      setFilterOpen(false);
      setFilterHeight("0px");

      setMenuOpen(true);
      setMenuHeight("300px");
    }
  }

  function onFilterBtnClick() {
    setSortOpen(false);
    setSortHeight("0px");

    if (mouseIsOnFilterBtn) {
      if (filterOpen) {
        setFilterOpen(false);
        setFilterHeight("0px");
      } else {
        setFilterOpen(true);
        setFilterHeight("3rem");
      }
    }
  }

  const [filterBlackActive, setFilterBlackActive] = useState<boolean>(false);
  const [filterYellowActive, setFilterYellowActive] = useState<boolean>(false);
  const [filterWhiteActive, setFilterWhiteActive] = useState<boolean>(false);
  function toggleBlack() {
    const color = "black";
    if (filterParams.includes(color)) {
      setFilterBlackActive(false);
      setFilterParams(getNewArrayWithout(color, filterParams));
    } else {
      setFilterBlackActive(true);
      setFilterParams([...filterParams, color]);
    }
  }
  function toggleYellow() {
    const color = "yellow";
    if (filterParams.includes(color)) {
      setFilterYellowActive(false);
      setFilterParams(getNewArrayWithout(color, filterParams));
    } else {
      setFilterYellowActive(true);
      setFilterParams([...filterParams, color]);
    }
  }
  function toggleWhite() {
    const color = "white";
    if (filterParams.includes(color)) {
      setFilterWhiteActive(false);
      setFilterParams(getNewArrayWithout(color, filterParams));
    } else {
      setFilterWhiteActive(true);
      setFilterParams([...filterParams, color]);
    }
  }

  function onSortBtnClick() {
    setFilterOpen(false);
    setFilterHeight("0px");

    if (mouseIsOnSortBtn) {
      if (sortOpen) {
        setSortOpen(false);
        setSortHeight("0px");
      } else {
        setSortOpen(true);
        setSortHeight("7rem");
      }
    }
  }

  return (
    <div className={styles.backgroundCity} onMouseDown={() => onAllClicks()}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link href="/" passHref={true}>
            <Image className="fade-in" src={logo} layout="fill" alt="logo" priority />
          </Link>
        </div>
      </header>

      <section className={styles.shopContent}>
        <div className={styles.shopControls}>
          <div
            onMouseEnter={() => setMouseIsOnFilterBtn(true)}
            onMouseLeave={() => setMouseIsOnFilterBtn(false)}
            onClick={() => onFilterBtnClick()}
          >
            <a>
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
                style={menuOpen ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" }}
                size="sm"
                icon={faChevronRight}
              />
              <ul
                className={styles.dropdown + " fancyul"}
                style={{ marginTop: "1.2rem", height: menuHeight }}
              >
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

          <div
            onMouseEnter={() => setMouseIsOnSortBtn(true)}
            onMouseLeave={() => setMouseIsOnSortBtn(false)}
            onClick={() => onSortBtnClick()}
          >
            <a>
              <span>Sort</span>
              <FontAwesomeIcon icon={faBars} size="sm" />
            </a>
          </div>
        </div>

        <div className={styles.filterBx} style={{ height: filterHeight }}>
          {
            {
              decks: (
                <span className={styles.color}>
                  <p>Select Color:</p>
                  <span
                    style={filterBlackActive ? { borderColor: "green" } : {}}
                    onClick={() => toggleBlack()}
                  ></span>
                  <span
                    style={filterYellowActive ? { borderColor: "green" } : {}}
                    onClick={() => toggleYellow()}
                  ></span>
                  <span
                    style={filterWhiteActive ? { borderColor: "green" } : {}}
                    onClick={() => toggleWhite()}
                  ></span>
                </span>
              ),
              trucks: <div>No filter options available</div>,
              wheels: <div>No filter options available</div>,
              bearings: <div>No filter options available</div>,
            }[selectedCategory]
          }
        </div>

        <div className={styles.sortBx} style={{ height: sortHeight }}>
          <ul className="fancyul">
            <li
              onClick={() => {
                setSortRule(SortRule.priceLowToHigh);
              }}
            >
              <a>Price: Low to High</a>
            </li>
            <li
              onClick={() => {
                setSortRule(SortRule.priceHighToLow);
              }}
            >
              <a>Price: High to Low</a>
            </li>
          </ul>
        </div>

        <div className={gridStyle.grid}>{memoizedProductView}</div>
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
