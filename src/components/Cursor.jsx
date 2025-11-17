import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorRef = useRef(null)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 300, damping: 35, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 300, damping: 35, mass: 0.6 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <motion.div
        ref={cursorRef}
        style={{ translateX: sx, translateY: sy }}
        className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-black mix-blend-difference"
      />
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-black/10 blur-2xl"
      />
    </div>
  )
}
