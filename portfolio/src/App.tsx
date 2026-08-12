import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import NavBar from "./components/Navbar";
import Achievements from "./sections/Achievements";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </>
  )
}

export default App