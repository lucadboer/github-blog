import { useEffect, useState } from 'react'

import { GithubLogo, Link, Users } from 'phosphor-react'
import axios from 'axios'

import { LoadingProfile } from './Loadings/LoadingProfile'

interface UserTypes {
  name: string
  bio: string
  login: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState({} as UserTypes)
  const [isLoading, setIsLoading] = useState(Boolean)

  useEffect(() => {
    getDataGithub()
  }, [])

  async function getDataGithub() {
    try {
      setIsLoading(true)
      const response = await axios.get('https://api.github.com/users/lucadboer')
      const data = response.data
      setUser(data)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <header className="max-w-[54rem] w-full mx-auto mt-[-5rem] flex items-center gap-8 bg-baseProfile py-8 pl-10 pr-8 rounded-lg max-md:p-2">
        {isLoading ? (
          <LoadingProfile />
        ) : (
          <>
            <img
              className="w-36 rounded-lg "
              src="https://github.com/lucadboer.png"
              alt="imagem de perfil do github"
            />
            <div className="w-full">
              <strong className="text-baseTitle flex justify-between items-center text-2xl">
                {user.name}
                <a
                  className="text-xs text-blue h-[31px]"
                  href="https://github.com/lucadboer"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-1">
                    GITHUB
                    <Link size={18} />
                  </span>
                </a>
              </strong>
              <p className="text-baseText mt-2">{user.bio}</p>
              <footer className="mt-6 flex items-center gap-6 text-baseSubtitle">
                <span className="flex items-center gap-1">
                  <GithubLogo weight="fill" size={18} />
                  {user.login}
                </span>
                <span className="flex items-center gap-1">
                  <Users weight="fill" size={18} />
                  {user.followers} seguidores
                </span>
              </footer>
            </div>
          </>
        )}
      </header>
    </div>
  )
}
