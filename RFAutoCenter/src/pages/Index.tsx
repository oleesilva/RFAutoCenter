// Página principal - Landing Page da RF Auto Center
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Barra de navegação fixa */}
      <Navbar />
      
      {/* Seção Hero - Banner principal */}
      <Hero />
      
      {/* Seção de Serviços */}
      <Services />
      
      {/* Seção de Avaliações/Depoimentos */}
      <Testimonials />
      
      {/* Seção Sobre a Empresa */}
      <About />
      
      {/* Seção de Contato */}
      <Contact />
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão flutuante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
