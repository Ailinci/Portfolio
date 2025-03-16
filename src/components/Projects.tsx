import { Github, ExternalLink } from 'lucide-react';
import datita from "./data.ts";
import { CardsProjects } from './Types.ts';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';


const { title, description, cards } = datita.projects

const ProjectCard = (card: CardsProjects) => (
  <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-gray-800 border border-gray-700/50 hover:border-pink-500/50">
    {/* Contenido */}
    <div className="transform flex flex-col justify-between h-full transition-all duration-300 group-hover:translate-y-[-4px] cursor-default">
      <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
      <p className="text-gray-300 text-sm mb-4 transform opacity-75 transition-all duration-300 group-hover:opacity-100">
        {card.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 transform transition-all duration-300 group-hover:translate-y-[-2px]">
        {card.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Enlaces */}
      <div className="flex bottom-0 gap-4 pt-2 transform opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-2px]">
        {card.github && (
          <a
            href={card.github}
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        )}
        {card.demo && (
          <a
            href={card.demo}
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300 flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const ref = useRef(null)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView = useInView(ref, {once: true, threshold: 0.3 })

  return (
    <section className="w-full py-10 flex items-center" id="projects">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <motion.div ref={ref} className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ y: -5 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ y: -5 }}>
          {cards.map(card => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;