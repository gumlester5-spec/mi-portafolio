import React from 'react';
import Typewriter from 'typewriter-effect';
import TechCarousel from './TechCarousel';

const Header: React.FC = () => {
  return (
    <header id="home" className="text-center mb-12 md:mb-16 animate-fade-in-up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Mi Portafolio
        </span>
      </h1>
      <div className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-400 h-16 sm:h-auto">
        <Typewriter
          options={{
            strings: [
              'Desarrollador Web Full Stack',
              'Experto en React y TypeScript',
              'Creador de Experiencias Digitales',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </div>
      <div className="my-12 py-6 bg-gradient-to-b from-transparent via-slate-500/10 to-transparent">
        <TechCarousel />
      </div>
    </header>
  );
};

export default Header;