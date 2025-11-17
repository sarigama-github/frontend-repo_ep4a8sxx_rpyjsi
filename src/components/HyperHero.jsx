import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function useMagnet(radius = 140, strength = 0.22) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(0, { stiffness: 300, damping: 40, mass: 0.6 })
  const y = useSpring(0, { stiffness: 300, damping: 40, mass: 0.6 })
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist < radius) {
        mx.set(dx * strength)
        my.set(dy * strength)
      } else {
        mx.set(0)
        my.set(0)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, radius, strength])

  useEffect(() => {
    const unsubscribeX = mx.on('change', (v) => x.set(v))
    const unsubscribeY = my.on('change', (v) => y.set(v))
    return () => { unsubscribeX(); unsubscribeY() }
  }, [mx, my, x, y])

  return { ref, x, y }
}

const Letter = ({ ch, delay }) => (
  <motion.span
    initial={{ y: 80, rotate: 8, opacity: 0 }}
    animate={{ y: 0, rotate: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 24, delay }}
    className="inline-block will-change-transform"
  >
    {ch}
  </motion.span>
)

export default function HyperHero() {
  const { ref, x, y } = useMagnet(220, 0.35)

  const glowX = useTransform(x, (v) => v * 0.6)
  const glowY = useTransform(y, (v) => v * 0.6)

  return (
    <section className="relative isolate min-h-[100vh] overflow-hidden bg-black text-white">
      {/* Animated aurora backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[20%] blur-3xl opacity-60 mix-blend-screen animate-[spin_40s_linear_infinite] rounded-full"
             style={{
               background: 'conic-gradient(from 180deg at 50% 50%, #00f 0deg, #0ff 90deg, #f0f 180deg, #ff0 270deg, #00f 360deg)'
             }}
        />
        <div className="absolute -inset-[30%] blur-2xl opacity-40 mix-blend-overlay animate-[pulse_10s_ease-in-out_infinite]
                        bg-[radial-gradient(closest-side,rgba(255,255,255,0.2),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.04\"/></svg>')]" />
      </div>

      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 pt-8 flex items-center justify-between">
        <div className="text-xs tracking-widest text-white/70 uppercase">Drop VII — Live</div>
        <div className="flex items-center gap-2 text-xs">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70">In stock</span>
        </div>
      </div>

      {/* Hero core */}
      <div ref={ref} className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-24 relative">
        <motion.div style={{ x, y }} className="relative max-w-[14ch]">
          <h1 className="select-none leading-[0.85] text-[16vw] md:text-[10vw] font-black tracking-tight">
            {Array.from('FLARE').map((c, i) => (
              <Letter key={i} ch={c} delay={0.05 * i} />
            ))}
          </h1>
          <motion.div
            style={{ x: glowX, y: glowY }}
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[conic-gradient(from_90deg,#00f,#0ff,#f0f,#ff0,#00f)] opacity-40 blur-3xl mix-blend-screen"
          />
        </motion.div>

        <div className="mt-6 md:mt-8 max-w-xl text-white/70">
          Technical streetwear engineered for motion. Built with breathable knits, sealed seams, and magnetic closures.
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="#lab"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-md"
          >
            <span className="relative z-10">Enter the Lab</span>
            <span className="relative z-10 text-white/60 group-hover:text-white transition-colors">→</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-fuchsia-500/30 via-cyan-500/30 to-amber-400/30" />
          </motion.a>
          <motion.a
            href="#shop"
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white"
          >
            Shop the drop
            <span aria-hidden>↗</span>
          </motion.a>
        </div>

        {/* Floating chips */}
        <motion.ul className="mt-14 flex flex-wrap gap-3">
          {["Sealed seams","Breathable knit","Water repellent","Mag-lock"].map((t, i) => (
            <motion.li
              key={t}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="text-xs tracking-wide rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/80 backdrop-blur"
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Bottom scroller cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-xs text-white/60"
        >
          Scroll to explore
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
      `}</style>
    </section>
  )
}
