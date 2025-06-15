import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-light shadow-sm border-b border-accent/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 md:space-x-3 text-primary hover:text-primary/80 transition-colors"
          >
            <Home size={20} className="md:w-6" />
            <span className="font-serif font-semibold text-base md:text-lg hidden sm:block">
              Os Rostos de Camões
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6 md:space-x-8">
            <Link 
              to="/" 
              className={`text-xs md:text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Início
            </Link>
            <a 
              href="#artists" 
              className="text-xs md:text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Artistas
            </a>
            <a 
              href="#about" 
              className="text-xs md:text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Sobre
            </a>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-1 md:p-2 rounded-md text-gray-600 hover:text-primary hover:bg-secondary/50 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-accent/20">
            <nav className="flex flex-col space-y-2 md:space-y-3">
              <Link 
                to="/" 
                onClick={toggleMenu}
                className="text-xs md:text-sm font-medium text-gray-600 hover:text-primary transition-colors px-2 py-1"
              >
                Início
              </Link>
              <a 
                href="#artists" 
                onClick={toggleMenu}
                className="text-xs md:text-sm font-medium text-gray-600 hover:text-primary transition-colors px-2 py-1"
              >
                Artistas
              </a>
              <a 
                href="#about" 
                onClick={toggleMenu}
                className="text-xs md:text-sm font-medium text-gray-600 hover:text-primary transition-colors px-2 py-1"
              >
                Sobre
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;