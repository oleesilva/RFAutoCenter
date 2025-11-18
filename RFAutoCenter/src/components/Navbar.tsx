// Componente Navbar - Barra de navegação fixa
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Links de navegação
  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" }
  ];

  // Detectar scroll para mudar estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler para clique nos links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handler para abrir WhatsApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substituir pelo número real
    const message = encodeURIComponent("Olá! Gostaria de agendar um serviço na RF Auto Center.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group"
            aria-label="RF Auto Center - Página inicial"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <Wrench className={`w-5 h-5 ${isScrolled ? "text-white" : "text-white"}`} aria-hidden="true" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              RF Auto Center
            </span>
          </a>

          {/* Links de navegação - Desktop */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-medium transition-colors hover:text-secondary ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Botão de ação - Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={handleWhatsAppClick}
              className={`font-semibold px-6 rounded-xl btn-hover ${
                isScrolled
                  ? "bg-secondary hover:bg-secondary/90 text-white"
                  : "bg-white hover:bg-white/90 text-primary"
              }`}
              aria-label="Agendar serviço via WhatsApp"
            >
              Agendar Serviço
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-lg border-t border-border animate-fade-in"
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-foreground hover:text-secondary font-medium py-2 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl"
                  aria-label="Agendar serviço via WhatsApp"
                >
                  Agendar Serviço
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
