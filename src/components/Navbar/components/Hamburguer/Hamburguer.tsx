import { IconHambuerguer } from '@/assets/icons'
import { IconClose } from '@/assets/icons'
import Image from 'next/image'
import React, { MouseEventHandler } from 'react'

interface Props {
  open: boolean
  setOpen: MouseEventHandler
}
const Hamburguer: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <div className="md:hidden">
      {open ? (
        <div onClick={setOpen}>
          <Image width={40} src={IconClose} alt="icon-Hamburguer" />
        </div>
      ) : (
        <div onClick={setOpen}>
          <Image width={40} src={IconHambuerguer} alt="icon-Hamburguer" />
        </div>
      )}
    </div>
  )
}

export default Hamburguer
