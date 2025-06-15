import React from 'react';
import { Calendar, Users, Palette, MapPin } from 'lucide-react';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-light">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Os Rostos de Camões
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-light/90 max-w-3xl mx-auto leading-relaxed">
              Uma celebração dos 500 anos do poeta global através da arte contemporânea portuguesa
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-light/80">
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>20 de Junho a 2 de Agosto</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>8 artistas participantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-primary" size={32} />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2 text-primary">Arte Contemporânea</h3>
              <p className="text-gray-600 leading-relaxed">
                Interpretações modernas da obra e legado de Luís de Camões através de diferentes expressões artísticas.
              </p>
            </div>
            
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2 text-primary">8 Artistas</h3>
              <p className="text-gray-600 leading-relaxed">
                Uma seleção cuidadosa de artistas portugueses que exploram temas camonianos em suas obras.
              </p>
            </div>
            
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={32} />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2 text-primary">Acesso QR</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada artista possui um perfil acessível via QR code para uma experiência interativa completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
            Sobre a Exposição
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              "Os Rostos de Camões" é uma exposição que celebra os 500 anos do nascimento de Luís de Camões, 
              o maior poeta da língua portuguesa. Através do olhar de oito artistas contemporâneos, 
              exploramos como a obra camoniana continua a inspirar e influenciar a criação artística atual.
            </p>
            <p className="mb-6">
              Cada artista apresenta sua interpretação única dos temas universais presentes na obra de Camões: 
              o amor, a pátria, as viagens, a saudade e a condição humana. Das artes visuais às instalações 
              interativas, esta exposição oferece uma experiência rica e diversificada.
            </p>
            <p>
              A exposição estará patente de 27 de junho a 2 de agosto de 2025, das 10h00 às 17h30, de segunda-feira a sábado, no Camões-CLP, Casa Basílio Dias, Rua de Ormuz, Panjim - Goa 403 001,
              proporcionando aos visitantes uma viagem através dos séculos que liga o passado literário ao presente artístico.
            </p>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Artistas Participantes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Conheça os oito artistas que dão vida a esta celebração única da herança camoniana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Image */}
      {/* <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/image.png" 
              alt="Os Rostos de Camões - Cartaz da Exposição"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HomePage;