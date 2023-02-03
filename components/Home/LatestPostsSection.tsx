import React from "react"
import { Post } from "@/typings"
import PostCard from "../Card/PostCard"
import { motion } from "framer-motion"
import Button from "../Buttons/Button"

type Props = { posts: Post[] }

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function LatestPostsSection({ posts }: Props) {
  return (
    <section className="px-4 md:px-8 2xl:px-0  py-8">
      {/* title */}
      <motion.h2
        initial={{ x: -25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="text-featured-header-m md:text-featured-header border-y border-tw-text/30"
      >
        Latest Posts
      </motion.h2>
      {/* Posts */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center py-16 gap-16"
      >
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: -25, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full flex justify-end"
      >
        <Button link="/posts">View All</Button>
      </motion.div>
    </section>
  )
}
