
import { useEffect, useState } from 'react';
import { MapPin, Search, CheckCircle } from 'lucide-react';

const Coverage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cep, setCep] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cobertura');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleCepSearch = () => {
    // Simulate CEP search
    console.log(`Buscando cobertura para CEP: ${cep}`);
  };

  const coveragePoints = [
    { city: 'São Paulo', status: 'active', delay: '0s' },
    { city: 'Rio de Janeiro', status: 'active', delay: '0.2s' },
    { city: 'Belo Horizonte', status: 'active', delay: '0.4s' },
    { city: 'Brasília', status: 'coming', delay: '0.6s' },
    { city: 'Salvador', status: 'coming', delay: '0.8s' },
    { city: 'Recife', status: 'planning', delay: '1s' }
  ];

  return (
    <section id="cobertura" className="py-20 bg-inspire-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Onde tem <span className="gradient-text">Inspire</span>, tem conexão de verdade
          </h2>
          <p className={`text-xl text-gray-300 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Consulte a cobertura na sua cidade
          </p>
          <div className="w-24 h-1 bg-inspire-neon mx-auto"></div>
        </div>

        {/* CEP Search */}
        <div className={`max-w-md mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-inspire-neon" />
            </div>
            <h3 className="text-xl font-bold text-center mb-6 text-inspire-white">
              Verificar Cobertura
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-inspire-white placeholder-gray-400 focus:border-inspire-neon focus:outline-none transition-colors"
                maxLength={9}
              />
              <button
                onClick={handleCepSearch}
                className="w-full bg-inspire-neon text-inspire-black py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Consultar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Coverage Map/Points */}
        <div className="max-w-4xl mx-auto">
          <h3 className={`text-2xl font-bold text-center mb-12 text-inspire-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            Cidades Atendidas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coveragePoints.map((point, index) => (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: point.delay }}
              >
                <div className="flex items-center justify-center mb-4">
                  {point.status === 'active' ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : point.status === 'coming' ? (
                    <div className="w-8 h-8 bg-inspire-neon rounded-full animate-pulse"></div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  )}
                </div>
                <h4 className="font-bold text-inspire-white mb-2">{point.city}</h4>
                <span className={`text-sm px-3 py-1 rounded-full ${
                  point.status === 'active' 
                    ? 'bg-green-500 text-white' 
                    : point.status === 'coming'
                    ? 'bg-inspire-neon text-inspire-black'
                    : 'bg-gray-500 text-white'
                }`}>
                  {point.status === 'active' ? 'Ativo' : point.status === 'coming' ? 'Em breve' : 'Planejado'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className="border border-inspire-neon animate-pulse"
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
