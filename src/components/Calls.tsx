
import { useEffect, useState } from 'react';
import { Phone, Smartphone, MapPin } from 'lucide-react';

const Calls = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ligacoes');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const callTypes = [
    {
      icon: Phone,
      title: 'Ligações para Fixo',
      description: 'Ligue à vontade para telefones fixos em todo o Brasil',
      color: 'from-blue-500 to-inspire-neon'
    },
    {
      icon: Smartphone,
      title: 'Ligações para Celular',
      description: 'Conversas ilimitadas para celulares de qualquer operadora',
      color: 'from-green-500 to-inspire-neon'
    },
    {
      icon: MapPin,
      title: 'Ligações com DDD',
      description: 'Conecte-se com pessoas em todo o território nacional',
      color: 'from-purple-500 to-inspire-neon'
    }
  ];

  return (
    <section id="ligacoes" className="py-20 bg-inspire-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Ligações <span className="gradient-text">sem limites</span> para quem importa
          </h2>
          <div className="w-24 h-1 bg-inspire-neon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {callTypes.map((callType, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${callType.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-inspire-neon to-yellow-400 rounded-full flex items-center justify-center mb-4 animate-float group-hover:animate-pulse shadow-lg">
                    <callType.icon className="w-10 h-10 text-inspire-black" />
                  </div>
                  
                  {/* Decorative circles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-inspire-neon rounded-full opacity-60 animate-ping"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 text-inspire-white group-hover:text-inspire-neon transition-colors duration-300">
                    {callType.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {callType.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-inspire-neon rounded-2xl transition-colors duration-500"></div>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-inspire-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-4">
              <span className="font-bold text-inspire-neon">100% ilimitado</span> para você falar com quem quiser, quando quiser
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-inspire-neon animate-bounce" />
              <span className="text-inspire-white font-medium">Sem tarifação extra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calls;
