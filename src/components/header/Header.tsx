'use client'
import Image from 'next/image'
import { Logo } from '@/assets/illustrations'
import LanguageToggle from '../languageToggle/LanguageToggle'

export const Header = ({ navigationLinks, appName }: any) => {
  const scrollToSection = (e: any, sectionId: string) => {
    e.preventDefault()

    const target: any = document.querySelector(sectionId)
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header>
      <nav className="bg-primary-100 w-full top-0 fixed border-gray-200 px-4 py-2.5 pl-35 pr-20">
        <div className="flex flex-wrap sm:gap-2 lg:justify-between items-center mx-auto max-w-screen-xl">
          <a href="./" className="flex items-center">
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
              <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href={navigationLinks.github.href}
                    className="hidden lg:flex cursor-pointer py-2 pr-4 pl-3 rounded text-primary-950 hover:text-primary-400  lg:p-0"
                    aria-current="page"
                  >
                    {navigationLinks.github.routeName}
                  </a>
                </li>
                <li
                  onClick={(e) => scrollToSection(e, '#collaborators')}
                  className="hidden lg:flex cursor-pointer py-2 pr-4 pl-3 text-primary-950  hover:text-primary-400  lg:border-0 lg:p-0"
                >
                  {navigationLinks.collaborators.routeName}
                </li>
                <li
                  onClick={(e) => scrollToSection(e, '#prototype')}
                  className="hidden lg:flex cursor-pointer py-2 pr-4 pl-3 text-primary-950 lg:p-0 hover:text-primary-400"
                >
                  {navigationLinks.prototype.routeName}
                </li>
                <a
                  href={navigationLinks.login.href}
                  className=" w-5 cursor-pointer py-2 pr-4 pl-3 text-primary-950 lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-primary-400"
                >
                  {navigationLinks.login.routeName}
                </a>
                <LanguageToggle />
              </ul>
            </div>
            <button
              onClick={(e) => scrollToSection(e, '#donate')}
              className="lg:flex lg:order-2"
            >
              <div className="text-white bg-primary-400 hover:bg-primary-800 focus:ring-4font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none focus:ring-primary-800">
                {navigationLinks.donate.routeName}
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
