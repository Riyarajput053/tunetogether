import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import MiniPlayer from '../components/MiniPlayer';
import { mockPlaylists } from '../data/mockData';

const StreamSongsPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(mockPlaylists[0]);
  const [roomCode, setRoomCode] = useState('');
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleNext = () => {
    const currentIndex = mockPlaylists.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % mockPlaylists.length;
    setCurrentSong(mockPlaylists[nextIndex]);
  };
  
  const handlePrevious = () => {
    const currentIndex = mockPlaylists.findIndex(song => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + mockPlaylists.length) % mockPlaylists.length;
    setCurrentSong(mockPlaylists[prevIndex]);
  };
  
  const handleStartJam = () => {
    alert("Starting a new jam session! (Mock functionality)");
  };
  
  const handleJoinJam = () => {
    if (roomCode) {
      alert(`Joining room: ${roomCode} (Mock functionality)`);
    } else {
      alert("Please enter a room code");
    }
  };

  return (
    <div className="min-h-screen bg-darker">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Listen Together on Spotify
          </h1>
          <button className="bg-primary hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 neon-glow">
            Connect Spotify
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {mockPlaylists.map(playlist => (
                <motion.div
                  key={playlist.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary rounded-2xl p-4 cursor-pointer hover:shadow-2xl transition-all duration-300"
                  onClick={() => setCurrentSong(playlist)}
                >
                  <img 
                    src={playlist.cover} 
                    alt={playlist.title}
                    className="w-full aspect-square object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-1">{playlist.title}</h3>
                  <p className="text-gray-400 text-sm">{playlist.artist}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleStartJam}
                className="flex-1 bg-accent hover:bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Jam
              </button>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter room code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  className="flex-1 bg-glass border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-primary"
                />
                <button 
                  onClick={handleJoinJam}
                  className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Join Friend's Jam
                </button>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Group Chat
            </h3>
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              <div className="bg-glass rounded-xl p-3">
                <div className="font-semibold text-primary">Alex</div>
                <div>Hey everyone! What should we listen to?</div>
              </div>
              <div className="bg-glass rounded-xl p-3 ml-8">
                <div className="font-semibold text-accent">Sarah</div>
                <div>Let's play some chill vibes 🎵</div>
              </div>
              <div className="bg-glass rounded-xl p-3">
                <div className="font-semibold text-primary">Mike</div>
                <div>I'm down for anything!</div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-darker border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <MiniPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default StreamSongsPage;

