
import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem somos', href: '#quem-somos' },
    { name: 'Planos', href: '#planos' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Indique e Ganhe', href: '#indique' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black shadow-lg' : 'bg-black'
    }`}>
      {/* Top bar with hashtag and social */}
      <div className="yellow-gradient py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-black font-bold text-sm">#vemparainspire</span>
          <div className="flex space-x-3">
            <Facebook className="w-5 h-5 text-black hover:text-inspire-gray cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-black hover:text-inspire-gray cursor-pointer transition-colors" />
            <Users className="w-5 h-5 text-black hover:text-inspire-gray cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-inspire-yellow text-2xl font-black">
              inspire
            </div>
            <div className="w-6 h-6 bg-inspire-yellow rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-inspire-yellow transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block bg-inspire-yellow text-black px-6 py-2 rounded font-bold hover:bg-yellow-400 transition-colors duration-300">
            Assine já!
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-inspire-yellow transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-inspire-yellow text-black px-6 py-3 rounded font-bold mt-4">
              Assine já!
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
