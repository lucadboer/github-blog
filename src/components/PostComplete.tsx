import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

import {
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Link,
} from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { PostsTypes } from '../pages/BlogPage'

interface PostCompleteProps {
  postData: PostsTypes
}

export function PostComplete({ postData }: PostCompleteProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const markdown = postData.body

  // const body = ReactDom.render(
  //   <ReactMarkdown />,
  //   document.body,
  // )

  return (
    <div>
      <header className="max-w-[54rem] w-full mx-auto mt-[-5rem] flex items-center gap-8 bg-baseProfile relative py-8 pl-10 pr-8 rounded-lg">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <a
              className="text-xs text-blue flex items-center gap-1 font-bold cursor-pointer transition-all duration-300 hover:underline underline-offset-4"
              onClick={goBack}
            >
              <CaretLeft size={18} />
              VOLTAR
            </a>
            <a
              className="text-xs text-blue flex items-center gap-1 font-bold"
              href={postData.html_url}
            >
              <Link size={18} />
              Ver no GitHub
            </a>
          </div>
          <strong className="mt-5 text-baseTitle flex justify-between items-center text-2xl">
            {postData.title}
          </strong>
          <footer className="mt-6 flex items-center gap-6 text-baseSpan text-md">
            <span className="flex items-center gap-1">
              <GithubLogo size={18} />
              lucadboer
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={18} />
              {postData.created_at}
            </span>
            <span className="flex items-center gap-1">
              <ChatCircle weight="fill" size={18} />
              {postData.comments} Comentários
            </span>
          </footer>
        </div>
      </header>

      <main className="max-w-[54rem] w-full mx-auto py-10 px-8">
        <p className="text-baseText text-justify flex flex-col gap-4">
          <ReactMarkdown children={postData.body} />
        </p>
      </main>
    </div>
  )
}
