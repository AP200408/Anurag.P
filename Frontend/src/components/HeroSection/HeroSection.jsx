// HeroSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import profilePhoto from "../../assets/Profile/Me.png";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [gradientX, setGradientX] = useState(0);
  const [pGradientX, setPGradientX] = useState(0);

  useEffect(() => {
    const targetText = "<hey /> I'm Anurag Panda.";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === targetText.length) {
        setIsTyping(false);
        clearInterval(interval);
        return;
      }
      setText(targetText.slice(0, currentIndex + 1));
      currentIndex++;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX / e.target.clientWidth;
    setGradientX(x * 100);
  };

  const handlePMouseMove = (e) => {
    const x = e.nativeEvent.offsetX / e.target.clientWidth;
    setPGradientX(x * 100);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.profileBlob}>
        <img src={profilePhoto} alt="Profile" />
      </div>
      <div className={styles["hero-content"]}>
        <h1>
          {text}
          {isTyping && <span className={styles.cursor}></span>}
          <span className={styles.blinkingCursor}></span>
        </h1>
        <p>
          An Aspiring <span>AI/ML Engineer.</span>
        </p>
        <p
          onMouseMove={handlePMouseMove}
          style={{
            backgroundImage: `linear-gradient(90deg, #CF388D ${pGradientX}%, #AA21DE ${pGradientX}%, #620A8E)`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Discover more about me and my work
        </p>
        <a href="#about" className={styles["hero-button"]}>
          Take me there
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
