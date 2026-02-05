import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, Globe } from "lucide-react";

// Importando ícones de marcas do react-icons
import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiGooglegemini,
  SiHtml5,
  SiCss3,
  SiFilament,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function Projects() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getTechIcon = (techName: string) => {
    const iconClass = "w-5 h-5";

    switch (techName) {
      case "Laravel":
        return <SiLaravel className={`${iconClass} text-red-600`} />;
      case "PHP":
        return <SiPhp className={`${iconClass} text-indigo-400`} />;
      case "Filament":
        return <SiFilament className={`${iconClass} text-indigo-400`} />;
      case "Html":
        return <SiHtml5 className={`${iconClass} text-red-600`} />;
      case "Css":
        return <SiCss3 className={`${iconClass} text-red-600`} />;
      case "React":
        return <SiReact className={`${iconClass} text-cyan-400`} />;
      case "MySQL":
        return <SiMysql className={`${iconClass} text-blue-500`} />;
      case "Gemini":
        return <SiGooglegemini className={`${iconClass} text-green-500`} />;
      case "Tailwind CSS":
        return <SiTailwindcss className={`${iconClass} text-cyan-500`} />;
      case "Framer Motion":
        return <SiFramer className={`${iconClass} text-white`} />;
      case "Java":
        return <FaJava className={`${iconClass} text-red-500`} />;
      case "Spring Boot":
        return <SiSpringboot className={`${iconClass} text-green-500`} />;
      case "PostgreSQL":
        return <SiPostgresql className={`${iconClass} text-blue-400`} />;
      case "JavaScript":
        return <SiJavascript className={`${iconClass} text-yellow-400`} />;
      case "TypeScript":
        return <SiTypescript className={`${iconClass} text-blue-600`} />;
      case "Docker":
        return <SiDocker className={`${iconClass} text-blue-500`} />;
      default:
        return null;
    }
  };

  // Projetos numa const
  const projects = [
    {
      title: "StageConnect - Auxiliando sua jornada no mundo da tecnologia",
      description:
        "Plataforma web em Laravel desenvolvida como TCC, com autenticação, gestão de conteúdos, filtros por categorias e arquitetura preparada para produção.",
      image: "stageconnect-tela-index.png",
      tags: [
        "Html",
        "Css",
        "PHP",
        "Laravel",
        "MySQL",
        "Filament",
        "Javascript",
        "Gemini",
      ],
      links: {
        github: "https://github.com/SenaNilo/TCC-StageConnect",
        demo: "https://www.linkedin.com/posts/larissafsantos685_fullstack-laravel-php-activity-7422369073558093824-97ZP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyp2x0BnQEbhP_HzCzHQUOFtalq3qtOQOg",
      },
      featured: false,
    },
    {
      title: "Projeto CRUD de Salão de Beleza",
      description:
        "Sistema completo de gerenciamento de clientes desenvolvido em Java. Utiliza arquitetura MVC e renderização no servidor.",
      image: "tela-crud-java-salao.png",
      tags: ["Html", "Css", "Java", "Spring Boot", "PostgreSQL"],
      links: {
        github: "https://github.com/larifsantos685/projetojava",
        demo: null,
      },
      featured: false,
    },
    {
      title: "Transaction Service",
      description:
        "Sistema Full Stack de transações financeiras. Garante consistência e concorrência segura entre transferências de usuários e lojistas. Projeto educacional.",
      image: "tela-transaction-service.png",
      tags: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
      links: {
        github: "https://github.com/larifsantos685/transaction-service",
        demo: null,
      },
      featured: true,
    },
    {
      title: "Projeto simulação de cadastro em JavaScript",
      description:
        "Aplicação Front-end focada em manipulação do DOM e consumo de API (ViaCEP) para validação de formulários em tempo real.",
      image: "cadastro-javascript.png",
      tags: ["Html", "Css", "JavaScript"],
      links: {
        github: "https://github.com/larifsantos685/projeto_cadastroJavascript",
        demo: "https://larifsantos685.github.io/projeto_cadastroJavascript/projeto_cadastroJavascript/index.html",
      },
      featured: false,
    },
    {
      title: "Aumigos da Rua",
      description:
        "Projeto social e acadêmico para divulgação de ONGs e conscientização sobre abandono animal em Santos. Conectando mais as pessoas à causa.",
      image: "aumigos-da-rua.png",
      tags: ["Html", "Css", "JavaScript"],
      links: { github: "https://github.com/SenaNilo/Prj_AuMigos", demo: null },
      featured: false,
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meus <span className="text-indigo-400">Projetos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Uma seleção do que tenho construído recentemente.
          </p>
        </motion.div>

        {/* Carrossel de projetos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="px-4 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 h-full"
                >
                  <div className="h-full p-1">
                    {" "}
                    <Card className="bg-slate-900 border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col group">
                      <div className="relative h-48 overflow-hidden bg-slate-950">
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        {project.featured && (
                          <div className="absolute top-2 right-2 z-20">
                            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                              Último Projeto
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl text-white flex justify-between items-center">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        <CardDescription className="text-slate-400 mb-6 line-clamp-3">
                          {project.description}
                        </CardDescription>

                        <div className="flex flex-wrap items-center gap-4 mt-auto p-3 bg-slate-950/50 rounded-lg border border-slate-800/50">
                          <span className="text-xs text-slate-500 font-medium mr-auto">
                            Stacks:
                          </span>
                          {project.tags.map((tag) => {
                            const Icon = getTechIcon(tag);
                            return Icon ? (
                              <div
                                key={tag}
                                title={tag}
                                className="hover:-translate-y-1 transition-transform cursor-help"
                              >
                                {Icon}
                              </div>
                            ) : null;
                          })}
                        </div>
                      </CardContent>

                      <CardFooter className="gap-3 pt-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button
                            variant="outline"
                            className="w-full border-slate-700 hover:bg-slate-800 text-white"
                          >
                            <Github className="mr-2 h-4 w-4" /> Code
                          </Button>
                        </a>

                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                              <Globe className="mr-2 h-4 w-4" /> Demo
                            </Button>
                          </a>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-12 bg-transparent border-slate-700 text-slate-400 hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-transparent border-slate-700 text-slate-400 hover:text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
