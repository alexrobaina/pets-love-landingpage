import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import { FC, useEffect, useRef } from 'react'

interface LottieAnimationProps {
  speed?: number
  delay?: number
  animation: any
  width?: number | string
}

const VARIANTS_OPACITY = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const LottieAnimation: FC<LottieAnimationProps> = ({
  width,
  animation,
  delay = 0,
  speed = 1,
}) => {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5)
    }
  }, [speed])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={VARIANTS_OPACITY}
      transition={{ ease: 'easeOut', delay }}
      className="w-full h-full flex justify-center items-center"
    >
      <Lottie lottieRef={lottieRef} style={{ width }} animationData={animation} loop />
    </motion.div>
  )
}
