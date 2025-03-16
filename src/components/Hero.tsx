import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react"
import datita from "./data.ts";
import './Hero.css'

const Hero = () => {

  const { titleInto, titleName, description } = datita.hero
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <section ref={ref} id="home" className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="rounded-3xl relative mb-10 mx-auto px-4 sm:px-6 lg:px-8 mt-[-3rem]">
        {/* Texto */}

        <motion.div
          style={{ y: textY }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          viewport={{ amount: 0.4 }}
          className="space-y-8 relative h-full text-center z-10"
        >
          <h2 className="text-4xl relative md:text-5xl lg:text-6xl font-bold z-10">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {titleInto}
            </span>
            <br />
            <span className="text-gray-100">{titleName}</span>
          </h2>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          y: backgroundY
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
};

export default Hero;