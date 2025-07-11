
const Streaming = () => {
  const streamingServices = [
    { name: 'Prime Video', logo: 'prime video' },
    { name: 'Netflix', logo: 'NETFLIX' },
    { name: 'Telecine', logo: 'TELECINE' },
    { name: 'HBO GO', logo: 'HBO GO' },
    { name: 'YouTube', logo: 'YouTube' },
    { name: 'Fox Play', logo: 'FOXplay' }
  ];

  return (
    <section id="streaming" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <img 
              src="/lovable-uploads/4a97ce43-789f-4606-944e-7e10c403693d.png" 
              alt="Mulher assistindo com óculos 3D"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-black mb-8 leading-tight">
              Para apaixonados por filmes e séries, aqui na Inspire temos o plano ideal!
            </h2>

            {/* Streaming Services Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {streamingServices.map((service, index) => (
                <div key={index} className="border-2 border-inspire-yellow rounded-lg p-4 text-center bg-white hover:bg-inspire-yellow transition-colors">
                  <span className="font-bold text-black text-xs">{service.logo}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full bg-black text-inspire-yellow px-8 py-3 rounded font-bold hover:bg-gray-800 transition-colors">
              PLANOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
