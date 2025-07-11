
import { Play, Gamepad2, Phone, ArrowRight, Wifi, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 yellow-gradient relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-bounce">
          <Wifi className="w-12 h-12 text-black" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Zap className="w-8 h-8 text-black" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-spin">
          <div className="w-6 h-6 border-2 border-black rounded-full border-t-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-block bg-black text-inspire-yellow px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                🚀 Internet de Alta Velocidade
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-black mb-6 leading-tight">
              Conecte-se com a
              <span className="block text-transparent bg-gradient-to-r from-black to-gray-700 bg-clip-text">
                velocidade do futuro
              </span>
            </h1>

            <p className="text-xl text-black mb-8 opacity-80">
              Planos especiais para você e toda sua família ficarem conectados com a melhor internet da região.
            </p>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm border-2 border-black rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <Play className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-bold text-sm">
                  Streaming 4K sem travamentos
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm border-2 border-black rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-bold text-sm">
                  Gaming com ping ultra baixo
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm border-2 border-black rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <Phone className="w-8 h-8 mx-auto mb-2 text-black" />
                <p className="text-black font-bold text-sm">
                  Ligações ilimitadas incluídas
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-black text-inspire-yellow px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <span>VER PLANOS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-inspire-yellow transition-all duration-300">
                FALAR COM CONSULTOR
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mulher feliz usando smartphone com conexão de alta velocidade"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-black text-inspire-yellow p-3 rounded-full animate-bounce">
                <Wifi className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-inspire-yellow text-black p-3 rounded-full animate-pulse">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
