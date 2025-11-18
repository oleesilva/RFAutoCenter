// Componente Services - Seção de serviços oferecidos
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplet, Gauge, Settings, Wind, AlertCircle } from "lucide-react";
import serviceOilImage from "@/assets/service-oil.jpg";
import serviceAlignmentImage from "@/assets/service-alignment.jpg";
import serviceBrakesImage from "@/assets/service-brakes.jpg";

const Services = () => {
  // Lista de serviços com dados estruturados
  const services = [
    {
      id: 1,
      icon: Droplet,
      title: "Troca de Óleo",
      description: "Troca de óleo e filtros com produtos de qualidade premium para prolongar a vida útil do motor.",
      image: serviceOilImage,
      imageAlt: "Carro azul recebendo troca de óleo profissional"
    },
    {
      id: 2,
      icon: Gauge,
      title: "Alinhamento e Balanceamento",
      description: "Alinhamento computadorizado e balanceamento de rodas para maior segurança e economia de combustível.",
      image: serviceAlignmentImage,
      imageAlt: "SUV preto em máquina de alinhamento computadorizado"
    },
    {
      id: 3,
      icon: AlertCircle,
      title: "Sistema de Freios",
      description: "Manutenção completa de freios incluindo pastilhas, discos, fluido e sistema hidráulico.",
      image: serviceBrakesImage,
      imageAlt: "Sistema de freios de alta qualidade sendo inspecionado"
    },
    {
      id: 4,
      icon: Settings,
      title: "Suspensão",
      description: "Revisão e troca de componentes da suspensão para conforto e estabilidade na direção.",
      image: null,
      imageAlt: ""
    },
    {
      id: 5,
      icon: Wind,
      title: "Ar Condicionado",
      description: "Manutenção e recarga de ar condicionado automotivo com gás refrigerante adequado.",
      image: null,
      imageAlt: ""
    },
    {
      id: 6,
      icon: Wrench,
      title: "Mecânica Geral",
      description: "Diagnóstico e reparos gerais do veículo com equipamentos modernos e técnicos especializados.",
      image: null,
      imageAlt: ""
    }
  ];

  return (
    <section 
      id="servicos" 
      className="py-20 md:py-32 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Wrench className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary">Nossos Serviços</span>
          </div>
          
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="led-text">
              {'Serviços Automotivos Completos'.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Oferecemos uma ampla gama de serviços automotivos com equipamentos modernos e profissionais qualificados
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="border-0 shadow-lg hover:shadow-2xl bg-card overflow-hidden card-hover group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Imagem do serviço (se disponível) */}
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      
                      {/* Ícone sobreposto */}
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                    </div>
                  )}
                  
                  {/* Conteúdo do card */}
                  <div className="p-6">
                    {!service.image && (
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            Não encontrou o serviço que precisa?
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            aria-label="Entre em contato para mais informações"
          >
            Entre em contato conosco
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Importação do ícone ArrowRight
import { ArrowRight } from "lucide-react";

export default Services;
