import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Contributors = {
  login: string
  avatar_url: string
  html_url: string
}

const GitHubContributors = () => {
  const t = useTranslations('collaborate')
  const [contributors, setContributors] = useState<Contributors[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios.get<Contributors[]>('/api/githubContributors')
      setContributors(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="h-60">
        <Loader />
      </div>
    )
  }

  return (
    <div className="mb-40">
      <h1 className="text-3xl font-semibold mb-4 text-primary-950">
        {t('gitHubCollaborators')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {contributors.map((contributor, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={contributor.html_url}
            className="border flex md:justify-between items-center p-2 ring-[0.9px] ring-primary-400 rounded-lg"
          >
            <div className="flex justify-between w-full items-center gap-1 space-x-4">
              <Image
                width={40}
                height={40}
                src={contributor.avatar_url}
                className="rounded-full"
                alt={'avatar of ' + contributor.login}
              />
              <span className="text-sm md:text-lg text-primary-950 font-medium">
                {contributor.login}
              </span>
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="#2c3e50"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current text-primary-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default GitHubContributors
