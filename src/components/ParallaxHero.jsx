import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const yTitle = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-black to-gray-700 opacity-[0.08] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-gray-700 to-black opacity-[0.08] blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 w-full items-center">
          <motion.div style={{ y: yTitle }} className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-800 backdrop-blur">
              Interactive Drop
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
              FLARE // Neo-Interactive Wear
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A playground of movement. Pull, drag, and reveal pieces crafted for kinetic living.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#lab" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold shadow-sm hover:scale-[1.02] transition-transform">
                Enter the Lab
              </a>
              <a href="#new" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-gray-50">
                Shop New
              </a>
            </div>
          </motion.div>

          <motion.div style={{ scale: scaleImg }} className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
                alt="Model in motion"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-44 rounded-3xl bg-white shadow-xl p-4">
              <p className="text-xs text-gray-500">Interactive Material</p>
              <p className="text-base font-semibold">Phase-Shift Mesh</p>
              <p className="text-xs text-gray-500 mt-1">React • Respond • Breathe</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
