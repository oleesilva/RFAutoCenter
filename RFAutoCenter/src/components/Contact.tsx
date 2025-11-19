// Componente Contact - Seção de contato com formulário
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Informações de contato da empresa
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. José Bonifácio Filho, 46",
      subContent: "Jardim Ana Lucia, São Paulo - SP, 04813-060",
      link: "https://maps.google.com/?q=R.+José+Bonifácio+Filho,+46+-+Jardim+Ana+Lucia,+São+Paulo+-+SP,+04813-060"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99287-3343",
      subContent: "WhatsApp disponível",
      link: "https://wa.me/5511946089711"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato.rfautocenter@gmail.com",
      subContent: "Resposta em até 24h",
      link: "mailto:contato.rfautocenter@gmail.com"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 8h às 18h",
      subContent: "Sábado: 8h às 12h",
      link: null
    }
  ];

  // Handler para mudanças nos inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler para envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      setIsSubmitting(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido");
      setIsSubmitting(false);
      return;
    }

    // Simulação de envio (integrar com backend/API real)
    try {
      // Aqui você integraria com uma API de envio de emails
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      
      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contato" 
      className="py-20 md:py-32 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold text-primary">Contato</span>
          </div>
          
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="led-text">
              {'Entre em Contato'.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você. Agende seu serviço ou tire suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <Card className="border-0 shadow-xl animate-fade-in-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                    className="h-12 rounded-xl"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                    className="h-12 rounded-xl"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefone/WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="h-12 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva o serviço que precisa ou sua dúvida..."
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                    aria-required="true"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold h-12 rounded-xl btn-hover"
                  aria-label="Enviar mensagem"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de contato */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block hover:bg-card-hover transition-colors rounded-2xl"
                  aria-label={`${info.title}: ${info.content}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-lg text-muted-foreground">{info.content}</p>
                        <p className="text-sm text-muted-foreground/70">{info.subContent}</p>
                      </div>
                    </div>
                  </CardContent>
                </a>
              ) : (
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-lg text-muted-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground/70">{info.subContent}</p>
                    </div>
                  </div>
                </CardContent>
              );

              return (
                <Card 
                  key={index}
                  className="border-0 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {content}
                </Card>
              );
            })}

            {/* Mapa do Google Maps */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8967678123456!2d-46.69876!3d-23.68234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f9876543210%3A0x1234567890abcdef!2sR.%20Jos%C3%A9%20Bonif%C3%A1cio%20Filho%2C%2046%20-%20Jardim%20Ana%20Lucia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004813-060!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da RF Auto Center"
                aria-label="Mapa mostrando a localização da RF Auto Center"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
