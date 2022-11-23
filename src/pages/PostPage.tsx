import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'

import axios from 'axios'

import { Spinner } from '../components/Spinner'
import { PostComplete } from '../components/PostComplete'
import { PostsTypes } from './BlogPage'

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
    <div className="w-full flex justify-center ic">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PostComplete postData={completedPost as any} />
        </>
      )}
    </div>
  )
}
