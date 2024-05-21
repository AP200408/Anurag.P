import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Menu from "../Menu/Menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles["nav-bar"]} ${isScrolled ? styles["scrolled"] : ""}`}
    >
      <p className={styles["logo"]}>
        Anurag<span className={styles["P"]}>.P</span>
      </p>
      {windowWidth <= 768 ? (
        <>
          <div className={styles["hamburger-menu"]} onClick={handleMenuToggle}>
            <div
              className={`${styles["bar"]} ${isMenuOpen ? styles["bar1"] : ""}`}
            ></div>
            <div
              className={`${styles["bar"]} ${isMenuOpen ? styles["bar2"] : ""}`}
            ></div>
            <div
              className={`${styles["bar"]} ${isMenuOpen ? styles["bar3"] : ""}`}
            ></div>
          </div>
          <div
            className={`${styles["menu-overlay"]} ${
              isMenuOpen ? styles["open"] : ""
            }`}
            onClick={handleMenuToggle}
          >
            <Menu />
          </div>
        </>
      ) : (
        <Menu />
      )}
    </nav>
  );
}
