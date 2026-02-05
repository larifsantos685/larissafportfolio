import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, Loader2, Linkedin, Github } from "lucide-react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const serviceID = "service_gyf16ah"; 
    const templateID = "template_vhdnn8i";
    const publicKey = "ULj16gq-LeJsSp0t4";

    if (!formRef.current) return;

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error("Erro ao enviar:", error);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 bg-slate-950 relative overflow-hidden">
        
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos <span className="text-indigo-400">Conversar?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tem alguma ideia, projeto ou oportunidade? Preencha o formulário abaixo ou me chame nas redes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          
          {/* LADO ESQUERDO: Redes e Infos */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <Card className="bg-slate-900/50 border-slate-800 p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">E-mail</h4>
                        <a href="mailto:larissafsantos.685@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            larissafsantos.685@gmail.com
                        </a>
                    </div>
                </div>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 p-6">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/larissafsantos685/" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            in/larissfsantos685
                        </a>
                    </div>
                </div>
            </Card>

             <Card className="bg-slate-900/50 border-slate-800 p-6">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <Github className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium">GitHub</h4>
                        <a href="https://github.com/larifsantos685" target="_blank" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            github.com/larifsantos685
                        </a>
                    </div>
                </div>
            </Card>
          </motion.div>

          {/* LADO DIREITO: Formulário */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800">
                <CardHeader>
                    <CardTitle className="text-white">Envie uma mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Nome</label>
                            <Input 
                                name="user_name" 
                                id="user_name"
                                placeholder="Seu nome" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500" 
                                required
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="user_email" className="text-sm font-medium text-slate-300">E-mail</label>
                            <Input 
                                name="user_email" 
                                id="user_email"
                                type="email" 
                                placeholder="seu@email.com" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500" 
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Mensagem</label>
                            <Textarea 
                                name="message" 
                                id="message"
                                placeholder="Como posso ajudar?" 
                                className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500 min-h-[120px]" 
                                required
                            />
                        </div>

                        <Button 
                            type="submit" 
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : success ? (
                                "Mensagem Enviada! ✅"
                            ) : (
                                <>
                                    Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>

                        {error && (
                            <p className="text-red-400 text-sm text-center mt-2">
                                Erro ao enviar. Tente pelo LinkedIn ou e-mail direto.
                            </p>
                        )}
                    </form>
                </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}