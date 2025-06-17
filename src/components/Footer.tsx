import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h3 className="font-serif font-semibold text-lg md:text-xl mb-3 md:mb-4">
                  Os Rostos de Camões
                </h3>
                <p className="text-light/80 text-xs md:text-sm leading-relaxed">
                  Uma celebração dos 500 anos do poeta global através da arte contemporânea indo-
                  portuguesa.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
                  Informações do Evento
                </h4>
                <div className="space-y-2 md:space-y-3 text-light/80">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="md:w-4" />
                    <span className="text-xs md:text-sm">
                      20 de Junho a 2 de Agosto
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="md:w-4" />
                    <span className="text-xs md:text-sm">
                      10h - 17h30 | Segunda a Sábado
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="md:w-4" />
                    <span className="text-xs md:text-sm">
                      Camões CLP, Casa Basílio Dias, 1st floor
Rua de Ormuz Road, Panjim, Goa 403 001
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">
                  Contacto
                </h4>
                <div className="space-y-1 md:space-y-2 text-light/80">
                  {/* <p className="text-xs md:text-sm">
                    Rua Dr. Brito Câmara, Goa 403 001
                  </p> */}
                  <p className="text-xs md:text-sm">info@osrostosdecamoes.com</p>
                  <p className="text-xs md:text-sm">+351 213 456 789</p>
                </div>
              </div>
            </div>

            {/* Logo section - now spans full width below all content */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 items-center">
              <div className="w-24">
                <img
                  src="/logoconsulado.jpg"
                  alt="Consulado Geral de Portugal em Goa"
                  width={100}
                  height={60}
                  className="object-contain h-auto"
                />
              </div>
              <div className="w-20">
                <img
                  src="/selomissao.png"
                  alt="Centenário Missão Comemorações"
                  width={80}
                  height={80}
                  className="object-contain h-auto"
                />
              </div>
              <div className="w-24">
                <img
                  src="/logoclp.jpg"
                  alt="Camões Centro de Língua Portuguesa"
                  width={100}
                  height={60}
                  className="object-contain h-auto"
                />
              </div>
              <div className="w-24">
                <img
                  src="/logo.png"
                  alt="Camões Instituto da Cooperação e da Língua"
                  width={100}
                  height={60}
                  className="object-contain h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-light/60 text-xs md:text-sm">
          <p>&copy; 2025 Os Rostos de Camões. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;