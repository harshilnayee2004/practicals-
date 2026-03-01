import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
