import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se ejecuta una vez
    threshold: 0.1,    // Se activa cuando el 10% de la tarjeta es visible
  });

  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group bg-slate-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 h-full ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img src={project.imageUrl} alt={`Captura de pantalla de ${project.title}`} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;