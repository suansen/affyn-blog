import { Post } from "@/typings"
import React, { useState } from "react"
import { motion } from "framer-motion"

type Props = { post: Post }

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 1.5 } }
}

export default function PostCard({ post }: Props) {
  const [isSelected, setIsSelected] = useState(false)

  const letter = post.author.charAt(0)
  const date = new Date(post.dateCreated).toDateString()

  return (
    <>
      {/* card */}
      <motion.div
        variants={item}
        onClick={() => setIsSelected(!isSelected!)}
        className={` bg-tw-text hover:scale-105 border border-tw-text/40 hover:bg-tw-background p-8 text-tw-background hover:text-tw-text flex flex-col justify-between gap-y-4 group cursor-pointer transition-all duration-300 ease-out ${
          isSelected ? "min-h-[24rem] w-96" : "w-80 h-96"
        }`}
      >
        <div className={` text-card-header line-clamp-2 leading-none h-16`}>
          {post.title}
        </div>
        <div className="flex justify-between items-center group">
          <div className="w-10 h-10 bg-tw-background rounded-full text-tw-text group-hover:text-tw-background group-hover:bg-tw-text flex justify-center items-center font-bold font-logo transition-all duration-500 ease-out uppercase">
            {letter}
          </div>
          <div className="grow relative h-full">
            <div className="absolute top-2 right-0 group-hover:opacity-0 transition-all duration-500 ease-out">
              {date}
            </div>
            <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none group-hover:pointer-events-auto overflow-hidden line-clamp-1">
              {post.author}
            </div>
          </div>
        </div>
        <div
          className={`grow overflow-hidden  opacity-70 mb-9 ${
            isSelected ? "" : "line-clamp-6"
          }`}
        >
          {post.body}
        </div>
      </motion.div>
      {/* modal */}
    </>
  )
}
