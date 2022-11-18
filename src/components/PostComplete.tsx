import {
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Link,
} from 'phosphor-react'

export function PostComplete() {
  return (
    <div className="w-full">
      <header className="max-w-[54rem] w-full mx-auto mt-[-5rem] flex items-center gap-8 bg-baseProfile py-8 pl-10 pr-8 rounded-lg">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <a className="text-xs text-blue" href="/">
              <span className="flex items-center gap-1 font-bold">
                <CaretLeft size={18} />
                VOLTAR
              </span>
            </a>
            <a className="text-xs text-blue" href="/">
              <span className="flex items-center gap-1 font-bold">
                <Link size={18} />
                Ver no GitHub
              </span>
            </a>
          </div>
          <strong className="mt-5 text-baseTitle flex justify-between items-center text-2xl">
            JavaScript data types and data structures
          </strong>
          <footer className="mt-6 flex items-center gap-6 text-baseSpan text-md">
            <span className="flex items-center gap-1">
              <GithubLogo size={18} />
              login
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={18} />
              Há um dia
            </span>
            <span className="flex items-center gap-1">
              <ChatCircle weight="fill" size={18} />5 Comentários
            </span>
          </footer>
        </div>
      </header>

      <main className="max-w-[54rem] w-full mx-auto py-10 px-8">
        <p className="text-baseText text-justify">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </main>
    </div>
  )
}
