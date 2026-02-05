import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export function Introduction() {
  
  const containerVariants: Variants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" 
      }
    },
    hover: {
      y: 0,
      scale: 1.05,
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      }
    }
  };

  const circleVariants: Variants = {
    float: { 
      scale: 0.9, 
      opacity: 0.6 
    },
    hover: { 
      scale: 1.1, 
      opacity: 1, 
      backgroundColor: "rgba(147, 51, 234, 0.4)" 
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      {/* Lado esquerdo */}
        <div className="flex-1 text-center md:text-left space-y-8 z-10">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300">
            🚀 Disponível para novas oportunidades
          </div>

          <div className="text-4xl md:text-6xl font-bold text-white space-y-2">
            <p className="text-slate-400 text-2xl md:text-3xl">Olá, eu sou</p>
            <TypingAnimation 
            words={['Larissa Fernanda.', 'Desenvolvedora Full Stack.','Larissa Fernanda.']}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 leading-tight pb-2"
              duration={100}
            >
            </TypingAnimation>
          </div>

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed md:mx-0 mx-auto">
            Desenvolveodra Web formada em Tecnologia em Sistemas para internet, apaixonada por criar <span className="text-indigo-400 font-semibold"> soluções digitais </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <a href="#projects">
            <Button className="h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-700 text-white">
              Ver Projetos
            </Button>
            </a>
            <div className="flex gap-4 justify-center">
             <a href="https://github.com/larifsantos685" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 w-12 p-0 border-slate-800 text-slate-200 hover:bg-slate-900 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
            <a href="https://www.linkedin.com/in/larissafsantos685/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 w-12 p-0 border-slate-800 text-slate-200 hover:bg-slate-900 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Lado direito */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer"
            initial="float"
            animate="float"
            whileHover="hover"
          >
          
            <motion.div 
                className="absolute inset-0 rounded-full bg-purple-600/20 blur-xl z-0"
                variants={circleVariants}
                transition={{ duration: 0.3 }}
            />

            <motion.img 
              src="/larissafoto.jpg" 
              alt="Foto de Larissa"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl"
              variants={containerVariants}
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}