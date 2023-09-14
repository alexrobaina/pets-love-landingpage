export const SECTIONS_ANIMATION = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      delayChildren: 0.2,
      staggerChildren: 2,
      type: 'spring',
      opacity: 0,
      x: { stiffness: 200, velocity: -20 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 4,
      x: { stiffness: 200, velocity: 20 },
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
      duration: 3,
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
      duration: 3,
    },
  },
}
