function MovieCard({ image, title, genre, description, button }) {
  return (
    <div className="bg-[#1a1d29] rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
      {/* Movie Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto object-cover" 
      />
      
      {/* Movie Info Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        
        {/* Genre Badge */}
        <div className="flex gap-2 mb-3">
          <span className="bg-[#31343e] text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600">
            {genre}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {description}
        </p>
        
        {/* Watchlist Button */}
        <button className="w-full bg-[#f187fb] hover:bg-[#e076ea] text-[#1a1d29] font-bold py-2 rounded-lg transition-colors">
          {button || "+ Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;