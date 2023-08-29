'use client'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const handleMenu = () => {
    alert('hola')
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 '>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <div className='flex items-baseline space'>
                <div
                  onClick={() => handleMenu()}
                  className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300'
                  aria-current='page'
                >
                  Dashboardasd
                </div>
                <a
                  href='#'
                  className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300'
                >
                  Teamas
                </a>
                <a
                  href='#'
                  className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300'
                >
                  Calendar
                </a>
                <a
                  href='#'
                  className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300'
                >
                  Reports
                </a>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              <a
                href='#'
                className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-primary-950 hover:bg-primary-300'
                aria-current='page'
              >
                Dashboardasfasf
              </a>
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex w-8 h-8 items-center justify-center rounded-full bg-primary-200 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <div>🇺🇸</div>
                  </button>
                </div>
                <div
                  className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                >
                  <a
                    href='#'
                    className='flex justify-between px-4 py-2 text-sm text-primary-900'
                    role='menuitem'
                    id='user-menu-item-0'
                  >
                    <p>Español</p>
                    <div>🇪🇸</div>
                  </a>
                  <a
                    href='#'
                    className='flex justify-between px-4 py-2 text-sm text-primary-900'
                    role='menuitem'
                    id='user-menu-item-1'
                  >
                    <p>English</p>
                    <div>🇺🇸</div>
                  </a>
                  <a
                    href='#'
                    className='flex justify-between px-4 py-2 text-sm text-primary-900'
                    role='menuitem'
                    id='user-menu-item-2'
                  >
                    <p>French</p>
                    <div>🇫🇷</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              type='button'
              onClick={() => handleMenu()}
              className='relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${!isOpen && 'md:hidden'}`} id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          <a
            onClick={handleMenu}
            href='#'
            className='rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20'
            aria-current='page'
          >
            1
          </a>
          <a
            href='#'
            className='text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium'
          >
            Team
          </a>
          <a
            href='#'
            className='text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium'
          >
            Projects
          </a>
          <a
            href='#'
            className='text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium'
          >
            Calendar
          </a>
          <a
            href='#'
            className='text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md px-3 py-2 text-base font-medium'
          >
            Reports
          </a>
        </div>
        <div className='border-t border-indigo-700 pb-3 pt-4'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium text-white'>Tom Cook</div>
              <div className='text-sm font-medium text-indigo-300'>tom@example.com</div>
            </div>
            <button
              type='button'
              className='relative ml-auto flex-shrink-0 rounded-full border-2 border-transparent bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'
            >
              <span className='absolute -inset-1.5'></span>
              <span className='sr-only'>View notifications</span>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>
            </button>
          </div>
          <div className='mt-3 space-y-1 px-2'>
            <a
              href='#'
              className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75'
            >
              Your Profile
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75'
            >
              Settings
            </a>
            <a
              href='#'
              className='block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75'
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
