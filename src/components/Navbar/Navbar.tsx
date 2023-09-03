'use client'
import { useState } from 'react'
import { useRouter } from 'next-intl/client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Logo } from '@/assets/illustrations'
import { navigation } from '../../app/constants/navigation'
import Button from '../button/Button'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMenuLanguages, setOpenMenuLanguages] = useState(false)
  const [lng, setLng]: any = useState({
    lng: 'es',
    flag: '🇪🇸',
  })
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const t = useTranslations('navbar')
  const NAVIGATION = navigation(t)
  const HamburgerLine = `h-1 w-6 my-1 rounded-md bg-primary-600 transition ease transform duration-300`

  const handleChangeLanguages = (lng: string, flag: string) => {
    setLng({ lng, flag })

    setOpenMenuLanguages(!isOpenMenuLanguages)
    router.replace(lng)
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

  const navAnimation = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        y: { stiffness: 1000, velocity: -100 },
        delayChildren: 0.2,
        staggerChildren: 0.4,
        type: 'spring',
        opacity: 0,
      },
    },
    hidden: {
      y: -50,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        y: { stiffness: 1000, velocity: 100 },
      },
    },
  }

  const animatedItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <>
      <nav className="bg-primary-100 fixed w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-2">
          <div className="flex h-16 items-center justify-between gap-5 mr-10">
            <section className="flex items-center">
              <div>
                <a href="./">
                  <Image width={30} src={Logo} alt="Pets love Logo" />
                </a>
              </div>
              <div className="hidden md:block">
                <ul>
                  <a
                    target="_blank"
                    href={NAVIGATION.github.href}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                    aria-current="page"
                  >
                    {NAVIGATION.github.routeName}
                  </a>

                  <li
                    onClick={(e) => scrollToSection(e, '#collaborators')}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                  >
                    {NAVIGATION.collaborators.routeName}
                  </li>
                  <li
                    onClick={(e) => scrollToSection(e, '#prototype')}
                    className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                  >
                    {NAVIGATION.prototype.routeName}
                  </li>
                </ul>
              </div>
            </section>

            {/* language and donate buttons*/}

            <section className="md:block">
              <div className="flex items-center px-5 gap-2 lg:mr-0">
                <div className="-mt-10  md:flex">
                  <Button
                    type="primary"
                    text={NAVIGATION.donate.routeName}
                    onClick={(e) => scrollToSection(e, '#donate')}
                  />
                </div>
                <div className="relative md:ml-5">
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpenMenuLanguages(!isOpenMenuLanguages)}
                      className="relative flex w-8 h-8 items-center justify-center rounded-full bg-primary-200 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 hover:bg-primary-300"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <div>{lng.flag}</div>
                    </button>
                  </div>
                  <div
                    className={`${
                      !isOpenMenuLanguages && 'hidden'
                    } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <div
                      onClick={() => handleChangeLanguages('es', '🇪🇸')}
                      className={`${
                        lng.lng === 'es' && 'bg-primary-200'
                      } flex justify-between px-4 py-2 text-sm text-primary-900 hover:bg-primary-300`}
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      <p>Español</p>
                      <div>🇪🇸</div>
                    </div>
                    <div
                      onClick={() => handleChangeLanguages('en', '🇺🇸')}
                      className={`${
                        lng.lng === 'en' && 'bg-primary-200'
                      } flex justify-between px-4 py-2 text-sm text-primary-900 hover:bg-primary-300`}
                      role="menuitem"
                      id="user-menu-item-1"
                    >
                      <p>English</p>
                      <div>🇺🇸</div>
                    </div>
                  </div>
                </div>

                {/* hamburguer icon*/}

                <div className="flex md:hidden">
                  <button
                    className="flex flex-col h-10 w-10 border-2 border-primary-300 rounded-md justify-center items-center group hover:bg-primary-100 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    type="button"
                  >
                    <span className="absolute"></span>
                    <div
                      className={`${HamburgerLine} ${
                        isOpen
                          ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                          : 'opacity-50 group-hover:opacity-100'
                      }`}
                    />
                    <div
                      className={`${HamburgerLine} ${
                        isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                      }`}
                    />
                    <div
                      className={`${HamburgerLine} ${
                        isOpen
                          ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                          : 'opacity-50 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* hamburguer menu*/}
        <AnimatePresence>
          <motion.div
            className={isOpen ? 'showMenuNav' : 'hidden'}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            exit="hidden"
            variants={navAnimation}
            custom={{ delay: 0.1 }}
          >
            <motion.ul className={`${isOpen ? 'md:hidden' : 'hidden'}`} id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <motion.li
                  variants={animatedItem}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300 hover:bg-opacity-75"
                >
                  <a href={NAVIGATION.github.href} aria-current="page">
                    {NAVIGATION.github.routeName}
                  </a>
                </motion.li>
                <motion.li
                  variants={animatedItem}
                  onClick={(e) => scrollToSection(e, '#collaborators')}
                  className=" text-primary-950 hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
                >
                  {NAVIGATION.collaborators.routeName}
                </motion.li>
                <motion.li
                  variants={animatedItem}
                  onClick={(e) => scrollToSection(e, '#prototype')}
                  className=" text-primary-950 hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
                >
                  {NAVIGATION.prototype.routeName}
                </motion.li>
              </div>
              <div className="border-t border-primary-700 pb-3 pt-4"></div>
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </nav>
      <main>
        <div className="mx-auto max-w-7xl py-4 px-2 sm:px-4 lg:px-4">{children}</div>
      </main>
    </>
  )
}
