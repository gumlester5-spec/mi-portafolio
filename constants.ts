export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Versos Emocionales',
    description: 'Versos Emocionales Combinables. Inspirado en "Cent mille milliards de poèmes" de Raymond Queneau.',
    imageUrl: '/images/project-versos-emocionales.png', // ¡Recuerda añadir esta imagen!
    link: 'https://versos-emocionales.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Cafetería Aroma GT',
    description: 'Proyecto funcional para una cafetería. El sistema de reservas está activo para demostración (las reservas de prueba me llegarán). La ubicación y datos de contacto son ficticios.',
    imageUrl: '/images/project-cafeteria-aroma.png', // ¡Recuerda añadir esta imagen!
    link: 'https://cafeteria-aroma-gt.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Gestor de Deudas Compartidas',
    description: 'Aplicación para uso real que permite crear grupos de deudas. El código generado se puede compartir para que otros miembros vean y gestionen el estado del grupo.',
    imageUrl: '/images/project-deudas.png', // ¡Recuerda añadir esta imagen!
    link: 'https://deudas-1-version.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Mi Garage',
    description: 'Aplicación para apuntar los servicios de tu moto y todo lo que quieras. La información se guarda en la nube, así que no te preocupes, tus datos están bien guardados.',
    imageUrl: '/images/project-mi-garage.png', // ¡Recuerda añadir esta imagen!
    link: 'https://mi-garage.netlify.app/',
    tags: ['TypeScript', 'React'],
  },
  {
    id: 5,
    title: 'Finanzasia',
    description: 'Aplicación para administrar tus finanzas, gastos e ingresos, con una IA integrada para realizar consultas sobre tu estado financiero.',
    imageUrl: '/images/project-finanzasia.png', // ¡Recuerda añadir esta imagen!
    link: 'https://finanzasia.netlify.app/',
    tags: ['TypeScript', 'React'],
  },
  {
    id: 6,
    title: 'Finanzas Móvil con IA (PWA)',
    description: 'Uno de mis proyectos más complejos. Es una App Web Progresiva (PWA) con IA para una gestión completa de finanzas. Puedes pedirle al agente que agregue compras, ventas, gastos, etc. Tu información se guarda de forma segura en tu dispositivo usando IndexedDB.',
    imageUrl: '/images/project-finanzas-movil.png', // ¡Recuerda añadir esta imagen!
    link: 'https://studio--finanza-mvil.us-central1.hosted.app',
    tags: ['TypeScript', 'React', 'Next.js', 'PWA'],
  },
];