'use client'
import Image from 'next/image'
import { Loader } from '../loader/Loader'
import { FC, MouseEventHandler } from 'react'

interface Props {
  wFull?: boolean
  isLoading?: boolean
  text: string
  backgroundColor?: string
  type?: string
  icon?: any
  primary?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = ({
  backgroundColor,
  text,
  isLoading,
  onClick = () => {},
  type,
  icon,
  wFull,
}) => {
  let buttonClasses = ''

  switch (type) {
    case 'primary':
      buttonClasses = 'hover:bg-primary-600 bg-primary-800 text-primary-50'
      break
    case 'secondary':
      buttonClasses = 'hover:bg-primary-300 bg-primary-100 text-primary-900'
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
      className={` ${
        wFull && 'w-full'
      } py-2 px-4 rounded ${buttonClasses} flex gap-3 items-center justify-center`}
    >
      {isLoading && <Loader />}
      {icon && <Image src={icon} width={30} alt='icon-button' />}
      {text && text}
    </button>
  )
}

export default Button
