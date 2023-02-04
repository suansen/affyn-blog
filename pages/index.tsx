import FeaturedSection from "@/components/Home/LatestPostsSection"
import HeroSection from "@/components/Home/HeroSection"
import NewPostsSection from "@/components/Home/NewPostsSection"
import { BlogData } from "@/typings"
import { GetServerSideProps } from "next"
import Head from "next/head"

type Props = { data: BlogData }

export default function Home({ data }: Props) {
  const posts = data?.posts?.slice(-3)

  return (
    <>
      <Head>
        <title>Black & White Blog</title>
        <meta
          name="description"
          content="Black & White Blog developed by Suan Sen for Affyn's assignment"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        {/* Hero */}
        <HeroSection />
        {/* New Posts */}
        <NewPostsSection />
        {/* Latest Blog Posts */}
        <FeaturedSection posts={posts} />
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
      props: { data: { notFound: true } }
    }
  }

  return {
    props: { data }
  }
}
