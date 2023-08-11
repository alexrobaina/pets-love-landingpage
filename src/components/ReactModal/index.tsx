import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Modal from 'react-modal'

interface Props {
  title?: string
  isOpen: boolean
  children: ReactNode
  buttonClose?: boolean
  width?: string | number
  height?: string | number
  closeModal?: () => void
}

export const ReactModal: FC<Props> = ({
  title,
  height,
  width,
  isOpen,
  children,
  closeModal,
  buttonClose = false,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      marginRight: '-50%',
      borderRadius: '4px',
      width: width || '50%',
      height: height || '50%',
      backgroundColor: '#f3faf8',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      zIndex: 100,
      background: 'rgba(0,0,0,0.7)',
    },
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel='Example Modal'
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ ease: 'easeOut' }}
      >
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <h2 className='text-primary-950 '>{title}</h2>
            {buttonClose && (
              <div className='text-primary-950' role='button' onClick={closeModal}>
                X
              </div>
            )}
          </div>
          <>{children}</>
        </div>
      </motion.div>
    </Modal>
  )
}
