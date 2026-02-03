import { Navbar } from "@/components/sections/Navbar"
import { Introduction } from "@/components/sections/Introduction"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      
      <Navbar />

      <main className="flex flex-col items-center w-full pt-16">
        
        <div id="home" className="w-full">
           <Introduction />
        </div>
        
     
        <div id="about" className="h-screen flex items-center justify-center border-t border-slate-900 w-full">
          <h2 className="text-3xl font-bold text-slate-700">Sobre Mim (Em breve)</h2>
        </div>

      </main>
    </div>
  )
}

export default App