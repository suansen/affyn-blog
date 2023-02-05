import Layout from "@/components/Layout/Layout"
import PageLoader from "@/components/Loader/PageLoader"
import "@/styles/globals.css"
import {
  Poppins,
  Montserrat_Alternates,
  Merriweather,
  Advent_Pro
} from "@next/font/google"
import type { AppProps } from "next/app"
import { Router } from "next/router"
import { useEffect, useState } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "700"]
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"]
})

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      console.log("start")
      setLoading(true)
    }
    const end = () => {
      console.log("finished")
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --advent-font: ${adventPro.style.fontFamily};
            --montserrat-alternates-font: ${montserratAlternates.style
              .fontFamily};
            --merriweather-font: ${merriweather.style.fontFamily};
          }
        `}
      </style>

      <Layout>
        <PageLoader loading={loading} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
