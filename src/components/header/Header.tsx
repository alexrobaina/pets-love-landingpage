'use client'
import Image from 'next/image'
import { Logo } from '@/assets/illustrations'
import { useState } from 'react'
import LanguageToggle from '../languageToggle/LanguageToggle'
import { motion, AnimatePresence } from 'framer-motion'

export const Header = ({ navigationLinks, appName }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const scrollToSection = (e: any, sectionId: string) => {
    e.preventDefault()

    const target: any = document.querySelector(sectionId)
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    }
    setIsNavOpen((prev) => !prev)
  }

  const navAnimation = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        y: { stiffness: 1000, velocity: -100 },
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

  return (
    <header>
      <nav className="bg-primary-100 w-full top-0 fixed border-gray-200 px-4 py-2.5 pl-35 pr-20">
        <AnimatePresence>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="space-y-2 absolute top-0 right-20 px-2 py-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-primary-700"></span>
              <span className="block h-0.5 w-8 bg-primary-700"></span>
              <span className="block h-0.5 w-8 bg-primary-700"></span>
            </div>
            <motion.div
              className={isNavOpen ? 'showMenuNav' : 'hidden'}
              initial="hidden"
              animate={isNavOpen ? 'visible' : 'hidden'}
              exit="hidden"
              variants={navAnimation}
            >
              <div
                className=" navbar absolute top-0 right-5 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="6" x2="6" y2="12" />
                  <line x1="6" y1="6" x2="12" y2="12" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between">
                <li>
                  <a
                    href={navigationLinks.github.href}
                    className="flex cursor-pointer py-4 pr-4 pl-3 rounded text-primary-950 hover:text-primary-400 border-b border-gray-400  lg:p-0"
                    aria-current="page"
                  >
                    {navigationLinks.github.routeName}
                  </a>
                </li>
                <li
                  onClick={(e) => scrollToSection(e, '#collaborators')}
                  className="flex cursor-pointer py-4 pr-4 pl-3 text-primary-950 border-b border-gray-400   hover:text-primary-400  lg:border-0 lg:p-0"
                >
                  {navigationLinks.collaborators.routeName}
                </li>
                <li
                  onClick={(e) => scrollToSection(e, '#prototype')}
                  className="flex cursor-pointer py-4 pr-4 pl-3 text-primary-950 lg:p-0 hover:text-primary-400 border-b border-gray-400 "
                >
                  {navigationLinks.prototype.routeName}
                </li>
                <a
                  href={navigationLinks.login.href}
                  className="flex cursor-pointer py-4 pr-4 pl-5 mb-4 text-primary-950 lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-primary-400 border-b border-gray-400 "
                >
                  {navigationLinks.login.routeName}
                </a>

                <LanguageToggle />
              </ul>
              <a href="./" className="flex items-center gap-4">
                <Image width={30} src={Logo} alt="Pets love Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-950">
                  {appName}
                </span>
              </a>

              <button
                onClick={(e) => scrollToSection(e, '#donate')}
                className="flex lg:order-2"
              >
                <div className="text-white bg-primary-400 hover:bg-primary-800 focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none focus:ring-primary-800">
                  {navigationLinks.donate.routeName}
                </div>
              </button>
            </motion.div>
          </section>
        </AnimatePresence>
        <style>{`
      .showMenuNav {
        background: #D6F1E9;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100vw;
        height:100vh;
        top:0;
        left: 0;
        align-items: center;
        position: absolute;
        padding-right:4rem;
      }
    `}</style>

        <section className="flex sm:gap-1 lg:justify-between items-center mx-auto max-w-screen-xl">
          <a href="./" className="w-10 flex items-center">
            <Image width={30} src={Logo} alt="Pets love Logo" />
            <span className="ml-5 self-center text-xl font-semibold whitespace-nowrap text-primary-950">
              {appName}
            </span>
          </a>
          <div className="flex gap-5">
            <div
              className="flex justify-between items-center w-full  lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="hidden lg:flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href={navigationLinks.github.href}
                    className="lg:flex cursor-pointer py-2 pr-4 pl-3 rounded text-primary-950 hover:text-primary-400  lg:p-0"
                    aria-current="page"
                  >
                    {navigationLinks.github.routeName}
                  </a>
                </li>
                <li
                  onClick={(e) => scrollToSection(e, '#collaborators')}
                  className="lg:flex cursor-pointer py-2 pr-4 pl-3 text-primary-950  hover:text-primary-400  lg:border-0 lg:p-0"
                >
                  {navigationLinks.collaborators.routeName}
                </li>
                <li
                  onClick={(e) => scrollToSection(e, '#prototype')}
                  className="lg:flex cursor-pointer py-2 pr-4 pl-3 text-primary-950 lg:p-0 hover:text-primary-400"
                >
                  {navigationLinks.prototype.routeName}
                </li>
                <a
                  href={navigationLinks.login.href}
                  className=" w-5 cursor-pointer py-2 pr-4 pl-3 text-primary-950 lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-primary-400"
                >
                  {navigationLinks.login.routeName}
                </a>
                <div className="pl-8">
                  <LanguageToggle />
                </div>
              </ul>
            </div>
            <button
              onClick={(e) => scrollToSection(e, '#donate')}
              className="hidden lg:flex lg:order-2"
            >
              <div className="text-white bg-primary-400 hover:bg-primary-800 focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none focus:ring-primary-800">
                {navigationLinks.donate.routeName}
              </div>
            </button>
          </div>
        </section>
      </nav>
    </header>
  )
}
