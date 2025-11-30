import React from 'react';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  {
    date: 'Abril 2025',
    title: 'Mis primeros pasos',
    points: [
      'Inicié aprendiendo HTML',
      'Continué con CSS entendiendo estructura y estilos',
      'Luego me adentré en JavaScript donde comencé a comprender la lógica de programación',
    ],
  },
  {
    date: 'Mayo 2025',
    title: 'Publicación en la web',
    points: [
      'Aprendí a publicar sitios web en internet',
      'Entendí conceptos básicos de hosting y despliegue',
    ],
  },
  {
    date: 'Junio 2025',
    title: 'Lógica y apps modernas',
    points: [
      'Mejoré mi capacidad para manejar la lógica de programación',
      'Descubrí y aprendí a crear Aplicaciones Progresivas (PWA)',
    ],
  },
  {
    date: 'Julio 2025',
    title: 'Backend con Firebase',
    points: [
      'Empecé a usar la base de datos de Google Firebase',
      'Aprendí a',
      '  - Guardar información del usuario',
      '  - Usar Realtime Database vs Firestore',
      '  - Manejar Firebase Storage',
      '  - Implementar Autenticación y login con Google',
    ],
  },
  {
    date: 'Agosto 2025',
    title: 'Control de versiones',
    points: [
      'Aprendí a subir mis proyectos a GitHub',
      'Empecé a publicar mis sitios con Netlify',
    ],
  },
  {
    date: 'Septiembre 2025',
    title: 'Tecnologías modernas',
    points: [
      'Comencé a trabajar con React TypeScript y Nextjs',
      'Aprendí a hacer despliegues automáticos con solo git push',
    ],
  },
  {
    date: 'Octubre – Noviembre 2025',
    title: 'Integración de Inteligencia Artificial',
    points: [
      'Implementé inteligencia artificial en mis proyectos usando Apis',
      'Aprendí a integrar IA una habilidad clave en proyectos modernos',
    ],
  },
  {
    date: 'Finales Noviembre 2025',
    title: 'Backend y Bases de Datos',
    points: [
      'Aprendí a diseñar bases de datos relacionales con SQL',
      'Implementé Supabase como Backend-as-a-Service',
      'Creación de tablas, políticas RLS (seguridad) y consultas complejas',
    ],
  },
];

type TimelineItemProps = {
  item: typeof timelineData[0];
  index: number;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative pl-12 md:pl-0 mb-12 transition-all duration-700 ease-out 
        ${inView ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'md:-translate-x-20' : 'md:translate-x-20'}`}
      `}
    >
      <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-900 z-10"></div>

      <div className={`md:w-1/2 ${isEven ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
        <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-white/10 hover:border-cyan-400/30 transition-colors">
          <span className="font-bold text-indigo-400 text-sm tracking-wide">{item.date}</span>
          <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
          <ul className="list-disc list-inside mt-2 text-slate-400 text-sm space-y-1">
            {item.points.map((point, i) => (
              <li key={i} className="whitespace-pre-wrap">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="mb-16 md:mb-24 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center tracking-wide">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Línea de Tiempo (Abril – Noviembre 2025)
        </span>
      </h2>
      <div className="relative max-w-3xl mx-auto px-4">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-cyan-500/20"></div>

        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
