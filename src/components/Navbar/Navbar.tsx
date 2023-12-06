'use client'
import { useState } from 'react'
import { useRouter } from 'next-intl/client'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { IconSpanishFlag, IconEnglishFlag } from '@/assets/icons'
import { Logo } from '@/assets/illustrations'
import { navigation } from '../../app/constants/navigation'
import Button from '../Button/Button'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../Footer/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ANIMATED_ITEM, NAV_ANIMATION } from './constants/animations'
import Hamburguer from './components/Hamburguer/Hamburguer'

const queryClient = new QueryClient()

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMenuLanguages, setOpenMenuLanguages] = useState(false)
  const locale = useLocale()
  const flag = locale === 'en' ? IconEnglishFlag : IconSpanishFlag
  const [lng, setLng]: any = useState({
    lng: locale,
    flag: flag,
  })
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const t = useTranslations('navbar')
  const NAVIGATION = navigation(t)

  const handleOpenMenu = (isOpen: boolean) => {
    setIsOpen(isOpen)
  }

  const handleChangeLanguages = (language: string, flag: any) => {
    setLng({ language, flag })
    setOpenMenuLanguages(!isOpenMenuLanguages)
    router.replace(language)
  }

  const scrollToSection = (e: any, sectionId: string) => {
    e.preventDefault()

    const target: any = document.querySelector(sectionId)
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <>
        <nav
          className={`${
            isOpen && 'h-full'
          } bg-primary-100 fixed w-full px-2 sm:px-4 md:px-8 z-50`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex h-16 items-center justify-between gap-5">
              <section className="flex items-center">
                <div>
                  <a href="./">
                    <Image width={30} src={Logo} alt="Pets love Logo" />
                  </a>
                </div>
                <div className="hidden md:block">
                  <ul className="flex ml-2">
                    <a
                      target="_blank"
                      href={NAVIGATION.github.href}
                      className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 cursor-pointer hover:bg-primary-300"
                      aria-current="page"
                    >
                      {NAVIGATION.github.routeName}
                    </a>

                    <li
                      onClick={(e) => scrollToSection(e, '#collaborators')}
                      className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 cursor-pointer hover:bg-primary-300"
                    >
                      {NAVIGATION.collaborators.routeName}
                    </li>
                    <li
                      onClick={(e) => scrollToSection(e, '#prototype')}
                      className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 cursor-pointer hover:bg-primary-300"
                    >
                      {NAVIGATION.prototype.routeName}
                    </li>
                  </ul>
                </div>
              </section>

              {/* language and donate buttons*/}

              <section className="md:block">
                <div className="flex items-center gap-5">
                  <div className="md:flex">
                    <Button
                      type="secondary"
                      text={NAVIGATION.donate.routeName}
                      onClick={(e) => scrollToSection(e, '#donate')}
                    />
                  </div>
                  <div className="relative ">
                    <div>
                      <button
                        type="button"
                        aria-haspopup="true"
                        id="user-menu-button"
                        aria-expanded="false"
                        onClick={() => setOpenMenuLanguages(!isOpenMenuLanguages)}
                        className="relative flex w-8 h-8 items-center justify-center rounded-full bg-primary-200 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 hover:bg-primary-300"
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>

                        <Image
                          className="w-5 h-5"
                          src={lng.flag}
                          alt="icon spanish flag"
                        />
                      </button>
                    </div>
                    <div
                      className={`${
                        !isOpenMenuLanguages && 'hidden'
                      } absolute right-0 z-10 mt-2 px-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                    >
                      <div
                        onClick={() => handleChangeLanguages('es', IconSpanishFlag)}
                        className={`${
                          lng.lng === 'es' && 'bg-primary-200'
                        } flex justify-between px-4 py-2 text-sm text-primary-900 hover:bg-primary-300`}
                        role="menuitem"
                        id="user-menu-item-0"
                      >
                        <p>Español</p>
                        <Image width={20} src={IconSpanishFlag} alt="icon spanish flag" />
                      </div>
                      <div
                        onClick={() => handleChangeLanguages('en', IconEnglishFlag)}
                        className={`${
                          lng.lng === 'en' && 'bg-primary-200'
                        } flex justify-between px-4 py-2 text-sm text-primary-900 hover:bg-primary-300`}
                        role="menuitem"
                        id="user-menu-item-1"
                      >
                        <p>English</p>
                        <Image width={20} src={IconEnglishFlag} alt="icon english flag" />
                      </div>
                    </div>
                  </div>
                  <Hamburguer open={isOpen} setOpen={() => handleOpenMenu(!isOpen)} />
                </div>
              </section>
            </div>
          </div>
          <AnimatePresence>
            <motion.div
              className={isOpen ? 'showMenuNav' : 'hidden'}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              exit="hidden"
              variants={NAV_ANIMATION}
              custom={{ delay: 0.1 }}
            >
              <motion.ul
                className={`${isOpen ? 'md:hidden' : 'hidden'}`}
                id="mobile-menu"
              >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <motion.li
                    variants={ANIMATED_ITEM}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 cursor-pointer hover:bg-primary-300 hover:bg-opacity-75"
                  >
                    <a href={NAVIGATION.github.href} aria-current="page">
                      {NAVIGATION.github.routeName}
                    </a>
                  </motion.li>
                  <motion.li
                    variants={ANIMATED_ITEM}
                    onClick={(e) => scrollToSection(e, '#collaborators')}
                    className=" text-primary-950 hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {NAVIGATION.collaborators.routeName}
                  </motion.li>
                  <motion.li
                    variants={ANIMATED_ITEM}
                    onClick={(e) => scrollToSection(e, '#prototype')}
                    className=" text-primary-950 cursor-pointer hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {NAVIGATION.prototype.routeName}
                  </motion.li>
                </div>
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </nav>
        <main>
          <QueryClientProvider client={queryClient}>
            <div className="mx-auto max-w-7xl py-4 px-2 sm:px-4 md:px-8">{children}</div>
          </QueryClientProvider>
        </main>
        <Footer />
      </>
    </>
  )
}
