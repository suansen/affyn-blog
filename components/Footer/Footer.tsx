import React from "react"
import { motion } from "framer-motion"
import Logo from "../Header/Logo"

import { BsFacebook } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"

import SocialIcon from "./SocialIcon"

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
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5 } }
}

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="px-4 md:px-8 2xl:px-0 py-16 md:py-0 max-w-7xl flex flex-col-reverse gap-y-4 md:flex-row justify-between w-full h-full items-center"
    >
      {/* Copyright */}
      <motion.div variants={item}>
        <span className="uppercase text-tw-background/70">{`@${date}`}</span>
        <span className="uppercase font-bold font-logo">black&white</span>
      </motion.div>
      {/* Logo */}
      <motion.div variants={item}>
        <Logo>bwb</Logo>
      </motion.div>
      {/* social icons */}
      <motion.div variants={item} className="flex gap-x-4">
        <SocialIcon link="https://www.facebook.com/suansen">
          <BsFacebook className="w-8 h-8" />
        </SocialIcon>
        <SocialIcon link="https://www.linkedin.com/in/suansen/">
          <FaLinkedinIn className="w-8 h-8" />
        </SocialIcon>
        <SocialIcon link="https://github.com/suansen">
          <AiFillGithub className="w-8 h-8" />
        </SocialIcon>
      </motion.div>
    </motion.div>
  )
}
