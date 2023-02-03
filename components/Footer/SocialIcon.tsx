import Link from "next/link"
import React from "react"

type Props = { children: React.ReactNode; link: string }

export default function SocialIcon({ children, link }: Props) {
  return (
    <Link
      href={link}
      className="text-tw-background rounded-full  border-4 border-tw-text hover:border-tw-background hover:text-tw-text hover:bg-tw-background transition-all duration-300 ease-out"
    >
      {children}
    </Link>
  )
}
