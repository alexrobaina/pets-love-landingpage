'use client'
import Image from 'next/image'
import { Loader } from '../Loader/Loader'
import { FC, MouseEventHandler } from 'react'

interface Props {
  wFull?: boolean
  isLoading?: boolean
  text: string
  backgroundColor?: string
  type?: 'primary' | 'secondary' | 'tertiary'
  icon?: any
  primary?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = ({
  backgroundColor,
  text,
  isLoading,
  className,
  onClick = () => {},
  type,
  icon,
  wFull,
}) => {
  let buttonClasses = ''

  switch (type) {
    case 'primary':
      buttonClasses =
        'block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
      break
    case 'secondary':
      buttonClasses =
        'rounded px-2 py-1 text-sm font-semibold text-primary-950 shadow-sm ring-1 ring-inset ring-primary-300 hover:bg-primary-300'
      break
    case 'tertiary':
      buttonClasses = 'bg-transparent hover:bg-gray-100 text-gray-600'
      break
    default:
      buttonClasses = 'bg-blue-500 hover:bg-blue-700 text-white'
  }

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor }}
      className={` ${wFull && 'w-full'}  ${
        className && 'className'
      } py-2 px-4 rounded ${buttonClasses} flex gap-3 items-center justify-center`}
    >
      {isLoading && <Loader />}
      {icon && <Image src={icon} width={30} alt='icon-button' />}
      {text && text}
    </button>
  )
}

export default Button
