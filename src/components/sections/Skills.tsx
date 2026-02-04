import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Code2,
  Database,
  LayoutTemplate,
  Terminal,
  Cpu,
  Users,
  BrainCircuit,
  MessageCircle,
} from "lucide-react";

export function Skills() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hardSkills = [
    {
      category: "Front-end",
      icon: <LayoutTemplate className="w-5 h-5 text-cyan-400" />,
      skills: [
        "React",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Shadcn/UI",
        "Framer Motion",
        "JavaScript",
      ],
    },
    {
      category: "Back-end",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      skills: [
        "PHP",
        "Laravel",
        "Filament",
        "Java",
        "SpringBoot",
        "API REST",
        "Node.js (Básico)",
      ],
    },
    {
      category: "Banco de Dados",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ["MySQL", "PostgreSQL", "Modelagem de Dados"],
    },
    {
      category: "Ferramentas & DevOps",
      icon: <Terminal className="w-5 h-5 text-orange-400" />,
      skills: [
        "Git",
        "GitHub",
        "Docker (Básico)",
        "VS Code",
        "Figma",
        "Postman",
      ],
    },
  ];

  const softSkills = [
    {
      title: "Aprendizado Contínuo",
      description:
        "O que eu não sei, eu aprendo. Já entrei em projetos sem dominar o framework, mas com base na linguagem, e fui atrás. Aprender faz parte da minha rotina.",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Comunicação Clara",
      description:
        "Experiência com apresentações e comunicação técnica em evolução, especialmente no contato direto com liderança, buscando sempre clareza e objetividade.",
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
    },
    {
      title: "Autonomia e Proatividade",
      description:
        "Gosto de tomar a frente quando necessário, organizo demandas e assumo responsabilidade para que as entregas aconteçam.",
      icon: <Users className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Organização, Compromisso e Qualidade",
      description:
        "Prioritizo resolver o problema de forma eficiente, mas sempre com atenção à organização, arquitetura e código limpo. Entregas bem feitas e soluções refinadas são parte do meu compromisso com a qualidade do código.",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas <span className="text-indigo-400">Habilidades</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            O arsenal técnico que utilizo para transformar ideias em realidade.
          </p>
        </motion.div>

        {/* hardskills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {hardSkills.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >

              <Card className="bg-slate-900/50 border-slate-800 h-full hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300 group">
                <CardHeader className="flex flex-row items-center gap-3 pb-2 space-y-0">
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-indigo-500/30 transition-colors">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-white">
                        {category.category}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors"
                        >
                            {skill}
                        </Badge>
                        ))}
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-20"></div>

        {/* softskills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Soft Skills</h3>
          <p className="text-slate-400">Competências comportamentais</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((soft, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
      
              <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800 h-full hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                    <div className="mb-2 bg-slate-800/50 w-12 h-12 flex items-center justify-center rounded-full">
                        {soft.icon}
                    </div>
                    <CardTitle className="text-lg font-bold text-white">
                        {soft.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        {soft.description}
                    </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}