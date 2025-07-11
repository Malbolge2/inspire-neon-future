
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

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
    { name: 'Planos', href: '#planos' },
    { name: 'Streaming', href: '#streaming' },
    { name: 'Ligações', href: '#ligacoes' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <Zap className="w-8 h-8 text-inspire-neon animate-pulse" />
            <span className="text-2xl font-black text-inspire-white">
              Inspire
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-inspire-white hover:text-inspire-neon transition-colors duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-inspire-neon transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-inspire-neon text-inspire-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 animate-pulse-neon">
            Assine Já!
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-inspire-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-inspire-white hover:text-inspire-neon transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-inspire-neon text-inspire-black px-6 py-3 rounded-full font-bold mt-4">
              Assine Já!
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
