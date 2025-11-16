
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Aplicación de Chat en Tiempo Real',
    description: 'Una aplicación de chat para comunicación instantánea, construida con WebSockets para una experiencia de usuario fluida y en tiempo real.',
    imageUrl: 'https://picsum.photos/seed/chat/600/400',
    tags: ['React', 'TypeScript', 'WebSockets', 'CSS', 'HTML'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Panel de Visualización de Datos',
    description: 'Un panel interactivo para visualizar métricas de negocio complejas en tiempo real, utilizando D3.js y React.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400',
    tags: ['React', 'JavaScript', 'D3.js', 'CSS', 'HTML'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Plataforma de E-commerce con Next.js',
    description: 'Una plataforma de comercio electrónico completa construida con Next.js para un rendimiento optimizado y una excelente experiencia de usuario.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Aplicación de Gestión de Tareas',
    description: 'Una aplicación Kanban simple y efectiva para organizar tareas y flujos de trabajo personales o de equipo.',
    imageUrl: 'https://picsum.photos/seed/taskmanager/600/400',
    tags: ['React', 'JavaScript', 'Firebase', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
];