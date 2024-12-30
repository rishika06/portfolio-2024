import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 justify-center">
          <Hero />
        </header>
        <main className="lg:w-1/2 lg:py-24 pl-4">
          <About />
          <Experience />
          <Projects />
          <Certifications />
        </main>
      </div>
    </div>
  );
}

export default App;
