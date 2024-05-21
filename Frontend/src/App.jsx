// App.jsx
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import MySkills from "./components/MySkills/MySkills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MySkills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
