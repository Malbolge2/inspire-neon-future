
import { Facebook, Instagram, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-inspire-yellow">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-inspire-yellow text-xl font-black">
              inspire
            </div>
            <div className="w-4 h-4 bg-inspire-yellow rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <p className="text-gray-300 text-sm">
              © 2025 Inspire - Todos os direitos reservados
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end space-x-4">
            <Facebook className="w-5 h-5 text-gray-300 hover:text-inspire-yellow cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-300 hover:text-inspire-yellow cursor-pointer transition-colors" />
            <Users className="w-5 h-5 text-gray-300 hover:text-inspire-yellow cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
