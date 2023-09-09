import React from 'react'
import { useTranslations } from 'next-intl'
import {
  IconInstagram,
  Iconwhatsapp,
  Icontelegram,
  IconGithub,
  IconDiscord,
  IconLinkedIn,
} from '@/assets/icons'
import Image from 'next/image'

const Footer = () => {
  const t = useTranslations('footer')
  return (
    <footer id='contact-section' className='p-4  sm:p-6 bg-[#ACE3D3]'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-950'>
              Pets love
            </span>
          </div>

          <ul className=' text-primary-950 flex flex-col lg:flex-row gap-1 sm:gap-8'>
            <li className='mb-2'>
              <a href='#' className='hover:underline'>
                {t('privacy')}
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                {t('terms')}
              </a>
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
              <Image src={IconInstagram} alt='instagram' />
            </a>
            <a
              target='_blank'
              href='https://github.com/alexrobaina/frontend_petsLove'
              className='hover:text-cyan-400'
            >
              <Image src={IconGithub} alt='github' />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/alexrobaina/'
              className='hover:text-cyan-400 '
            >
              <Image src={IconLinkedIn} alt='linkedin' />
            </a>
            {/* <a href='#' className='   hover:text-cyan-400 '>
              <Image src={IconDiscord} alt='discord' />
            </a> */}
            <a
              target='_blank'
              href='https://t.me/waayex'
              className='hover:text-cyan-400 '
            >
              <Image src={Icontelegram} alt='telegram' />
            </a>
            <a
              target='_blank'
              href='https://wa.me/541138997032'
              className='hover:text-cyan-400'
            >
              <Image src={Iconwhatsapp} alt='Iconwhatsapp' />
            </a>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
