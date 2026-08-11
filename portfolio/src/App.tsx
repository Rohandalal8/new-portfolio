import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import NavBar from "./components/Navbar";
import Achievements from "./sections/Achievements";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
    </>
  )
}

export default App