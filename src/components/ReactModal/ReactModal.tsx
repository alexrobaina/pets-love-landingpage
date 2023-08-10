import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Modal from 'react-modal'

import styles from './ReactModal.module.scss'

interface Props {
  title?: string
  isOpen: boolean
  children: ReactNode
  buttonClose?: boolean
  width?: string | number
  closeModal?: () => void
}

const ReactModal: FC<Props> = ({
  title,
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
      backgroundColor: neutral1000,
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
        <div style={{ maxWidth: width }} className={styles.modalContainer}>
          <div className={styles.header}>
            <BaseText headingS weightMedium text={title} />
            {buttonClose && (
              <div className={styles.close} role='button' onClick={closeModal}>
                <IoMdClose size={22} />
              </div>
            )}
          </div>
          <div className={styles.children}>{children}</div>
        </div>
      </motion.div>
    </Modal>
  )
}

export default ReactModal
