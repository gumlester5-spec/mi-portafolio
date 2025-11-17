
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  return (
    <section className="mb-16 md:mb-24 space-y-16">
      {/* Sección 1: HTML, CSS, JS */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center sm:text-left border-b-2 border-cyan-500/30 pb-4 tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Creado con HTML, CSS y JS
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.filter(p => p.tags.includes('JavaScript')).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Sección 2: TypeScript, Next.js, HTML, React */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center sm:text-left border-b-2 border-cyan-500/30 pb-4 tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Creado con TypeScript, Next.js, HTML y React
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.filter(p => p.tags.includes('Next.js')).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Sección 3: TypeScript, HTML, React */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center sm:text-left border-b-2 border-cyan-500/30 pb-4 tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Creado con TypeScript y React
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.filter(p => p.tags.includes('React') && !p.tags.includes('Next.js')).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;