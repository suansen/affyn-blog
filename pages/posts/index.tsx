import React from "react"
import { motion } from "framer-motion"
import { GetServerSideProps } from "next"
import { BlogData } from "@/typings"
import PostCard from "@/components/Card/PostCard"

type Props = { data: BlogData }

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function PostsPage({ data }: Props) {
  console.log("🚀 ~ file: index.tsx:20 ~ PostsPage ~ data", data)
  return (
    <>
      <div className="py-32 px-4 md:px-8 2xl:px-0 cursor-default flex flex-col items-center justify-center min-h-screen">
        <motion.h1 className=" text-h1-m md:text-h1 leading-tight font-semibold">
          View All Posts
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center py-16 gap-16"
        >
          {data?.posts?.map((post) => (
            <PostCard key={post?._id} post={post} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://44zx10bwsj.execute-api.us-west-1.amazonaws.com/dev/api/v1/blog`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.X_API_KEY
      }
    }
  )
  const data = await res.json()
  console.log(
    "🚀 ~ file: index.tsx:54 ~ constgetServerSideProps:GetServerSideProps= ~ data",
    data
  )

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data }
  }
}
