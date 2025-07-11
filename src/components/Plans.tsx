
import { Check, Star, Crown, Zap } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: '300 MEGA',
      price: '89',
      cents: '90',
      popular: false,
      icon: Zap,
      features: [
        'Velocidade de 300 Mbps',
        'Downloads ilimitados',
        'Wi-Fi 6 grátis',
        'Instalação gratuita',
        'Suporte 24h',
        'Preço fixo por 12 meses'
      ]
    },
    {
      name: '500 MEGA',
      price: '109',
      cents: '90',
      popular: true,
      icon: Star,
      features: [
        'Velocidade de 500 Mbps',
        'Downloads ilimitados',
        'Wi-Fi 6 grátis',
        'Instalação gratuita',
        'Suporte 24h prioritário',
        'Preço fixo por 12 meses'
      ]
    },
    {
      name: '700 MEGA',
      price: '129',
      cents: '90',
      popular: false,
      icon: Crown,
      features: [
        'Velocidade de 700 Mbps',
        'Downloads ilimitados',
        'Wi-Fi 6 Pro grátis',
        'Instalação gratuita',
        'Suporte VIP 24h',
        'Preço fixo por 12 meses'
      ]
    }
  ];

  return (
    <section id="planos" className="py-20 yellow-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
            Planos que fazem a
            <span className="block">diferença de verdade!</span>
          </h2>
          <p className="text-xl text-black opacity-80 max-w-2xl mx-auto">
            Escolha o plano ideal para sua necessidade. Todos com velocidade garantida e suporte premium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-4 border-black transform scale-105' : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-inspire-yellow px-6 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular ? 'bg-black text-inspire-yellow' : 'bg-inspire-yellow text-black'
                }`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center mb-2">
                  <span className="text-lg text-black">R$</span>
                  <span className="text-5xl font-black text-black">{plan.price}</span>
                  <span className="text-lg text-black">,{plan.cents}</span>
                </div>
                <p className="text-inspire-gray">por mês</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-inspire-gray text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 mb-4 ${
                plan.popular 
                  ? 'bg-black text-inspire-yellow hover:bg-gray-800' 
                  : 'bg-inspire-yellow text-black hover:bg-yellow-400'
              }`}>
                CONTRATAR AGORA
              </button>

              {/* Availability Link */}
              <div className="text-center">
                <button className="text-inspire-gray text-sm underline hover:text-black transition-colors">
                  Consultar Disponibilidade
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-black text-lg mb-4">
            Não sabe qual plano escolher?
          </p>
          <button className="bg-black text-inspire-yellow px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
            FALE COM UM CONSULTOR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
