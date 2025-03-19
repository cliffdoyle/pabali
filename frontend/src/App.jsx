import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Laptops from './components/Laptops';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
// In App.js
import LaptopDetail from './components/LaptopDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
                      <Route path="/laptops" element={<Laptops />} />
                      <Route path="/laptops/:id" element={<LaptopDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;