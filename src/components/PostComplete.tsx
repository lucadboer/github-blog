import { useNavigate } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { PostsTypes } from '../pages/BlogPage'
import { dateFormatter } from '../utils/formatter'

import '../styles/postComplete.css'

import {
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Link,
} from 'phosphor-react'
interface PostCompleteProps {
  postData: PostsTypes
}

export function PostComplete({ postData }: PostCompleteProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <div className="animate__animated animate__fadeIn">
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
              {dateFormatter(postData.created_at)}
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
          <ReactMarkdown
            // eslint-disable-next-line react/no-children-prop
            children={postData.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
            remarkPlugins={[remarkGfm]}
          />
        </p>
      </main>
    </div>
  )
}
