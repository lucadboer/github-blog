import { Profile } from '../components/Profile'
import { SearchForm } from '../components/SearchForm'

export function BlogPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <Profile />
        <SearchForm />

        <main className="max-w-[54rem] w-full mx-auto mt-12 pb-56 grid grid-cols-2 gap-8">
          <article className="bg-basePost rounded-md p-8">
            <header className="flex items-center gap-4">
              <h3 className="text-baseTitle text-xl flex-1 font-bold">
                JavaScript data types and data structures
              </h3>
              <span className="text-baseSpan text-sm">Há 1 dia</span>
            </header>
            <main className="mt-5">
              <p className="text-baseText text-justify">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in...
              </p>
            </main>
          </article>

          <article className="bg-basePost rounded-md p-8">
            <header className="flex items-center gap-4">
              <h3 className="text-baseTitle text-xl font-bold flex-1">
                JavaScript data types and data structures
              </h3>
              <span className="text-baseSpan text-sm">Há 1 dia</span>
            </header>
            <main className="mt-5">
              <p className="text-baseText">
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in...
              </p>
            </main>
          </article>
        </main>
      </div>
    </div>
  )
}
