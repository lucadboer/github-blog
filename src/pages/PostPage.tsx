import { PostComplete } from '../components/PostComplete'
import { useParams } from 'react-router-dom'

export function PostPage() {
  return (
    <div className="w-full">
      <PostComplete />
    </div>
  )
}
