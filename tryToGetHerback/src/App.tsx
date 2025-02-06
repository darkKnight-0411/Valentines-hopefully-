import { useState, useEffect } from 'react';
import { Heart, Quote } from 'lucide-react';
import AboutYou from './components/AboutYou';
import Carousels from './components/Carousels';
import Apology from './components/Apology';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80')`
          }}
        />
        
        <div className={`relative text-center space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Heart className="w-16 h-16 text-pink-400 mx-auto animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            My Love For You
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
            Every moment with you is a gift I am grateful to God for giving
          </p>
        </div>
      </div>

      {/* Reasons Section */}
      <div className='w-full px-10 flex flex-col justify-center items-center space-y-6 py-10'>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Us &#10084;
          </h2>
        <Carousels/>  
      </div>

      <div className='w-full'>
        <AboutYou/>
      </div>
      <div className='w-full'>
        <Apology/>
      </div>

      {/* Quote Section */}
      <div className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-12 h-12 text-pink-400 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-6">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </p>
          <p className="text-gray-600">- Maya Angelou</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white/80 backdrop-blur-sm py-8 text-center">
        <Heart className="w-6 h-6 text-pink-400 mx-auto mb-4" />
        <p className="text-gray-600">Always & Forever</p>
      </div>
    </div>
  );
}

export default App;