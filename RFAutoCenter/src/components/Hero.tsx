// Componente Hero - Seção principal da landing page
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  // Função para abrir WhatsApp com mensagem pré-configurada
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511946089711"; // Número real da RF Auto Center
    const message = encodeURIComponent("Olá! Gostaria de agendar um serviço na RF Auto Center.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-accent"
      aria-label="Seção principal"
    >
      {/* Background decorativo com padrão sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo de texto */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Wrench className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Oficina Profissional</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="led-text">
                {'RF Auto Center'.split('').map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Seu veículo em <span className="font-semibold text-secondary">boas mãos</span> com serviços de qualidade e profissionais especializados
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8 py-6 rounded-2xl btn-hover shadow-2xl group"
                aria-label="Agendar serviço via WhatsApp"
              >
                Agende Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 font-semibold text-lg px-8 py-6 rounded-2xl btn-hover"
                aria-label="Ver serviços oferecidos"
              >
                Nossos Serviços
              </Button>
            </div>
            
            {/* Estatísticas */}
            <div className="flex gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-secondary">4.8/5</div>
                <div className="text-sm text-white/70">Avaliação Google</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">150+</div>
                <div className="text-sm text-white/70">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-white/70">Anos Experiência</div>
              </div>
            </div>
          </div>

          {/* Imagem do carro */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroCarImage} 
                alt="Carro esportivo vermelho em manutenção profissional na RF Auto Center"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Elementos flutuantes decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-50 animate-pulse" aria-hidden="true" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
