import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import NavBar from "./components/Navbar";
import Achievements from "./sections/Achievements";

const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
    </>
  )
}

export default App