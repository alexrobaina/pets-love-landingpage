'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { Logo } from '@/assets/illustrations'
import { navigation } from '../../app/constants/navigation'

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale()
  const router = useRouter()
  const [isOpenMenuLanguages, setOpenMenuLanguages] = useState(false)
  const [lng, setLng]: any = useState({
    lng: 'es',
    flag: '🇪🇸',
  })
  const [isOpen, setIsOpen] = useState(true)
  const t = useTranslations('navbar')
  const NAVIGATION = navigation(t)

  const handleChangeLanguages = (lng: string, flag: string) => {
    router.push(`/${lng}`)
    setLng({ lng, flag })
    localStorage.setItem('lng', lng)

    setOpenMenuLanguages(!isOpenMenuLanguages)
  }

  const handleMenu = () => {
    setIsOpen(!isOpen)
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
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className="bg-primary-100 fixed w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div>
                <a href="./">
                  <Image width={30} src={Logo} alt="Pets love Logo" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="flex">
                  <a
                    href={NAVIGATION.github.href}
                    className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                    aria-current="page"
                  >
                    {NAVIGATION.github.routeName}
                  </a>

                  <div
                    onClick={(e) => scrollToSection(e, '#collaborators')}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                  >
                    {NAVIGATION.collaborators.routeName}
                  </div>
                  <div
                    onClick={(e) => scrollToSection(e, '#prototype')}
                    className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                  >
                    {NAVIGATION.prototype.routeName}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <a
                  href={NAVIGATION.login.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300"
                  aria-current="page"
                >
                  {NAVIGATION.login.routeName}
                </a>
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpenMenuLanguages(!isOpenMenuLanguages)}
                      className="relative flex w-8 h-8 items-center justify-center rounded-full bg-primary-200 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
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
              </div>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                onClick={handleMenu}
                className="relative right-12 top-0 inline-flex items-center justify-center rounded-md bg-primary-300 p-2 hover:bg-primary-100 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute "></span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? 'md:hidden' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href={NAVIGATION.github.href}
              className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 shadow-sm hover:bg-white/20"
              aria-current="page"
            >
              {NAVIGATION.github.routeName}
            </a>
            <div
              onClick={(e) => scrollToSection(e, '#collaborators')}
              className=" text-primary-950 hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              {NAVIGATION.collaborators.routeName}
            </div>
            <div
              onClick={(e) => scrollToSection(e, '#prototype')}
              className=" text-primary-950 hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              {NAVIGATION.prototype.routeName}
            </div>
            <a
              href={NAVIGATION.login.href}
              className=" text-primary-950 hover:bg-primary-300 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium"
            >
              {NAVIGATION.login.routeName}
            </a>
          </div>
          <section className="border-t border-primary-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium  text-primary-950 hover:bg-primary-300">
                  Pets love
                </div>
                <div className="text-sm font-medium  text-primary-950 hover:bg-primary-300">
                  PetsLove@petslove.com
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full border-2 border-transparent bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
              ></button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium  text-primary-950 hover:bg-primary-300 hover:bg-opacity-75"
              >
                Your Profile
              </a>

              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium  text-primary-950 hover:bg-hover:bg-primary-300 hover:bg-opacity-75"
              >
                Sign out
              </a>
            </div>
          </section>
        </div>
      </nav>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}
