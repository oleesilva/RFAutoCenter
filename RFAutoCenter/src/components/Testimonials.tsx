// Componente Testimonials - Seção de depoimentos de clientes
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  // Depoimentos de clientes (dados de exemplo - substituir por reais)
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      rating: 5,
      date: "Há 2 meses",
      comment: "Excelente atendimento! Levei meu carro para troca de óleo e fiquei muito satisfeito com o serviço. Equipe profissional e preço justo.",
      avatar: "CS"
    },
    {
      id: 2,
      name: "Maria Santos",
      rating: 5,
      date: "Há 1 mês",
      comment: "Melhor oficina da região! Confiança total no trabalho deles. Sempre levo meu carro para manutenção preventiva.",
      avatar: "MS"
    },
    {
      id: 3,
      name: "João Oliveira",
      rating: 5,
      date: "Há 3 semanas",
      comment: "Resolveram um problema de suspensão que outras oficinas não conseguiram identificar. Recomendo muito!",
      avatar: "JO"
    },
    {
      id: 4,
      name: "Ana Paula",
      rating: 5,
      date: "Há 1 semana",
      comment: "Atendimento rápido e eficiente. Explicaram tudo que precisava ser feito no meu carro. Voltarei sempre!",
      avatar: "AP"
    },
    {
      id: 5,
      name: "Roberto Costa",
      rating: 4,
      date: "Há 2 semanas",
      comment: "Ótima oficina, profissionais competentes e honestos. Preços justos e serviço de qualidade.",
      avatar: "RC"
    },
    {
      id: 6,
      name: "Fernanda Lima",
      rating: 5,
      date: "Há 4 dias",
      comment: "Adorei o atendimento! São super atenciosos e deixaram meu carro como novo. Super recomendo!",
      avatar: "FL"
    }
  ];

  // Função para renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-secondary text-secondary" 
            : "fill-muted text-muted"
        }`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <section 
      id="avaliacoes" 
      className="py-20 md:py-32 bg-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-secondary" aria-hidden="true" />
            <span className="text-sm font-semibold text-secondary">Avaliações</span>
          </div>
          
          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="led-text">
              {'O Que Nossos Clientes Dizem'.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Confira a opinião de quem já confiou seus veículos à RF Auto Center
          </p>

          {/* Estatística de avaliação */}
          <div className="flex items-center justify-center gap-4 mt-8 p-6 bg-muted/30 rounded-2xl inline-flex">
            <div className="text-center">
              <div className="text-5xl font-bold text-foreground">4.8</div>
              <div className="flex gap-1 mt-2 justify-center">
                {renderStars(5)}
              </div>
              <div className="text-sm text-muted-foreground mt-2">150+ avaliações no Google</div>
            </div>
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-0 shadow-md hover:shadow-xl bg-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Ícone de aspas */}
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>

                {/* Avaliação em estrelas */}
                <div className="flex items-center gap-1 mb-3" role="img" aria-label={`${testimonial.rating} de 5 estrelas`}>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comentário */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.comment}"
                </p>

                {/* Informações do cliente */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Link para mais avaliações */}
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=rf+auto+center" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            aria-label="Ver todas as avaliações no Google (abre em nova aba)"
          >
            Ver todas as avaliações no Google
            <Star className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
