import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Footer = () => {
  const t = useTranslations('footer')
  return (
    <footer id='contact-section' className='bottom-0 w-full  p-4  sm:p-6 bg-[#ACE3D3]'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-950'>
              {`Pet's love`}
            </span>
          </div>

          <ul className=' text-primary-950 flex flex-col lg:flex-row gap-1 sm:gap-8'>
            <li>
              <Link href='/terms' className='hover:underline'>
                {t('terms')}
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-full border-t border-primary-400 mt-5 mb-5' />
        <div className='sm:flex lg:justify-center item-center sm:items-center sm:justify-between'>
          <section className='flex justify-center mt-4 space-x-6 sm:justify-center sm:mt-0'>
            <a
              target='_blank'
              href='https://www.instagram.com/pets.love.app/'
              className='  hover:text-cyan-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#2c3e50'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
                <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
                <path d='M16.5 7.5l0 .01' />
              </svg>
            </a>
            <a
              target='_blank'
              href='https://github.com/alexrobaina/frontend_petsLove'
              className='hover:text-cyan-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#2c3e50'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
              </svg>
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/alexrobaina/'
              className='hover:text-cyan-400 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#2c3e50'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
                <path d='M8 11l0 5' />
                <path d='M8 8l0 .01' />
                <path d='M12 16l0 -5' />
                <path d='M16 16v-3a2 2 0 0 0 -4 0' />
              </svg>
            </a>
            {/* <a href='#' className='   hover:text-cyan-400 '>
              <Image src={IconDiscord} alt='discord' />
            </a> */}
            <a
              target='_blank'
              href='https://t.me/waayex'
              className='hover:text-cyan-400 '
            >
              <svg
                width='32'
                height='32'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#2c3e50'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
              </svg>
            </a>
            <a
              target='_blank'
              href='https://wa.me/541138997032'
              className='hover:text-cyan-400'
            >
              <svg
                width='32'
                height='32'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#2c3e50'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
                <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
