import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SplitReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const leftX = useTransform(scrollYProgress, [0, 1], ['-40%', '0%'])
  const rightX = useTransform(scrollYProgress, [0, 1], ['40%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div style={{ x: leftX, opacity }} className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <img src="https://images.unsplash.com/photo-1577909687863-91bb3ec12db5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdXRlcndlYXJ8ZW58MHwwfHx8MTc2MzM1ODg5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Outerwear" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ x: rightX, opacity }} className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <img src="https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop" alt="Street shoot" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
