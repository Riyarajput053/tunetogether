import { Link, useLocation } from 'react-router-dom';
import { Music, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="glass-effect rounded-2xl p-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Music className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TuneTogether
          </h1>
        </div>
        
        <div className="flex space-x-6">
          <Link 
            to="/songs" 
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              location.pathname === '/songs' 
                ? 'bg-primary text-white shadow-lg' 
                : 'hover:bg-glass hover:text-primary'
            }`}
          >
            Stream Songs
          </Link>
          <Link 
            to="/movies" 
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              location.pathname === '/movies' 
                ? 'bg-primary text-white shadow-lg' 
                : 'hover:bg-glass hover:text-primary'
            }`}
          >
            Stream Movies
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-glass rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

