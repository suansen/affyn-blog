import React from "react"
import { motion } from "framer-motion"
import { GetServerSideProps } from "next"
import { BlogData } from "@/typings"
import PostCard from "@/components/Card/PostCard"
import { CrossIcon } from "@/icons/CrossIcon"

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

          {!data?.posts && (
            <div className="text-h2-m md:text-h2 w-full flex flex-col gap-y-8 justify-center items-center min-h-[480px] animate-pulse">
              {" "}
              <div className="bg-tw-text text-tw-background w-32 h-32 rounded-full">
                <CrossIcon />
              </div>
              No Posts Found.
            </div>
          )}
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
        "X-Api-Key": process.env.X_API_KEY
      }
    }
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data }
  }
}
