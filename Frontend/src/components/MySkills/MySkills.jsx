import React from "react";
import styles from "./MySkills.module.css";
import skills from "./skills";
import Cards from "../Card/Cards";

function MySkills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>My Skills</h2>
      <Cards skills={skills} />
      <div className={styles.resumeDownload}>
        <p>Download my resume:</p>
        <a href="http://localhost:5000/download-resume" download>
          <button className={styles.downloadButton}>Download</button>
        </a>
      </div>
    </section>
  );
}

export default MySkills;
