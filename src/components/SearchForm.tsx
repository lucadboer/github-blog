import { useState } from 'react'
// import { useForm } from 'react-hook-form'

export function SearchForm() {
  const [query, setQuery] = useState('')

  // const { register, handleSubmit } = useForm()

  function handleSearchPost(event: any) {
    setQuery(event.target.value)
    console.log(query)
  }

  return (
    <div className="max-w-[54rem] w-full mx-auto mt-16 flex flex-col justify-center gap-3">
      <div className="flex justify-between items-center ">
        <strong className="text-baseSubtitle text-lg">Publicações</strong>
        <span className="text-baseSpan">6 publicações</span>
      </div>
      <form onChange={handleSearchPost}>
        <input
          className="w-full py-3 px-4 text-baseText bg-baseInput border border-baseBorder rounded-md placeholder:text-baseLabel focus-within:outline-none shadow-sm shadow-blue"
          placeholder="Buscar Conteúdo"
          value={query}
          required
        />
      </form>
    </div>
  )
}
