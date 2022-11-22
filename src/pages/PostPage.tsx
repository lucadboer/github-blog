import { PostComplete } from '../components/PostComplete'
import { useParams } from 'react-router-dom'
import { PostsTypes } from './BlogPage'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

interface PostData {
  Post: PostsTypes
}

export function PostPage() {
  const [completedPost, setCompletedPost] = useState<PostData>({} as PostData)
  const [isLoading, setIsLoading] = useState(Boolean)
  const { issueNumber } = useParams()

  const getCompletePost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://api.github.com/repos/lucadboer/github-blog/issues/${issueNumber}`,
      )
      const data = await response.data
      setCompletedPost(data)
      console.log(data)
    } finally {
      setIsLoading(false)
    }
  }, [completedPost])

  useEffect(() => {
    getCompletePost()
  }, [])

  return (
    <div className="w-full">
      <PostComplete postData={completedPost} />
    </div>
  )
}
