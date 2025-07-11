
import { useEffect, useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contato');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here would be the actual form submission logic
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-inspire-black via-gray-900 to-inspire-black relative overflow-hidden">
      {/* Fiber Optic Background Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-inspire-neon rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Fale com a gente <span className="gradient-text">agora mesmo!</span>
          </h2>
          <p className={`text-xl text-gray-300 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Estamos prontos para conectar você ao melhor da internet
          </p>
          <div className="w-24 h-1 bg-inspire-neon mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-8 text-inspire-white">
                Entre em Contato
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300">
                  <Phone className="w-6 h-6 text-inspire-neon animate-pulse" />
                  <div>
                    <p className="font-semibold text-inspire-white">Central de Vendas</p>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-inspire-neon animate-pulse" />
                  <div>
                    <p className="font-semibold text-inspire-white">WhatsApp</p>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 glass-effect rounded-lg p-4 hover:scale-105 transition-all duration-300">
                  <Mail className="w-6 h-6 text-inspire-neon animate-pulse" />
                  <div>
                    <p className="font-semibold text-inspire-white">E-mail</p>
                    <p className="text-gray-300">contato@inspire.com.br</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h4 className="font-bold text-inspire-white mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 14h</p>
                  <p>Suporte Técnico: 24h por dia</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-inspire-white">
                  Solicite seu Orçamento
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-inspire-white placeholder-gray-400 focus:border-inspire-neon focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu melhor e-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-inspire-white placeholder-gray-400 focus:border-inspire-neon focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp (com DDD)"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-inspire-white placeholder-gray-400 focus:border-inspire-neon focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Conte-nos sobre sua necessidade..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-inspire-white placeholder-gray-400 focus:border-inspire-neon focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-inspire-neon text-inspire-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 transform group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
