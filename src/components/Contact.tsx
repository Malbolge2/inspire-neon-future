
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 animate-pulse">
          <div className="w-32 h-32 border border-inspire-yellow rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce">
          <div className="w-16 h-16 bg-inspire-yellow rounded-full opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Entre em contato
            <span className="block text-inspire-yellow">conosco</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para conectar você à melhor internet da região. 
            Fale com nossos especialistas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border-l-4 border-inspire-yellow hover:scale-105 transition-transform">
              <div className="bg-inspire-yellow p-3 rounded-full">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Telefone</h3>
                <p className="text-gray-300">(11) 9999-9999</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border-l-4 border-inspire-yellow hover:scale-105 transition-transform">
              <div className="bg-inspire-yellow p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <p className="text-gray-300">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border-l-4 border-inspire-yellow hover:scale-105 transition-transform">
              <div className="bg-inspire-yellow p-3 rounded-full">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">E-mail</h3>
                <p className="text-gray-300">contato@inspire.com.br</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border-l-4 border-inspire-yellow hover:scale-105 transition-transform">
              <div className="bg-inspire-yellow p-3 rounded-full">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Endereço</h3>
                <p className="text-gray-300">Rua da Conectividade, 123 - Centro</p>
              </div>
            </div>

            {/* Customer Image */}
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Atendente de suporte técnico"
                className="w-full h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-inspire-yellow">
              Solicite um orçamento
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome completo</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-inspire-yellow focus:outline-none text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-inspire-yellow focus:outline-none text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-inspire-yellow focus:outline-none text-white"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Plano de interesse</label>
                <select className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-inspire-yellow focus:outline-none text-white">
                  <option>Selecione um plano</option>
                  <option>300 MEGA</option>
                  <option>500 MEGA</option>
                  <option>700 MEGA</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-inspire-yellow focus:outline-none text-white"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                ></textarea>
              </div>

              <button className="w-full bg-inspire-yellow text-black py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Send className="w-5 h-5" />
                <span>ENVIAR MENSAGEM</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
