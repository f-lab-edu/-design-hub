import { Variants } from "framer-motion";

export const defaultEasing = [0.4, 0, 0.6, 1];

export const defaultAnimationVariants: Variants = {
    animate: {
      opacity: 1,
      transition: { duration: 0.2, ease: defaultEasing },
      willChange: 'opacity',
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: defaultEasing },
      willChange: 'opacity',
    },
    initial: {
      opacity: 0,
      transition: { duration: 0.2, ease: defaultEasing },
      willChange: 'opacity',
    },
  };