import React from "react";
import styles from "./Cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faChartLine,
  faBrain,
  faLaptopCode,
  faQuestionCircle,
  faGlobe, // Add the spider icon
} from "@fortawesome/free-solid-svg-icons";

function getIcon(skillName) {
  switch (skillName.toLowerCase()) {
    case "data structures and algorithms":
      return faCode;
    case "data science and analytics":
      return faChartLine;
    case "machine and deep learning":
      return faBrain;
    case "web development":
      return faLaptopCode;
    case "web scraping": // Add the case for Web Scraping
      return faGlobe;
    default:
      return faQuestionCircle;
  }
}

function Cards({ skills }) {
  return (
    <div className={styles.cardsContainer}>
      {Object.keys(skills).map((key) => (
        <div key={key} className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={getIcon(key)} size="2x" />{" "}
          </div>
          <h3>{key}</h3>
          <p>{skills[key]}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
