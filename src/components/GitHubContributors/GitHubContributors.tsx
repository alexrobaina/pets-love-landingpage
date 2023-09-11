import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { useTranslations } from 'next-intl'

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
      <div className='h-60'>
        <Loader />
      </div>
    )
  }

  return (
    <div className='mb-40'>
      <h1 className='text-3xl font-semibold mb-4 text-primary-950'>
        {t('gitHubCollaborators')}
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className='border flex justify-between items-center p-2 ring-[0.9px] ring-primary-400 rounded-lg'
          >
            <a
              href={contributor.html_url}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-1 space-x-4'
            >
              <img
                alt={'avatar of ' + contributor.login}
                src={contributor.avatar_url}
                className='w-10 h-10 rounded-full'
              />
              <span className='text-lg text-primary-950 font-medium'>
                {contributor.login}
              </span>
            </a>
            <svg
              className='stroke-current text-primary-400'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#2c3e50'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
              <path d='M11 13l9 -9' />
              <path d='M15 4h5v5' />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GitHubContributors
