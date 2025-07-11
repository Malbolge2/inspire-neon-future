
import { useEffect, useState } from 'react';
import { Play, Star } from 'lucide-react';

const Streaming = () => {
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

    const element = document.getElementById('streaming');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const streamingServices = [
    { name: 'Prime Video', logo: '🎬' },
    { name: 'Netflix', logo: '🎭' },
    { name: 'Telecine', logo: '🎪' },
    { name: 'HBO Go', logo: '🎨' },
    { name: 'YouTube', logo: '📺' },
    { name: 'Fox Play', logo: '🦊' }
  ];

  return (
    <section id="streaming" className="py-20 bg-gradient-to-br from-gray-900 to-inspire-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Filmes, séries e vídeos <span className="gradient-text">sem travar</span>
          </h2>
          <p className={`text-xl text-gray-300 mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Planos ideais para maratonar com qualidade máxima
          </p>
          <div className="w-24 h-1 bg-inspire-neon mx-auto"></div>
        </div>

        {/* Streaming Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {streamingServices.map((service, index) => (
            <div
              key={index}
              className={`group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {service.logo}
                </div>
                <h3 className="font-bold text-inspire-white group-hover:text-inspire-neon transition-colors">
                  {service.name}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-inspire-neon rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <Play className="w-12 h-12 text-inspire-neon animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-inspire-white">
              Qualidade 4K Ultra HD
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Desfrute de seus conteúdos favoritos na mais alta qualidade, 
              sem buffering, sem travamentos, sem interrupções.
            </p>
            <div className="flex justify-center items-center mt-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-inspire-neon fill-current" />
              ))}
              <span className="ml-2 text-gray-300">Qualidade garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
