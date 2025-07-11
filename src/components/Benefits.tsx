
import { useEffect, useState } from 'react';
import { Download, Gamepad2, Phone } from 'lucide-react';

const Benefits = () => {
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

    const element = document.getElementById('benefits');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Download,
      title: 'Velocidade Extrema',
      description: 'Baixe arquivos em segundos, assista tudo em 4K sem travamento',
      color: 'from-blue-500 to-inspire-neon',
      delay: '0s'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Perfeito',
      description: 'Jogue com ping ultra baixo e conexão estável 24h',
      color: 'from-purple-500 to-inspire-neon',
      delay: '0.2s'
    },
    {
      icon: Phone,
      title: 'Ligações Ilimitadas',
      description: 'Fale à vontade com ligações ilimitadas (fixo, móvel e DDD)',
      color: 'from-green-500 to-inspire-neon',
      delay: '0.4s'
    }
  ];

  return (
    <section id="benefits" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Por que escolher a <span className="gradient-text">Inspire</span>?
          </h2>
          <div className="w-24 h-1 bg-inspire-neon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: benefit.delay }}
            >
              <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-inspire-neon rounded-full flex items-center justify-center mb-4 animate-float group-hover:animate-pulse">
                    <benefit.icon className="w-8 h-8 text-inspire-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 text-inspire-white group-hover:text-inspire-neon transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-inspire-neon rounded-2xl transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
