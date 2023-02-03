import React from "react"
type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HamburgerButton({ isOpen, setIsOpen }: Props) {
  const genericHamburgerLine = `h-[4px] w-8 my-1 transition ease transform duration-300  ${
    isOpen ? "bg-tw-text" : "bg-tw-text "
  }`

  return (
    <button
      className={`relative flex flex-col h-12 w-12 rounded justify-center items-center group z-50`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-2" : "group-hover:-translate-y-1"
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-4" : "group-hover:translate-y-1"
        }`}
      />
    </button>
  )
}
