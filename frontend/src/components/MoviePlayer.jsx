import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize2 } from 'lucide-react';

const MoviePlayer = ({ movie, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-darker rounded-2xl overflow-hidden w-full max-w-4xl"
      >
        <div className="relative aspect-video bg-black">
          <img 
            src={movie.poster} 
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsPlaying(true)}
                className="bg-primary hover:bg-green-600 text-white p-4 rounded-full hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{movie.title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-primary hover:bg-green-600 text-white p-3 rounded-full"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <div className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5" />
                <div className="w-32 bg-gray-600 rounded-full h-1">
                  <div className="bg-primary h-1 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="bg-accent hover:bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold transition-colors">
                Watch Together
              </button>
              <button className="p-2 hover:bg-glass rounded-lg transition-colors">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoviePlayer;

