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
                OS ROSTOS DE CAMÕES
              </h1>
              <p className="text-base md:text-sm lg:text-xl mb-6 md:mb-8 text-light/90 max-w-3xl mx-auto leading-relaxed">
                Um projeto concebido pelo Camões-Centro de Língua Portuguesa em Pangim, com o apoio
                do Consulado-Geral de Portugal em Goa e do Camões, Instituto da Cooperação e da Língua,
                I.P., no âmbito das comemorações oficiais dos 500 anos do nascimento de Luís Vaz de
                Camões.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:sm:space-x-8 text-light/80">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="md:w-5" />
                  <span className="text-sm md:text-base">20 de Junho a 2 de Agosto 2025</span>
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
              Luís de Camões, o icónico poeta português, viveu num mundo de transição. A sua poesia deu
              vida ao seu tempo, bem como aos nossos dias, oferecendo sabedoria e uma visão da sua
              beleza, bem como da sua crueldade. A sua obra destaca a procura de algo incrivelmente
              revolucionário e moderno - a proximidade com a natureza e a busca da felicidade humana
              através da devastação do sofrimento.
            </p>
            <p className="mb-4 md:mb-6">
              Nascido quarenta anos antes de William Shakespeare, em 1525, Camões foi o único poeta
              europeu que viajou por outros continentes, tendo passado grande parte da sua vida adulta na
              Ásia e em África. A sua grande narrativa Os Lusíadas, considerada &quot;uma epopeia do
              humanismo&quot;, foi escrita durante os dezassete anos passados fora de Portugal. Destes, catorze
              foram vividos no Oriente e em Goa e os seus cantos, sonetos e reflexões aludem a uma Goa
              desse tempo, fazendo revelações surpreendentes, mas perspicazes.
              </p>
              <p className="mb-4 md:mb-6">
              Ao longo de sua residência aqui, idéias emergentes de vida simples, física
              intimidade em relação ao amor platônico de Petrarchan, e um estilo de vida protean e descontraído de
              proximidade com a natureza, percorre seus sonetos.
              </p>
              <p className="mb-4 md:mb-6">
              Ao longo da sua estada no Oriente, as ideias emergentes de uma vida simples, de intimidade
              física face ao amor platónico petrarquiano e de um estilo de vida prosaico e descontraído, de
              proximidade com a natureza, a sua fauna e flora, percorrem os seus sonetos.
              </p>
              <p className="mb-4 md:mb-6">
              A presença de Camões como homem de letras, condenado ao serviço militar comum,
              permitiu-lhe ter uma perspetiva única de um século que estava a redefinir a política de uma
              nova economia mundial. A sua luta como escritor e flaneur do seu tempo, com o amor, o
              desespero e a corrupção humana, revelou-nos um rosto camoniano: sempre amoroso, sempre
              sofredor, sempre lutador, mas plenamente humano.
              </p>
              <p className="mb-4 md:mb-6">
              A exposição, em exibição de 20 de junho a 2 de agosto de 2025 no CLP em Goa, apresenta as
              obras de oito artistas e criadores goeses que celebram a vida e a poesia de Camões, realçando
              o seu carácter subversivo e a sua contemporaneidade.
            </p>
              <p className="mb-4 md:mb-6">
              As dezoito obras satirizam, mas também celebram a vida de Camões, recuperando imagens
              do mundo do seu tempo.
            </p>
            <p className="mb-9 md:mb-9">
            <strong>Savia Viegas<br/>Artista goesa e curadora da exposição “Os Rostos de Camões”</strong>
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