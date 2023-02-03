export interface Post {
  author: string
  body: string
  dateCreated: string
  title: string
  __v: number
  _id: string
}

export interface PostFormState {
  title: string
  body: string
  dateCreated: string
  author: string
}

export interface BlogData {
  success: boolean
  posts: Post[]
}
