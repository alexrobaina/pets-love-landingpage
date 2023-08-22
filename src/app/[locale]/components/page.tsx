import { IconGithub } from '@/assets/icons'
import Image from 'next/image'
import { GrGithub } from 'react-icons/gr'

export default function Components () {
  return (
    <div className='h-screen mt-10'>
      <h1 className='text-primary-950 text-4xl font-semibold'>Cards</h1>
      <div className='flex gap-2 mt-10'>
        <div className='p-6 max-w-sm mx-auto w-[auto] h-[90px] bg-white rounded-xl shadow-lg flex items-center space-x-4'>
          <div className='shrink-0'>
            <Image alt='' src={IconGithub} width={45} />
          </div>
          <div>
            <div className='text-xl font-medium text-black'>ChitChat</div>
            <p className='text-slate-500'>You have a new message!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
