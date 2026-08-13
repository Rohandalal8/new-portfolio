import { useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import NavBar from "./components/Navbar";
import Achievements from "./sections/Achievements";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Intro from "./components/Intro";

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("introShown") !== "true";
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem("introShown", "true");
    setShowIntro(false);
  };
  return (
    <>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      <main>
        <ScrollProgress />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}

export default App