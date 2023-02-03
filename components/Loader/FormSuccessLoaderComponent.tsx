import React from "react"
import { motion } from "framer-motion"

type Props = { children: React.ReactNode; text: string }

export default function FormSuccessLoaderComponent({ children, text }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 text-tw-text bg-tw-background/90 backdrop-blur-md gap-y-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-tw-text text-tw-background w-32 h-32 flex justify-center items-center rounded-full"
      >
        <div className="w-16 h-16">{children}</div>
      </motion.div>
      <div className="text-p-m md:text-p">{text}</div>
    </motion.div>
  )
}
