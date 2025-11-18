// Componente WhatsAppButton - Botão flutuante de WhatsApp
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  // Handler para abrir WhatsApp
  const handleClick = () => {
    const phoneNumber = "5511946089711"; // Número real da RF Auto Center
    const message = encodeURIComponent("Olá! Gostaria de agendar um serviço na RF Auto Center.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl animate-pulse hover:animate-none transition-all hover:scale-110 p-0"
      aria-label="Entrar em contato via WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" aria-hidden="true" />
      
      {/* Indicador visual de notificação */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping" aria-hidden="true" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" aria-hidden="true" />
    </Button>
  );
};

export default WhatsAppButton;
