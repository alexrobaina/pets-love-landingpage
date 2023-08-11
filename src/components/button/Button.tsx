'use client'
import { FC, MouseEventHandler } from 'react'
import Image from 'next/image'

interface Props {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: string
  primary?: boolean
  icon?: string
}

const Button: FC<Props> = ({ text, onClick = () => {}, type, icon, primary }) => {
  const primaryStyle = ''
  const secundary = ''

  const setStyles = () => {
    if (primary) {
      return primaryStyle
    } else {
      return secundary
    }
    return ''
  }

  return (
    <button onClick={onClick} type={type === 'submit' ? 'submit' : 'button'} className=''>
      <div className={primary && primaryStyle}>
        {icon && <Image src={icon} alt='icon-button' />}
        {text}
      </div>
    </button>
  )
}

export default Button
