
import { Phone, Smartphone, MapPin } from 'lucide-react';

const Calls = () => {
  return (
    <section id="ligacoes" className="py-16 yellow-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 leading-tight">
              Ligações ilimitadas para fixo, móvel e DDD.
            </h2>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-inspire-yellow border-2 border-black rounded-lg p-4 text-center">
                <Phone className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-medium text-sm">
                  Ligações Ilimitadas para fixo
                </p>
              </div>
              
              <div className="bg-inspire-yellow border-2 border-black rounded-lg p-4 text-center">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-medium text-sm">
                  Ligações Ilimitadas para móvel
                </p>
              </div>
              
              <div className="bg-inspire-yellow border-2 border-black rounded-lg p-4 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-medium text-sm">
                  Ligações Ilimitadas para DDD
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-black text-inspire-yellow px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors">
              PLANOS
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/c7cf82bd-7c1d-4f4b-b42c-5685606a162c.png" 
              alt="Mulher sorrindo ao telefone"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calls;
