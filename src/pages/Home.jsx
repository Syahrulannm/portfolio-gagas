import React from "react";
import Hero from "../components/home/Hero";
import AboutMe from "../components/home/AboutMe";
// import Experience from "../components/home/Experience";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Contact from "../components/home/Contact";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <AboutMe />
      {/* <Experience /> */}
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
