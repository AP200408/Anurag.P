import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <ul className={styles["menu-container"]}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#exp">Experience</a>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
    </ul>
  );
}
