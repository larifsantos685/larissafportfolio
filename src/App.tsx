import { Navbar } from "@/components/sections/Navbar";
import { Introduction } from "@/components/sections/Introduction";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experiences } from "./components/sections/Experiences";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      <Navbar />

      <main className="flex flex-col items-center w-full pt-16">
        <div id="home" className="w-full">
          <Introduction />
        </div>

        <div
          id="about"
          className="w-full border-t border-slate-900 mt-8 md:mt-16"
        >
          <About />
        </div>

        <div
          id="skills"
          className="w-full border-t border-slate-900 mt-8 md:mt-16"
        >
          <Skills />
        </div>
        <div
          id="skills"
          className="w-full border-t border-slate-900 mt-8 md:mt-16"
        >
          <Projects />
        </div>

        <div
          id="experiences"
          className="w-full border-t border-slate-900 mt-8 md:mt-16"
        >
          <Experiences />
        </div>

        <div
          id="Contact"
          className="w-full border-t border-slate-900 mt-8 md:mt-16"
        >
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
