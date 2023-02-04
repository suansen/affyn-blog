// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  title: string
  body: string
  author: string
  dateCreated: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const API_SECRET_KEY = process.env.API_SECRET_KEY
  const postBody = req.body

  const date = new Date().toISOString()
  req.body.dateCreated = date

  const method = "POST"
  const url =
    "https://44zx10bwsj.execute-api.us-west-1.amazonaws.com/dev/api/v1/blog"

  const options = {
    method: method,
    headers: {
      "content-type": "application/json",
      "x-api-key": API_SECRET_KEY
    },
    body: JSON.stringify(postBody)
  }

  // res.status(200).json("test")

  try {
    // fetch request
    const response = await fetch(url, options)
    const data = await response.json()

    // return res.end(JSON.stringify(data))
    res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json(error.message)
    // return res.end(JSON.stringify({ err: error.message }))
  }

  // return res.end(JSON.stringify(data))

  // res.status(200).json({ name: "John Doe" })
}

// Nostrud nulla ullamco Lorem ullamco id magna incididunt consectetur. Nisi Lorem magna minim commodo. Ullamco ut consequat veniam ex tempor magna eiusmod. Proident reprehenderit duis do commodo adipisicing irure officia eu.
