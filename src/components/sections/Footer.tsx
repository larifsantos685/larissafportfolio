import { ArrowUp } from "lucide-react";

export function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        
        <p>© {new Date().getFullYear()} Larissa Fernanda. Todos os direitos reservados.</p>
        
        <div className="flex items-center gap-6">
          <p className="hidden md:block">
            Desenvolvido com <span className="text-indigo-500">React</span> & <span className="text-cyan-500">Tailwind</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors group"
            title="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}