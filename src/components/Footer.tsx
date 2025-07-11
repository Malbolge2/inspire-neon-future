
import { Zap, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Planos', href: '#planos' },
      { name: 'Cobertura', href: '#cobertura' },
      { name: 'Contato', href: '#contato' }
    ],
    support: [
      { name: 'Central de Ajuda', href: '#' },
      { name: 'Suporte Técnico', href: '#' },
      { name: 'Status da Rede', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    legal: [
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Política de Cookies', href: '#' },
      { name: 'LGPD', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-inspire-black border-t border-gray-800 relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-inspire-neon to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-inspire-neon animate-pulse" />
              <span className="text-2xl font-black text-inspire-white">Inspire</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Conectamos você ao futuro da internet com velocidade, estabilidade e inovação.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-inspire-neon hover:text-inspire-black transition-all duration-300 hover:scale-110 transform"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-inspire-white mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-inspire-neon transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-inspire-neon transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-inspire-white mb-6">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-inspire-neon transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-inspire-neon transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-inspire-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-inspire-neon transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-inspire-neon transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Inspire. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>•</span>
              <span>Anatel: SCM 000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-inspire-neon to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
