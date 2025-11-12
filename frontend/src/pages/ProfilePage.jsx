import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Calendar, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
            <p className="text-gray-400">Your TuneTogether account information</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-semibold text-white">Username</h2>
              </div>
              <p className="text-gray-300 text-lg">{user.username}</p>
            </div>

            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-semibold text-white">Email</h2>
              </div>
              <p className="text-gray-300 text-lg">{user.email}</p>
            </div>

            <div className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-semibold text-white">Member Since</h2>
              </div>
              <p className="text-gray-300 text-lg">{formatDate(user.created_at)}</p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

