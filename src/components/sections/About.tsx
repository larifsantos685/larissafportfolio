import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function About() {
  const photos = [
    { src: "/foto-tcc-larissa.jpeg", alt: "Apresentação do TCC da faculdade" },
    {
      src: "/larissafoto.jpg",
      alt: "Foto de formatura no técnico Larissa Fernanda",
    },
    {
      src: "/foto-tcc-grupo.jpeg",
      alt: "Apresentação do TCC com orientador e equipe",
    },
    { src: "/foto-tcc-tecnico.jpeg", alt: "Apresentação do TCC do Técnico" },
    {
      src: "/foto-maratona.jpeg",
      alt: "Participando da Maratona de Programação",
    },
    {
      src: "/foto-palestra-1.jpeg",
      alt: "Participando da palestra Build With AI - GDG Santos",
    },
    {
      src: "/foto-palestra-2.jpeg",
      alt: "Participando da palestra Build With AI - GDG Santos",
    },
    {
      src: "/foto-palestra-3.jpeg",
      alt: "Participando da palestra Women Techmakers - GDG Santos",
    },
  ];

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="
    flex
    items-start lg:items-center
    py-8 md:py-20
    bg-slate-950/50
    relative
    overflow-hidden
  "
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-800/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sobre <span className="text-indigo-400">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="order-2 lg:order-1 space-y-6 text-lg text-slate-300 leading-relaxed"
          >
            <div className="space-y-6">
              <p>
                <strong className="text-white text-xl block mb-2">
                  Um pouco sobre mim.
                </strong>
                Comecei na tecnologia aos 16 anos, no ensino técnico e desde
                então tive a certeza de que criar soluções com código era o
                caminho que eu queria seguir. Também busco aprendizado fora do
                código, participando de palestras e eventos da área.
              </p>

              <p>
                <strong className="text-white text-xl block mb-2">
                  O que me move.
                </strong>
                Gosto de aprender fazendo, resolver problemas reais e
                transformar ideias em sistemas que funcionam de verdade.
              </p>

              <p>
                <strong className="text-white text-xl block mb-2">
                  Fora do código.
                </strong>
                Acredito em equilíbrio: disciplina, foco e energia pra encarar
                novos desafios.
              </p>
            </div>
          </motion.div>

          {/* Coluna direita - Carrossel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl rotate-3 transform scale-105 z-0"></div>

            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-md lg:max-w-lg mx-auto relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-indigo-500/20"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {photos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-800 relative mt-10 lg:mt-0">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-4 opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-sm text-center">
                            {photo.alt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-slate-900/50 border-slate-700 text-white hover:bg-indigo-600 hover:text-white" />
              <CarouselNext className="right-2 bg-slate-900/50 border-slate-700 text-white hover:bg-indigo-600 hover:text-white" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
