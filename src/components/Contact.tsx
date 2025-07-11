
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Entre em contato conosco
          </h2>
          <p className="text-lg text-gray-300">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-inspire-yellow" />
            <h3 className="font-bold text-white mb-2">Telefone</h3>
            <p className="text-gray-300">(11) 9999-9999</p>
          </div>

          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-inspire-yellow" />
            <h3 className="font-bold text-white mb-2">E-mail</h3>
            <p className="text-gray-300">contato@inspire.com.br</p>
          </div>

          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-inspire-yellow" />
            <h3 className="font-bold text-white mb-2">Endereço</h3>
            <p className="text-gray-300">São Paulo, SP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
