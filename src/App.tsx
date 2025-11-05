import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Stats from './components/Stats';
import AdditionalServices from './components/AdditionalServices';
import Process from './components/Process';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TrustBar />
        <Services />
        <Stats />
        <AdditionalServices />
        <Process />
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}

export default App;