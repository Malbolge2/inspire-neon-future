
import { MessageCircle } from 'lucide-react';
import customerServiceImage from '@/assets/customer-service.jpg';

const Contact = () => {
  return (
    <section id="contato" className="py-20 yellow-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Entre em contato
          </h2>
          <p className="text-xl text-black opacity-80 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você com o melhor suporte e as melhores ofertas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-black">
              <h3 className="text-2xl font-bold text-black mb-8">Fale Conosco</h3>
              
              {/* WhatsApp */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">WhatsApp</h4>
                    <p className="text-black opacity-80">(11) 4580-1540</p>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/5511458015401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>

              <div className="text-center">
                <p className="text-black opacity-70 text-sm">
                  Atendimento de segunda a sexta das 8h às 18h
                </p>
              </div>
            </div>
          </div>

          {/* Support Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={customerServiceImage} 
                alt="Atendente de suporte Inspire"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center animate-pulse">
                <MessageCircle className="w-6 h-6 text-inspire-yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
