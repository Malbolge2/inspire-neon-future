
import { Wifi, Zap, Shield, Headphones, Clock, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Velocidade Garantida",
      description: "Internet de fibra óptica com velocidade real, não compartilhada",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Conexão Estável",
      description: "99,9% de uptime com redundância total da rede",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Headphones,
      title: "Suporte Premium",
      description: "Atendimento 24/7 com técnicos especializados",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Clock,
      title: "Instalação Rápida",
      description: "Ativação em até 48h após aprovação",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description: "Planos dimensionados para múltiplos usuários",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: Wifi,
      title: "Wi-Fi 6 Grátis",
      description: "Roteador de última geração incluso no plano",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-inspire-yellow to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Por que escolher a
            <span className="text-inspire-yellow"> Inspire?</span>
          </h2>
          <p className="text-xl text-inspire-gray max-w-3xl mx-auto">
            Conectamos você com a melhor tecnologia em internet banda larga, 
            oferecendo velocidade, estabilidade e suporte incomparáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-inspire-gray leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-inspire-yellow rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-black mb-4">
              Pronto para ter a melhor internet?
            </h3>
            <button className="bg-black text-inspire-yellow px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              CONHECER PLANOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
