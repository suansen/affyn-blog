import Link from "next/link"
import React from "react"

type Props = { link: string; children: React.ReactNode }

export default function Button({ link, children }: Props) {
  return (
    <Link
      href={link}
      className="w-48 h-16 border border-tw-text text-p-m md:text-p flex justify-center items-center hover:text-tw-background hover:bg-tw-text transition-all duration-500 ease-out"
    >
      {children}
    </Link>
  )
}
