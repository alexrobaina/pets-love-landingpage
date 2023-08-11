'use client'
import { FC, MouseEventHandler } from 'react'

interface Props {
  wFull?: boolean
  text: string
  type?: string
  icon?: string
  primary?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<Props> = ({ text, onClick = () => {}, type, icon, wFull }) => {
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
      className={` ${wFull && 'w-full'} py-2 px-4 rounded ${buttonClasses}`}
    >
      {icon && icon}
      {text && text}
    </button>
  )
}

export default Button
