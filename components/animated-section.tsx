"use client"

import { motion } from "framer-motion"
import { useSlideInView } from "@/hooks/use-slide-in-view"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) {
  const { ref, isInView, slideVariants } = useSlideInView({ delay })

  // Ajustar a direção da animação
  const directionVariants = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
  }

  const variants = {
    hidden: directionVariants[direction].hidden,
    visible: {
      ...directionVariants[direction].visible,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

