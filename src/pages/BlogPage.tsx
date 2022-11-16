import axios from 'axios'

import { GithubLogo, Link, Users } from 'phosphor-react'

import { useEffect, useState } from 'react'

interface UserTypes {
  name: string
  link: string
  description: string
  user: string
  followers: number
}

export function BlogPage() {
  const [user, setUser] = useState({} as UserTypes)

  useEffect(() => {
    getDataGithub()
  }, [])

  async function getDataGithub() {
    const response = await axios.get('https://api.github.com/users/lucadboer')
    const data = response.data

    user.name = data.name
    user.description = data.bio
    user.followers = data.followers
    user.user = data.login
  }

  return (
    <div className="w-screen absolute">
      <header className="max-w-[54rem] w-full mx-auto mt-[-5rem] flex items-center gap-8 bg-baseProfile py-8 pl-10 pr-8 rounded-lg">
        <img
          className="w-36 rounded-lg "
          src="https://github.com/lucadboer.png"
          alt="imagem de perfil do github"
        />
        <div>
          <strong className="text-baseTitle flex justify-between items-center text-2xl">
            {user.name}
            <a
              className="text-xs text-blue h-[31px]"
              href="https://github.com/lucadboer"
            >
              <span className="flex items-center gap-1">
                GITHUB
                <Link size={18} />
              </span>
            </a>
          </strong>
          <p className="text-baseText mt-2">{user.description}</p>
          <footer className="mt-6 flex items-center gap-6 text-baseSubtitle">
            <span className="flex items-center gap-1">
              <GithubLogo size={18} />
              {user.user}
            </span>
            <span className="flex items-center gap-1">
              <Users size={18} />
              {user.followers} seguidores
            </span>
          </footer>
        </div>
      </header>
    </div>
  )
}
