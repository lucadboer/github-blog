import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPosts } from '../components/Loadings/LoadingPosts'
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
  const [isLoading, setIsLoading] = useState(Boolean)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `https://api.github.com/search/issues?q=${query}%20repo:lucadboer/github-blog`,
        )
        const data = await response.data
        setPosts(data.items)
      } finally {
        setIsLoading(false)
      }
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
        <SearchForm postsLenght={posts.length} getPosts={getPosts} />

        <main className="max-w-[54rem] w-full mx-auto mt-12 pb-12 grid grid-cols-2 gap-8">
          {isLoading ? (
            <>
              <LoadingPosts />
              <LoadingPosts />
              <LoadingPosts />
              <LoadingPosts />
            </>
          ) : (
            <>
              {posts.map((post) => {
                return <Post key={post.number} post={post} />
              })}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
