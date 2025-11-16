import React from 'react';

// Ya no se importan los componentes SVG

const technologies = [
  // Usamos las rutas a tus archivos PNG, siguiendo el patrón que mencionaste
  { name: 'HTML', iconUrl: 'icons/icons8-html-128.png' },
  { name: 'CSS', iconUrl: 'icons/icons8-css-128.png' },
  { name: 'JavaScript', iconUrl: 'icons/icons8-javascript-128.png' },
  { name: 'React', iconUrl: 'icons/icons8-react-128.png' },
  { name: 'TypeScript', iconUrl: 'icons/icons8-typescript-128.png' },
  { name: 'Next.js', iconUrl: 'icons/icons8-nextjs-128.png' },
];

// Duplicamos el array para un bucle infinito y suave
const extendedTechnologies = [...technologies, ...technologies, ...technologies];

const TechCarousel: React.FC = () => {
  return (
    <div className="relative mt-8 w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10"
        aria-hidden="true"
      />
      <div className="flex animate-scroll">
        {extendedTechnologies.map((tech, index) => (
          <div key={index} className="flex-shrink-0 mx-6 w-16 h-16 flex items-center justify-center" title={tech.name}>
            {/* Cambiamos el componente SVG por una etiqueta <img> */}
            <img 
              src={tech.iconUrl} 
              alt={`${tech.name} logo`} 
              className="h-12 w-12 object-contain grayscale transition duration-300 hover:grayscale-0 hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;