import axios from 'axios'
import { useEffect, useState } from 'react'
import { Loader } from '../Loader/Loader'

type Contributors = {
  login: string
  avatar_url: string
  html_url: string
}

const GitHubContributors = () => {
  const [contributors, setContributors] = useState<Contributors[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios.get<Contributors[]>('/api/githubContributors')
      setContributors(data)
      console.log(data)
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
        GitHub Collaborators
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {contributors.map((contributor, index) => (
          <div key={index} className='border p-2 rounded-lg ring-1 ring-primary-400'>
            <a
              href={contributor.html_url}
              target='_blank'
              rel='noreferrer'
              className='flex items-center space-x-4'
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default GitHubContributors
