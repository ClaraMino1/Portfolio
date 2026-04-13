import NavBar from "./components/NavBar";
import Hero from "./features/hero/Hero";
import Trajectory from "./features/trajectory/trajectory";
import Skills from "./features/skills/skills";
import Projects from "./features/projects/Projects";

function App() {
  return (
    <main className="container mx-auto pt-24">
      <NavBar />
      <Hero />
      <Trajectory />
      <Skills />
      <Projects/>
      {/*<Contact />
      <Footer /> */}
    </main>
  );
}

export default App;