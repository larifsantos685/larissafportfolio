import { Navbar } from "@/components/sections/Navbar";
import { Introduction } from "@/components/sections/Introduction";
import { About } from "./components/sections/About";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      <Navbar />

      <main className="flex flex-col items-center w-full pt-16">
        <div id="home" className="w-full">
          <Introduction />
        </div>

        <div id="about"   className="w-full border-t border-slate-900 mt-8 md:mt-16">
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
