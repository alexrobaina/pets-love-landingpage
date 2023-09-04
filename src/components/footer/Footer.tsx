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
            <a href='./' className='flex items-center'>
              <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-950'>
                Pets love
              </span>
            </a>
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
            <a href='#' className='  hover:text-cyan-400'>
              <Image src={IconInstagram} alt='Iconwhatsapp' />
            </a>
            <a href='#' className='   hover:text-cyan-400'>
              <Image src={IconGithub} alt='Iconwhatsapp' />
            </a>
            <a href='#' className='  hover:text-cyan-400 '>
              <Image src={IconLinkedIn} alt='Iconwhatsapp' />
            </a>
            <a href='#' className='   hover:text-cyan-400 '>
              <Image src={IconDiscord} alt='Iconwhatsapp' />
            </a>
            <a href='#' className=' hover:text-cyan-400 '>
              <Image src={Icontelegram} alt='Iconwhatsapp' />
            </a>
            <a href='#' className='   hover:text-cyan-400 '>
              <Image src={Iconwhatsapp} alt='Iconwhatsapp' />
            </a>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
