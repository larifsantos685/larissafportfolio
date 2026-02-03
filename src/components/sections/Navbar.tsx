import { Button } from "@/components/ui/button"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

export function Navbar() {
    const links = [
        { name: "Home", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projetos", href: "#projects" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                <a href="#">
                    <AnimatedGradientText className="cursor-pointer">
                        <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-lg font-bold">
                            &lt;LarissaDev /&gt;
                        </span>
                    </AnimatedGradientText>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Contato
                    </Button>
                </div>

                {/* Futuro menu mobile */}
                <div className="md:hidden text-white">
                    Menu
                </div>

            </div>
        </nav>
    )
}