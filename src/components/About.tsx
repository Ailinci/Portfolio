import datita from "./data.ts";

const About = () => {
  const { about, pDescriptionTop, pDescriptionBottom, skilsTitle, cards, skilsArray } = datita.about

  return (
    <section className="w-full py-20 flex items-center  -" id={"about"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Información personal */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {about}
              </span>
            </h2>
            <p className="text-gray-300">
              {pDescriptionTop}
            </p>
            <p className="text-gray-300">
              {pDescriptionBottom}
            </p>

            {/* Estadísticas/números */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              {cards.map(card => {
                return (
                  <div key={card.id} className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-110 transition-all duration-300 cursor-default">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      {card.title}
                    </div>
                    <div className="text-sm text-gray-400">{card.body}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Columna derecha - Habilidades */}
          <div className="space-y-6  ">
            <h3 className="text-2xl font-bold text-white mb-6">
              {skilsTitle}
            </h3>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;