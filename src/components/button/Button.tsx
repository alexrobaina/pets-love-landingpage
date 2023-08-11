'use client'
import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'

interface Props {
  ButtonName: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: string
  icon?: string
}

const Button: FC<Props> = ({ ButtonName, onClick = () => {}, type, icon }) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className='inline-flex justify-center lg:w-52 sm:w-28 items-center py-3 px-5 text-base font-semibold text-center rounded-3xl border bg-[#8AD3C1]  border-gray-300 focus:ring-4 0 text-[#4A4DA6] hover:bg-sky-300 focus:ring-indigo-950'
    >
      <div>
        {icon && <Image src={icon} alt='icon-button' />}
        {ButtonName}
      </div>
    </button>
  )
}

export default Button
