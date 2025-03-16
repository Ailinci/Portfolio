import { motion, useInView } from "motion/react";
import datita from "./data.ts";
import { useRef } from "react";

const About = () => {
  const { about, pDescriptionTop, pDescriptionBottom, skilsTitle, cards, skilsArray } = datita.about;

  const ref1 = useRef(null);
  const ref2 = useRef(null);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView1 = useInView(ref1, { once: true, threshold: 0.3 });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const isInView2 = useInView(ref2, { once: true, threshold: 0.3 });

  return (
    <section className="w-full pt-20 flex items-center" id={"about"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Información personal */}
          <motion.div
            className="space-y-6"
            ref={ref1} // Asignamos ref1 aquí
            initial={{ y: 50, opacity: 0 }}
            animate={isInView1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {about}
              </span>
            </h2>
            <p className="text-gray-300">{pDescriptionTop}</p>
            <p className="text-gray-300">{pDescriptionBottom}</p>

            {/* Estadísticas/números */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              {cards.map(card => (
                <div
                  key={card.id}
                  className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-110 transition-all duration-300 cursor-default"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {card.title}
                  </div>
                  <div className="text-sm text-gray-400">{card.body}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha - Habilidades */}
          <motion.div
            className="space-y-6"
            ref={ref2} // Asignamos ref2 aquí
            initial={{ y: 50, opacity: 0 }}
            animate={isInView2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{skilsTitle}</h3>

            {/* Sección adicional de tecnologías */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:scale-105 transition-all duration-300 cursor-default">
              <div className="flex flex-wrap gap-2">
                {skilsArray.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
