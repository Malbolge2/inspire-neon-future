
import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Conectamos você ao futuro da internet.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-inspire-black via-gray-900 to-inspire-black">
        <div className="absolute inset-0 opacity-20">
          {/* Animated particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-inspire-neon rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with Typing Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-inspire-white">
              {displayedText}
              <span className="animate-blink border-r-2 border-inspire-neon ml-1"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in font-light max-w-2xl mx-auto" style={{ animationDelay: '3s' }}>
            Velocidade, estabilidade e inovação para sua casa e empresa.
          </p>

          {/* Hero Image/Visual */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '3.5s' }}>
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-inspire-neon rounded-full opacity-20 animate-ping"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center neon-glow">
                <div className="text-inspire-neon text-6xl">📡</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '4s' }}>
            <button className="group bg-inspire-neon text-inspire-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform">
              <span>Ver Planos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-inspire-neon text-inspire-neon px-8 py-4 rounded-full font-bold text-lg hover:bg-inspire-neon hover:text-inspire-black transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform">
              <Play className="w-5 h-5" />
              <span>Consultar Cobertura</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-inspire-neon rounded-full flex justify-center">
              <div className="w-1 h-3 bg-inspire-neon rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
