import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import HamburgerButton from "./HamburgerButton"
import Sidebar from "./Sidebar"
import { motion } from "framer-motion"
import Logo from "./Logo"

export default function Header() {
  const path = useRouter().asPath
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="px-4 md:px-8 2xl:px-0 fixed flex w-full max-w-7xl left-1/2 -translate-x-1/2 justify-between items-center h-20 z-50">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Logo>bwb</Logo>
        </motion.div>

        {/* Nav */}
        <nav className="">
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} path={path} />
        </nav>
      </div>
    </>
  )
}
