import Link from "next/link"
import React from "react"

type Props = { children: React.ReactNode }

export default function Logo({ children }: Props) {
  return (
    <Link href="/" className="font-logo text-logo hover:animate-pulse">
      {children}
    </Link>
  )
}
