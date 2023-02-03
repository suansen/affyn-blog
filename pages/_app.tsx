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
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
