import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import StreamSongsPage from './pages/StreamSongsPage';
import StreamMoviesPage from './pages/StreamMoviesPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-darker">
                <div className="container mx-auto px-4 py-6">
                  <Navigation />
                  <Routes>
                    <Route path="/" element={<StreamSongsPage />} />
                    <Route path="/songs" element={<StreamSongsPage />} />
                    <Route path="/movies" element={<StreamMoviesPage />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

