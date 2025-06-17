import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Artist } from '../data/artists';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="bg-light rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={artist.profileImage} 
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 md:p-6">
        <Link 
            to={`/${artist.id}`}
            className="inline-flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors text-xs md:text-sm font-medium"
          >
        <h3 className="font-serif font-semibold text-lg md:text-xl text-primary mb-2">
          {artist.name}
        </h3>
        </Link>
        
        {/* <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
          {artist.biography}
        </p> */}
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 bg-secondary px-2 py-1 rounded-full">
            {artist.portfolio.length} obras
          </span>
          
          <Link 
            to={`/${artist.id}`}
            className="inline-flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors text-xs md:text-sm font-medium"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span>Ver perfil</span>
            <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;