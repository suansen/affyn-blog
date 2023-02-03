import Link from "next/link"
import React from "react"

type Props = { children: React.ReactNode; link: string; path: string }

export default function NavItem({ children, link, path }: Props) {
  return (
    <Link
      href={link}
      className={`relative group text-nav-item-m md:text-nav-item ${
        link === path ? "" : "hover:text-tw-text/70"
      }`}
    >
      {children}
      <div
        className={`absolute bottom-0 md:bottom-2 w-full border-b-4 md:border-b-8 origin-left transition-all duration-300 ease-out group-hover:scale-x-100  ${
          link === path ? " border-tw-text" : "scale-x-0 border-tw-text/70"
        }`}
      />
    </Link>
  )
}
