export const SECTIONS_ANIMATION = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.02,
      staggerChildren: 0.05,
      type: 'spring',
      opacity: 0,
      x: { stiffness: 800, velocity: 2000 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.2,
      x: { stiffness: 200, velocity: 1000 },
    },
  },
}

export const ANIMATED_ITEM_RIGHT = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
}

export const ANIMATED_ITEM_LEFT = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
    },
  },
}
