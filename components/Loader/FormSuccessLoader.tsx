import { CheckIcon } from "@/icons/CheckIcon"
import { CrossIcon } from "@/icons/CrossIcon"
import { AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import FormSuccessLoaderComponent from "./FormSuccessLoaderComponent"

type Props = {
  isSuccessful: string
  setIsSuccessful: React.Dispatch<React.SetStateAction<string>>
}

export default function FormSuccessLoader({
  isSuccessful,
  setIsSuccessful
}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => isSuccessful && setIsSuccessful(""), 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [isSuccessful, setIsSuccessful])

  return (
    <>
      <AnimatePresence>
        {isSuccessful === "Y" && (
          <FormSuccessLoaderComponent text="Post successfully submitted">
            <CheckIcon />
          </FormSuccessLoaderComponent>
        )}
        {isSuccessful === "N" && (
          <FormSuccessLoaderComponent text="Post failed to submit">
            <CrossIcon />
          </FormSuccessLoaderComponent>
        )}
      </AnimatePresence>
    </>
  )
}
