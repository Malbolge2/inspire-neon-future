
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Ligue agora',
      info: '0800 123 4567',
      description: 'Atendimento 24h todos os dias',
      action: 'Ligar'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      description: 'Resposta rápida e personalizada',
      action: 'Conversar'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@inspire.com.br',
      description: 'Suporte técnico especializado',
      action: 'Enviar'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar a escolher o melhor plano
            e esclarecer todas suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              Como prefere falar conosco?
            </h3>
            
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-inspire-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-black" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {method.title}
                    </h4>
                    <p className="text-inspire-yellow font-bold text-lg mb-1">
                      {method.info}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {method.description}
                    </p>
                    <button className="bg-inspire-yellow text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                      {method.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-inspire-yellow rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-black" />
                <h4 className="text-xl font-bold text-black">
                  Horário de Atendimento
                </h4>
              </div>
              <div className="text-black space-y-1">
                <p><strong>Segunda a Sexta:</strong> 8h às 22h</p>
                <p><strong>Sábados:</strong> 8h às 18h</p>
                <p><strong>Domingos:</strong> 9h às 15h</p>
                <p className="text-sm mt-2 opacity-75">
                  *Suporte técnico 24h via WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Deixe sua mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-inspire-yellow"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-inspire-yellow"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-inspire-yellow"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Assunto
                </label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-inspire-yellow">
                  <option>Quero contratar um plano</option>
                  <option>Dúvidas sobre planos</option>
                  <option>Suporte técnico</option>
                  <option>Reclamação</option>
                  <option>Outros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-inspire-yellow resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-inspire-yellow text-black py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
