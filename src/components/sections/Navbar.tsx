import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import { AnimatedGradientText } from "../ui/animated-gradient-text";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiências", href: "#experience" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
   
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-indigo-400 transition-colors"
        >
          <AnimatedGradientText className="cursor-pointer">
                        <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-lg font-bold">
                            &lt;LarissaDev /&gt;
                        </span>
                    </AnimatedGradientText>
                </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20">
                Contato
             </Button>
          </a>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-slate-950 border-l border-slate-800 w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2 text-white">
                    <Code2 className="w-6 h-6 text-indigo-500" />
                    Menu
                </SheetTitle>
                <SheetDescription className="hidden">
                    Navegação principal
                </SheetDescription>
              </SheetHeader>
              
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all border-b border-slate-900 pb-2 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="mt-4">
                     <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg">
                            Contato
                        </Button>
                     </a>
                </div>
              </nav>

            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.header>
  );
}