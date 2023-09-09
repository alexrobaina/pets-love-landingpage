export const NAV_ANIMATION = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        y: { stiffness: 1000, velocity: -100 },
        delayChildren: 0.2,
        staggerChildren: 0.4,
        type: 'spring',
        opacity: 0,
      },
    },
    hidden: {
      y: -50,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
        y: { stiffness: 1000, velocity: 100 },
      },
    },
  }

export  const ANIMATED_ITEM = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
