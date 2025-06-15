import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">Os Rostos de Camões</h3>
            <p className="text-light/80 leading-relaxed">
              Uma celebração dos 500 anos do poeta global através da arte contemporânea portuguesa.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informações do Evento</h4>
            <div className="space-y-3 text-light/80">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>20 de Junho a 2 de Agosto</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>10h - 17h30 | Segunda a Sábado</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Camões CLP, Casa Basílio Dias, Rua Dr. Brito Câmara, Goa 403 001</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-light/80">
              <p>Rua Dr. Brito Câmara, Goa 403 001</p>
              <p>info@osrostosdecamoes.com</p>
              <p>+351 213 456 789</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-light/20 mt-8 pt-8 text-center text-light/60">
          <p>&copy; 2025 Os Rostos de Camões. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;