
import { MapPin, Search } from 'lucide-react';
import { useState } from 'react';

const Coverage = () => {
  const [cep, setCep] = useState('');

  return (
    <section id="cobertura" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-black mb-4">
            Consulte a cobertura na sua região
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-inspire-yellow rounded-2xl p-8 border-2 border-black">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-black" />
            <h3 className="text-xl font-bold text-center mb-6 text-black">
              Verificar Cobertura
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black rounded text-black placeholder-gray-500 focus:outline-none focus:border-gray-600"
                maxLength={9}
              />
              <button className="w-full bg-black text-inspire-yellow py-3 rounded font-bold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Consultar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
