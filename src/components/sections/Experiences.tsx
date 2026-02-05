import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code } from "lucide-react";

export function Experiences() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const experiences = [
    {
      type: "work",
      title: "Desenvolvedora Full Stack",
      company: "Toca Online",
      period: "Mar 2025 - Momento", 
      description: "Atuação no desenvolvimento e manutenção de sistemas web utilizando PHP, Laravel e React. Responsável pela implementação de novas features, correção de bugs e otimização de consultas em banco de dados.",
      skills: ["PHP", "Laravel", "React", "MySQL", "Git","Filament", "API Restful", "Outros"],
      icon: <Code className="w-5 h-5 text-white" />
    },
    {
      type: "work",
      title: "Estagiária de TI",
      company: "Donni Comércio",
      period: "Set/2024 - Out/2024", 
      description: "Foco na padronização e gerenciamento de informações de grande volume de produtos para ecommerce, mostrando resultados de pesquisa direto a gerência.",
      skills: ["SEO", "Comunicação"],
      icon: <Briefcase className="w-5 h-5 text-white" />
    },
    {
      type: "education",
      title: "Graduação em Sistemas para Internet",
      company: "FATEC BS - Rubens Lara",
      period: "Concluído em Dez/2025",
      description:   "Formação superior com foco em desenvolvimento web, arquitetura de sistemas e aplicação prática dos conceitos de engenharia de software.",
      skills: ["Liderança", "Organização", "Java", "PHP", "Outros"],
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      type: "education",
      title: "Técnico em Desenvolvimento de Sistemas",
      company: "ETEC Dra. Ruth Cardoso",
      period: "Concluído em Dez/2022",
      description:"Formação técnica que consolidou minha base em lógica de programação, banco de dados e desenvolvimento de sistemas.",
      skills: ["Lógica de Programação", "Banco de Dados", "Outros"],
      icon: <Briefcase className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section id="experience" className="w-full py-20 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minha <span className="text-indigo-400">Jornada</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            De estudante técnica a desenvolvedora.
          </p>
        </motion.div>

        {/* Linha do Tempo */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
            
                <div className="absolute left-4 md:left-1/2 top-0 w-10 h-10 -ml-5 bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center z-10 shadow-lg shadow-indigo-500/10">
                    <div className={`w-3 h-3 rounded-full ${
                        exp.type === 'work' ? 'bg-indigo-500' : 'bg-cyan-500'
                    }`}></div>
                </div>

                <div className="hidden md:block flex-1"></div>

                <div className="flex-1 pl-12 md:pl-0"> 
                  <Card className={`bg-slate-900/50 border-slate-800 hover:border-indigo-500/30 transition-colors relative
                      ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
                  `}>
                    
                    <div className={`hidden md:block absolute top-4 w-4 h-4 bg-slate-900 border-t border-l border-slate-800 transform rotate-45
                        ${index % 2 === 0 ? "-right-2.5 border-r-0 border-b-0" : "-left-2.5 border-l-0 border-t-0 border-r border-b"}
                    `}></div>

                    <CardHeader className="pb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                             <Badge variant="outline" className={`w-fit
                                ${exp.type === 'work' ? 'border-indigo-500/50 text-indigo-400 bg-indigo-500/10' : 
                                  'border-cyan-500/50 text-cyan-400 bg-cyan-500/10'}
                             `}>
                                {exp.period}
                             </Badge>
                             <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                                {exp.type === 'work' ? 'Profissional' : 'Educação'}
                             </span>
                        </div>
                        <CardTitle className="text-lg text-white">
                            {exp.title}
                        </CardTitle>
                        <p className="text-indigo-400 font-medium text-sm">
                            {exp.company}
                        </p>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="text-xs font-medium text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}