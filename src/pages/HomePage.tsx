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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="text-center md:text-left px-2">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Os Rostos de Camões
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 text-light/90 max-w-3xl mx-auto leading-relaxed">
                Uma celebração dos 500 anos do poeta global através da arte contemporânea portuguesa
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:sm:space-x-8 text-light/80">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="md:w-5" />
                  <span className="text-sm md:text-base">20 de Junho a 2 de Agosto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} className="md:w-5" />
                  <span className="text-sm md:text-base">8 artistas participantes</span>
                </div>
              </div>
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-1 border-light/30 shadow-lg">
              {/* Replace the div below with your image */}
              <div className="w-full h-full bg-brown-3">
                <img src="/Camoes.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
            Sobre a Exposição
          </h2>
          <div className="prose prose-sm md:prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="mb-4 md:mb-6">
              Luis de Camões, o icônico poeta português viveu em um mundo de transição. Sua poesia
              respirou a vida em seu tempo e em nossos próprios tempos, oferecendo sabedoria e idéias
              em sua beleza e sua crueldade. Seu trabalho destaca a busca por algo
              Incrivelmente revolucionário e moderno - a proximidade com a natureza e a busca do humano
              felicidade em meio à praga do sofrimento.
            </p>
            <p className="mb-4 md:mb-6">
              Nascido quarenta anos antes de William Shakespeare, em 1525, Camões era o único europeu
              poeta por ter viajado para outros continentes passando grande parte de sua vida adulta em
              Ásia e África. Sua grande narrativa os lusíadas considerou -se um épico para
              O humanismo 'foi roteirizado durante esses dezessete anos de Portugal. Destes,
              Quatorze foram gastos em Goa e seus cantos, sonetos e comentários aludem a um
              Goa daquela época, tornando as revelações surpreendentes e perspicazes.
              </p>
              <p className="mb-4 md:mb-6">
              Ao longo de sua residência aqui, idéias emergentes de vida simples, física
              intimidade em relação ao amor platônico de Petrarchan, e um estilo de vida protean e descontraído de
              proximidade com a natureza, percorre seus sonetos.
              </p>
              <p className="mb-4 md:mb-6">
              A presença de Camões como homem com letras condenadas ao serviço como um soldado comum emprestado
              ele uma perspectiva única em um século que estava redefinindo a política do novo
              economia mundial. Sua luta como escritor e flaneur de seu tempo, com amor, desespero
              e a corrupção humana, mostrou um rosto de Cameson: sempre amoroso, sempre sofrendo,
              Sempre lutando, mas totalmente humano.
              </p>
              <p className="mb-4 md:mb-6">
              A exposição em vista apresenta as obras de oito artistas de Goa que celebram a vida
              e poesia de Camões, destacando sua natureza picante, bem como sua contemporaneidade.
              </p>
              <p className="mb-4 md:mb-6">
              A crítica de dezoito obras, além de celebrar a vida de Camões e recapturar
              imagens do mundo de seu tempo.
            </p>
          </div>
        </div>
      </section>
      {/* Poster Section */}
      <section className="py-8 md:py-12 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src="/ROSTOSPOSTER.jpg" 
              alt="Os Rostos de Camões - Exhibition Poster" 
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

            {/* Event Info */}
      <section className="py-12 md:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-secondary/50 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Palette className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-lg md:text-xl mb-2 text-primary">Arte Contemporânea</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Interpretações modernas da obra e legado de Luís de Camões através de diferentes expressões artísticas.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-secondary/50 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-lg md:text-xl mb-2 text-primary">8 Artistas</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Uma seleção cuidadosa de artistas Goeses que exploram temas camonianos em suas obras.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-secondary/50 rounded-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-serif font-semibold text-lg md:text-xl mb-2 text-primary">Acesso QR</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Cada artista possui um perfil acessível via QR code para uma experiência interativa completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-12 md:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
              Artistas Goeses
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Conheça os oito artistas que dão vida a esta celebração única da herança camoniana
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;