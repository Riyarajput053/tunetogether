import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Video, Share2 } from 'lucide-react';
import MoviePlayer from '../components/MoviePlayer';
import { mockMovies, onlineFriends } from '../data/mockData';

const StreamMoviesPage = () => {
  const [activeTab, setActiveTab] = useState('prime');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showWebcam, setShowWebcam] = useState(true);

  const tabs = [
    { id: 'prime', label: 'Prime Video' },
    { id: 'netflix', label: 'Netflix' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'screenshare', label: 'Screenshare' }
  ];

  return (
    <div className="min-h-screen bg-darker">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Watch Together
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="glass-effect rounded-2xl p-2 mb-8">
              <div className="flex space-x-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'hover:bg-glass text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-96">
              {activeTab === 'screenshare' ? (
                <div className="glass-effect rounded-2xl p-8 text-center">
                  <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-2xl font-bold mb-4">Start Screen Sharing</h3>
                  <p className="text-gray-400 mb-6">
                    Start screen sharing to watch together with friends
                  </p>
                  <button className="bg-accent hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                    Start Screen Share
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mockMovies[activeTab]?.map(movie => (
                    <motion.div
                      key={movie.id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-secondary rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
                      onClick={() => setSelectedMovie(movie)}
                    >
                      <img 
                        src={movie.poster} 
                        alt={movie.title}
                        className="w-full aspect-[3/4] object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg">{movie.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Webcam Preview */}
            {showWebcam && activeTab !== 'screenshare' && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="fixed bottom-4 right-4 w-64 h-48 glass-effect rounded-2xl overflow-hidden border-2 border-primary"
              >
                <div className="bg-black w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div>Webcam Preview</div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowWebcam(false)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-6 h-6 rounded-full text-xs"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </div>

          {/* Friends Sidebar */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Online Friends
            </h3>
            <div className="space-y-4">
              {onlineFriends.map(friend => (
                <div key={friend.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-glass transition-colors">
                  <div className="relative">
                    <img 
                      src={friend.avatar} 
                      alt={friend.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-darker ${
                      friend.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{friend.name}</div>
                    <div className="text-sm text-gray-400 capitalize">{friend.status}</div>
                  </div>
                  <button className="p-2 hover:bg-primary rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-accent hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Invite Friend
            </button>
          </div>
        </div>
      </div>

      {selectedMovie && (
        <MoviePlayer 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default StreamMoviesPage;

