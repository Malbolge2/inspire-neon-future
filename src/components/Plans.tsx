
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: '300 MEGA',
      price: '89',
      cents: '90',
      features: [
        'Downloads sem limites',
        'Wi-fi Grátis',
        'Preço fixo',
        'Fidelidade: 12 Meses',
        'Suporte 24h',
        'Sujeito à viabilidade técnica'
      ]
    },
    {
      name: '500 MEGA',
      price: '109',
      cents: '90',
      features: [
        'Downloads sem limites',
        'Wi-fi Grátis',
        'Preço fixo',
        'Fidelidade: 12 Meses',
        'Suporte 24h',
        'Sujeito à viabilidade técnica'
      ]
    },
    {
      name: '700 MEGA',
      price: '129',
      cents: '90',
      features: [
        'Downloads sem limites',
        'Wi-fi Grátis',
        'Preço fixo',
        'Fidelidade: 12 Meses',
        'Suporte 24h',
        'Sujeito à viabilidade técnica'
      ]
    }
  ];

  return (
    <section id="planos" className="py-16 yellow-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
            de verdade!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 card-shadow border border-inspire-yellow">
              {/* Plan Header */}
              <div className="bg-black text-inspire-yellow text-center py-4 rounded-lg mb-6">
                <h3 className="text-2xl font-black">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-start justify-center">
                  <span className="text-lg text-black">R$</span>
                  <span className="text-5xl font-black text-black">{plan.price}</span>
                  <span className="text-lg text-black">,{plan.cents}</span>
                </div>
                <p className="text-black text-sm">Mensal</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span className="text-black text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-inspire-yellow text-black py-3 rounded font-bold hover:bg-yellow-400 transition-colors mb-4">
                EU QUERO
              </button>

              {/* Availability Link */}
              <div className="text-center">
                <a href="#" className="text-black text-sm underline">
                  Consultar Disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
