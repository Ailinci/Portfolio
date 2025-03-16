import { Github, Eye, ArrowRight } from 'lucide-react';
import datita from "./data.ts";
import { CardsProjects } from './Types.ts';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import useIsMobile from '../utils/hooks/device.tsx';

const ProjectCard = ({ project }: { project: CardsProjects }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile()
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 min-h-[300px] w-[100%] md:aspect-[16/9]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ 
          backgroundImage: `url(${project.imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          opacity: isMobile ? 0.5 : 1
        }}
      />
      
      {/* Overlay oscuro gradual */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-90' : 'opacity-75'
        }`}
      />
      
      {/* Contenido superpuesto */}
      <div className="absolute inset-0 p-6 flex flex-row items-start md:items-center justify-start z-10">
        <div className="w-full h-full flex flex-col justify-between md:w-2/3">
          {/* Título */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">
            {project.title}
          </h3>
          
          {/* Descripción - siempre visible en móvil */}
          <motion.p 
            className="text-gray-200 text-sm mb-4 md:line-clamp-3"
            animate={{ 
              opacity: !isMobile ? (isHovered ? 1 :0) : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
          
          {/* Etiquetas */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: !isMobile ? (isHovered ? 1 :0) : 1,
              y: isHovered ? 0 : -5
            }}
            transition={{ duration: 0.3 }}
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-pink-500/30 backdrop-blur-sm text-white rounded-full border border-pink-500/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          {/* Enlaces */}
          <div className="flex gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                className="text-white hover:text-pink-400 transition-colors duration-300 flex items-center gap-1 text-sm group bg-gray-800/70 backdrop-blur-sm px-3 py-1 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>Código</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="text-white hover:text-pink-400 transition-colors duration-300 flex items-center gap-1 text-sm group bg-pink-600/40 backdrop-blur-sm px-3 py-1 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="w-4 h-4" />
                <span>Demo</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Borde decorativo simple */}
      <motion.div 
        className="absolute inset-0 border-2 border-transparent rounded-lg"
        animate={{ 
          borderColor: isHovered ? 'rgba(236, 72, 153, 0.5)' : 'transparent'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView = useInView(ref, {once: true, threshold: 0.1});

  return (
    <section className="w-full py-16 flex items-center" id="projects">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <motion.div 
          ref={ref} 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {datita.projects.title}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {datita.projects.description}
          </p>
        </motion.div>

        {/* Grid de proyectos con dos columnas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
        >
          {datita.projects.cards.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;