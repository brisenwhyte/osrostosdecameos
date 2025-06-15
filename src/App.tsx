// src/App.tsx (or your main router file)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistDetailPage from './pages/ArtistDetailPage'; // Import the new component
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />

        {/* Dynamic Route for the artist detail pages */}
        {/* The ":" before "artistId" makes it a dynamic parameter */}
        <Route path="/:artistId" element={<ArtistDetailPage />} />
        
        {/* You could also add a 404 Not Found page here */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;