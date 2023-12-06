import { ReactPortal } from 'react'

export interface Props {
  title?: string
  isOpen: boolean
  children: ReactPortal
  buttonClose?: boolean
  width?: string | number
  height?: string | number
  closeModal?: () => void
}
