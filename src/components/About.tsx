import { Shield, Award, Zap } from 'lucide-react';
import professionalImage from '@/assets/video-call-professional.jpg';

const About = () => {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-6">
              Conheça nossa história
            </h2>
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="mb-6">
                Somos uma empresa do Segmento de Telecomunicações no qual possuímos as licenças 
                <strong> SCM (Serviço de Comunicação Multimídia)</strong>, 
                <strong> STFC (Serviço Telefônico Fixo Comutado)</strong> e 
                <strong> SeAC (Serviço de Acesso Condicionado)</strong> da ANATEL que credencia 
                a empresa em atender plenamente os serviços de telecom nos mercados residencial e empresarial.
              </p>
              
              <p>
                Contamos com infraestrutura própria de Data Center e Rede metropolitana de Fibra Óptica 
                segura e totalmente redundante no qual podemos oferecer Soluções em Internet através de 
                algumas de nossas soluções e pacotes desenvolvidos especificamente para atender 
                necessidades de nossos clientes.
              </p>
            </div>

            {/* Licenses */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-8 h-8 text-inspire-yellow" />
                <div>
                  <h4 className="font-bold text-sm">SCM</h4>
                  <p className="text-xs text-gray-600">Comunicação Multimídia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Award className="w-8 h-8 text-inspire-yellow" />
                <div>
                  <h4 className="font-bold text-sm">STFC</h4>
                  <p className="text-xs text-gray-600">Telefonia Fixa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Zap className="w-8 h-8 text-inspire-yellow" />
                <div>
                  <h4 className="font-bold text-sm">SeAC</h4>
                  <p className="text-xs text-gray-600">Acesso Condicionado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={professionalImage} 
                alt="Profissional em videoconferência com internet de alta qualidade"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-inspire-yellow rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-black" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-inspire-yellow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;