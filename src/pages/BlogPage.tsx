import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Post } from '../components/Post'
import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'

export interface PostsTypes {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function BlogPage() {
  const [posts, setPosts] = useState<PostsTypes[]>([])

  const getPosts = useCallback(
    async (query: string = '') => {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:lucadboer/github-blog`,
      )
      const data = await response.data
      setPosts(data.items)
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <Profile />
        <SearchForm />

        <main className="max-w-[54rem] w-full mx-auto mt-12 pb-56 grid grid-cols-2 gap-8">
          {posts.map((post) => {
            return <Post key={post.number} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}
