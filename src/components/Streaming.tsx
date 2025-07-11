
import { Play, Monitor, Smartphone, Tv, Youtube, Film } from 'lucide-react';

const Streaming = () => {
  const streamingServices = [
    { name: 'Netflix', icon: Play, color: 'bg-red-500' },
    { name: 'Prime Video', icon: Film, color: 'bg-blue-600' },
    { name: 'Disney+', icon: Monitor, color: 'bg-indigo-600' },
    { name: 'HBO Max', icon: Tv, color: 'bg-purple-600' },
    { name: 'YouTube', icon: Youtube, color: 'bg-red-600' },
    { name: 'Globoplay', icon: Play, color: 'bg-blue-500' }
  ];

  return (
    <section id="streaming" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              <img 
                src="/lovable-uploads/4a97ce43-789f-4606-944e-7e10c403693d.png" 
                alt="Pessoa assistindo streaming com qualidade 4K"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating streaming icons */}
              <div className="absolute -top-6 -right-6 bg-red-500 text-white p-4 rounded-full animate-bounce">
                <Play className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-full animate-pulse">
                <Monitor className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 leading-tight">
              Streaming sem
              <span className="block text-inspire-yellow">
                interrupções
              </span>
            </h2>

            <p className="text-xl text-inspire-gray mb-8">
              Assista seus filmes e séries favoritos em 4K, sem travamentos ou buffering. 
              Nossa velocidade garante a melhor experiência em todas as plataformas.
            </p>

            {/* Streaming Services Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {streamingServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-xl p-6 text-center border-2 border-gray-200 hover:border-inspire-yellow transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-black text-sm">{service.name}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-inspire-yellow rounded-full"></div>
                <span className="text-inspire-gray">Streaming 4K Ultra HD</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-inspire-yellow rounded-full"></div>
                <span className="text-inspire-gray">Múltiplas telas simultâneas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-inspire-yellow rounded-full"></div>
                <span className="text-inspire-gray">Zero buffering</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-inspire-yellow text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
              VER PLANOS PARA STREAMING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
