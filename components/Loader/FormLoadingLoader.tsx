import { AnimatePresence, motion } from "framer-motion"
import React from "react"

type Props = { isLoading: boolean }

export default function FormLoadingLoader({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 text-tw-text bg-tw-background/90 backdrop-blur-md gap-y-8"
        >
          <div className="text-p-m md:text-p animate-bounce">Loading ...</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
