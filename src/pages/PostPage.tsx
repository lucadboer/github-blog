import axios from 'axios'
import { useCallback } from 'react'
import { PostComplete } from '../components/PostComplete'

export function PostPage() {
  return (
    <div className="w-full">
      <PostComplete />
    </div>
  )
}
