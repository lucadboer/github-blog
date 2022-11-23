import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  postsLenght: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchForm({ getPosts, postsLenght }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPost(data: SearchFormInputs) {
    if (data.query) {
      await getPosts(data.query)
    } else {
      await getPosts()
    }
  }

  return (
    <div className="max-w-[54rem] w-full mx-auto mt-16 flex flex-col justify-center gap-3 animate__animated animate__fadeIn">
      <div className="flex justify-between items-center ">
        <strong className="text-baseSubtitle text-lg">Publicações</strong>
        <span className="text-baseSpan"> {postsLenght} publicações</span>
      </div>
      <form onSubmit={handleSubmit(handleSearchPost)}>
        <input
          className="w-full py-3 px-4 text-baseText bg-baseInput border border-baseBorder rounded-md placeholder:text-baseLabel focus-within:outline-none shadow-sm shadow-blue"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
      </form>
    </div>
  )
}
