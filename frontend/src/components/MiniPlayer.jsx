import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import WaveAnimation from './WaveAnimation';

const MiniPlayer = ({ currentSong, isPlaying, onPlayPause, onNext, onPrevious }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-800 p-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title}
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <div className="font-semibold">{currentSong.title}</div>
            <div className="text-sm text-gray-400">{currentSong.artist}</div>
          </div>
          <WaveAnimation isPlaying={isPlaying} />
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={onPrevious}
            className="p-2 hover:bg-glass rounded-full transition-colors"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            onClick={onPlayPause}
            className="p-3 bg-primary rounded-full hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button 
            onClick={onNext}
            className="p-2 hover:bg-glass rounded-full transition-colors"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5" />
          <div className="w-24 bg-gray-600 rounded-full h-1">
            <div className="bg-primary h-1 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MiniPlayer;

