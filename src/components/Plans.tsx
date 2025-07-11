
import { useEffect, useState } from 'react';
import { Check, Zap, Crown, Star } from 'lucide-react';

const Plans = () => {
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

    const element = document.getElementById('planos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: '300 MEGA',
      speed: '300',
      price: '89,90',
      popular: false,
      features: ['Downloads sem limites', 'Wi-Fi grátis', 'Suporte 24h', 'Fidelidade 12 meses', 'Preço fixo'],
      color: 'from-blue-500 to-blue-700',
      icon: Zap
    },
    {
      name: '500 MEGA',
      speed: '500',
      price: '109,90',
      popular: true,
      features: ['Downloads sem limites', 'Wi-Fi grátis', 'Suporte 24h', 'Fidelidade 12 meses', 'Preço fixo', 'Streaming Premium'],
      color: 'from-inspire-neon to-yellow-600',
      icon: Crown
    },
    {
      name: '700 MEGA',
      speed: '700',
      price: '129,90',
      popular: false,
      features: ['Downloads sem limites', 'Wi-Fi grátis', 'Suporte 24h', 'Fidelidade 12 meses', 'Preço fixo', 'Gaming Mode'],
      color: 'from-purple-500 to-purple-700',
      icon: Star
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-gray-900 to-inspire-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Planos com <span className="gradient-text">desempenho de verdade</span>
          </h2>
          <p className={`text-xl text-gray-300 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Escolha o plano ideal para sua necessidade
          </p>
          <div className="w-24 h-1 bg-inspire-neon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-fade-in' : 'opacity-0'} ${plan.popular ? 'md:-mt-4' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-inspire-neon text-inspire-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className={`glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer h-full relative overflow-hidden ${plan.popular ? 'border-2 border-inspire-neon' : ''}`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Plan Header */}
                <div className="text-center mb-8 relative">
                  <div className="flex justify-center mb-4">
                    <plan.icon className={`w-12 h-12 ${plan.popular ? 'text-inspire-neon' : 'text-gray-400'} animate-float`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-inspire-white">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-black mb-2">
                    <span className="text-inspire-neon">{plan.speed}</span>
                    <span className="text-lg text-gray-400 font-normal"> Mbps</span>
                  </div>
                  <div className="text-3xl font-bold">
                    <span className="text-sm text-gray-400">R$</span>
                    <span className="text-inspire-white">{plan.price}</span>
                    <span className="text-sm text-gray-400">/mês</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 relative">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-inspire-neon flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="relative">
                  <button className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 transform ${
                    plan.popular 
                      ? 'bg-inspire-neon text-inspire-black hover:bg-yellow-400' 
                      : 'border-2 border-inspire-neon text-inspire-neon hover:bg-inspire-neon hover:text-inspire-black'
                  }`}>
                    EU QUERO
                  </button>
                </div>

                {/* Decorative Elements */}
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-inspire-neon rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-400 text-sm">
            * Sujeito à viabilidade técnica | Fidelidade de 12 meses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
