// src/pages/ArtistDetailPage.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artists } from '../data/artists'; // Adjust path if needed
import { ArrowLeft, Mail, MapPin} from 'lucide-react';

const ArtistDetailPage: React.FC = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = artists.find(a => a.id === artistId);

  if (!artist) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/30 text-primary p-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Artista não encontrado</h1>
        <p className="text-gray-600 mb-8 text-center">O artista que você está procurando não existe.</p>
        <Link to="/" className="inline-flex items-center space-x-2 bg-primary text-light px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          <ArrowLeft size={18} />
          <span>Voltar à Página Inicial</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Back Button */}
        <div className="mb-6 md:mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium">
                <ArrowLeft size={20} />
                <span className="text-sm md:text-base">Voltar à lista de artistas</span>
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {/* Left Column: Image and Contact Info */}
          <div className="md:col-span-1">
            <img 
              src={artist.profileImage} 
              alt={artist.name} 
              className="w-full aspect-square object-cover rounded-lg shadow-lg mb-4 md:mb-6"
            />
            {/* <div className="space-y-3 text-gray-700">
                <h3 className="font-serif text-lg md:text-xl font-semibold text-primary border-b pb-2 mb-3">Contacto</h3>
                <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-primary/80 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm">{artist.address}</span>
                </div>
                <div className="flex items-start space-x-3">
                    <Mail size={16} className="text-primary/80 mt-0.5 flex-shrink-0" />
                    <span className="text-xs md:text-sm">{artist.contact}</span>
                </div>
            </div> */}
          </div>

          {/* Right Column: Bio, Exhibitions, Portfolio */}
          <div className="md:col-span-2">
            <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">{artist.name}</h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              {artist.biography}
            </p>

            {/* Exhibitions */}
            <section className="mb-6 md:mb-8">
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Exposições</h2>
                <ul className="space-y-2 md:space-y-3 border-l-2 border-secondary pl-3 md:pl-4">
                    {artist.exhibitions.map(ex => (
                        <li key={`${ex.year}-${ex.title}`}>
                            <p className="font-semibold text-sm md:text-base text-gray-800">{ex.title}</p>
                            <p className="text-xs md:text-sm text-gray-500">{ex.location} - <span className="font-medium">{ex.year}</span></p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Portfolio */}
            {/* <section>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">Portfólio</h2>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                    {artist.portfolio.map(work => (
                        <div key={work.title} className="bg-secondary/30 p-3 md:p-4 rounded-lg">
                            <h4 className="font-semibold text-sm md:text-base text-gray-800">{work.title} ({work.year})</h4>
                            <p className="text-xs md:text-sm text-gray-600">{work.description}</p>
                            <p className="text-xs md:text-sm text-gray-600">{work.price}</p>
                        </div>
                    ))}
                </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetailPage;