import { Link } from 'react-router-dom'
import { PostsTypes } from '../pages/BlogPage'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
  post: PostsTypes
}

export function Post({ post }: PostProps) {
  const postParams = `/post/${post.number}`
  return (
    <Link
      to={postParams}
      className="max-h-[16.25rem] w-full overflow-hidden text-ellipsis bg-basePost rounded-md p-8 border-2 border-basePost cursor-pointer transition-all duration-300 hover:border-baseSpan"
    >
      <header className="flex items-center gap-4">
        <h3 className="text-baseTitle text-xl flex-1 font-bold">
          {post.title}
        </h3>
        <span className="text-baseSpan text-sm first-letter:uppercase">
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>
      <main className="mt-5">
        <p className="text-baseText">{post.body}</p>
      </main>
    </Link>
  )
}
