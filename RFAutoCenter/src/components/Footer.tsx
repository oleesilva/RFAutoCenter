// Componente Footer - Rodapé do site
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Links de navegação
  const footerLinks = {
    services: [
      { name: "Troca de Óleo", href: "#servicos" },
      { name: "Alinhamento", href: "#servicos" },
      { name: "Freios", href: "#servicos" },
      { name: "Suspensão", href: "#servicos" }
    ],
    company: [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Serviços", href: "#servicos" },
      { name: "Avaliações", href: "#avaliacoes" },
      { name: "Contato", href: "#contato" }
    ]
  };

  // Redes sociais (substituir por links reais)
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/rfautocenter", 
      label: "Facebook da RF Auto Center",
      name: "Facebook"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/rfautocenter", 
      label: "Instagram da RF Auto Center",
      name: "Instagram"
    }
  ];

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Seção principal do footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RF Auto Center</h3>
            <p className="text-white/80 leading-relaxed">
              Oficina mecânica especializada em serviços automotivos com mais de 10 anos de experiência.
            </p>
            
            {/* Redes sociais */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" aria-hidden="true" />
                <span className="text-white/80 text-sm">
                  R. José Bonifácio Filho, 46<br />
                  Jardim Ana Lucia - São Paulo, SP<br />
                  CEP: 04813-060
                </span>
              </li>
              <li>
                <a 
                  href="tel:+5511946089711"
                  className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors"
                  aria-label="Ligar para RF Auto Center"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                  <span className="text-sm">(11) 94608-9711</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato.rfautocenter@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors"
                  aria-label="Enviar e-mail para RF Auto Center"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-secondary" aria-hidden="true" />
                  <span className="text-sm">contato.rfautocenter@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior com copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} RF Auto Center. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
