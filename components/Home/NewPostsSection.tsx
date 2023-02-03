import { PostFormState } from "@/typings"
import React, { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import FormSuccessLoader from "../Loader/FormSuccessLoader"
import FormLoadingLoader from "../Loader/FormLoadingLoader"

const style = {
  inputForm:
    "appearance-none rounded-none relative block w-full px-3 py-2  border-b bg-tw-background border-gray-300/30 placeholder-tw-text/20 focus:outline-none focus:ring-tw-text focus:border-tw-text focus:z-10"
}

export default function NewPostsSection() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState("")
  const [formData, setFormData] = useState<PostFormState>({
    title: "",
    body: "",
    dateCreated: "",
    author: ""
  })

  // handle submit post on form submit
  async function handleSubmitPost(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    await axios
      .post("/api/handlePost", formData)
      .then((res) => {
        // {
        //   success: true
        // }
        if (res.data.success) {
          setFormData({
            title: "",
            body: "",
            dateCreated: "",
            author: ""
          })
          setIsSuccessful("Y")
          setIsLoading(false)
          router.replace(router.asPath, undefined, { scroll: false })
        } else {
          setIsSuccessful("N")
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log("error in request", err)
        setIsSuccessful("")
        setIsLoading(false)
        // {success: false, error: 'Mandatory fields not found'}
      })
  }

  // when form changes, update state
  function handleInputChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    id: string
  ) {
    if (id === "body") {
      setFormData((prev) => ({ ...prev, body: e.target.value }))
    } else if (id === "title") {
      setFormData((prev) => ({ ...prev, title: e.target.value }))
    } else if (id === "author") {
      setFormData((prev) => ({ ...prev, author: e.target.value }))
    }
  }

  return (
    <section
      id="new-posts-section"
      className="pt-16 bg-tw-background text-tw-text min-h-[800px] py-8 relative"
    >
      <FormSuccessLoader
        isSuccessful={isSuccessful}
        setIsSuccessful={setIsSuccessful}
      />
      <FormLoadingLoader isLoading={isLoading} />
      <div className="px-4 md:px-8 2xl:px-0 flex justify-center items-center flex-col">
        {/* title */}
        <motion.h2
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-featured-header-m md:text-featured-header border-y border-tw-text/30 w-full"
        >
          New Posts
        </motion.h2>
        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-2 overflow-hidden max-w-4xl w-full"
        >
          <form
            className="flex flex-col"
            onSubmit={handleSubmitPost}
            method="post"
          >
            <div className="flex items-center">
              {/* <label htmlFor="title" className="text-h2-m md:text-h2">
                Title
              </label> */}
              <input
                onChange={(e) => handleInputChange(e, "title")}
                className={`${style.inputForm} h-32 text-h2-m md:text-h2`}
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
                placeholder="Title of New Post"
                value={formData.title}
              />
            </div>
            <div className="flex items-center">
              {/* <label htmlFor="author" className="text-h2-m md:text-h2">
                Author
              </label> */}
              <input
                onChange={(e) => handleInputChange(e, "author")}
                className={`${style.inputForm} h-32 text-h2-m md:text-h2`}
                id="author"
                name="author"
                type="text"
                autoComplete="author"
                required
                placeholder="Author of New Post"
                value={formData.author}
              />
            </div>
            <div className="flex items-center">
              {/* <label htmlFor="author" className="text-h2-m md:text-h2">
                Body
              </label> */}
              <textarea
                onChange={(e) => handleInputChange(e, "body")}
                className={`${style.inputForm} h-64 mt-8 text-p-m md:text-p py-8 scrollbar-thin scrollbar-thumb-tw-text cursor-default`}
                id="body"
                name="body"
                required
                placeholder="Body of New Post"
                rows={4}
                cols={16}
                value={formData.body}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 my-8 font-bold text-tw-text border border-tw-text hover:bg-tw-text hover:text-tw-background transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
