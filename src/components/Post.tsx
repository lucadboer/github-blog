export function Post() {
  return (
    <article className="bg-basePost rounded-md p-8">
      <header className="flex items-center gap-4">
        <h3 className="text-baseTitle text-xl flex-1 font-bold">
          JavaScript data types and data structures
        </h3>
        <span className="text-baseSpan text-sm">Há 1 dia</span>
      </header>
      <main className="mt-5">
        <p className="text-baseText text-justify">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in...
        </p>
      </main>
    </article>
  )
}
