import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StreamSongsPage from './pages/StreamSongsPage';
import StreamMoviesPage from './pages/StreamMoviesPage';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

