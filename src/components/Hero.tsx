
import { Play, Gamepad2, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 yellow-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-black mb-6 leading-tight">
              A Inspire tem planos especiais para você e toda a sua família ficar conectada!
            </h1>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-inspire-yellow border-2 border-black rounded-lg p-4 text-center">
                <Play className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-medium text-sm">
                  Baixe arquivos + rápido e assista vídeos com + resolução.
                </p>
              </div>
              
              <div className="bg-inspire-yellow border-2 border-black rounded-lg p-4 text-center">
                <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-medium text-sm">
                  Jogue online com + desempenho e velocidade.
                </p>
              </div>
              
              <div className="bg-inspire-yellow border-2 border-black rounded-lg p-4 text-center">
                <Phone className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-medium text-sm">
                  Ligações ilimitadas para fixo, móvel e DDD
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-inspire-yellow px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors flex-1">
                PLANOS
              </button>
              <button className="bg-black text-inspire-yellow px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors flex-1">
                COBERTURA
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/35946303-17b8-45eb-8533-a7cad8118d0e.png" 
              alt="Mulher feliz usando smartphone com sinal WiFi"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
