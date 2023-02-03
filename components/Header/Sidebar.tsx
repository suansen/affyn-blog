import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import NavItem from "./NavItem"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 1.5 } }
}

type Props = { isOpen: boolean; setIsOpen: any; path: string }

export default function Sidebar({ isOpen, setIsOpen, path }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center text-nav uppercase w-screen h-screen text-tw-text bg-tw-background/90 backdrop-blur"
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} onClick={() => setIsOpen(!isOpen)}>
              <NavItem link="/" path={path}>
                Home
              </NavItem>
            </motion.div>
            <motion.div variants={item} onClick={() => setIsOpen(!isOpen)}>
              <NavItem link="/posts" path={path}>
                View All
              </NavItem>
            </motion.div>
            <motion.div variants={item} onClick={() => setIsOpen(!isOpen)}>
              <NavItem link="/posts/new" path={path}>
                New Post
              </NavItem>
            </motion.div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
