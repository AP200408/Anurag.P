import React from "react";
import styles from "./Experience.module.css";
import experiences from "./exp";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="exp" className={styles.experienceContainer}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.iconWrapper}>
              <FaBriefcase className={styles.icon} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.company}>{exp.company}</h3>
              <h4 className={styles.position}>{exp.position}</h4>
              <p className={styles.duration}>{exp.duration}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
