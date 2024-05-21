import styles from "./About.module.css";
import secondaryProfilePhoto from "../../assets/Profile/Me2.png";

const About = () => {
  return (
    <>
      <section id="about" className={styles["about-me-container"]}>
        <h2>About Me</h2>
        <div className={styles["about-me"]}>
          <div className={styles["profile-picture"]}>
            <img src={secondaryProfilePhoto} alt="Profile" />
          </div>
          <div className={styles["about-me-text"]}>
            <p>
              Hi, I'm Anurag Panda, a student at Institute of Technical
              Education and Research(ITER), Shiksha 'O' Anusandhan and a
              passionate developer with a love for creating intuitive and
              dynamic user experiences. I specialize in Machine and Deep
              Learning and front-end development, and have a strong foundation
              in back-end technologies. When I'm not coding, I enjoy exploring
              new technologies, contributing to open-source projects, and
              interacting with the community.
            </p>
            <p>
              My journey in tech started 7 years ago with Python, and since
              then, I've worked on a variety of exciting projects that have
              challenged and honed my skills. I believe in the power of
              collaboration and am always eager to connect with like-minded
              individuals. Let's create something amazing together!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
