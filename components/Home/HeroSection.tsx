import React from "react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 1.5 } }
}

export default function HeroSection() {
  return (
    <section className="px-4 md:px-8 2xl:px-0  text-[6rem] cursor-default flex flex-col items-center justify-center min-h-[800px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={item}
          className="text-h1-m md:text-h1 leading-tight font-semibold"
        >
          Black & White Blog
        </motion.h1>
        <motion.div
          variants={item}
          className="text-h2-m md:text-h2  text-tw-text/90 pb-4"
        >
          by suansen for affyn
        </motion.div>
        <motion.div
          variants={item}
          className="text-p-m md:text-p space-y-2 text-tw-text/60"
        >
          <div>No Images . No Color . No Fuss</div>
          <div>Terminal style</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
