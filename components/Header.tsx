
import React from 'react';
import TechCarousel from './TechCarousel';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12 md:mb-16 animate-fade-in-up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Mi Portafolio
        </span>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
        Aquí demuestro mi experiencia en desarrollo web con tecnologías como HTML, CSS, JavaScript, React, TypeScript y Next.js.
      </p>
      <div className="my-12 py-6 bg-gradient-to-b from-transparent via-slate-500/10 to-transparent">
        <TechCarousel />
      </div>
    </header>
  );
};

export default Header;