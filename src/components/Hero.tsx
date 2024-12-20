import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react"
import datita  from "./data.ts";

const Hero = () => {

  const { titleInto, titleName, description} = datita.hero
const ref = useRef(null)

const {scrollYProgress} = useScroll({
  target: ref,
  offset: ["start start", "end start"]
})

  const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"] )
  const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"] )

  return (
    <div ref={ref} id="home" className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="rounded-3xl relative mx-auto px-4 sm:px-6 lg:px-8 mt-[-3rem]">
        {/* Texto */}
        <motion.div style={{y: textY}}
        className=" space-y-8 relative h-full  text-center z-10">
          <h2 className="text-4xl  relative md:text-5xl lg:text-6xl font-bold z-10">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {titleInto}
            </span>
            <br />
            <span className="text-gray-100">{titleName}</span>
          </h2>
          <p className="text-xl text-gray-200"> {description} </p>
        </motion.div>
      </div>
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
    </div>
  );
};

export default Hero;