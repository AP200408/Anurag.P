import React from "react";
import styles from "./Footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri"; // Import Twitter icon
import leetcodeLogo from "../../assets/Logo/Leetcode/Leetcode.png";
import kaggleLogo from "../../assets/Logo/Kaggle/kaggle.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a
          href="https://github.com/AP200408"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/anurag-panda-aa3b02291/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className={styles.icon} />
        </a>
        <a
          href="https://x.com/panda_anur25752"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterFill className={styles.icon} />
        </a>
        <a
          href="https://leetcode.com/u/AnuragPanda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={leetcodeLogo}
            alt="LeetCode"
            className={`${styles.imageIcon} ${styles.leetcode}`}
          />
        </a>
        <a
          href="https://www.kaggle.com/instockap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={kaggleLogo} alt="Kaggle" className={styles.imageIcon} />
        </a>
      </div>
      <p className={styles.text}>
        © {new Date().getFullYear()} Anurag Panda. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
