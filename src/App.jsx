import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <Hero />
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <About />
          <About />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
