'use client'

import { useRef, FC } from 'react'
import { useInView } from 'framer-motion'
import {
  ANIMATED_ITEM_RIGHT,
  ANIMATED_ITEM_LEFT,
  SECTIONS_ANIMATION,
} from './constants/animations'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  direction?: boolean
}

const View: FC<Props> = ({ children, direction = false }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div>
      <motion.section
        ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={SECTIONS_ANIMATION}
        // className={isInView ? '' : 'blur-3xl'}
      >
        <motion.div variants={direction ? ANIMATED_ITEM_LEFT : ANIMATED_ITEM_RIGHT}>
          {children}
        </motion.div>
      </motion.section>
    </div>
  )
}

export default View
