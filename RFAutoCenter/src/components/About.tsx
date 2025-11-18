// Componente About - Seção sobre a empresa
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, Users } from "lucide-react";
import aboutWorkshopImage from "@/assets/about-workshop.jpg";

const About = () => {
  // Diferenciais da empresa
  const features = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Mais de 10 anos prestando serviços de qualidade"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Equipamentos modernos e peças originais"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Atendimento rápido e eficiente"
    },
    {
      icon: Users,
      title: "Experiência",
      description: "Equipe de mecânicos especializados"
    }
  ];

  return (
    <section 
      id="sobre" 
      className="py-20 md:py-32 bg-muted/30"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem da oficina */}
          <div className="relative animate-fade-in-up order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutWorkshopImage} 
                alt="Interior moderno da oficina RF Auto Center com vários carros em manutenção"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>

            {/* Cards flutuantes com estatísticas */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card rounded-2xl shadow-2xl p-6 animate-scale-in max-w-[200px]">
              <div className="text-4xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-secondary rounded-2xl shadow-2xl p-6 animate-scale-in max-w-[200px]" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-white mb-1">4.8★</div>
              <div className="text-sm text-white/90">Avaliação Média</div>
            </div>
          </div>

          {/* Conteúdo de texto */}
          <div className="space-y-6 order-1 lg:order-2 animate-slide-in-right">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-primary">Sobre Nós</span>
            </div>

            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="led-text">
                {'A Melhor Escolha Para Seu Veículo'.split('').map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong>RF Auto Center</strong> é uma oficina mecânica especializada em serviços automotivos com mais de 10 anos de experiência no mercado. Nossa missão é proporcionar serviços de alta qualidade com atendimento personalizado e preços justos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Contamos com uma equipe de mecânicos qualificados e equipamentos modernos para diagnóstico e manutenção de veículos de todas as marcas. Seja para uma simples troca de óleo ou reparos mais complexos, você pode confiar na nossa experiência.
            </p>

            {/* Grid de diferenciais */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botão de contato */}
            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-2xl btn-hover"
                aria-label="Entrar em contato"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
