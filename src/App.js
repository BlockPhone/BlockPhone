import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
   <>
  <Navbar />
  <Container>
  <AboutMe />
  <Projects />
  <Contact />
  </Container>
   </>
  );
}

export default App;
 