import axios from 'axios'
import { useCallback } from 'react'
import { Post } from '../components/Post'
import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'

export function BlogPage() {
  const getPosts = useCallback(async (query: string = '') => {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${query}%20repo:lucadboer/github-blog`,
    )
    const data = await response.data
    console.log(data)
  }, [])

  getPosts()
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <Profile />
        <SearchForm />

        <main className="max-w-[54rem] w-full mx-auto mt-12 pb-56 grid grid-cols-2 gap-8">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
