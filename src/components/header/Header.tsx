'use client'
import React from 'react'
import Image from 'next/image'
import { Logo } from '@/assets/illustrations'
import Link from 'next/link'

const Header = () => {
  const handleClick = (anchor: string) => () => {
    const id = `${anchor}-section`
    console.log(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-indigo-950">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="./" className="flex items-center">
            <Image width={30} src={Logo} alt="Pets love Logo" />
            <span className="ml-5 self-center text-xl font-semibold whitespace-nowrap text-white">
              Pets-love
            </span>
          </a>
          <div className="flex gap-28">
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                    aria-current="page"
                  >
                    Github
                  </a>
                </li>
                <Link href="#aboutme">
                  <li
                    onClick={() => handleClick('aboutme')}
                    className="block py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:hover:text-white  hover:text-white "
                  >
                    About me
                  </li>
                </Link>
                <Link href="#contact">
                  <li
                    onClick={() => handleClick('contact')}
                    className="block py-2 pr-4 pl-3 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:hover:text-white  hover:text-white "
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className=" text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none "
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-800"
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
