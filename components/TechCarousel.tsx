import React from 'react';

// Ya no se importan los componentes SVG

// ... (import React from 'react';)

const technologies = [
  // Rutas corregidas para que coincidan con tus archivos en la carpeta /icons
  { name: 'HTML', iconUrl: '/icons/icons8-html-5-128.png' },
  { name: 'CSS', iconUrl: '/icons/icons8-css-logo-127.png' },
  { name: 'JavaScript', iconUrl: '/icons/icons8-javascript-128.png' },
  { name: 'React', iconUrl: '/icons/icons8-react-native-128.png' }, // Tu archivo es de React Native
  { name: 'TypeScript', iconUrl: '/icons/icons8-typescript-128.png' },
  { name: 'Next.js', iconUrl: '/icons/icons8-next.js-128.png' },
];

// ... (el resto de tu componente TechCarousel)

// Duplicamos el array para un bucle infinito y suave
const extendedTechnologies = [...technologies, ...technologies, ...technologies];

const TechCarousel: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex animate-scroll">
        {extendedTechnologies.map((tech, index) => (
          <div key={index} className="flex-shrink-0 mx-5 w-14 h-14 flex items-center justify-center" title={tech.name}>
            <img 
              src={tech.iconUrl} 
              alt={`${tech.name} logo`} 
              className="h-10 w-10 object-contain grayscale transition duration-300 hover:grayscale-0 hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;