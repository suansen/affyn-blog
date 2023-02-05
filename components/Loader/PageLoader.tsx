import React from "react"

type Props = { loading: boolean }

export default function PageLoader({ loading }: Props) {
  return (
    <>
      {loading && (
        <div className="bg-tw-background fixed top-0 left-0 h-screen w-screen text-h2 flex justify-center items-center z-40">
          <div className="animate-pulse">Loading ...</div>
        </div>
      )}
    </>
  )
}
