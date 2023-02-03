import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-w-screen min-h-screen bg-tw-background scroll-smooth overflow-hidden text-tw-text flex flex-col justify-between items-center">
      <header className="">
        <Header />
      </header>
      <main className=" grow flex w-full max-w-7xl">{children}</main>
      <footer className="w-full min-h-[8rem] bg-tw-text text-tw-background flex justify-center items-center">
        <Footer />
      </footer>
    </div>
  )
}
